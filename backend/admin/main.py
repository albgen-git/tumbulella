"""Consolle admin di Tumbulella — SOLO LOCALE, mai deployata.

Piccola app separata dal backend pubblico (app/main.py): gira solo sul PC
di sviluppo, bind esplicito a 127.0.0.1 (mai 0.0.0.0), non fa parte del
repo servito da Render. Serve a tre cose:
  1. Scegliere motore/voce TTS per ciascuna delle 4 lingue (tts_voices.json),
     con un pulsante per provare una voce prima di sceglierla.
  2. Pubblicare in produzione (git add + commit + push) con un'anteprima dei
     file coinvolti prima di confermare.
  3. Cruscotto d'uso (tab Dashboard) — legge i contatori aggregati salvati
     dal backend di produzione su un Gist GitHub (vedi app/stats.py) e,
     se configurata, lo stato del servizio Render.

Avvio: da dentro backend/ con l'ambiente virtuale attivo:
    python -m admin.main
Poi apri http://127.0.0.1:8899 nel browser.
"""

import json
import os
import subprocess
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from typing import Literal

import requests
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Response
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

BACKEND_DIR = Path(__file__).resolve().parent.parent
REPO_ROOT = BACKEND_DIR.parent
VOICES_JSON_PATH = BACKEND_DIR / "tts_voices.json"
FEATURE_FLAGS_JSON_PATH = BACKEND_DIR / "feature_flags.json"
CONSOLE_HTML_PATH = Path(__file__).resolve().parent / "console.html"
CONCEPT_B_DIR = REPO_ROOT / "concept-b"

load_dotenv(BACKEND_DIR / ".env")  # stesso file .env del backend, per GEMINI_API_KEY

GITHUB_STATS_TOKEN = os.getenv("GITHUB_STATS_TOKEN")
GITHUB_STATS_GIST_ID = os.getenv("GITHUB_STATS_GIST_ID")
RENDER_API_KEY = os.getenv("RENDER_API_KEY")
RENDER_SERVICE_ID = os.getenv("RENDER_SERVICE_ID")  # opzionale: se assente si cerca da sola il servizio "tumbulella"

from app import feature_flags, tts  # noqa: E402 (import dopo load_dotenv, serve la chiave già in ambiente)

app = FastAPI(title="Tumbulella Admin (solo locale)")

# Il frontend servito da qui (non da file://) parla comunque con il backend
# di sviluppo su :8000, non con quello di produzione — vedi window.BACKEND_URL
# in data.js, che sceglie in base all'hostname, sempre 127.0.0.1 in locale.
# Richiede che il backend di sviluppo (app.main, porta 8000) sia già avviato
# a parte: la consolle admin non lo fa partire da sola.
app.mount("/game", StaticFiles(directory=CONCEPT_B_DIR, html=True), name="game")

SAMPLE_TEXTS = {
    "nap": "Uh mamma, che bella voce! Jamme, sentimmo comme sona 'sta storia.",
    "it": "Che bella voce per raccontare una storia alla tombola! Sentiamo come suona.",
    "en": "What a lovely voice for telling a tombola story! Let's hear how it sounds.",
    "es": "¡Qué voz tan bonita para contar una historia de la tombola! Vamos a escucharla.",
}


@app.get("/", response_class=HTMLResponse)
def index() -> str:
    return CONSOLE_HTML_PATH.read_text(encoding="utf-8")


@app.get("/api/admin-health")
def admin_health() -> dict:
    return {"status": "ok", "repo_root": str(REPO_ROOT), "gemini_configured": tts.is_configured()}


# ---------------------------------------------------------------------------
# TTS: lettura/scrittura tts_voices.json + test voce
# ---------------------------------------------------------------------------


class VoiceEntry(BaseModel):
    engine: Literal["gemini", "webspeech"]
    voice: str | None = None


class VoicesUpdateRequest(BaseModel):
    nap: VoiceEntry
    it: VoiceEntry
    en: VoiceEntry
    es: VoiceEntry


@app.get("/api/tts-voices")
def get_tts_voices() -> dict:
    config = tts.load_voice_config()
    return {lang: entry for lang, entry in config.items() if not lang.startswith("_")}


@app.post("/api/tts-voices")
def update_tts_voices(req: VoicesUpdateRequest) -> dict:
    data = {
        "_comment": "Config del motore TTS per lingua, modificabile dalla consolle admin locale (admin/). engine: 'gemini' (a pagamento, voce scelta qui sotto) o 'webspeech' (gratis, gestito lato browser). Committata e pubblicata come parte di un rilascio normale.",
        "nap": req.nap.model_dump(),
        "it": req.it.model_dump(),
        "en": req.en.model_dump(),
        "es": req.es.model_dump(),
    }
    with open(VOICES_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    return {"ok": True}


class VoiceTestRequest(BaseModel):
    language: Literal["nap", "it", "en", "es"]
    voice: str


@app.post("/api/tts-voices/test")
def test_voice(req: VoiceTestRequest) -> Response:
    text = SAMPLE_TEXTS.get(req.language, SAMPLE_TEXTS["nap"])
    try:
        audio_wav = tts.generate_speech_preview(text, req.voice)
    except tts.TTSNotConfiguredError as e:
        raise HTTPException(status_code=503, detail=str(e)) from e
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Errore nella generazione audio: {e}") from e
    return Response(content=audio_wav, media_type="audio/wav")


# ---------------------------------------------------------------------------
# Flag di funzionalità: lettura/scrittura feature_flags.json
# ---------------------------------------------------------------------------


class FeatureFlagsUpdateRequest(BaseModel):
    exclamation_button_enabled: bool


@app.get("/api/feature-flags")
def get_feature_flags() -> dict:
    return feature_flags.public_config()


@app.post("/api/feature-flags")
def update_feature_flags(req: FeatureFlagsUpdateRequest) -> dict:
    data = {
        "_comment": "Flag di funzionalita' modificabili dalla consolle admin locale (admin/). Committato e pubblicato come parte di un rilascio normale.",
        "exclamation_button_enabled": req.exclamation_button_enabled,
    }
    with open(FEATURE_FLAGS_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    return {"ok": True}


# ---------------------------------------------------------------------------
# Dashboard: contatori d'uso (da Gist) + stato Render
# ---------------------------------------------------------------------------

_EMPTY_BUCKET_FIELDS = (
    "games_started",
    "numbers_called",
    "exclamation_presses",
    "duration_sum_seconds",
    "duration_count",
    "duration_max_seconds",
    "new_devices",
)


def _empty_bucket() -> dict:
    b = {field: 0 for field in _EMPTY_BUCKET_FIELDS}
    b["languages"] = {}
    return b


def _load_stats_gist() -> dict:
    if not (GITHUB_STATS_TOKEN and GITHUB_STATS_GIST_ID):
        return {"days": {}, "known_devices": []}
    resp = requests.get(
        f"https://api.github.com/gists/{GITHUB_STATS_GIST_ID}",
        headers={"Authorization": f"token {GITHUB_STATS_TOKEN}", "Accept": "application/vnd.github+json"},
        timeout=10,
    )
    resp.raise_for_status()
    content = resp.json()["files"]["tumbulella-stats.json"]["content"]
    data = json.loads(content)
    data.setdefault("days", {})
    data.setdefault("known_devices", [])
    return data


def _bucket_label(date_key: str, granularity: str) -> str:
    d = datetime.strptime(date_key, "%Y-%m-%d").date()
    if granularity == "day":
        return date_key
    if granularity == "week":
        iso_year, iso_week, _ = d.isocalendar()
        return f"{iso_year}-W{iso_week:02d}"
    if granularity == "month":
        return d.strftime("%Y-%m")
    if granularity == "year":
        return d.strftime("%Y")
    raise ValueError(f"granularità non valida: {granularity}")


def _finalize_bucket(b: dict) -> dict:
    avg = round(b["duration_sum_seconds"] / b["duration_count"]) if b["duration_count"] else 0
    return {
        "games_started": b["games_started"],
        "numbers_called": b["numbers_called"],
        "exclamation_presses": b["exclamation_presses"],
        "languages": b["languages"],
        "avg_duration_seconds": avg,
        "max_duration_seconds": b["duration_max_seconds"],
        "new_devices": b["new_devices"],
    }


@app.get("/api/dashboard/stats")
def dashboard_stats(granularity: str = "day", limit: int = 30) -> dict:
    if granularity not in ("day", "week", "month", "year"):
        raise HTTPException(status_code=400, detail="granularity deve essere day/week/month/year")
    if not (GITHUB_STATS_TOKEN and GITHUB_STATS_GIST_ID):
        return {"available": False, "reason": "GITHUB_STATS_TOKEN o GITHUB_STATS_GIST_ID non configurate in .env"}

    try:
        gist_data = _load_stats_gist()
    except Exception as e:
        return {"available": False, "reason": f"Errore leggendo il Gist: {e}"}

    buckets: dict[str, dict] = defaultdict(_empty_bucket)
    for date_key, day in sorted(gist_data["days"].items()):
        label = _bucket_label(date_key, granularity)
        b = buckets[label]
        for field in _EMPTY_BUCKET_FIELDS:
            if field == "duration_max_seconds":
                b[field] = max(b[field], day.get(field, 0))
            else:
                b[field] += day.get(field, 0)
        for lang, count in day.get("languages", {}).items():
            b["languages"][lang] = b["languages"].get(lang, 0) + count

    sorted_labels = sorted(buckets.keys())
    shown_labels = sorted_labels[-limit:] if limit > 0 else sorted_labels

    result_buckets = [{"label": label, **_finalize_bucket(buckets[label])} for label in shown_labels]

    summary_raw = _empty_bucket()
    for label in shown_labels:
        b = buckets[label]
        for field in _EMPTY_BUCKET_FIELDS:
            if field == "duration_max_seconds":
                summary_raw[field] = max(summary_raw[field], b[field])
            else:
                summary_raw[field] += b[field]
        for lang, count in b["languages"].items():
            summary_raw["languages"][lang] = summary_raw["languages"].get(lang, 0) + count

    return {
        "available": True,
        "granularity": granularity,
        "buckets": result_buckets,
        "summary": _finalize_bucket(summary_raw),
        "total_known_devices": len(gist_data["known_devices"]),
    }


def _find_render_service_id(headers: dict) -> str | None:
    resp = requests.get("https://api.render.com/v1/services?limit=20", headers=headers, timeout=10)
    resp.raise_for_status()
    services = resp.json()
    if not isinstance(services, list) or not services:
        return None
    for item in services:
        svc = item.get("service", item)
        if "tumbulella" in (svc.get("name") or "").lower():
            return svc.get("id")
    first = services[0]
    return first.get("service", first).get("id")


@app.get("/api/dashboard/render")
def dashboard_render() -> dict:
    if not RENDER_API_KEY:
        return {"available": False, "reason": "RENDER_API_KEY non configurata in .env"}
    headers = {"Authorization": f"Bearer {RENDER_API_KEY}", "Accept": "application/json"}
    try:
        service_id = RENDER_SERVICE_ID or _find_render_service_id(headers)
        if not service_id:
            return {"available": False, "reason": "Nessun servizio Render trovato per questo account"}

        service_resp = requests.get(f"https://api.render.com/v1/services/{service_id}", headers=headers, timeout=10)
        service_resp.raise_for_status()
        service = service_resp.json()
        service = service.get("service", service)

        deploys_resp = requests.get(
            f"https://api.render.com/v1/services/{service_id}/deploys?limit=5", headers=headers, timeout=10
        )
        deploys_raw = deploys_resp.json() if deploys_resp.ok else []
        deploys = []
        for item in deploys_raw if isinstance(deploys_raw, list) else []:
            d = item.get("deploy", item)
            deploys.append({"status": d.get("status"), "created_at": d.get("createdAt") or d.get("created_at")})

        return {
            "available": True,
            "service_name": service.get("name"),
            "suspended": service.get("suspended"),
            "recent_deploys": deploys,
        }
    except Exception as e:
        return {"available": False, "reason": str(e)}


# ---------------------------------------------------------------------------
# Rilascio: stato git + commit/push
# ---------------------------------------------------------------------------


def _run_git(args: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(
        ["git", *args], cwd=REPO_ROOT, capture_output=True, text=True, encoding="utf-8"
    )


@app.get("/api/git-status")
def git_status() -> dict:
    result = _run_git(["status", "--porcelain=v1"])
    if result.returncode != 0:
        raise HTTPException(status_code=500, detail=result.stderr)
    entries = []
    for line in result.stdout.splitlines():
        if not line:
            continue
        code = line[:2]
        path = line[3:]
        if " -> " in path:  # rinomina: "vecchio -> nuovo"
            path = path.split(" -> ", 1)[1]
        # git racchiude tra virgolette i path con spazi/caratteri speciali
        # (es. i PDF con spazi nel nome) — senza toglierle, "git add" cerca
        # letteralmente un file il cui nome include le virgolette e fallisce.
        if len(path) >= 2 and path[0] == '"' and path[-1] == '"':
            path = path[1:-1].replace('\\"', '"').replace("\\\\", "\\")
        entries.append({"path": path, "status": code.strip(), "untracked": code == "??"})
    branch_result = _run_git(["rev-parse", "--abbrev-ref", "HEAD"])
    return {"branch": branch_result.stdout.strip(), "entries": entries}


class ReleaseRequest(BaseModel):
    message: str
    files: list[str]


@app.post("/api/release")
def release(req: ReleaseRequest) -> dict:
    if not req.files:
        raise HTTPException(status_code=400, detail="Nessun file selezionato.")
    message = req.message.strip() or "Aggiornamenti da consolle admin"

    add_result = _run_git(["add", "--", *req.files])
    if add_result.returncode != 0:
        raise HTTPException(status_code=500, detail=f"git add fallito: {add_result.stderr}")

    commit_result = _run_git(["commit", "-m", message])
    if commit_result.returncode != 0:
        raise HTTPException(status_code=500, detail=f"git commit fallito: {commit_result.stderr or commit_result.stdout}")

    push_result = _run_git(["push", "origin", "main"])
    if push_result.returncode != 0:
        raise HTTPException(status_code=500, detail=f"git push fallito: {push_result.stderr}")

    return {
        "ok": True,
        "commit_output": commit_result.stdout,
        "push_output": push_result.stderr or push_result.stdout,
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8899)

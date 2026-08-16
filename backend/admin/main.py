"""Consolle admin di Tumbulella — SOLO LOCALE, mai deployata.

Piccola app separata dal backend pubblico (app/main.py): gira solo sul PC
di sviluppo, bind esplicito a 127.0.0.1 (mai 0.0.0.0), non fa parte del
repo servito da Render. Serve a due cose:
  1. Scegliere motore/voce TTS per ciascuna delle 4 lingue (tts_voices.json),
     con un pulsante per provare una voce prima di sceglierla.
  2. Pubblicare in produzione (git add + commit + push) con un'anteprima dei
     file coinvolti prima di confermare.

Avvio: da dentro backend/ con l'ambiente virtuale attivo:
    python -m admin.main
Poi apri http://127.0.0.1:8899 nel browser.
"""

import json
import subprocess
from pathlib import Path
from typing import Literal

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Response
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

BACKEND_DIR = Path(__file__).resolve().parent.parent
REPO_ROOT = BACKEND_DIR.parent
VOICES_JSON_PATH = BACKEND_DIR / "tts_voices.json"
CONSOLE_HTML_PATH = Path(__file__).resolve().parent / "console.html"
CONCEPT_B_DIR = REPO_ROOT / "concept-b"

load_dotenv(BACKEND_DIR / ".env")  # stesso file .env del backend, per GEMINI_API_KEY

from app import tts  # noqa: E402 (import dopo load_dotenv, serve la chiave già in ambiente)

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

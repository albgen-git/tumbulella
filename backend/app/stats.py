"""Contatori d'uso per il cruscotto della consolle admin (tab "Dashboard").

Nessun database: aggregati giornalieri salvati periodicamente su un Gist
GitHub privato (token con scope "gist" soltanto — non puo' toccare il
codice sorgente). Solo totali/medie/massimi per giorno, mai il dettaglio
evento-per-evento: economico e senza nuove registrazioni, al prezzo di non
poter fare analisi retrospettive di dettaglio in futuro (scelta consapevole,
vedi conversazione con l'utente).

Se GITHUB_STATS_TOKEN o GITHUB_STATS_GIST_ID non sono impostate, il modulo
resta silenziosamente inattivo: i contatori vivono solo in memoria per la
durata del processo e non vengono mai salvati (comportamento accettabile in
sviluppo locale, dove non serve la dashboard).
"""

import json
import os
import threading
import time
from datetime import datetime, timezone

import requests

GITHUB_TOKEN = os.getenv("GITHUB_STATS_TOKEN")
GIST_ID = os.getenv("GITHUB_STATS_GIST_ID")
GIST_FILENAME = "tumbulella-stats.json"

FLUSH_INTERVAL_SECONDS = 60  # difesa in profondità: il vero salvo-vita è flush_now() allo spegnimento (sotto), questo copre solo il caso di un arresto non pulito
SESSION_IDLE_TIMEOUT_SECONDS = 30 * 60  # una partita ferma da piu' di cosi' si considera finita

_lock = threading.Lock()
_data = {"days": {}, "known_devices": []}
_active_sessions = {}  # session_id -> {device_id, start_ts, last_ts}
_dirty = False
_started = False


def _enabled() -> bool:
    return bool(GITHUB_TOKEN and GIST_ID)


def _github_headers() -> dict:
    return {"Authorization": f"token {GITHUB_TOKEN}", "Accept": "application/vnd.github+json"}


def _today_key() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


def _day_bucket(date_key: str) -> dict:
    return _data["days"].setdefault(
        date_key,
        {
            "games_started": 0,
            "numbers_called": 0,
            "exclamation_presses": 0,
            "languages": {},
            "duration_sum_seconds": 0,
            "duration_count": 0,
            "duration_max_seconds": 0,
            "new_devices": 0,
        },
    )


def _load_from_gist() -> None:
    global _data
    if not _enabled():
        return
    try:
        resp = requests.get(f"https://api.github.com/gists/{GIST_ID}", headers=_github_headers(), timeout=10)
        resp.raise_for_status()
        content = resp.json()["files"][GIST_FILENAME]["content"]
        loaded = json.loads(content)
        loaded.setdefault("days", {})
        loaded.setdefault("known_devices", [])
        _data = loaded
    except Exception:
        pass  # se fallisce si parte da zero in memoria — non deve mai bloccare l'avvio del backend


def _flush_to_gist() -> None:
    global _dirty
    if not _enabled():
        return
    with _lock:
        if not _dirty:
            return
        content = json.dumps(_data, ensure_ascii=False, indent=2)
        _dirty = False
    try:
        requests.patch(
            f"https://api.github.com/gists/{GIST_ID}",
            headers=_github_headers(),
            json={"files": {GIST_FILENAME: {"content": content}}},
            timeout=10,
        )
    except Exception:
        pass  # riprova al prossimo giro — nel frattempo i dati restano in memoria


def _close_session(session_id: str) -> None:
    """NON acquisisce _lock da sola: va chiamata da dentro un blocco `with _lock`."""
    s = _active_sessions.pop(session_id, None)
    if not s:
        return
    duration = s["last_ts"] - s["start_ts"]
    if duration <= 0:
        return
    day = _day_bucket(_today_key())
    day["duration_sum_seconds"] += duration
    day["duration_count"] += 1
    day["duration_max_seconds"] = max(day["duration_max_seconds"], duration)


def _register_device_if_new(device_id: str, day: dict) -> None:
    if device_id not in _data["known_devices"]:
        _data["known_devices"].append(device_id)
        day["new_devices"] += 1


def record_number_called(device_id: str | None, session_id: str | None, language: str, is_first_turn: bool) -> None:
    """Chiamata da /api/narrate per ogni numero giocato — vedi app/main.py.
    is_first_turn=True segna l'inizio di una nuova partita (previous_sentences
    vuoto): chiude l'eventuale partita precedente dello stesso dispositivo
    prima di aprirne una nuova, cosi' la durata finisce nei conteggi anche
    senza un evento esplicito di "fine partita" (che l'app non ha)."""
    global _dirty
    if not _enabled():
        return
    with _lock:
        day = _day_bucket(_today_key())
        day["numbers_called"] += 1
        day["languages"][language] = day["languages"].get(language, 0) + 1
        if device_id:
            _register_device_if_new(device_id, day)
        if session_id:
            if is_first_turn:
                if device_id:
                    for sid, s in list(_active_sessions.items()):
                        if s["device_id"] == device_id and sid != session_id:
                            _close_session(sid)
                _active_sessions[session_id] = {
                    "device_id": device_id,
                    "start_ts": time.time(),
                    "last_ts": time.time(),
                }
                day["games_started"] += 1
            elif session_id in _active_sessions:
                _active_sessions[session_id]["last_ts"] = time.time()
        _dirty = True


def record_exclamation(session_id: str | None) -> None:
    """Chiamata da POST /api/event per ogni pressione del tasto "!"."""
    global _dirty
    if not _enabled():
        return
    with _lock:
        day = _day_bucket(_today_key())
        day["exclamation_presses"] += 1
        if session_id in _active_sessions:
            _active_sessions[session_id]["last_ts"] = time.time()
        _dirty = True


def _background_loop() -> None:
    while True:
        time.sleep(FLUSH_INTERVAL_SECONDS)
        with _lock:
            now = time.time()
            idle = [sid for sid, s in _active_sessions.items() if now - s["last_ts"] > SESSION_IDLE_TIMEOUT_SECONDS]
            for sid in idle:
                _close_session(sid)
            if idle:
                global _dirty
                _dirty = True
        _flush_to_gist()


def flush_now() -> None:
    """Salvataggio immediato, forzato — da chiamare allo spegnimento del
    processo (vedi app/main.py, evento "shutdown"). Render manda un segnale
    di spegnimento pulito (confermato nei log: "Shutting down" /
    "Application shutdown complete"), sia per un nuovo deploy sia per lo
    sleep del piano gratuito dopo un periodo di inattività — senza questo,
    i dati degli ultimi minuti prima dello spegnimento (fino a
    FLUSH_INTERVAL_SECONDS) andrebbero persi per sempre, mai scritti sul
    Gist (bug osservato in produzione l'19/08)."""
    _flush_to_gist()


def start() -> None:
    """Da chiamare una volta all'avvio del backend (app/main.py)."""
    global _started
    if _started or not _enabled():
        return
    _started = True
    _load_from_gist()
    threading.Thread(target=_background_loop, daemon=True).start()

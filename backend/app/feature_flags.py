"""Flag di funzionalita' attivabili/disattivabili dalla consolle admin locale
senza toccare il codice — solo backend/feature_flags.json, committato e
pubblicato come un rilascio normale (stesso schema di tts_voices.json, vedi
app/tts.py). Per ora un solo flag: il pulsante "!" (esortazione), pensato per
poterlo spegnere rapidamente se in produzione risultasse troppo usato.
"""

import json
from functools import lru_cache
from pathlib import Path

_FLAGS_JSON_PATH = Path(__file__).resolve().parent.parent / "feature_flags.json"

DEFAULTS = {"exclamation_button_enabled": True}


@lru_cache(maxsize=1)
def _load_cached(mtime: float) -> dict:
    with open(_FLAGS_JSON_PATH, encoding="utf-8") as f:
        return json.load(f)


def load() -> dict:
    """Ricaricato automaticamente se il file cambia (mtime nella cache key),
    come tts.load_voice_config — utile in locale quando la consolle admin
    scrive il file mentre il backend gira già, senza dover riavviare."""
    try:
        mtime = _FLAGS_JSON_PATH.stat().st_mtime
    except FileNotFoundError:
        return dict(DEFAULTS)
    return _load_cached(mtime)


def public_config() -> dict:
    """Usata dall'endpoint pubblico /api/feature-flags — nessun dato
    sensibile, solo interruttori on/off letti dal frontend di gioco."""
    data = load()
    return {
        "exclamation_button_enabled": bool(
            data.get("exclamation_button_enabled", DEFAULTS["exclamation_button_enabled"])
        ),
    }

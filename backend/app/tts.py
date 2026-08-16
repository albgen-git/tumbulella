"""TTS reale via Gemini, vedi requirements.md — sezione "Generazione audio
(TTS)". Quale lingua usa Gemini (a pagamento) invece di Web Speech (gratis,
lato client) è deciso da tts_voices.json nella root di backend/, modificabile
dalla consolle admin locale (vedi admin/) — non serve toccare questo file per
abilitare/disabilitare una lingua o cambiare voce, solo pubblicare un rilascio
perché la config committata arrivi in produzione.

Modello ancora in stato "preview" (vedi requirements.md): se Google lo
ritira o cambia comportamento, il piano B documentato è ElevenLabs.
"""

import io
import json
import os
import time
import wave
from functools import lru_cache
from pathlib import Path

from google import genai
from google.genai import errors, types

MODEL_NAME = os.getenv("TUMBULELLA_TTS_MODEL", "gemini-3.1-flash-tts-preview")
DEFAULT_VOICE = "Puck"  # fallback se la config manca o è incompleta

_VOICES_JSON_PATH = Path(__file__).resolve().parent.parent / "tts_voices.json"

# Un solo retry breve: se anche questo fallisce, il frontend ricade comunque
# su Web Speech (vedi data.js) — meglio non far aspettare troppo prima del
# fallback che insistere a lungo su un servizio sovraccarico.
MAX_RETRIES = 1
RETRY_BACKOFF_SECONDS = [1.0]


class TTSNotConfiguredError(RuntimeError):
    """Sollevato se manca GEMINI_API_KEY nell'ambiente."""


class LanguageNotEnabledError(RuntimeError):
    """Sollevato se la lingua richiesta non ha Gemini TTS abilitato in
    tts_voices.json (è configurata su 'webspeech') — il chiamante (main.py)
    la traduce in un 404 pulito, così il frontend ricade su Web Speech senza
    nemmeno provare a insistere con retry pensati per errori transitori."""


@lru_cache(maxsize=1)
def _load_voice_config_cached(mtime: float) -> dict:
    with open(_VOICES_JSON_PATH, encoding="utf-8") as f:
        return json.load(f)


def load_voice_config() -> dict:
    """Ricaricata automaticamente se il file cambia (mtime nella cache key) —
    utile in sviluppo locale quando la consolle admin scrive il file mentre
    il backend gira già, senza dover riavviare il server."""
    mtime = _VOICES_JSON_PATH.stat().st_mtime
    return _load_voice_config_cached(mtime)


def get_voice_config(language: str) -> dict | None:
    return load_voice_config().get(language)


def public_config() -> dict[str, dict]:
    """{lingua: {enabled, voice}} — usata dall'endpoint pubblico
    /api/tts-config. Il frontend di gioco consulta solo "enabled" (per sapere
    se vale la pena provare Gemini prima di Web Speech, evitando un giro a
    vuoto per le altre lingue); la consolle admin usa anche "voice" per
    mostrare chiaramente quale voce è live in produzione. Nessun dato
    sensibile: il nome della voce non è un segreto."""
    config = load_voice_config()
    result = {}
    for lang, entry in config.items():
        if lang.startswith("_"):
            continue
        enabled = bool(entry and entry.get("engine") == "gemini")
        result[lang] = {"enabled": enabled, "voice": entry.get("voice") if enabled else None}
    return result


_client: genai.Client | None = None


def _get_client() -> genai.Client:
    global _client
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise TTSNotConfiguredError("GEMINI_API_KEY non impostata.")
    if _client is None:
        _client = genai.Client(api_key=api_key)
    return _client


def _pcm_to_wav(pcm_bytes: bytes, sample_rate: int, channels: int, sample_width: int) -> bytes:
    """Gemini TTS restituisce PCM grezzo (audio/l16), non un file riproducibile
    di per sé — lo si incapsula in un contenitore WAV minimo (solo header),
    così il browser lo può riprodurre con un normale <audio>/new Audio()."""
    buf = io.BytesIO()
    with wave.open(buf, "wb") as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(sample_width)
        wf.setframerate(sample_rate)
        wf.writeframes(pcm_bytes)
    return buf.getvalue()


def _generate_content_with_retry(client: genai.Client, text: str, voice_name: str):
    for attempt in range(MAX_RETRIES + 1):
        try:
            return client.models.generate_content(
                model=MODEL_NAME,
                contents=text,
                config=types.GenerateContentConfig(
                    response_modalities=["AUDIO"],
                    speech_config=types.SpeechConfig(
                        voice_config=types.VoiceConfig(
                            prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=voice_name)
                        )
                    ),
                ),
            )
        except errors.ServerError:
            if attempt < MAX_RETRIES:
                time.sleep(RETRY_BACKOFF_SECONDS[attempt])
                continue
            raise


def _pcm_response_to_wav(response) -> bytes:
    part = response.candidates[0].content.parts[0]
    pcm_bytes = part.inline_data.data
    # mime_type tipico: "audio/l16; rate=24000; channels=1" — 16 bit = 2 byte/campione.
    mime = part.inline_data.mime_type or ""
    rate = 24000
    if "rate=" in mime:
        rate = int(mime.split("rate=")[1].split(";")[0])
    channels = 1
    if "channels=" in mime:
        channels = int(mime.split("channels=")[1].split(";")[0])
    return _pcm_to_wav(pcm_bytes, sample_rate=rate, channels=channels, sample_width=2)


def generate_speech(text: str, language: str) -> bytes:
    """Genera l'audio (WAV) per il testo dato, con la voce configurata per
    quella lingua in tts_voices.json. Solleva LanguageNotEnabledError se la
    lingua non ha Gemini abilitato (config su 'webspeech' o assente)."""
    entry = get_voice_config(language)
    if not entry or entry.get("engine") != "gemini":
        raise LanguageNotEnabledError(f"Gemini TTS non abilitato per la lingua '{language}'.")
    voice_name = entry.get("voice") or DEFAULT_VOICE
    client = _get_client()
    response = _generate_content_with_retry(client, text, voice_name)
    return _pcm_response_to_wav(response)


def generate_speech_preview(text: str, voice_name: str) -> bytes:
    """Come generate_speech, ma per il pulsante "prova voce" della consolle
    admin: bypassa tts_voices.json, genera direttamente con la voce indicata
    (l'admin sta valutando una voce prima ancora di salvarla in config)."""
    client = _get_client()
    response = _generate_content_with_retry(client, text, voice_name)
    return _pcm_response_to_wav(response)


def is_configured() -> bool:
    return bool(os.getenv("GEMINI_API_KEY"))

"""TTS reale in napoletano via Gemini (voce "Puck"), vedi requirements.md
— sezione "Generazione audio (TTS)". Le altre 3 lingue restano gratuite via
Web Speech lato client, non passano da qui.

Modello ancora in stato "preview" (vedi requirements.md): se Google lo
ritira o cambia comportamento, il piano B documentato è ElevenLabs.
"""

import io
import os
import wave

from google import genai
from google.genai import types

MODEL_NAME = os.getenv("TUMBULELLA_TTS_MODEL", "gemini-3.1-flash-tts-preview")
VOICE_NAME = os.getenv("TUMBULELLA_TTS_VOICE", "Puck")


class TTSNotConfiguredError(RuntimeError):
    """Sollevato se manca GEMINI_API_KEY nell'ambiente."""


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


def generate_speech(text: str) -> bytes:
    """Genera l'audio (WAV) per il testo dato, in napoletano, voce "Puck"."""
    client = _get_client()
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=text,
        config=types.GenerateContentConfig(
            response_modalities=["AUDIO"],
            speech_config=types.SpeechConfig(
                voice_config=types.VoiceConfig(
                    prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=VOICE_NAME)
                )
            ),
        ),
    )
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


def is_configured() -> bool:
    return bool(os.getenv("GEMINI_API_KEY"))

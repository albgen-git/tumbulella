"""Wrapper minimo attorno all'SDK Google GenAI (Gemini) per la generazione
della narrazione. Chiamato solo dalla fase 2 (narrazione) — la fase 1
(chiamata) resta un lookup puro, vedi app/main.py."""

import os
import time

from google import genai
from google.genai import errors, types

# Gemini a volte risponde 503 UNAVAILABLE per sovraccarico temporaneo del
# modello (osservato in produzione) — pochi retry ravvicinati bastano quasi
# sempre, e c'è margine: la fase 2 ha già ~10s di pausa naturale del gioco.
MAX_RETRIES = 2
RETRY_BACKOFF_SECONDS = [1.5, 3.0]

# "Flash lite": modello economico/veloce, adatto a frammenti brevi generati
# ad ogni click. Costante separata così è facile da cambiare in un punto
# solo, o sovrascrivere con la variabile d'ambiente TUMBULELLA_MODEL.
#
# Scelto dopo un confronto reale (misurato, non stimato) con gemini-flash-latest
# (alias di gemini-3.6-flash): quel modello RIFIUTA thinking_budget=0 e, anche
# con un budget esplicito, consuma token di "pensiero" interno in modo
# incostante (osservato 0-650 token extra a chiamata, fatturati come output).
# gemini-3.1-flash-lite invece ACCETTA thinking_budget=0 ed è risultato a
# zero token di pensiero su tutti i test fatti — circa 2,2x più economico a
# chiamata a parità di prezzo per token, qualità del testo comparabile.
MODEL_NAME = os.getenv("TUMBULELLA_MODEL", "gemini-3.1-flash-lite")
THINKING_BUDGET = 0
MAX_OUTPUT_TOKENS = 1024


class LLMNotConfiguredError(RuntimeError):
    """Sollevato se manca GEMINI_API_KEY nell'ambiente."""


_client: genai.Client | None = None


def _get_client() -> genai.Client:
    global _client
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise LLMNotConfiguredError(
            "GEMINI_API_KEY non impostata. Copia backend/.env.example in "
            "backend/.env e inserisci la tua chiave, oppure esportala come "
            "variabile d'ambiente prima di avviare il server."
        )
    if _client is None:
        _client = genai.Client(api_key=api_key)
    return _client


def generate_narration(system_prompt: str, user_prompt: str) -> str:
    client = _get_client()
    for attempt in range(MAX_RETRIES + 1):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=user_prompt,
                config=types.GenerateContentConfig(
                    system_instruction=system_prompt,
                    max_output_tokens=MAX_OUTPUT_TOKENS,
                    thinking_config=types.ThinkingConfig(thinking_budget=THINKING_BUDGET),
                ),
            )
            return (response.text or "").strip()
        except errors.ServerError:
            if attempt < MAX_RETRIES:
                time.sleep(RETRY_BACKOFF_SECONDS[attempt])
                continue
            raise


def is_configured() -> bool:
    return bool(os.getenv("GEMINI_API_KEY"))

"""API REST di Tumbulella — vedi backend/README.md per come avviarla.

Nessun database: il contesto della partita (numeri usciti, racconto fin qui)
viene mandato dal frontend a ogni chiamata, come da architettura scelta in
requirements.md per non introdurre persistenza nell'MVP.
"""

import os

import sentry_sdk
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware
from google.genai import errors as genai_errors

load_dotenv()  # legge backend/.env se presente, prima di leggere GEMINI_API_KEY/SENTRY_DSN

# Notifiche errori via Sentry — opzionale: se SENTRY_DSN non è impostata (es.
# in sviluppo locale senza .env configurato per questo), resta disattivato,
# nessuna chiamata di rete. "RENDER" è impostata automaticamente da Render
# su ogni servizio, usata solo per etichettare l'ambiente (produzione vs
# sviluppo locale) nel pannello Sentry, non per abilitarlo/disabilitarlo.
_sentry_dsn = os.getenv("SENTRY_DSN")
if _sentry_dsn:
    sentry_sdk.init(
        dsn=_sentry_dsn,
        environment="production" if os.getenv("RENDER") else "development",
        send_default_pii=True,
    )

from app import frasi_iniziali, prompts, smorfia, tts
from app.llm_client import LLMNotConfiguredError, generate_narration, is_configured
from app.models import HealthResponse, NarrateRequest, NarrateResponse, SmorfiaEntry, TTSRequest

app = FastAPI(
    title="Tumbulella API",
    description="Decodifica Smorfia + narrazione incrementale per Tumbulella (MVP, mock LLM escluso: qui è reale).",
    version="0.1.0",
)

# MVP: nessun frontend è ancora servito da un dominio proprio (si apre via
# file:// o da un server di sviluppo locale), quindi si accettano tutte le
# origini per ora. Da restringere al dominio reale prima di andare in
# produzione (es. www.tumbulella.it).
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(status="ok", llm_key_configured=is_configured())


@app.get("/api/smorfia", response_model=list[SmorfiaEntry])
def get_full_smorfia() -> list[SmorfiaEntry]:
    table = smorfia.all_numbers()
    return [
        SmorfiaEntry(
            number=int(n),
            napoletano=entry["napoletano"],
            italiano=entry["italiano"],
            variante_scabrosa=entry.get("variante_scabrosa"),
        )
        for n, entry in sorted(table.items(), key=lambda kv: int(kv[0]))
    ]


@app.get("/api/smorfia/{number}", response_model=SmorfiaEntry)
def get_smorfia_number(number: int) -> SmorfiaEntry:
    entry = smorfia.get_entry(number)
    if not entry:
        raise HTTPException(status_code=404, detail=f"Numero {number} non valido (1-90).")
    return SmorfiaEntry(
        number=number,
        napoletano=entry["napoletano"],
        italiano=entry["italiano"],
        variante_scabrosa=entry.get("variante_scabrosa"),
    )


@app.post("/api/narrate", response_model=NarrateResponse)
def narrate(req: NarrateRequest) -> NarrateResponse:
    entry = smorfia.get_entry(req.number)
    if not entry:
        raise HTTPException(status_code=404, detail=f"Numero {req.number} non valido (1-90).")

    # Fase 1 — chiamata: solo lookup, nessuna chiamata al modello (istantanea).
    meaning = entry["napoletano"] if req.language == "nap" else entry["italiano"]
    call = f"{req.number}, {meaning}"

    # Fase 2 — narrazione. Primo numero della partita: nessuna chiamata LLM,
    # si pesca una frase statica da frasi-iniziali-{lingua}.txt (istantaneo, gratis).
    if not req.previous_sentences:
        narration = frasi_iniziali.random_frase_iniziale(req.language)
        return NarrateResponse(number=req.number, call=call, narration=narration)

    # Dal secondo numero in poi: contesto a costo pressoché costante (non
    # cresce con la partita) — solo le ultime due frasi generate, vedi
    # prompt-narrazione.md.
    system_prompt = prompts.build_system_prompt(req.language)
    user_prompt = prompts.build_user_prompt(req.number, req.previous_sentences, req.language)
    try:
        narration = generate_narration(system_prompt, user_prompt)
    except LLMNotConfiguredError as e:
        raise HTTPException(status_code=503, detail=str(e)) from e
    except genai_errors.ServerError as e:
        # Gemini sovraccarico (503) anche dopo i retry — messaggio pulito,
        # non il JSON grezzo dell'errore (vedi llm_client.py per i retry).
        raise HTTPException(
            status_code=503, detail="il servizio di narrazione è momentaneamente sovraccarico, riprova tra qualche secondo"
        ) from e
    except Exception as e:  # errori di rete/API Gemini
        raise HTTPException(status_code=502, detail=f"Errore nella generazione: {e}") from e

    # Grassetto applicato qui, non lasciato al modello — vedi bold_smorfia_words.
    narration = prompts.bold_smorfia_words(narration, req.previous_numbers + [req.number], req.language)

    return NarrateResponse(number=req.number, call=call, narration=narration)


@app.get("/api/tts-config")
def tts_config() -> dict[str, dict]:
    """{lingua: {enabled, voice}} — il frontend di gioco consulta solo
    "enabled" per decidere se vale la pena provare Gemini prima di Web
    Speech; la consolle admin locale usa anche "voice" per mostrare quale
    voce è live in produzione."""
    return tts.public_config()


@app.post("/api/tts")
def text_to_speech(req: TTSRequest) -> Response:
    """TTS reale via Gemini per le lingue abilitate in tts_voices.json (voce
    configurabile dalla consolle admin locale) — le altre restano su Web
    Speech lato client, non passano da qui. Vedi app/tts.py."""
    try:
        audio_wav = tts.generate_speech(req.text, req.language)
    except tts.TTSNotConfiguredError as e:
        raise HTTPException(status_code=503, detail=str(e)) from e
    except tts.LanguageNotEnabledError as e:
        # Non e' un errore transitorio: la lingua e' semplicemente su
        # Web Speech in config. 404 immediato, niente retry, cosi' il
        # frontend passa a Web Speech senza aspettare inutilmente.
        raise HTTPException(status_code=404, detail=str(e)) from e
    except genai_errors.ServerError as e:
        raise HTTPException(
            status_code=503, detail="il servizio audio è momentaneamente sovraccarico, riprova tra qualche secondo"
        ) from e
    except Exception as e:  # errori di rete/API Gemini
        raise HTTPException(status_code=502, detail=f"Errore nella generazione audio: {e}") from e

    return Response(content=audio_wav, media_type="audio/wav")

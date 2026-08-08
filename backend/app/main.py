"""API REST di Tumbulella — vedi backend/README.md per come avviarla.

Nessun database: il contesto della partita (numeri usciti, racconto fin qui)
viene mandato dal frontend a ogni chiamata, come da architettura scelta in
requirements_1.md per non introdurre persistenza nell'MVP.
"""

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()  # legge backend/.env se presente, prima di leggere GEMINI_API_KEY

from app import frasi_iniziali, prompts, smorfia
from app.llm_client import LLMNotConfiguredError, generate_narration, is_configured
from app.models import HealthResponse, NarrateRequest, NarrateResponse, SmorfiaEntry

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
    # si pesca una frase statica da frasi-iniziali.txt (istantaneo, gratis).
    if not req.previous_sentences:
        narration = frasi_iniziali.random_frase_iniziale()
        return NarrateResponse(number=req.number, call=call, narration=narration)

    # Dal secondo numero in poi: contesto a costo pressoché costante (non
    # cresce con la partita) — solo le ultime due frasi generate, vedi
    # prompt-narrazione_1.md.
    system_prompt = prompts.build_system_prompt(req.language)
    user_prompt = prompts.build_user_prompt(req.number, req.previous_sentences, req.language)
    try:
        narration = generate_narration(system_prompt, user_prompt)
    except LLMNotConfiguredError as e:
        raise HTTPException(status_code=503, detail=str(e)) from e
    except Exception as e:  # errori di rete/API Gemini
        raise HTTPException(status_code=502, detail=f"Errore nella generazione: {e}") from e

    # Grassetto applicato qui, non lasciato al modello — vedi bold_smorfia_words.
    narration = prompts.bold_smorfia_words(narration, req.previous_numbers + [req.number], req.language)

    return NarrateResponse(number=req.number, call=call, narration=narration)

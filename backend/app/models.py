"""Modelli Pydantic per le richieste/risposte dell'API."""

from typing import Literal

from pydantic import BaseModel, Field

Language = Literal["nap", "it", "en", "es"]


class NarrateRequest(BaseModel):
    number: int = Field(..., ge=1, le=90, description="Numero appena estratto")
    previous_sentences: list[str] = Field(
        default_factory=list,
        description="Ultime due frasi generate (non l'intera storia) — contesto a costo pressoché costante, vedi prompt-narrazione.md. Vuoto al primo numero della partita.",
    )
    previous_numbers: list[int] = Field(
        default_factory=list,
        description="Numeri già usciti in questa partita, in ordine — NON mandato all'LLM, usato solo lato backend per grassettare in modo deterministico le parole Smorfia realmente uscite nel testo generato.",
    )
    language: Language = "nap"
    device_id: str | None = Field(
        default=None,
        description="ID anonimo persistente per dispositivo (localStorage lato frontend) — solo per il cruscotto d'uso della consolle admin, mai per identificare una persona reale.",
    )
    session_id: str | None = Field(
        default=None,
        description="ID della partita corrente (rigenerato ad ogni 'Nuova storia') — usato lato backend solo per calcolare la durata delle partite nel cruscotto admin.",
    )


class NarrateResponse(BaseModel):
    number: int
    call: str  # Fase 1: solo "numero, significato" — lookup, non generato dal modello
    narration: str  # Fase 2: al primo numero è una frase statica (frasi-iniziali-{lingua}.txt), poi generata dal modello


class TTSRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=500, description="Testo da leggere (fase 1 o fase 2)")
    language: Language = "nap"


class EventRequest(BaseModel):
    """Eventi minori che non passano da /api/narrate — per ora solo la
    pressione del tasto "!", pensato per essere riusabile per altri eventi
    futuri del cruscotto admin senza aggiungere un endpoint per ciascuno."""

    event_type: Literal["exclamation"]
    session_id: str | None = None


class SmorfiaEntry(BaseModel):
    number: int
    napoletano: str
    italiano: str
    variante_scabrosa: str | None = None


class HealthResponse(BaseModel):
    status: str
    llm_key_configured: bool

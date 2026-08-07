"""Modelli Pydantic per le richieste/risposte dell'API."""

from typing import Literal

from pydantic import BaseModel, Field

Intensity = Literal["soft", "spinto"]
Language = Literal["nap", "it", "en", "es"]


class NarrateRequest(BaseModel):
    number: int = Field(..., ge=1, le=90, description="Numero appena estratto")
    previous_numbers: list[int] = Field(
        default_factory=list, description="Numeri già usciti in questa partita, in ordine"
    )
    story_so_far: list[str] = Field(
        default_factory=list,
        description="Frammenti di narrazione già generati in questa partita, in ordine",
    )
    intensity: Intensity = "soft"
    language: Language = "nap"


class NarrateResponse(BaseModel):
    number: int
    call: str  # Fase 1: solo "numero, significato" — lookup, non generato dal modello
    narration: str  # Fase 2: generata dal modello, lega il numero al filo narrativo


class SmorfiaEntry(BaseModel):
    number: int
    napoletano: str
    italiano: str
    variante_scabrosa: str | None = None


class HealthResponse(BaseModel):
    status: str
    llm_key_configured: bool

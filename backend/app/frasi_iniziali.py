"""Frasi statiche di apertura per il primo numero di ogni partita
(frasi-iniziali.txt nella root del repo) — nessuna chiamata LLM per quel
turno, vedi prompt-narrazione_1.md."""

import random
from functools import lru_cache
from pathlib import Path

FRASI_PATH = Path(__file__).resolve().parent.parent.parent / "frasi-iniziali.txt"


@lru_cache(maxsize=1)
def _load_frasi() -> list[str]:
    with open(FRASI_PATH, encoding="utf-8") as f:
        return [riga.strip() for riga in f if riga.strip()]


def random_frase_iniziale() -> str:
    return random.choice(_load_frasi())

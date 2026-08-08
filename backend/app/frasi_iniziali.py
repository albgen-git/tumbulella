"""Frasi statiche di apertura per il primo numero di ogni partita
(frasi-iniziali-{lingua}.txt nella root del repo, una per lingua — stessa
struttura di frasi-pazze-{lingua}.txt) — nessuna chiamata LLM per quel
turno, vedi prompt-narrazione.md."""

import random
from functools import lru_cache
from pathlib import Path

_ROOT = Path(__file__).resolve().parent.parent.parent

_FILE_SUFFIX_BY_LANG = {
    "nap": "napoletano",
    "it": "italiano",
    "en": "inglese",
    "es": "spagnolo",
}


@lru_cache(maxsize=4)
def _load_frasi(language: str) -> list[str]:
    suffix = _FILE_SUFFIX_BY_LANG.get(language, "napoletano")
    path = _ROOT / f"frasi-iniziali-{suffix}.txt"
    with open(path, encoding="utf-8") as f:
        return [riga.strip() for riga in f if riga.strip()]


def random_frase_iniziale(language: str) -> str:
    return random.choice(_load_frasi(language))

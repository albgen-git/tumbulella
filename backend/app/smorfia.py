"""Caricamento e lookup della tavola Smorfia (smorfia.json nella root del repo)."""

import json
from functools import lru_cache
from pathlib import Path

# smorfia.json vive nella root del repo (condiviso col frontend), non duplicato qui.
SMORFIA_PATH = Path(__file__).resolve().parent.parent.parent / "smorfia.json"


@lru_cache(maxsize=1)
def _load_table() -> dict:
    with open(SMORFIA_PATH, encoding="utf-8") as f:
        data = json.load(f)
    return data["numeri"]


def all_numbers() -> dict:
    """Ritorna l'intera tavola {numero: {napoletano, italiano, variante_scabrosa?}}."""
    return _load_table()


def get_entry(number: int) -> dict | None:
    return _load_table().get(str(number))


def meaning_for(number: int, lang: str = "napoletano") -> str | None:
    """lang: 'napoletano' o 'italiano'. Le altre lingue (en/es) le scrive
    direttamente il modello in fase di narrazione, non serve pre-tradurle qui."""
    entry = get_entry(number)
    if not entry:
        return None
    return entry.get(lang) or entry.get("napoletano")

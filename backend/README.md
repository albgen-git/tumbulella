# Tumbulella — Backend (FastAPI)

API REST per la decodifica Smorfia e la narrazione incrementale generata da Claude. Progetto separato dal frontend (`concept-a`/`concept-b`), come da `requirements_1.md`.

## Setup

Richiede Python 3.10+ (su questa macchina è installato come `py`, non `python` — se `python` non funziona usa `py`).

```bash
cd backend
py -m venv venv
./venv/Scripts/python.exe -m pip install -r requirements.txt   # Windows
# source venv/bin/activate && pip install -r requirements.txt  # macOS/Linux
```

Copia `.env.example` in `.env` e inserisci la tua chiave:

```bash
cp .env.example .env
# poi apri .env e sostituisci sk-ant-... con la tua vera ANTHROPIC_API_KEY
```

`.env` è nel `.gitignore`: non finisce mai nel repo.

## Avvio

```bash
./venv/Scripts/python.exe -m uvicorn app.main:app --reload --port 8000
```

Poi apri http://127.0.0.1:8000/docs per la documentazione interattiva (Swagger UI), generata automaticamente da FastAPI.

## Endpoint

- `GET /api/health` — stato del servizio, e se la chiave Anthropic è configurata (non richiede chiave).
- `GET /api/smorfia` — l'intera tavola 1-90 (napoletano + italiano + eventuale doppio senso tradizionale).
- `GET /api/smorfia/{number}` — un singolo numero.
- `POST /api/narrate` — genera la narrazione (fase 2) per un numero, dato il contesto della partita. Richiede `ANTHROPIC_API_KEY` configurata, altrimenti risponde `503`.

Esempio di chiamata a `/api/narrate`:

```json
{
  "number": 76,
  "previous_numbers": [75],
  "story_so_far": ["Ecco Pulcinella! Chissà dove va..."],
  "intensity": "soft",
  "language": "nap"
}
```

Risposta:

```json
{
  "number": 76,
  "call": "76, 'a fontana",
  "narration": "... testo generato da Claude, agganciato a Pulcinella ..."
}
```

## Architettura

- **Nessun database**: il contesto della partita (numeri già usciti, racconto fin qui) viaggia dal frontend a ogni chiamata — è il frontend a tenerlo in memoria, non il backend. Coerente con la scelta "niente persistenza nell'MVP" di `requirements_1.md`.
- **Fase 1 (chiamata) non passa da Claude**: è un semplice lookup in `smorfia.json` (funzione `call` in `POST /api/narrate`), istantaneo. Solo la fase 2 (narrazione) chiama il modello.
- **`smorfia.json`** vive nella root del repo (`app/smorfia.py` lo legge da lì), condiviso concettualmente col frontend — un'unica fonte di verità per i significati.
- **Modello**: Claude Sonnet (`app/claude_client.py`, costante `MODEL_NAME`, sovrascrivibile con la variabile d'ambiente `TUMBULELLA_MODEL`).
- **Prompt** (`app/prompts.py`): lo stile è ispirato agli esempi di tombolella reale in `la_smorfia_dei_quartieri.pdf` (descritti a parole nel prompt, non riprodotti) e alle note `variante_scabrosa` di `smorfia.json` per il tono "spinto" — restando sempre scherzoso/folkloristico, mai esplicito, come da vincoli di `requirements_1.md`.

## Cosa manca per la produzione (fuori scope di questo MVP)

- Collegamento del frontend (`concept-b`) a questa API al posto del motore mock in `src/data.js` — prossimo passo naturale.
- TTS lato server (per ora il frontend usa solo la Web Speech API del browser).
- Rate limiting / autenticazione, se il traffico cresce.
- CORS ristretto al dominio reale (`www.tumbulella.it`) invece di `allow_origins=["*"]`.

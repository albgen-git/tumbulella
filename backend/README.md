# Tumbulella — Backend (FastAPI)

API REST per la decodifica Smorfia e la narrazione incrementale generata da Gemini. Progetto separato dal frontend (`concept-a`/`concept-b`), come da `requirements.md`.

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
# poi apri .env e inserisci la tua vera GEMINI_API_KEY
```

`.env` è nel `.gitignore`: non finisce mai nel repo.

## Avvio

```bash
./venv/Scripts/python.exe -m uvicorn app.main:app --reload --port 8000
```

Poi apri http://127.0.0.1:8000/docs per la documentazione interattiva (Swagger UI), generata automaticamente da FastAPI.

## Endpoint

- `GET /api/health` — stato del servizio, e se la chiave Gemini è configurata (non richiede chiave).
- `GET /api/smorfia` — l'intera tavola 1-90 (napoletano + italiano + eventuale doppio senso tradizionale).
- `GET /api/smorfia/{number}` — un singolo numero.
- `POST /api/narrate` — genera la narrazione (fase 2) per un numero. Il **primo numero della partita non chiama l'LLM**: pesca una frase statica da `frasi-iniziali-{lingua}.txt`, gratis e istantaneo. Dal secondo in poi richiede `GEMINI_API_KEY` configurata, altrimenti risponde `503`.

Il contesto mandato ad ogni chiamata resta pressoché costante per tutta la partita (non cresce con il numero di numeri estratti) — vedi [prompt-narrazione.md](../prompt-narrazione.md) nella root del repo: solo le **ultime due frasi generate**, mai l'intera cronologia.

Esempio di chiamata a `/api/narrate` (dal secondo numero in poi):

```json
{
  "number": 76,
  "previous_sentences": [
    "Iniziamo bene",
    "Ma guardate 'o storto! E mo che ce azzecca?"
  ],
  "language": "nap"
}
```

Risposta:

```json
{
  "number": 76,
  "call": "76, 'a fontana",
  "narration": "... testo generato da Gemini, con le parole citate in **grassetto** ..."
}
```

Al primo numero (`previous_sentences` vuoto), `narration` è invece una riga pescata a caso da `frasi-iniziali-{lingua}.txt`.

## Architettura

- **Nessun database**: il contesto della partita non viaggia più per intero — vedi nota sotto — ed è comunque il frontend a tenere in memoria il poco che serve, non il backend. Coerente con la scelta "niente persistenza nell'MVP" di `requirements.md`.
- **Fase 1 (chiamata) non passa dal modello**: è un semplice lookup in `smorfia.json` (funzione `call` in `POST /api/narrate`), istantaneo. Nemmeno il primo numero della fase 2 passa dal modello (vedi sotto) — solo dal secondo numero in poi si chiama davvero l'LLM.
- **`smorfia.json`** vive nella root del repo (`app/smorfia.py` lo legge da lì), condiviso concettualmente col frontend — un'unica fonte di verità per i significati.
- **`frasi-iniziali-{lingua}.txt`** (root del repo, letto da `app/frasi_iniziali.py`): frasi statiche di apertura, una pescata a caso per il primo numero di ogni partita — zero costo, zero latenza di rete.
- **Contesto a costo pressoché costante**: ad ogni chiamata si mandano solo le ultime due frasi generate — mai l'intera cronologia della partita. Vedi [prompt-narrazione.md](../prompt-narrazione.md) nella root del repo per il razionale (un primo test aveva mostrato un costo crescente con la lunghezza della partita).
- **Modello**: Gemini Flash (`app/llm_client.py`, costante `MODEL_NAME`, sovrascrivibile con la variabile d'ambiente `TUMBULELLA_MODEL`).
- **Prompt** (`app/prompts.py`): lo stile è ispirato agli esempi di tombolella reale in `la_smorfia_dei_quartieri.pdf` (descritti a parole nel prompt, non riprodotti), restando sempre scherzoso e folkloristico, mai esplicito, come da vincoli di `requirements.md`. Nessun selettore di intensità: rimosso dal progetto (il gioco non cambiava a sufficienza tra le due modalità).

## Cosa manca per la produzione (fuori scope di questo MVP)

- Collegamento del frontend (`concept-b`) a questa API al posto del motore mock in `src/data.js` — prossimo passo naturale.
- TTS lato server (per ora il frontend usa solo la Web Speech API del browser).
- Rate limiting / autenticazione, se il traffico cresce.
- CORS ristretto al dominio reale (`www.tumbulella.it`) invece di `allow_origins=["*"]`.

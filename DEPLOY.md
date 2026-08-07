# Pubblicare Tumbulella su un link gratuito

Obiettivo: un URL pubblico funzionante per raccogliere feedback, senza comprare hosting. I due pezzi si pubblicano separatamente:

- **Frontend** (`concept-b/`): file statici → **Netlify** (gratis, nessuna carta richiesta).
- **Backend** (`backend/`, FastAPI + Gemini): processo Python sempre attivo con una chiave segreta → **Render** (piano free, nessuna carta richiesta nella maggior parte dei casi).

Entrambi si deployano da un repository Git — il progetto è già inizializzato (`git init` fatto), manca solo di essere pubblicato su GitHub.

> Se preferisci un'altra combinazione (Hugging Face Spaces, Google Cloud Run, un tuo VPS, ecc.) i passaggi 1-2 restano uguali, cambia solo il servizio al passaggio 3.

## 0. Prerequisiti (una tantum)

1. Un account [GitHub](https://github.com) (gratis).
2. Un account [Render](https://render.com) (gratis — puoi registrarti anche con l'account GitHub, in un click).
3. Un account [Netlify](https://netlify.com) (gratis — anche qui puoi usare l'account GitHub).

## 1. Pubblicare il codice su GitHub

Su [github.com/new](https://github.com/new) crea un repository (es. `tumbulella`, **privato o pubblico** a tua scelta — pubblico non è un problema perché `.env` con la chiave API non viene mai incluso, è già escluso da `.gitignore`).

Poi, da qui, esegui (io posso lanciare questi comandi se mi dai l'ok, oppure li lanci tu):

```bash
git add .
git commit -m "Setup iniziale Tumbulella"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/tumbulella.git
git push -u origin main
```

## 2. Backend su Render

1. Su [dashboard.render.com](https://dashboard.render.com) → **New** → **Web Service** → collega il repo GitHub appena creato.
2. Impostazioni:
   - **Root Directory**: `backend`
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: Free
3. In **Environment** → **Environment Variables**, aggiungi:
   - `GEMINI_API_KEY` = *(la tua chiave — incollala tu direttamente nel pannello Render, non condividerla mai altrove)*
4. **Create Web Service**. Dopo il primo deploy (qualche minuto) Render ti dà un URL tipo `https://tumbulella-backend.onrender.com`.
5. Verifica che funzioni aprendo `https://tumbulella-backend.onrender.com/api/health` nel browser: deve rispondere `{"status":"ok","llm_key_configured":true}`.

**Nota piano free**: il servizio "si addormenta" dopo ~15 minuti di inattività; la prima richiesta dopo la pausa impiega 30-50 secondi a risvegliarsi (le successive sono normali). Accettabile per raccogliere feedback, non per un lancio vero.

**Nota quota Gemini**: il piano gratuito Gemini ha un limite di 20 richieste/giorno per questo modello (vedi thread precedente) — con più persone che provano l'app in giro, si esaurisce in fretta. Da tenere presente mentre raccogli feedback.

## 3. Collegare il frontend al backend pubblico

Una volta ottenuto l'URL Render, in [concept-b/src/data.js](concept-b/src/data.js) sostituisci il placeholder:

```js
return "https://IMPOSTA-QUI-URL-BACKEND-PUBBLICO";
```

con l'URL reale, es.:

```js
return "https://tumbulella-backend.onrender.com";
```

(In locale continua a funzionare come prima: la funzione rileva `localhost`/`127.0.0.1` e usa sempre il backend locale in quel caso.)

## 4. Frontend su Netlify

Due modi, scegli quello che preferisci:

**A. Drag & drop (più veloce, nessun account necessario per un link temporaneo)**
Vai su [app.netlify.com/drop](https://app.netlify.com/drop) e trascina la cartella `concept-b` — ottieni subito un URL pubblico tipo `https://nome-a-caso.netlify.app`.

**B. Collegato a GitHub (consigliato — si aggiorna da solo ad ogni push)**
Su [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → collega il repo GitHub → **Base directory**: `concept-b` → **Publish directory**: `concept-b` (nessun build command, sono file statici) → **Deploy**.

In entrambi i casi puoi poi rinominare il sottodominio (es. `tumbulella.netlify.app`) gratuitamente dalle impostazioni del sito.

## 5. Quando passerai a un hosting a pagamento

Il codice non cambia: comprando uno spazio hosting reale, punti semplicemente lo stesso repository (o build) al nuovo servizio, aggiorni di nuovo `BACKEND_URL` se cambia dominio del backend, e — se vuoi — restringi il CORS del backend (oggi `allow_origins=["*"]` in [backend/app/main.py](backend/app/main.py), va bene per la fase di test ma andrebbe ristretto al dominio reale in produzione).

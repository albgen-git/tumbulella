# Manuale — gestire le voci TTS di Tumbulella

Guida pratica per aggiungere, cambiare o testare le voci usate dal gioco (Gemini TTS a pagamento o Web Speech gratis), sia da subito sia quando in futuro Google rilascerà nuove voci Gemini.

## Dove vive la configurazione

Due punti, entrambi dentro `backend/`:

- **`tts_voices.json`** — la config REALE, quella che il backend legge in produzione: quale motore (`gemini` o `webspeech`) e quale voce usa ciascuna delle 4 lingue (nap/it/en/es). Modificarla a mano è possibile ma **sconsigliato**: usa la consolle admin (sotto), che scrive questo file per te evitando errori di formato.
- **`admin/console.html`** — la consolle admin, con l'elenco `VOICES` delle voci Gemini proposte nel menu a tendina (circa 30, quelle documentate da Google al momento in cui ho scritto questo codice).

## Caso 1 — Cambiare la voce di una lingua già nota

1. Avvia la consolle: da `backend/`, con l'ambiente virtuale attivo, `python -m admin.main`, poi apri `http://127.0.0.1:8899`.
2. Nella riga della lingua che vuoi cambiare, seleziona il motore (Web Speech / Gemini) e la voce dal menu.
3. Premi **"🔊 Prova voce"** per ascoltarla prima di scegliere.
4. Premi **"🧪 Rilascia localmente"** per aprire il gioco vero (punta al backend di sviluppo, porta 8000 — deve essere già avviato a parte) e sentire la voce nel contesto reale, es. su Edge.
5. Quando sei soddisfatto, premi **"Salva configurazione"**, poi vai alla sezione "Rilascio in produzione" e premi **"Rilascia"**.

## Caso 2 — Google ha rilasciato una voce nuova, non ancora nell'elenco

Due modi, dal più veloce al più definitivo:

**A) Usarla subito, senza toccare il codice**
Nella riga della lingua, scrivi il nome esatto della nuova voce nel campo **"o scrivi il nome di una voce nuova..."** accanto al menu a tendina — questo campo ha sempre la priorità sul menu. Funziona da subito, anche prima che qualcuno aggiorni l'elenco.

**B) Aggiungerla all'elenco per tutte le volte successive**
Apri `backend/admin/console.html`, cerca la costante `const VOICES = [...]` (vicino all'inizio del `<script>`) e aggiungi una riga nello stesso formato delle altre:

```js
["NomeVoceNuova", "breve descrizione"],
```

La "breve descrizione" è solo un'etichetta indicativa nel menu (es. "vivace", "informativo") — non influisce sul funzionamento, usa "Prova voce" per giudicare il suono reale. Salva il file e riavvia la consolle (`Ctrl+C` e poi di nuovo `python -m admin.main`) per vedere la voce nel menu.

## Caso 3 — Attivare Gemini TTS su una lingua che oggi usa Web Speech

Stessa procedura del Caso 1, ma prima leggi l'avviso in cima alla consolle: ogni lingua passata a Gemini ha un costo reale (~0,005€ a turno, misurato) che oggi è coperto solo per il napoletano dal margine del piano premium — italiano/inglese/spagnolo oggi sono gratuiti, valuta se ha senso prima di attivarlo.

## Errore comune da evitare — file nuovi non pubblicati

La prima volta che si tocca `tts_voices.json` (o qualunque altro file nuovo), la sezione "Rilascio in produzione" della consolle mostra i file **non tracciati** (nuovi) **deselezionati di default**, apposta per non pubblicare per sbaglio file estranei. Se il file nuovo è invece necessario (come `tts_voices.json` la primissima volta), **ricordati di spuntarlo a mano** prima di premere "Rilascia" — altrimenti resta fuori dal rilascio e il backend in produzione va in errore quando prova a leggerlo (già successo una volta, causa dell'errore 502 sul TTS napoletano dell'11 agosto).

## Riferimento — dove sono le cose nel codice

| Cosa | File |
|---|---|
| Config reale (motore + voce per lingua) | `backend/tts_voices.json` |
| Consolle admin (UI + elenco voci `VOICES`) | `backend/admin/console.html` |
| Backend che legge la config e genera l'audio | `backend/app/tts.py` |
| Endpoint pubblico che dice al gioco quali lingue hanno Gemini attivo | `GET /api/tts-config` (`backend/app/main.py`) |
| Dove il gioco decide se provare Gemini o Web Speech | `window.speak` in `concept-b/src/data.js` |

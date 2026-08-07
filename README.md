# Tumbulella — Frontend Concepts (prototipo)

Due varianti di frontend per la vista principale di gioco di Tumbulella, basate su [requirements_1.md](requirements_1.md) e sulla tabella Smorfia in [la_smorfia_dei_quartieri.pdf](la_smorfia_dei_quartieri.pdf) / [smorfia.json](smorfia.json).

> **Concept B è quello adottato** (direzione playful/moderna). Concept A resta nel repo come riferimento/alternativa ma non riceve più aggiornamenti attivi.
>
> Un terzo concept ("minimal/istituzionale") era stato realizzato in una fase precedente ed è stato poi scartato su indicazione diretta.

## Come aprire i concept

Su questa macchina **non risulta installato Node.js/npm**, quindi i due concept sono realizzati con **React + Tailwind via CDN** (nessuna build necessaria): basta aprire il file `index.html` di ciascuna cartella direttamente nel browser (doppio click, o trascinalo in una finestra del browser).

- [concept-a/index.html](concept-a/index.html)
- [concept-b/index.html](concept-b/index.html)

Se in futuro installi Node.js, questi prototipi possono essere convertiti in un vero progetto Vite (`npm create vite`) mantenendo gli stessi componenti React: chiedimelo pure quando vuoi fare il passaggio.

**Nota tecnica**: il codice dei componenti React è inline dentro `index.html` (dentro `<script type="text/babel">`), non caricato da `src/app.jsx` tramite `src="..."`. Babel standalone carica gli script esterni via XMLHttpRequest, che Edge/Chrome bloccano per policy CORS quando la pagina è aperta con `file://` (errore tipico: *"Access to XMLHttpRequest ... has been blocked by CORS policy"*, pagina bianca). Solo `src/data.js` resta un file separato perché è un `<script src="...">` normale (caricamento nativo del browser, non soggetto a questa restrizione). I file `src/app.jsx` restano nel repo solo come sorgente leggibile — se li modifichi, va aggiornato anche il blocco corrispondente in `index.html`.

## Cosa contiene ogni concept

Ogni cartella è un'app React indipendente e autosufficiente:

```
concept-x/
  index.html      # entry point: carica React/Babel/Tailwind da CDN + i file sotto (JSX inline)
  src/data.js      # dati mock: tabella Smorfia 1-90 (4 lingue) + motore di frasi finte a due fasi
  src/app.jsx      # copia leggibile dei componenti React (non caricata direttamente, vedi nota sopra)
```

Entrambi implementano le stesse funzionalità richieste per la vista di gioco (v2, vedi requirements_1.md):

1. **Tabellone** 1-90 cliccabile, con stato "estratto" visivamente distinto e ordine di estrazione numerato.
2. **Narrazione incrementale a due fasi**, come da nuovo requisito:
   - **Fase 1 — chiamata**: al click viene mostrato/"letto" subito solo *numero + nome Smorfia* (es. "5, 'a mana"), un semplice lookup senza generazione.
   - **Pausa**: qualche secondo per simulare il tempo di cercare il numero sulla propria cartella (nella realtà ~10s; qui compressa per comodità di test — vedi `window.TIMING` in `src/data.js`).
   - **Fase 2 — narrazione**: la frase generata che aggancia il numero al filo narrativo (al numero immediatamente precedente) viene aggiunta al racconto scritto, che si allunga progressivamente.
   - I click vengono **accodati**: se si cliccano più numeri di seguito rapidamente, il tabellone si aggiorna subito per tutti, ma la sequenza chiamata→pausa→narrazione di ciascun numero viene riprodotta in ordine, una alla volta (come farebbe un solo banditore dal vivo). Verificato con click ravvicinati e con reset a metà sequenza (nessuna scrittura residua grazie a un token di sessione).
3. **Voce reale** via Web Speech API del browser (gratuita, nessuna chiamata server): la fase "chiamata" e la fase "narrazione" vengono lette ad alta voce nella lingua selezionata; il ritmo delle pause segue la durata reale della lettura invece di un timer fisso. Se disponibile, viene usata la voce **"Microsoft Giuseppe Multilingual Online (Natural)"** (voce neurale di Edge/Windows) per tutte e 4 le lingue, essendo multilingua; altrimenti si ricade sulla voce di sistema più vicina alla lingua selezionata (napoletano usa quella italiana — nessun browser ha una voce dialettale nativa, pronuncia "italianizzata", limite noto citato nei requisiti). Pulsante 🔊/🔇 sempre visibile per disattivare l'audio; se la sintesi vocale non è disponibile o è muta, si ricade automaticamente sulle pause a tempo fisso di prima. Indicatore di stato del "banditore" con 4 fasi (chiamata / pausa / narrazione / inattivo), animato.
4. **Selettore soft/spinto**, sempre visibile.
5. **Selettore lingua**: Napoletano (identitario) / Italiano / English / Español — determina la lingua sia della chiamata che della narrazione generata (mock: traduzioni della tabella Smorfia scritte a mano per il prototipo, non riviste da madrelingua). Cambiabile in corsa: si applica ai numeri cliccati da quel momento in poi, senza tradurre retroattivamente il racconto già scritto.
6. **Pulsante "Inizia una nuova storia"** che resetta tabellone, racconto e coda in corso.
7. **Pulsante "❓ Cosa è"** (solo Concept B): apre una finestra con la spiegazione del progetto, tradotta nelle 4 lingue del selettore e sincronizzata con la lingua attiva. Il testo (italiano) è letto da `cosa-e-tumbulella.docx` e trascritto/tradotto in `window.ABOUT_CONTENT` dentro `src/data.js`. Se il documento cambia, va ri-estratto il testo italiano e ri-tradotto quel blocco — la finestra lo legge da lì, non ha contenuto proprio duplicato altrove.

Nessun pulsante "genera storia" separato — l'unico trigger resta il click sul numero. Nessun pulsante copia/condividi (rimosso su indicazione diretta in Concept B).

**Concept B è collegato al backend reale** ([backend/](backend/), Python + FastAPI + Gemini): la fase 2 (narrazione) chiama `POST /api/narrate` sul backend, che genera il testo con l'LLM invece di un template fisso. Il motore a template mock resta in `src/data.js` come riferimento/fallback di sviluppo ma non è più usato nel flusso normale. Concept A resta invece completamente mock (nessun collegamento). Per pubblicare l'app in modo che sia raggiungibile da chiunque, vedi [DEPLOY.md](DEPLOY.md).

## Le due direzioni stilistiche

| | Concept A (secondario) | Concept B (adottato) |
|---|---|---|
| **Ispirazione** | Cartellone tradizionale della tombola napoletana | App playful/moderna da smartphone |
| **Palette** | Azzurro Napoli + terracotta/ocra su carta color crema | Azzurro Napoli dominante + accenti coral/limone/menta |
| **Font** | Playfair Display / Abril Fatface (vintage) | Baloo 2 (rotondo, giocoso) |
| **Scritte** | 'O Tabbellone / 'O Racconto / 'a smorfia ca cunta 'e storie | Le stesse (allineate a Concept A su richiesta) |
| **Iconografia** | Vesuvio (logo), Pulcinella/ciucciariello/Vesuvio nella finestra vuota | Vesuvio (logo, stessa illustrazione di Concept A); ciucciariello, Pulcinella e cornetto portafortuna nella finestra vuota |
| **Target d'uso** | Uso generale, tocco vintage-pop | Pubblico giovane, mobile-first |

Il colore azzurro Napoli è presente in entrambi come elemento distintivo comune, come richiesto.

## Nota sulla tabella Smorfia e le traduzioni

La tabella 1-90 in `src/data.js` (napoletano + italiano) è presa da [smorfia.json](smorfia.json), la fonte autorevole nel repo — un mio primo tentativo di ricostruzione a mano dall'OCR del PDF aveva sbagliato la numerazione tra i numeri 7 e 29 (mancava «7 = 'e sette peccate murtale», compensato per errore dividendo il 29 in due voci), corretto poi confrontando riga per riga con `smorfia.json`. Le traduzioni inglese/spagnolo restano scritte da me per popolare il selettore lingua e **non sono state validate da un madrelingua** — vanno riviste prima di un uso in produzione.

## Nota sul contenuto di `cosa-e-tumbulella.docx`

Il testo mostrato dal pulsante "❓ Cosa è" (Concept B) è stato estratto da `cosa-e-tumbulella.docx` e trascritto a mano in `window.ABOUT_CONTENT` (`concept-b/src/data.js`), perché il prototipo gira via `file://` senza server: un `fetch()` del `.docx` a runtime verrebbe bloccato dalla stessa policy CORS descritta sopra per `src/app.jsx`, e comunque il browser non saprebbe interpretare il formato `.docx`. Se il documento cambia, va ri-estratto il testo (es. con `pandoc -t markdown cosa-e-tumbulella.docx`, o chiedendo a Claude di farlo) e aggiornato quel blocco.

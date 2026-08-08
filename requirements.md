# Documento di Requisiti — Tumbulella.it

## Problema che risolve
Le cartelle della tombola napoletana e la Smorfia sono un patrimonio culturale vivo ma statico: si conosce il significato dei numeri, ma non esiste un modo semplice e divertente per trasformarli in qualcosa di nuovo. Tumbulella prende in input una sequenza di numeri estratti (1-90) e genera automaticamente una storiella in napoletano, coerente e divertente (con opzione di tono più scabroso), usando la Smorfia come chiave di decodifica narrativa. Porta una tradizione orale/popolare in una chiave ludica e moderna, condivisibile online.

## Utente target
- Persone di origine napoletana o campana, in Italia e nel mondo, legate alla tradizione della tombola.
- Chi gioca a tombola in famiglia/tra amici (specialmente durante le feste) e vuole un elemento in più di intrattenimento.
- Curiosi della cultura napoletana e della Smorfia, anche non napoletani, attratti dall'aspetto folkloristico/umoristico.
- Persone che cercano contenuti brevi e divertenti da condividere sui social.
- **Case di riposo/RSA**: animatori che organizzano tombola/bingo con gli ospiti, come attività di intrattenimento aggiuntiva.
- **Villaggi turistici, hotel, agriturismi**: animazione serale dove si gioca a tombola o bingo, per arricchire l'esperienza con un tocco folkloristico.
- In generale, chiunque gestisca o partecipi a serate di tombola/bingo in un contesto di gruppo (non solo uso individuale/familiare).

## Funzionalità core (MVP)
1. **Tabellone numeri**: l'utente ha un tabellone virtuale (1-90) su cui preme i numeri man mano che escono, in un ordine libero deciso da chi gioca dal vivo.
2. **Decodifica Smorfia**: il sistema associa ogni numero al proprio significato secondo la tavola della Smorfia napoletana.
3. **Narrazione incrementale a due fasi**: alla pressione di un numero, il sistema procede in due tempi distinti, per lasciare il tempo di cercare il numero sulla propria cartella (come nella tombola tradizionale):
   - **Fase 1 (immediata)**: viene letto ad alta voce solo il numero e il suo nome secondo la Smorfia (es. "Cinque, la mano"). Questa fase non richiede l'LLM: è un semplice lookup nella tavola Smorfia + audio, quindi è istantanea.
   - **Pausa** (qualche secondo, per dare il tempo di controllare la cartella).
   - **Fase 2 (narrazione)**: viene letta la porzione di racconto generata dall'LLM che lega il numero appena uscito al filo narrativo della partita in corso (es. "Ma cosa fa questa mano? Di chi è?"... e al numero successivo, "Questa è la mano di Maradona allora!"). Questo tempo di attesa dà margine sufficiente al motore LLM per comporre la frase con calma, senza fretta.
   
   Questo flusso a due fasi rende la latenza della generazione testo/audio molto meno critica rispetto a una risposta istantanea: i circa 10 secondi di pausa naturale tra numero e narrazione sono già un margine di tempo utile per la chiamata LLM + TTS.

4. **"Inizia una nuova storia"**: pulsante che azzera il contesto narrativo accumulato (numeri estratti + testo generato finora) e permette di iniziare una nuova partita da zero, con tabellone pulito.

5. **Selettore di lingua**: menu con 4 opzioni — Napoletano, Italiano, Inglese, Spagnolo — che determina la lingua sia del testo generato sia della voce usata per leggerlo. Il Napoletano resta la lingua "identitaria" del progetto; le altre servono ad allargare la fruibilità (es. turisti, pubblico internazionale, o chi capisce la storia ma non il dialetto).
6. **Pulsante "Cosa è"**: apre un testo informativo statico (non generato dall'LLM) che spiega: che Tumbulella è un supporto per rendere la tombola tra amici più divertente, non un gioco completo a sé; cos'è la tombola e come si gioca; la storia della Smorfia/Cabala a Napoli. Il testo di riferimento è già pronto in `docs/cosa-e-tumbulella.docx`.
7. **Pulsante "!" (esortazione)**: pensato per i momenti di silenzio tra un numero e l'altro. Alla pressione, recita ad alta voce una frase di esortazione scelta a caso (es. "Datevi una mossa", "Forza ragazzi"), nella lingua attiva del menu. Anche queste frasi sono statiche (nessuna chiamata LLM, mai inviate al motore di narrazione) e **non compaiono nella finestra di testo della storia** — sono un elemento separato, puramente di intrattenimento/animazione, non parte del racconto. I file di riferimento sono in `docs/reference/frasi-pazze-{lingua}.txt` (uno per ciascuna delle 4 lingue del menu).

## Fuori scope per l'MVP (esplicitamente escluso)
- Account utente, login, storico personale delle storie generate.
- Tabellone di gioco multiplayer o estrazione automatica dei numeri in tempo reale (tipo bingo live).
- App mobile nativa (solo sito web responsive).
- Abbonamenti o pagamenti utente (la monetizzazione MVP è solo pubblicitaria, vedi sezione dedicata).
- Un pacchetto "white label"/licenza dedicata per case di riposo o villaggi turistici (per ora usano lo stesso sito pubblico; un'eventuale versione dedicata è una fase successiva).
- Traduzione automatica italiano↔napoletano per input arbitrario dell'utente (solo output generato, non un traduttore generico).


## Identità visiva
- Colore distintivo: azzurro Napoli, presente in tutte le varianti/concept come elemento comune riconoscibile.
- Iconografia tipica napoletana da poter usare come riferimento visivo: Vesuvio, Pulcinella, ciucciariello (il tipico asinello), e altri simboli popolari coerenti con il tema Smorfia/tombola.

## Stack tecnico proposto
Dato che vuoi appoggiarti a Claude Code per il backend in Python e preferisci qualcosa di semplice ed economico:

- **Backend**: Python + FastAPI, come progetto separato dal frontend (API REST): espone endpoint per decodifica numeri, generazione storia, generazione audio. **Nota architetturale importante**: la generazione non è più "one-shot" (tutti i numeri insieme → una storia), ma incrementale: ogni pressione di un numero invia al backend il numero nuovo + il contesto della partita in corso (numeri già usciti, testo generato finora, livello di intensità), e riceve solo il pezzo di storia aggiuntivo. Il contesto può essere mantenuto lato frontend (rimandato al backend a ogni chiamata) per non introdurre un database anche nell'MVP, oppure con una sessione server-side temporanea — da decidere in fase di implementazione con Claude Code.
- **Materiale di riferimento per il prompt**: hai fornito un documento (*La Smorfia dei quartieri*) con la tavola completa dei significati 1-90 e alcuni esempi trascritti di "tombolelle" reali (il tipico botta e risposta della chiamante che improvvisa). Questo materiale va tenuto nel repo (es. `docs/reference/la_smorfia_dei_quartieri.pdf`) come riferimento sia per costruire `smorfia.json` sia — soprattutto — per il prompt engineering: gli esempi reali di tombolella sono utili per far scrivere a Claude Code un prompt che riproduca lo stile autentico (doppi sensi, ironia, ritmo colloquiale) invece di un testo napoletano "di maniera". Le regole di gioco specifiche per la narrazione incrementale (frase di apertura statica al primo numero senza chiamata LLM, poi collegamento di almeno 4 parole per turno con gestione degli scarti, chiusura con domanda-gancio, discorso diretto, grassetto sulle parole uscite) sono documentate in `docs/prompt-narrazione.md`, insieme alla nota tecnica su come mantenere questo comportamento con uno stato minimo (solo le ultime due frasi generate, non l'intera cronologia). Le frasi statiche di apertura pescate a caso per il primo numero di ogni partita (nessuna chiamata LLM per quel turno) sono in `docs/reference/frasi-iniziali-{lingua}.txt`, un file per ciascuna delle 4 lingue del menu — stessa struttura già usata per `docs/reference/frasi-pazze-{lingua}.txt`.
- **Dati Smorfia**: file **JSON o CSV** versionato nel repo (es. `smorfia.json` con numero → significato/i), letto dal backend, costruito a partire dal documento di riferimento sopra. Nessun database necessario per l'MVP: i dati sono statici e piccoli.
- **Generazione testo**: chiamata API a Claude (modello Sonnet, buon compromesso qualità/costo) per ogni numero premuto, con prompt che include: significato Smorfia del numero, numeri e testo già generati nella partita corrente, livello di intensità scelto. Grazie al flusso a due fasi (numero letto subito, narrazione dopo circa 10 secondi), la latenza non è un vincolo stretto: la pausa naturale del gioco copre il tempo necessario alla chiamata LLM + TTS. Da testare comunque che i tempi reali rientrino in quella finestra.
- **Generazione audio (TTS)** — strategia a due stadi, coerente con il selettore di lingua:
  - **MVP**: sempre Web Speech API del browser (gratuita, nessuna chiamata server), per tutte e 4 le lingue (napoletano, italiano, inglese, spagnolo). Qualità accettabile per validare il flusso e il prodotto, con il limite noto sul napoletano (pronuncia "italianizzata", nessuna voce dialettale nativa nei browser).
  - **Versione finale**: upgrade mirato solo sul Napoletano, integrando ElevenLabs (qualità nettamente superiore, verificata nei test). Italiano, Inglese e Spagnolo possono restare su Web Speech, dato che per queste lingue le voci di sistema sono già di qualità adeguata — l'investimento in un TTS a pagamento si concentra dove serve davvero, cioè sulla lingua identitaria del progetto.
  - Questo approccio richiede nel backend un routing per lingua: se lingua = napoletano → chiamata a ElevenLabs; altrimenti → sintesi gestita lato client con Web Speech (nessuna chiamata server necessaria, riduce ulteriormente i costi per le altre 3 lingue).
  - Generazione audio per ogni numero premuto, in due momenti (fase 1: numero + nome Smorfia, fase 2: narrazione) — vedi funzionalità core sopra.
- **Frontend**: applicazione separata (React o anche HTML/CSS/JS semplice) che chiama il backend via API — coerente con la tua preferenza di non avere una soluzione troppo monolitica/minimale.
- **Hosting**: opzioni economiche compatibili con backend+frontend separati e dominio personalizzato:
  - **Railway** o **Render**: permettono di ospitare backend e frontend come due servizi distinti nello stesso progetto, deploy diretto da Git, piano hobby a pochi € al mese, gestiscono anche il dominio custom.
  - In alternativa un VPS economico (es. Hetzner) se preferisci controllo completo, con backend e frontend serviti separatamente (es. Nginx come reverse proxy), ma richiede più manutenzione.
- **Dominio**: www.tumbulella.it (da registrare/collegare presso un registrar .it).

## Monetizzazione (MVP)
Banner pubblicitari come prima forma di monetizzazione. Indicazioni pratiche:
- **Google AdSense** è l'opzione più semplice per iniziare: si integra con poche righe di codice nel frontend, gestisce automaticamente le aste pubblicitarie e il pagamento. Richiede approvazione del sito (contenuti originali, policy rispettate, traffico minimo di fatto necessario per essere accettati).
- I banner si posizionano tipicamente attorno all'area della storia generata (es. sopra/sotto il testo, non troppo invasivi) per non compromettere l'esperienza soprattutto su mobile.
- Da tenere presente: i ricavi da banner sono proporzionali al traffico e generalmente bassi (pochi euro ogni 1000 visualizzazioni); vanno visti come copertura parziale dei costi (hosting + chiamate API), non come guadagno significativo, a meno di volumi di traffico alti — vedi nota sul business case più sotto.
- Non è nello scope MVP integrare un sistema di gestione ads proprietario: si usa direttamente la piattaforma esterna (AdSense o simile).

### Analisi quantificata: banner vs costo reale per partita
Con i dati di costo reali misurati (`gemini-3.1-flash-lite`, ~0,00172$ a chiamata), una partita media da 60 numeri (chiusura tipica di una tombola reale) costa circa 0,103$.

**Prima stima (troppo prudente)**: assumendo solo 2 banner statici per sessione (come una pagina letta in pochi secondi), il ricavo copriva solo l'1-4% del costo — un gap enorme.

**Stima più realistica**: una partita dura in media 20 minuti di interazione continua (l'utente resta sullo schermo, preme numeri, ascolta narrazione). Ogni numero premuto è un cambio di contenuto genuino, che permette un refresh pubblicitario legittimo secondo le policy Google (diverso da un refresh a tempo arbitrario, non consentito). Rispettando un intervallo prudente di ~30 secondi tra un refresh e l'altro, sono possibili circa 40 refresh in 20 minuti:

| Banner per sessione | CPM 1$ | CPM 3$ |
|---|---|---|
| 1 banner | copre il 39% del costo | copre il 116% del costo |
| 2 banner | copre il 78% del costo | copre il 233% del costo |

**Conclusione pratica aggiornata**: con una sessione lunga e coinvolgente (non una singola pagina vista), i banner possono avvicinarsi al pareggio o superarlo, a seconda del CPM reale ottenuto — che è l'incognita principale e si scopre solo con AdSense approvato e traffico reale. Non è più un "no" netto come nella prima stima, ma resta un equilibrio delicato, dipendente da variabili non ancora testate. Le leve aggiuntive restano comunque valide come rete di sicurezza:
- **Più slot pubblicitari** per sessione avvicinano ulteriormente il pareggio.
- **Anticipare il piano premium**: anche un prezzo bassissimo copre facilmente decine di partite, con margini più prevedibili dei banner.
- **Dare priorità al modello B2B** (case di riposo, villaggi turistici): resta l'opzione con margini più solidi e meno dipendente da variabili incerte come il CPM.

**Da validare appena il sito è online**: il CPM reale ottenuto, il numero medio di refresh accettati da AdSense in pratica, e il tasso di completamento delle partite (quante arrivano davvero a 60 numeri vs quante si fermano prima).

## Vincoli
- **Budget**: contenuto, dell'ordine di poche decine di euro al mese (hosting economico + costo variabile delle chiamate API Claude, che dipende dal numero di storie generate).
- **Timeline**: MVP funzionante in poche settimane.
- **Lingua**: il testo generato deve essere in napoletano credibile, non italiano con qualche parola napoletana infilata a caso — questo va curato nel prompt e testato con esempi reali.
- **Contenuti**: il tono "spinto" deve restare scherzoso/folkloristico (nello spirito della Smorfia tradizionale, che è già di per sé piccante in alcuni numeri), non contenuti sessualmente espliciti.
- **Costo audio**: nella versione finale, il TTS a pagamento (ElevenLabs) riguarda solo il Napoletano — le altre 3 lingue restano gratuite via Web Speech. Anche per il Napoletano, la fase 1 (numero + nome Smorfia) può essere pre-generata una tantum (90 combinazioni fisse per tavola Smorfia) e servita come file statico, azzerando il costo ricorrente per quella parte; resta a consumo solo la fase 2 (narrazione), che comunque va monitorata se il traffico cresce.
- **Nota architetturale sul contesto — RISOLTA, con dati reali**: un primo test (con un altro provider, senza ottimizzazione) aveva mostrato un costo di circa 0,50€ a partita, causato dall'invio dell'intera storia accumulata ad ogni chiamata (crescita quadratica). Dopo il passaggio all'architettura a stato compatto (solo le ultime due frasi + parola nuova, mai la cronologia integrale né l'intero file smorfia.json), un nuovo test misurato su modelli Gemini conferma la correzione:

  | Modello | Costo/chiamata | Partita da 50 turni | Partita da 90 turni |
  |---|---|---|---|
  | gemini-flash-latest (3.6-flash) | $0,00374 | $0,187 | $0,336 |
  | gemini-3.1-flash-lite | $0,00172 (2,2× più economico) | $0,086 | $0,155 |

  Il costo per chiamata risulta costante indipendentemente dal numero di turni già giocati (verificato: costo/chiamata × numero di turni = costo totale, in entrambi i casi) — conferma che la crescita è ora lineare, non più quadratica. Anche la partita più lunga possibile (90 turni) costa sotto i 34 centesimi con il modello più caro testato, sotto i 16 con quello più economico.

  Nota aggiuntiva emersa dal test: gemini-flash-latest mostra un uso incostante di "pensiero interno" (token di ragionamento, 0 in alcune chiamate, 400-650 in altre, su 6 prove), che introduce variabilità nel costo per singola chiamata; gemini-3.1-flash-lite non usa mai pensiero interno (sempre 0 su 5 prove), risultando più economico e anche più prevedibile. Da valutare se questo pensiero interno porti benefici percepibili di qualità narrativa che giustifichino il costo maggiore — da testare con un confronto qualitativo diretto, non solo di costo.

## Possibili sviluppi futuri (fuori scope MVP)
- **Modello B2B per case di riposo e villaggi turistici**: licenza o pacchetto a evento dedicato a chi organizza tombola/bingo in contesti di gruppo. Probabilmente più solido come fonte di ricavo rispetto ai soli banner pubblicitari (vedi nota sul business case), ma richiede validare prima l'interesse con la versione pubblica gratuita.
- **App mobile (Android/iOS)**: versione nativa o ibrida dell'esperienza, da valutare dopo aver validato l'uso via sito web.
- **Login utenti**: per tracciare quante partite/storie ogni utente ha generato, base necessaria per un modello freemium.
- **Modello freemium**: versione gratuita limitata (es. una partita al giorno) e versione a pagamento senza limiti. Richiede login funzionante e probabilmente un database (a differenza dell'MVP, che non ne ha bisogno) per tracciare utenti e conteggi.
- **Selettore del tipo di Smorfia**: possibilità di scegliere quale tavola di decodifica usare — es. "dei quartieri" (quella fornita come riferimento), una versione più antica/classica, una versione moderna/rivisitata, o una versione personalizzata dall'utente (che potrebbe editare i propri significati per alcuni numeri). Nell'MVP si parte con una sola tavola fissa (quella dei quartieri); l'architettura dati a file JSON separati per tavola rende questa evoluzione relativamente semplice da aggiungere in futuro.

### Ipotesi di prezzo per la versione premium
Non ho dati di mercato specifici su questo prodotto (è una nicchia nuova), quindi queste sono ipotesi di partenza da validare, non numeri definitivi:
- **Abbonamento mensile basso**: 1,99-2,99€/mese. Coerente con app di intrattenimento/nicchia leggere; abbassa la barriera all'acquisto d'impulso.
- **Abbonamento annuale con sconto**: es. 14,99-19,99€/anno (equivalente a ~1,25-1,65€/mese) — utile per chi usa il servizio soprattutto nel periodo natalizio e non vuole pensarci ogni mese.
- **Acquisto una tantum "illimitato"**: 9,99€ una volta sola, senza rinnovo — più semplice da gestire (niente cancellazioni, niente gestione abbonamenti ricorrenti) e più adatto a un pubblico che potrebbe diffidare degli abbonamenti automatici.

Per un prodotto nuovo, l'opzione una tantum o l'abbonamento mensile basso sono probabilmente i più facili da testare in fase iniziale: bassa frizione all'acquisto e feedback rapido su quanti utenti gratuiti convertono. Il prezzo esatto andrebbe comunque validato osservando quanti utenti superano il limite gratuito giornaliero.

**Integrazione pagamenti**: dato che hai già un account PayPal Business attivo, le opzioni più dirette sono:
- **PayPal Subscriptions API**: per gestire l'abbonamento ricorrente (mensile/annuale) direttamente, con rinnovo automatico gestito da PayPal.
- **PayPal Checkout (pagamento singolo)**: per l'opzione "una tantum", più semplice da integrare (un solo pulsante di pagamento, nessuna gestione di cicli di rinnovo).
- In entrambi i casi serve comunque il login utente per collegare il pagamento effettuato all'account e sbloccare il limite giornaliero — coerente con quanto già indicato sopra.

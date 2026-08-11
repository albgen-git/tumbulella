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
   - **Fase 2 (narrazione)**: dopo una decina di secondi, viene letta la porzione di racconto generata dall'LLM che lega il numero appena uscito al filo narrativo della partita in corso (es. "Ma cosa fa questa mano? Di chi è?"... e al numero successivo, "Questa è la mano di Maradona allora!"). Questo tempo di attesa dà margine sufficiente al motore LLM per comporre la frase con calma, senza fretta.
   
   Questo flusso a due fasi rende la latenza della generazione testo/audio molto meno critica rispetto a una risposta istantanea: i circa 10 secondi di pausa naturale tra numero e narrazione sono già un margine di tempo utile per la chiamata LLM + TTS.
4. **Selettore di intensità**: slider o toggle con almeno 2 livelli (soft / spinto) che modifica il prompt e quindi il tono del testo generato, valido per tutta la partita in corso.
5. **"Inizia una nuova storia"**: pulsante che azzera il contesto narrativo accumulato (numeri estratti + testo generato finora) e permette di iniziare una nuova partita da zero, con tabellone pulito.
6. **Condivisione**: a fine partita (o in qualunque momento), pulsante per copiare o condividere il testo accumulato fino a quel momento.
7. **Selettore di lingua**: menu con 4 opzioni — Napoletano, Italiano, Inglese, Spagnolo — che determina la lingua sia del testo generato sia della voce usata per leggerlo. Il Napoletano resta la lingua "identitaria" del progetto; le altre servono ad allargare la fruibilità (es. turisti, pubblico internazionale, o chi capisce la storia ma non il dialetto).
8. **Pulsante "Cosa è"**: apre un testo informativo statico (non generato dall'LLM) che spiega: che Tumbulella è un supporto per rendere la tombola tra amici più divertente, non un gioco completo a sé; cos'è la tombola e come si gioca; la storia della Smorfia/Cabala a Napoli. Il testo di riferimento è già pronto in `docs/cosa-e-tumbulella.docx`.
9. **Pulsante "!" (esortazione)**: pensato per i momenti di silenzio tra un numero e l'altro. Alla pressione, recita ad alta voce una frase di esortazione scelta a caso (es. "Datevi una mossa", "Forza ragazzi"), nella lingua attiva del menu. Anche queste frasi sono statiche (nessuna chiamata LLM, mai inviate al motore di narrazione) e **non compaiono nella finestra di testo della storia** — sono un elemento separato, puramente di intrattenimento/animazione, non parte del racconto. I file di riferimento sono in `docs/reference/frasi-pazze-{lingua}.txt` (uno per ciascuna delle 4 lingue del menu).

## Fuori scope per l'MVP (esplicitamente escluso)
- Account utente, login, storico personale delle storie generate.
- Tabellone di gioco multiplayer o estrazione automatica dei numeri in tempo reale (tipo bingo live).
- App mobile nativa (solo sito web responsive).
- Abbonamenti o pagamenti utente (la monetizzazione MVP è solo pubblicitaria, vedi sezione dedicata).
- Un pacchetto "white label"/licenza dedicata per case di riposo o villaggi turistici (per ora usano lo stesso sito pubblico; un'eventuale versione dedicata è una fase successiva).
- Traduzione automatica italiano↔napoletano per input arbitrario dell'utente (solo output generato, non un traduttore generico).
- Moderazione avanzata dei contenuti oltre al semplice selettore soft/spinto.

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
  - **MVP (gratuito)**: sempre Web Speech API del browser (gratuita, nessuna chiamata server), per tutte e 4 le lingue. Costo per partita da 60 turni: ~0,10$ (solo LLM narrazione). Testato: mantenere Web Speech qui è la scelta giusta — passare a un motore a pagamento anche nel gratuito triplicherebbe il costo per partita (~0,31$), peggiorando la copertura dei ricavi pubblicitari (dal 39-233% al 13-77% del costo).
  - **Versione premium (napoletano)**: **Gemini 3.1 Flash TTS Preview** (`gemini-3.1-flash-tts-preview`), non più ElevenLabs. Testato con la voce "Puck": qualità convincente sul napoletano anche senza clonazione vocale. Costo per il pacchetto da 30 minuti: ~1,01€ (IVA inclusa), contro i ~3,37€ di ElevenLabs Multilingual v2/v3 — margine per cliente di circa 8,99€ (90%) su una vendita a 10€, contro il 66% con ElevenLabs. Elimina anche la necessità di Instant/Professional Voice Cloning, semplificando l'implementazione.
  - Italiano, Inglese e Spagnolo restano su Web Speech anche per gli utenti premium — nessun problema di autenticità dialettale da risolvere per queste lingue, quindi nessun bisogno di un motore a pagamento lì.
  - Il routing per lingua nel backend resta: se lingua = napoletano E utente premium → chiamata a Gemini TTS; altrimenti → sintesi lato client con Web Speech.
  - Generazione audio per ogni numero premuto, in due momenti (fase 1: numero + nome Smorfia — pre-generabile una tantum per lingua, costo quasi zero; fase 2: narrazione, generata al volo).
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
- **Costo audio**: nella versione finale, il TTS a pagamento (Gemini 3.1 Flash TTS) riguarda solo il Napoletano premium — le altre 3 lingue restano gratuite via Web Speech, e il napoletano nell'MVP gratuito resta anch'esso su Web Speech. Anche per il Napoletano premium, la fase 1 (numero + nome Smorfia) può essere pre-generata una tantum (90 combinazioni fisse per tavola Smorfia) e servita come file statico, azzerando il costo ricorrente per quella parte; resta a consumo solo la fase 2 (narrazione), già interamente coperta dal margine del pacchetto minuti premium.
- **Strategia concreta per il TTS in napoletano — decisione presa**: testato `gemini-3.1-flash-tts-preview` con la voce "Puck" in Google AI Studio — risultato convincente sul napoletano anche senza clonazione vocale, a un costo nettamente inferiore a ElevenLabs. Nessun bisogno di Instant/Professional Voice Cloning, né di registrare parlanti nativi: si usa la voce predefinita "Puck" direttamente. Se in futuro emergessero parole della Smorfia lette male, si può comunque provare a riformulare l'ortografia nel testo inviato al modello (stesso principio del dizionario di pronuncia, gestito manualmente lato prompt invece che con una funzione dedicata, che questo modello non offre).
- **Attenzione — modello ancora in stato "preview"**: `gemini-3.1-flash-tts-preview` non è una versione stabile (lanciato aprile 2026). Google potrebbe cambiare prezzi, limiti di utilizzo, o ritirare il modello prima del rilascio definitivo di Tumbulella. Da verificare lo stato del modello più avanti nello sviluppo, prima del lancio della versione premium — se necessario, il piano B resta ElevenLabs (già interamente documentato sopra come alternativa con margini comunque sani, 66%).
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

**Decisione presa: modello a pacchetto di minuti prepagati** (30 minuti a 10€, ricaricabile quando esauriti) come primo modello da implementare — non abbonamento illimitato, almeno inizialmente.

**Aggiornamento: valutato anche un modello alternativo — una tantum annuale illimitato.** Con partite illimitate, il rischio si sposta dal costo per singola vendita al comportamento dei pochi utenti molto attivi ("outlier"), dato che non c'è più un tetto di minuti a proteggere il margine. Costo reale per partita da 60 turni (napoletano premium, Gemini TTS): ~0,35€. Punti di pareggio per prezzo:

| Prezzo annuale | Si va in perdita oltre... |
|---|---|
| 14,99€ | 28 partite/anno |
| 19,99€ | 57 partite/anno |
| 24,99€ | 71 partite/anno |

Dato che Tumbulella è legato principalmente a occasioni festive, la maggior parte degli utenti probabilmente resta ben sotto questi tetti (10-30 partite/anno stimate per un uso familiare tipico). **Prezzo consigliato: 19,99€/anno**, compromesso tra accessibilità e margine di sicurezza contro gli utenti più attivi.

**Precauzione tecnica consigliata anche con "illimitato"**: implementare comunque un contatore interno delle partite/minuti per utente (stessa tabella "stato premium" già prevista), non per bloccare l'utente, ma per **monitorare se il modello di pricing regge nella pratica** una volta che hai dati reali di utilizzo — e per poter eventualmente introdurre una fair-use policy silenziosa (es. un tetto molto alto, comunicato solo se effettivamente raggiunto) se emergono casi limite che minano il margine, senza dover rivedere il prezzo pubblicizzato come "illimitato".

**Logica pratica di funzionamento, ad ogni richiesta di audio premium (napoletano, voce "Puck" via Gemini 3.1 Flash TTS):**
1. Il backend controlla i minuti residui dell'utente loggato (tabella "stato premium").
2. Se i minuti residui sono sufficienti per la richiesta corrente, procede con la chiamata a Gemini TTS, genera l'audio, e **decrementa i minuti residui** in base alla durata effettiva dell'audio generato (da verificare se l'API restituisce la durata direttamente, oppure si stima dal numero di caratteri/token inviati).
3. Se i minuti residui non bastano, il backend blocca la generazione premium e propone l'acquisto di un nuovo pacchetto (reindirizzamento al pagamento PayPal).
4. Le lingue diverse dal napoletano restano gratuite via Web Speech anche per gli utenti premium — il pacchetto minuti riguarda solo l'audio Gemini TTS in napoletano, coerente con la strategia TTS già definita (Gemini TTS solo per napoletano premium, Web Speech per le altre 3 lingue e per il napoletano gratuito).

### Schema dati minimo per login e premium (quando si passa da MVP a freemium)
A differenza dell'MVP puro (nessun database, dati Smorfia statici), il login e il tracciamento dei minuti premium richiedono persistenza. Non serve niente di complesso: un database relazionale semplice (SQLite per iniziare, o Postgres gestito da Railway/Render — entrambi economici) con poche tabelle:

- **utenti**: id, email (o identificativo OAuth se si usa login social), password con hash, data di creazione.
- **stato premium**: id, id_utente, minuti totali acquistati, minuti già consumati (o minuti residui, aggiornato ad ogni generazione audio premium), data ultimo acquisto.
- **pagamenti**: id, id_utente, importo, data, id transazione PayPal — utile per riconciliare acquisti e per assistenza clienti in caso di problemi.

**Nota sul modello di prezzo**: questo schema è disegnato per il modello "pacchetto di minuti prepagati, ricaricabile" (30 minuti a 10€, poi se finiscono se ne acquistano altri) — la decisione presa come primo modello da implementare (vedi sopra). Se in futuro si aggiungerà anche un abbonamento illimitato, servirà un campo aggiuntivo (data di scadenza) accanto al contatore minuti, ma non è necessario per la prima versione.

### Ipotesi di prezzo per la versione premium
Non ho dati di mercato specifici su questo prodotto (è una nicchia nuova), quindi queste sono ipotesi di partenza da validare, non numeri definitivi:
- **Abbonamento mensile basso**: 1,99-2,99€/mese. Coerente con app di intrattenimento/nicchia leggere; abbassa la barriera all'acquisto d'impulso.
- **Abbonamento annuale con sconto**: es. 14,99-19,99€/anno (equivalente a ~1,25-1,65€/mese) — utile per chi usa il servizio soprattutto nel periodo natalizio e non vuole pensarci ogni mese.
- **Acquisto una tantum "illimitato"**: 9,99€ una volta sola, senza rinnovo — più semplice da gestire (niente cancellazioni, niente gestione abbonamenti ricorrenti) e più adatto a un pubblico che potrebbe diffidare degli abbonamenti automatici.

Per un prodotto nuovo, l'opzione una tantum o l'abbonamento mensile basso sono probabilmente i più facili da testare in fase iniziale: bassa frizione all'acquisto e feedback rapido su quanti utenti gratuiti convertono. Il prezzo esatto andrebbe comunque validato osservando quanti utenti superano il limite gratuito giornaliero.

**Ipotesi concreta testata: pacchetto "30 minuti di audio napoletano premium" a 10€, con Gemini 3.1 Flash TTS (voce "Puck").** Il modello di fatturazione qui è più semplice di quanto lo sarebbe stato con ElevenLabs: l'API Gemini si paga a consumo tramite un account di fatturazione Google Cloud collegato alla chiave API — nessun saldo prepagato da ricaricare manualmente, nessun rischio di abbonamenti ricorrenti dimenticati. Il costo viene addebitato automaticamente in base all'uso reale, con fattura periodica — il backend deve solo tracciare i minuti consumati per utente (per applicare il limite dei 30 minuti del pacchetto), non gestire un saldo verso il provider.

Sui margini reali: il costo per 30 minuti di audio con Gemini 3.1 Flash TTS (~0,03$/minuto) si aggira su **1,01€ IVA inclusa**, lasciando un margine per cliente di circa **8,99€ (~90%)** su una vendita a 10€ — nettamente meglio del 66% stimato con ElevenLabs Multilingual v2/v3, e senza bisogno di gestire crediti prepagati.

**Integrazione pagamenti**: dato che hai già un account PayPal Business attivo, le opzioni più dirette sono:
- **PayPal Subscriptions API**: per gestire l'abbonamento ricorrente (mensile/annuale) direttamente, con rinnovo automatico gestito da PayPal.
- **PayPal Checkout (pagamento singolo)**: per l'opzione "una tantum" o per il pacchetto minuti prepagati, più semplice da integrare (un solo pulsante di pagamento, nessuna gestione di cicli di rinnovo) — probabilmente l'opzione più adatta al modello "pacchetto di minuti" scelto come primo passo.
- In entrambi i casi serve comunque il login utente per collegare il pagamento effettuato all'account e sbloccare/ricaricare i minuti premium — coerente con quanto già indicato sopra.

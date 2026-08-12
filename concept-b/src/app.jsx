const { useState, useRef, useEffect, useCallback } = React;

// ---------- Icone ----------
// Icone in file JPG (concept-b/img/) invece che SVG inline nel codice, così
// si possono sostituire semplicemente cambiando il file, senza toccare il
// codice. Generate una tantum da backend/generate_icons.py a partire dal
// design originale; ridisegnabili a mano in qualunque editor di immagini.
function VesuvioIcon({ className }) {
  return <img src="img/vesuvio.jpg" alt="Vesuvio" className={className} />;
}
// ---------- Sticker decorativi flat/playful (finestra racconto vuota) ----------
function CornettoSticker({ className }) {
  return (
    <img src="img/cornetto.jpg" alt="Cornetto portafortuna" className={(className || "") + " aspect-square object-cover rounded-full"} />
  );
}
function PulcinellaSticker({ className }) {
  return (
    <img src="img/pulcinella.jpg" alt="Pulcinella" className={(className || "") + " aspect-square object-cover rounded-full"} />
  );
}
function CiuccioSticker({ className }) {
  return (
    <img src="img/asinello.jpg" alt="'O ciucciariello" className={(className || "") + " aspect-square object-cover rounded-full"} />
  );
}

// ---------- UI ----------
function LanguageSelector({ language, setLanguage, disabled }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      disabled={disabled}
      title={disabled ? "Bloccato per tutta la partita — premi \"Nuova storia\" per cambiarlo" : "Lingua del racconto"}
      className={"lang-select-round w-11 h-11 rounded-full bg-white shadow-md text-xs font-bold text-napoli-700 shrink-0 text-center " + (disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-105 active:scale-95 transition-transform")}
      aria-label="Lingua del racconto"
    >
      {window.LANGUAGES.map((l) => (
        <option key={l.code} value={l.code}>{l.short}</option>
      ))}
    </select>
  );
}

// Finestra "Cosa è": legge il contenuto da window.ABOUT_CONTENT (src/data.js),
// che a sua volta è estratto da cosa-e-tumbulella.docx — cambiando il testo lì
// cambia anche quello mostrato qui, senza toccare questo componente.
function AboutModal({ onClose, language }) {
  const c = window.ABOUT_CONTENT[language] || window.ABOUT_CONTENT.nap;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-napoli-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass rounded-xl2 w-full max-w-lg max-h-[85vh] overflow-y-auto p-5 sm:p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 mb-1">
          <h2 className="font-display font-extrabold text-xl text-napoli-800">{c.title}</h2>
          <button
            onClick={onClose}
            aria-label="Chiudi"
            className="w-8 h-8 rounded-full bg-napoli-50 hover:bg-napoli-100 flex items-center justify-center text-napoli-700 shrink-0 transition-colors"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-napoli-700/70 italic mb-1">{c.tagline}</p>
        {c.downloadLink && (
          <p className="text-sm mb-4">
            <a
              href={c.downloadLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-napoli-600 underline hover:text-napoli-800 transition-colors"
            >
              {c.downloadLink.text}
            </a>
          </p>
        )}
        {c.donation && (
          <div className="rounded-lg bg-napoli-50 border border-napoli-900/10 p-3 mb-4 text-sm text-napoli-900/80 leading-relaxed">
            <p className="mb-1.5">{c.donation.text}</p>
            <a
              href={c.donation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-napoli-600 underline hover:text-napoli-800 transition-colors"
            >
              {c.donation.linkText}
            </a>
          </div>
        )}
        {c.sections.map((s, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <h3 className="font-display font-bold text-base text-napoli-800 mb-1.5">{s.heading}</h3>
            {s.blocks.map((b, j) => {
              if (b.type === "list") {
                return (
                  <ul key={j} className="list-disc pl-5 space-y-1 text-sm text-napoli-900/80 mb-2">
                    {b.items.map((it, k) => (
                      <li key={k}>{it}</li>
                    ))}
                  </ul>
                );
              }
              if (b.type === "h4") {
                return (
                  <p key={j} className="font-bold text-sm text-napoli-800 mt-2 mb-1">
                    {b.text}
                  </p>
                );
              }
              return (
                <p key={j} className="text-sm text-napoli-900/80 leading-relaxed mb-2">
                  {b.text}
                </p>
              );
            })}
          </div>
        ))}
        {c.credit && (
          <p className="text-xs text-napoli-700/60 italic pt-3 mt-1 border-t border-napoli-900/10">
            {c.credit.text}{" "}
            <a
              href={`mailto:${c.credit.email}`}
              className="font-bold text-napoli-600 underline hover:text-napoli-800 transition-colors not-italic"
            >
              {c.credit.email}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

// Stato del "banditore": chiamata (fase 1) -> pausa (si cerca il numero) -> narrazione (fase 2) -> idle.
function NarratorStatus({ phase, currentCall, language }) {
  const labels = window.STATUS_LABELS[language] || window.STATUS_LABELS.nap;
  const active = phase === "calling" || phase === "narrando";
  let text = labels.idle;
  if (phase === "calling") text = "📢 " + currentCall;
  else if (phase === "pausa") text = labels.pausa;
  else if (phase === "narrando") text = labels.narrando;

  return (
    <div className={"flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-colors max-w-full " + (active ? "bg-mint-300 text-napoli-900" : phase === "pausa" ? "bg-lemon-300 text-napoli-900" : "bg-gray-100 text-gray-400")}>
      <div className="flex items-end gap-0.5 h-3.5 w-5 shrink-0">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={"w-1 rounded-full bg-napoli-700 " + (active ? "wave-dot" : phase === "pausa" ? "pulse-soft" : "")}
            style={{ height: "100%", animationDelay: i * 0.12 + "s", opacity: active || phase === "pausa" ? 1 : 0.3 }}
          />
        ))}
      </div>
      <span className="truncate">{text}</span>
    </div>
  );
}

const CHIP_COLORS = ["bg-coral-500", "bg-lemon-500", "bg-mint-400", "bg-napoli-500"];

function NumberCell({ n, extracted, order, onClick }) {
  const color = CHIP_COLORS[n % CHIP_COLORS.length];
  return (
    <button
      onClick={() => onClick(n)}
      className={
        "relative aspect-square rounded-xl2 flex items-center justify-center font-display font-bold text-sm sm:text-base transition-all " +
        (extracted
          ? color + " text-white shadow-lg cell-bounce"
          : "bg-white text-napoli-800 border-2 border-napoli-100 hover:border-napoli-400 hover:-translate-y-0.5")
      }
    >
      {n}
      {extracted && (
        <span className="absolute -top-1 -right-1 bg-white text-napoli-800 text-[9px] font-extrabold rounded-full w-4 h-4 flex items-center justify-center shadow">
          {order}
        </span>
      )}
    </button>
  );
}

function Board({ extractedSet, extractedOrder, onCellClick }) {
  const numbers = Array.from({ length: 90 }, (_, i) => i + 1);
  return (
    <div className="glass rounded-xl2 p-4 sm:p-5 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-display font-bold text-lg text-napoli-800">'O Tabbellone</h2>
        <span className="text-xs font-bold text-white bg-napoli-500 rounded-full px-2.5 py-1">{extractedOrder.length}/90</span>
      </div>
      <div className="grid grid-cols-9 gap-1.5 sm:gap-2">
        {numbers.map((n) => (
          <NumberCell
            key={n}
            n={n}
            extracted={extractedSet.has(n)}
            order={extractedOrder.indexOf(n) + 1}
            onClick={onCellClick}
          />
        ))}
      </div>
    </div>
  );
}

// Renderizza un testo con marcatori **grassetto** (usati dal backend per le
// parole Smorfia citate) come <strong>, senza dover parsare markdown generico.
function BoldText({ text }) {
  return window.splitBoldSegments(text).map((seg, i) =>
    seg.bold ? <strong key={i}>{seg.text}</strong> : <span key={i}>{seg.text}</span>
  );
}

function StoryPanel({ fragments, phase, currentCall, language }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [fragments.length, fragments.map((f) => f.text).join("|")]);

  const emptyText = window.EMPTY_STATE_TEXT[language] || window.EMPTY_STATE_TEXT.nap;

  return (
    <div className="glass rounded-xl2 p-4 sm:p-5 shadow-xl flex flex-col h-full">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h2 className="font-display font-bold text-lg text-napoli-800">'O Racconto</h2>
        <NarratorStatus phase={phase} currentCall={currentCall} language={language} />
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto pr-1 space-y-2.5 min-h-[220px] max-h-[420px]">
        {fragments.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-8">
            <div className="flex gap-2 float">
              <CiuccioSticker className="w-16" />
              <PulcinellaSticker className="w-14" />
              <CornettoSticker className="w-16" />
            </div>
            <p className="text-sm text-napoli-800/60 max-w-[220px] font-medium">{emptyText}</p>
          </div>
        ) : (
          fragments.map((f, i) =>
            f.text ? (
              <div key={i} className="pop-in bg-napoli-50 rounded-2xl rounded-tl-sm px-4 py-2.5 text-[14px] leading-relaxed text-napoli-900">
                <span className="font-display font-extrabold text-coral-500 mr-1">{f.n}</span>
                <BoldText text={f.text} />
              </div>
            ) : (
              <div key={i} className="pop-in bg-napoli-50/60 rounded-2xl rounded-tl-sm px-4 py-2.5 text-[14px] leading-relaxed text-napoli-900/40 italic">
                <span className="font-display font-extrabold text-coral-500/60 mr-1 not-italic">{f.n}</span>
                <span className="pulse-soft">…</span>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

// Placeholder banner pubblicitario — spazio riservato per Google AdSense,
// in attesa che l'account venga approvato. Nessuno script esterno, nessun
// tracciamento: solo un'immagine campione (SVG inline). Da sostituire con
// lo snippet reale AdSense quando disponibile — vedi commento sotto.
function AdBanner() {
  return (
    <div className="lg:col-span-5 rounded-xl2 border-2 border-dashed border-white/40 bg-white/10 backdrop-blur flex items-center justify-center gap-3 py-3 px-4">
      {/* Immagine campione: da rimuovere insieme a questo intero componente quando si integra il vero snippet AdSense. */}
      <svg viewBox="0 0 120 40" className="w-16 sm:w-20 h-auto shrink-0" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="118" height="38" rx="4" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
        <circle cx="20" cy="20" r="7" fill="#ffffff" opacity="0.55" />
        <path d="M34 28 L48 15 L60 24 L76 11 L100 28 Z" fill="#ffffff" opacity="0.4" />
      </svg>
      <span className="text-white/80 text-xs sm:text-sm font-bold tracking-wide text-center">
        Spazio pubblicitario — banner di esempio
      </span>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("it");
  const [extractedOrder, setExtractedOrder] = useState([]);
  const [fragments, setFragments] = useState([]); // { n, text: string|null } — null finché la fase 2 non è pronta
  const [phase, setPhase] = useState("idle"); // idle | calling | pausa | narrando
  const [currentCall, setCurrentCall] = useState(null);
  const [muted, setMuted] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const orderRef = useRef([]); // fonte di verità sincrona per l'ordine estratti
  const lastSentencesRef = useRef([]); // ultime due frasi generate dal backend (FIFO) — unico contesto mandato indietro, costo pressoché costante per tutta la partita
  const queueRef = useRef([]); // coda dei numeri cliccati in attesa di "chiamata + narrazione"
  const processingRef = useRef(false);
  const sessionRef = useRef(0); // incrementato a ogni "nuova storia": invalida le sequenze in corso
  const languageRef = useRef(language);
  const mutedRef = useRef(muted);

  useEffect(() => { languageRef.current = language; }, [language]);
  useEffect(() => { mutedRef.current = muted; }, [muted]);

  const extractedSet = new Set(extractedOrder);

  function sleep(ms, session) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(sessionRef.current === session), ms);
    });
  }

  // Legge `text` ad alta voce (Web Speech API); se muto o non disponibile,
  // ricade su una pausa fissa della stessa durata approssimativa di sempre.
  async function speakOrWait(text, lang, fallbackMs, session) {
    const spoke = await window.speak(text, lang, mutedRef.current);
    if (sessionRef.current !== session) return false;
    if (!spoke) return sleep(fallbackMs, session);
    return true;
  }

  // Riproduce la sequenza a due fasi di un numero: chiamata -> pausa -> narrazione.
  // Ogni `await` verifica che la sessione sia ancora valida (nessun reset nel frattempo).
  async function playSequence(item, session) {
    const lang = languageRef.current;
    const previousNumbers = orderRef.current.slice(0, item.clickIndex);
    const isFirstTurn = previousNumbers.length === 0;

    // Al primo numero della partita, PRIMA di ogni altra cosa: si avvia
    // subito la fetch della narrazione (il backend su Render potrebbe
    // essere in sleep e metterci fino a un minuto a risvegliarsi — più
    // presto parte, più tempo ha) e si legge il filler in locale (Web
    // Speech, mai Gemini). Ordine voluto: filler -> chiamata -> narrazione,
    // non chiamata -> filler, che suonava come una sequenza scucita.
    let narrationPromise = null;
    if (isFirstTurn) {
      narrationPromise = window.fetchNarration(item.n, lastSentencesRef.current, previousNumbers, lang);
      narrationPromise.catch(() => {}); // evita un warning di "unhandled rejection" nel frattempo: l'errore vero resta gestito sotto, nel try/catch
      if (!mutedRef.current) {
        await window.speakWebSpeech(window.COLD_START_FILLER[lang] || window.COLD_START_FILLER.nap, lang, false);
        if (sessionRef.current !== session) return;
      }
    }

    setPhase("calling");
    const callText = window.buildCall(item.n, lang);
    setCurrentCall(callText);
    if (!(await speakOrWait(callText, lang, window.TIMING.CALL_MS, session))) return;

    setPhase("pausa");
    if (!(await sleep(window.TIMING.PAUSE_MS, session))) return;

    setPhase("narrando");
    const prefix = window.buildPrefix(item.n, lang);
    if (!narrationPromise) {
      narrationPromise = window.fetchNarration(item.n, lastSentencesRef.current, previousNumbers, lang);
    }
    let narration;
    try {
      narration = await narrationPromise;
    } catch (err) {
      if (sessionRef.current !== session) return;
      const errText =
        err && err.kind === "backend_error"
          ? (window.LLM_BACKEND_ERROR_PREFIX[lang] || window.LLM_BACKEND_ERROR_PREFIX.nap) + err.message + ")"
          : window.LLM_UNREACHABLE_TEXT[lang] || window.LLM_UNREACHABLE_TEXT.nap;
      setFragments((prev) => prev.map((f) => (f.n === item.n ? { ...f, text: prefix + errText } : f)));
      setPhase("idle");
      setCurrentCall(null);
      return;
    }
    if (sessionRef.current !== session) return;
    // Al turno 1 la frase statica (frasi-iniziali.txt) è generica e non
    // menziona la parola vera — senza questo arricchimento, sparirebbe dal
    // contesto e non sarebbe mai più recuperabile dal modello. Si arricchisce
    // solo ciò che va in memoria per i turni successivi, MAI ciò che si vede
    // o si sente ora (eviterebbe di ripetere il numero appena annunciato).
    const memorized = isFirstTurn ? window.meaningOnly(item.n, lang) + ". " + narration : narration;
    // FIFO di lunghezza 2: tiene solo le ultime due frasi generate.
    lastSentencesRef.current = [...lastSentencesRef.current, memorized].slice(-2);
    const text = prefix + narration;
    setFragments((prev) => prev.map((f) => (f.n === item.n ? { ...f, text } : f)));
    // Si legge solo la narrazione (non "numero, significato", già detto in fase 1),
    // ripulita dai marcatori **grassetto** che qui servono solo a schermo, non al TTS.
    const spokenText = narration.replace(/\*\*(.+?)\*\*/g, "$1");
    if (!(await speakOrWait(spokenText, lang, window.TIMING.NARRATION_MS, session))) return;

    setPhase("idle");
    setCurrentCall(null);
  }

  // Coda sequenziale: se si cliccano più numeri di fila, le chiamate si accodano
  // invece di accavallarsi (come farebbe un solo banditore dal vivo).
  async function processQueue(session) {
    if (processingRef.current) return;
    processingRef.current = true;
    while (queueRef.current.length > 0 && sessionRef.current === session) {
      const item = queueRef.current.shift();
      await playSequence(item, session);
    }
    processingRef.current = false;
  }

  const handleCellClick = useCallback((n) => {
    if (orderRef.current.includes(n)) return;
    const clickIndex = orderRef.current.length;
    const prevNum = clickIndex > 0 ? orderRef.current[clickIndex - 1] : null;
    orderRef.current = [...orderRef.current, n];
    setExtractedOrder(orderRef.current);
    setFragments((prev) => [...prev, { n, text: null }]);
    queueRef.current.push({ n, clickIndex, prevNum });
    processQueue(sessionRef.current);
  }, []);

  const handleNewStory = () => {
    sessionRef.current += 1;
    window.stopSpeaking();
    orderRef.current = [];
    lastSentencesRef.current = [];
    queueRef.current = [];
    processingRef.current = false;
    setExtractedOrder([]);
    setFragments([]);
    setPhase("idle");
    setCurrentCall(null);
  };

  // Pulsante "!" — esortazione buffa per i momenti morti tra un numero e
  // l'altro. Frase statica (mai LLM, mai narrazione), solo letta ad alta
  // voce: non tocca fragments/story, non entra in coda con chiamata/narrazione.
  // Chiama window.speak DIRETTAMENTE, fuori dalla coda di playSequence: se
  // premuto mentre il banditore sta ancora parlando, il cancel() interno a
  // speakWebSpeech tagliava a metà l'audio in corso (e veniva comunque
  // trattato come "letto con successo") — da qui il sintomo "vedo narrando
  // ma non sento nulla". Va quindi permesso solo quando non c'è nulla in
  // corso, coerente con lo scopo stesso del pulsante ("momenti morti").
  const handleExclamation = () => {
    if (muted || phase !== "idle") return;
    window.speak(window.pickRandomExclamation(language), language, false);
  };

  // Pulsante "dado" — estrae un numero a caso tra quelli non ancora usciti
  // e lo gioca esattamente come un click manuale sul tabellone.
  const handleRandomNumber = () => {
    const available = [];
    for (let n = 1; n <= 90; n++) {
      if (!orderRef.current.includes(n)) available.push(n);
    }
    if (available.length === 0) return;
    const n = available[Math.floor(Math.random() * available.length)];
    handleCellClick(n);
  };

  return (
    <div className="min-h-screen pb-8">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/10 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md float p-1.5 shrink-0">
              <VesuvioIcon className="w-full" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-2xl text-white drop-shadow leading-none">Tumbulella</h1>
              <p className="text-[11px] text-white/70 tracking-wide">'a smorfia ca cunta 'e storie</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowAbout(true)}
              title="Cosa è Tumbulella"
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-lg hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              ❓
            </button>
            <LanguageSelector language={language} setLanguage={setLanguage} disabled={extractedOrder.length > 0} />
            <button
              onClick={() => {
                const next = !muted;
                setMuted(next);
                if (next) window.stopSpeaking();
              }}
              title={muted ? "Riattiva la voce" : "Disattiva la voce"}
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-lg hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              {muted ? "🔇" : "🔊"}
            </button>
            <button
              onClick={handleExclamation}
              disabled={muted || phase !== "idle"}
              title={
                muted
                  ? "Riattiva la voce per usare l'esortazione"
                  : phase !== "idle"
                  ? "Aspetta che il banditore finisca..."
                  : "Un po' di sveglia per tutti!"
              }
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-lg hover:scale-105 active:scale-95 transition-transform shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              !
            </button>
            <button
              onClick={handleRandomNumber}
              title="Numero a caso"
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-lg hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              🎲
            </button>
            <button
              onClick={handleNewStory}
              title="Nuova storia"
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-lg hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              🔄
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3">
            <Board extractedSet={extractedSet} extractedOrder={extractedOrder} onCellClick={handleCellClick} />
          </div>
          <AdBanner />
          <div className="lg:col-span-2">
            <StoryPanel
              fragments={fragments}
              phase={phase}
              currentCall={currentCall}
              language={language}
            />
          </div>
        </div>
      </main>

      {showAbout && <AboutModal onClose={() => setShowAbout(false)} language={language} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

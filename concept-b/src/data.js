// Dati finti (mock) per il prototipo Tumbulella — nessuna chiamata API reale.
// Tabella Smorfia presa da smorfia.json (fonte autorevole, verificata contro
// la_smorfia_dei_quartieri.pdf). NON modificare i numeri qui sotto senza
// ricontrollare smorfia.json — un precedente tentativo di ricostruzione a
// mano dall'OCR del PDF aveva sbagliato la numerazione tra 7 e 29.

window.SMORFIA = [
  { n: 1, meaning: "L'Italia", gloss: "l'Italia" },
  { n: 2, meaning: "'A peccerella", gloss: "la piccolina" },
  { n: 3, meaning: "'O stuorto dint' 'a villa", gloss: "lo storto nella villa" },
  { n: 4, meaning: "'O puorco", gloss: "il porco" },
  { n: 5, meaning: "'A mana", gloss: "la mano" },
  { n: 6, meaning: "Chella ca guarda sempe 'nterra", gloss: "quella che guarda sempre per terra" },
  { n: 7, meaning: "'E sette peccate murtale", gloss: "i sette peccati mortali" },
  { n: 8, meaning: "Maria, 'a Madonna", gloss: "Maria, la Madonna" },
  { n: 9, meaning: "'A figliata", gloss: "la figliata" },
  { n: 10, meaning: "'E fasule", gloss: "i fagioli" },
  { n: 11, meaning: "'E surece", gloss: "i topi" },
  { n: 12, meaning: "'O surdate", gloss: "il soldato" },
  { n: 13, meaning: "Sant'Antonio, Totonno", gloss: "Sant'Antonio, Totonno" },
  { n: 14, meaning: "'O 'mbriaco", gloss: "l'ubriaco" },
  { n: 15, meaning: "'O Rre", gloss: "il Re" },
  { n: 16, meaning: "'O culo", gloss: "il culo" },
  { n: 17, meaning: "'A disgrazzia", gloss: "la disgrazia" },
  { n: 18, meaning: "'O sanghe", gloss: "il sangue" },
  { n: 19, meaning: "San Giuseppe, Peppe", gloss: "San Giuseppe, Peppe" },
  { n: 20, meaning: "'A festa", gloss: "la festa" },
  { n: 21, meaning: "'A femmena annura", gloss: "la donna nuda" },
  { n: 22, meaning: "'O pazzo", gloss: "il pazzo" },
  { n: 23, meaning: "'O scemo", gloss: "lo scemo" },
  { n: 24, meaning: "'E guardie", gloss: "le guardie" },
  { n: 25, meaning: "Natale", gloss: "Natale" },
  { n: 26, meaning: "Nannenella", gloss: "Nannenella" },
  { n: 27, meaning: "È muscio", gloss: "è moscio" },
  { n: 28, meaning: "'E zizze, zuche e dduorme", gloss: "i seni, succhia e dormi" },
  { n: 29, meaning: "'O pate d' 'e criature, chille ca cumbine tutte 'e guaie", gloss: "il padre delle creature, quello che combina tutti i guai" },
  { n: 30, meaning: "'E palle d' 'o tenente", gloss: "le palle del tenente" },
  { n: 31, meaning: "'O padrone 'e casa", gloss: "il padrone di casa" },
  { n: 32, meaning: "'O capitone", gloss: "il capitone" },
  { n: 33, meaning: "L'anne 'e Cristo", gloss: "gli anni di Cristo" },
  { n: 34, meaning: "'A capocchia", gloss: "la testa" },
  { n: 35, meaning: "L'auciello", gloss: "gli uccelli" },
  { n: 36, meaning: "'E caramelle, 'e castagne", gloss: "le caramelle, le castagne" },
  { n: 37, meaning: "'O moneco", gloss: "il monaco" },
  { n: 38, meaning: "'E mazzate", gloss: "le botte" },
  { n: 39, meaning: "L'acqua, 'nganne", gloss: "l'acqua, in gola" },
  { n: 40, meaning: "'A neva", gloss: "la neve" },
  { n: 41, meaning: "'O curtiello", gloss: "il coltello" },
  { n: 42, meaning: "'O cafè", gloss: "il caffè" },
  { n: 43, meaning: "'Onna Pereta fore 'o barcone", gloss: "donna Pereta fuori al balcone" },
  { n: 44, meaning: "'E carcere", gloss: "il carcere" },
  { n: 45, meaning: "'O vino", gloss: "il vino" },
  { n: 46, meaning: "'A pummarola", gloss: "il pomodoro" },
  { n: 47, meaning: "'O muorto", gloss: "il morto" },
  { n: 48, meaning: "'O muorto ca parla", gloss: "il morto che parla" },
  { n: 49, meaning: "'O piezzo 'e carne", gloss: "il pezzo di carne" },
  { n: 50, meaning: "'O ppane", gloss: "il pane" },
  { n: 51, meaning: "'O ciardino", gloss: "il giardino" },
  { n: 52, meaning: "Mammà", gloss: "Mamma" },
  { n: 53, meaning: "'O vecchio", gloss: "il vecchio" },
  { n: 54, meaning: "'O cappiello", gloss: "il cappello" },
  { n: 55, meaning: "'A museca", gloss: "la musica" },
  { n: 56, meaning: "'A caruta", gloss: "la caduta" },
  { n: 57, meaning: "'O scartellato", gloss: "il gobbo" },
  { n: 58, meaning: "S'è abbuccato", gloss: "si è chinato" },
  { n: 59, meaning: "'O gallinaccio", gloss: "il tacchino" },
  { n: 60, meaning: "Se lamenta", gloss: "si lamenta" },
  { n: 61, meaning: "'O cacciatore", gloss: "il cacciatore" },
  { n: 62, meaning: "'O muorto acciso", gloss: "il morto ucciso" },
  { n: 63, meaning: "'A sposa", gloss: "la sposa" },
  { n: 64, meaning: "'A sciammeria", gloss: "il giaccone" },
  { n: 65, meaning: "Chiagne", gloss: "piange" },
  { n: 66, meaning: "'E ddoie zetelle", gloss: "le due zitelle" },
  { n: 67, meaning: "'O totaro int' 'a chitarra", gloss: "il totano nella chitarra" },
  { n: 68, meaning: "'A menesta", gloss: "la minestra" },
  { n: 69, meaning: "'O sotto e 'ncoppa", gloss: "il sotto e sopra" },
  { n: 70, meaning: "'O palazzo", gloss: "il palazzo" },
  { n: 71, meaning: "L'omme 'e mmerda", gloss: "l'uomo di merda" },
  { n: 72, meaning: "'A meraviglia", gloss: "la meraviglia" },
  { n: 73, meaning: "'O spitale", gloss: "l'ospedale" },
  { n: 74, meaning: "'A 'rotta", gloss: "la grotta" },
  { n: 75, meaning: "Pullecenella", gloss: "Pulcinella" },
  { n: 76, meaning: "'A fontana", gloss: "la fontana" },
  { n: 77, meaning: "'E corne", gloss: "le corna" },
  { n: 78, meaning: "'A puttana", gloss: "la prostituta" },
  { n: 79, meaning: "'O mariuolo", gloss: "il ladro" },
  { n: 80, meaning: "'A vocca", gloss: "la bocca" },
  { n: 81, meaning: "'E sciure", gloss: "i fiori" },
  { n: 82, meaning: "'A tavula", gloss: "la tavola" },
  { n: 83, meaning: "'O pireto", gloss: "la scorreggia" },
  { n: 84, meaning: "'A chiesa", gloss: "la chiesa" },
  { n: 85, meaning: "L'aneme 'o Priatorio", gloss: "le anime del Purgatorio" },
  { n: 86, meaning: "'A puteca", gloss: "la bottega" },
  { n: 87, meaning: "'E perucchie", gloss: "i pidocchi" },
  { n: 88, meaning: "'E casecavalle", gloss: "i caciocavalli" },
  { n: 89, meaning: "'A zoccola", gloss: "la zoccola" },
  { n: 90, meaning: "'A paura", gloss: "la paura" },
];

window.SMORFIA_BY_N = window.SMORFIA.reduce(function (acc, item) {
  acc[item.n] = item;
  return acc;
}, {});

// ---------------------------------------------------------------------------
// Selettore di lingua: napoletano (identitario) + italiano/inglese/spagnolo.
// Le traduzioni sotto sono MOCK (per popolare il prototipo), non sono state
// validate da un madrelingua: nella versione reale sarebbero generate/riviste
// insieme al testo narrativo dall'LLM.
// ---------------------------------------------------------------------------
window.LANGUAGES = [
  { code: "nap", label: "Napoletano", flag: "🎭" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

// Italiano preso direttamente dal campo "italiano" di smorfia.json (fonte
// autorevole). Inglese/spagnolo restano traduzioni mock scritte a mano.
var IT_MEANING = {
  1: "l'Italia", 2: "la piccolina", 3: "lo storto nella villa", 4: "il porco", 5: "la mano",
  6: "quella che guarda sempre per terra", 7: "i sette peccati mortali", 8: "Maria, la Madonna",
  9: "la figliata", 10: "i fagioli", 11: "i topi", 12: "il soldato", 13: "Sant'Antonio, Totonno",
  14: "l'ubriaco", 15: "il Re", 16: "il culo", 17: "la disgrazia", 18: "il sangue",
  19: "San Giuseppe, Peppe", 20: "la festa", 21: "la donna nuda", 22: "il pazzo", 23: "lo scemo",
  24: "le guardie", 25: "Natale", 26: "Nannenella", 27: "è moscio", 28: "i seni, succhia e dormi",
  29: "il padre delle creature, quello che combina tutti i guai", 30: "le palle del tenente",
  31: "il padrone di casa", 32: "il capitone", 33: "gli anni di Cristo", 34: "la testa",
  35: "gli uccelli", 36: "le caramelle, le castagne", 37: "il monaco", 38: "le botte",
  39: "l'acqua, in gola", 40: "la neve", 41: "il coltello", 42: "il caffè",
  43: "donna Pereta fuori al balcone", 44: "il carcere", 45: "il vino", 46: "il pomodoro",
  47: "il morto", 48: "il morto che parla", 49: "il pezzo di carne", 50: "il pane",
  51: "il giardino", 52: "Mamma", 53: "il vecchio", 54: "il cappello", 55: "la musica",
  56: "la caduta", 57: "il gobbo", 58: "si è chinato", 59: "il tacchino", 60: "si lamenta",
  61: "il cacciatore", 62: "il morto ucciso", 63: "la sposa", 64: "il giaccone", 65: "piange",
  66: "le due zitelle", 67: "il totano nella chitarra", 68: "la minestra", 69: "il sotto e sopra",
  70: "il palazzo", 71: "l'uomo di merda", 72: "la meraviglia", 73: "l'ospedale", 74: "la grotta",
  75: "Pulcinella", 76: "la fontana", 77: "le corna", 78: "la prostituta", 79: "il ladro",
  80: "la bocca", 81: "i fiori", 82: "la tavola", 83: "la scorreggia", 84: "la chiesa",
  85: "le anime del Purgatorio", 86: "la bottega", 87: "i pidocchi", 88: "i caciocavalli",
  89: "la zoccola", 90: "la paura",
};

var EN_MEANING = {
  1: "Italy", 2: "the little girl", 3: "the crooked one in the park", 4: "the pig", 5: "the hand",
  6: "the one who always looks at the ground", 7: "the seven deadly sins", 8: "Mary, the Madonna",
  9: "the brood of children", 10: "the beans", 11: "the mice", 12: "the soldier",
  13: "Saint Anthony, Tony", 14: "the drunkard", 15: "the King", 16: "the backside",
  17: "the misfortune", 18: "the blood", 19: "Saint Joseph, Joe", 20: "the party",
  21: "the naked woman", 22: "the madman", 23: "the fool", 24: "the guards", 25: "Christmas",
  26: "Nannenella", 27: "it's limp", 28: "the breasts, suck and sleep",
  29: "the father of the children, the one who causes all the trouble",
  30: "the lieutenant's marbles", 31: "the landlord", 32: "the big eel", 33: "the years of Christ",
  34: "the head", 35: "the birds", 36: "candies and chestnuts", 37: "the monk", 38: "the beatings",
  39: "water in the throat", 40: "the snow", 41: "the knife", 42: "the coffee",
  43: "Mrs. Pereta out on the balcony", 44: "the prison", 45: "the wine", 46: "the tomato",
  47: "the dead man", 48: "the dead man who talks", 49: "the piece of meat", 50: "the bread",
  51: "the garden", 52: "Mama", 53: "the old man", 54: "the hat", 55: "the music", 56: "the fall",
  57: "the hunchback", 58: "he bent over", 59: "the turkey", 60: "someone's complaining",
  61: "the hunter", 62: "the murdered man", 63: "the bride", 64: "the tailcoat", 65: "someone's crying",
  66: "the two spinsters", 67: "the squid in the guitar", 68: "the soup", 69: "upside down",
  70: "the building", 71: "the wretched man", 72: "the wonder", 73: "the hospital", 74: "the cave",
  75: "Pulcinella", 76: "the fountain", 77: "the horns", 78: "the harlot", 79: "the thief",
  80: "the mouth", 81: "the flowers", 82: "the table", 83: "the fart", 84: "the church",
  85: "the souls in Purgatory", 86: "the shop", 87: "the lice", 88: "the caciocavallo cheeses",
  89: "the sewer rat", 90: "the fear",
};

var ES_MEANING = {
  1: "Italia", 2: "la niñita", 3: "el torcido en el parque", 4: "el cerdo", 5: "la mano",
  6: "la que siempre mira al suelo", 7: "los siete pecados capitales", 8: "María, la Virgen",
  9: "la camada de niños", 10: "las judías", 11: "los ratones", 12: "el soldado",
  13: "San Antonio, Toño", 14: "el borracho", 15: "el Rey", 16: "el trasero", 17: "la desgracia",
  18: "la sangre", 19: "San José, Pepe", 20: "la fiesta", 21: "la mujer desnuda", 22: "el loco",
  23: "el tonto", 24: "los guardias", 25: "Navidad", 26: "Nannenella", 27: "está flojo",
  28: "los pechos, mama y duerme", 29: "el padre de los niños, el que arma todos los líos",
  30: "las canicas del teniente", 31: "el dueño de la casa", 32: "la anguila grande",
  33: "los años de Cristo", 34: "la cabeza", 35: "los pájaros", 36: "caramelos y castañas",
  37: "el monje", 38: "los golpes", 39: "agua en la garganta", 40: "la nieve", 41: "el cuchillo",
  42: "el café", 43: "doña Pereta en el balcón", 44: "la cárcel", 45: "el vino", 46: "el tomate",
  47: "el muerto", 48: "el muerto que habla", 49: "el pedazo de carne", 50: "el pan",
  51: "el jardín", 52: "Mamá", 53: "el viejo", 54: "el sombrero", 55: "la música", 56: "la caída",
  57: "el jorobado", 58: "se agachó", 59: "el pavo", 60: "alguien se queja", 61: "el cazador",
  62: "el muerto asesinado", 63: "la novia", 64: "el frac", 65: "alguien llora",
  66: "las dos solteronas", 67: "el calamar en la guitarra", 68: "la sopa", 69: "patas arriba",
  70: "el edificio", 71: "el hombre de mierda", 72: "la maravilla", 73: "el hospital",
  74: "la cueva", 75: "Pulcinella", 76: "la fuente", 77: "los cuernos", 78: "la prostituta",
  79: "el ladrón", 80: "la boca", 81: "las flores", 82: "la mesa", 83: "el pedo", 84: "la iglesia",
  85: "las almas del Purgatorio", 86: "la tienda", 87: "los piojos", 88: "los quesos caciocavallo",
  89: "la rata de alcantarilla", 90: "el miedo",
};

var NAP_MEANING = window.SMORFIA.reduce(function (acc, item) {
  acc[item.n] = item.meaning;
  return acc;
}, {});

window.MEANING_BY_LANG = { nap: NAP_MEANING, it: IT_MEANING, en: EN_MEANING, es: ES_MEANING };

function meaningFor(num, lang) {
  var byLang = window.MEANING_BY_LANG[lang] || window.MEANING_BY_LANG.nap;
  return byLang[num] || "...";
}

// Toglie l'articolo iniziale per poter incastrare il significato dentro una
// frase ("'a fontana" -> "fontana", "the hand" -> "hand", "la mano" -> "mano").
var ARTICLE_RE = {
  nap: /^('a|'o|'e|l'|s'è|è)\s+/i,
  it: /^(il|lo|la|i|gli|le|l')\s+/i,
  en: /^(the)\s+/i,
  es: /^(el|la|los|las)\s+/i,
};
function bareNoun(text, lang) {
  var re = ARTICLE_RE[lang] || ARTICLE_RE.nap;
  return text.toLowerCase().replace(re, "");
}

// ---------------------------------------------------------------------------
// Narrazione a due fasi (vedi requisiti):
//  Fase 1 — "chiamata": solo numero + nome Smorfia, letta subito (no LLM).
//  Fase 2 — "narrazione": dopo una pausa, la frase che lega il numero al
//           filo narrativo (qui: al numero immediatamente precedente).
// Le costanti sotto sono tempi DEMO compressi rispetto ai ~10s reali di
// pausa previsti a regime (giusto per rendere il prototipo comodo da
// testare) — facilmente regolabili qui.
// ---------------------------------------------------------------------------
window.TIMING = {
  CALL_MS: 1300, // durata "lettura" della chiamata (fase 1)
  PAUSE_MS: 2600, // pausa per cercare il numero sulla cartella (compressa; a regime ~10s)
  NARRATION_MS: 1900, // durata "lettura" della narrazione (fase 2)
};

window.STATUS_LABELS = {
  nap: { calling: "'A chiammante sta chiammanno...", pausa: "🔍 Cercate 'o nummero 'ncoppa 'a cartella...", narrando: "'A chiammante sta cuntanno...", idle: "In pausa" },
  it: { calling: "Il banditore sta chiamando...", pausa: "🔍 Cerca il numero sulla tua cartella...", narrando: "Il banditore sta raccontando...", idle: "In pausa" },
  en: { calling: "The caller is announcing...", pausa: "🔍 Look for the number on your card...", narrando: "The caller is telling the story...", idle: "Waiting" },
  es: { calling: "El presentador está llamando...", pausa: "🔍 Busca el número en tu cartón...", narrando: "El presentador está contando...", idle: "En espera" },
};

window.EMPTY_STATE_TEXT = {
  nap: "Struscia 'o dito 'ncoppa 'o tabbellone e clicca 'o primmo nummero pe' fa accummencià 'a storia.",
  it: "Sfiora il tabellone e clicca il primo numero per iniziare la storia.",
  en: "Tap the board and click the first number to start the story.",
  es: "Toca el tablero y pulsa el primer número para empezar la historia.",
};

// ---------------------------------------------------------------------------
// TTS reale via Web Speech API del browser (gratuita, nessuna chiamata
// server) — come da requisiti per l'MVP: napoletano usa la voce italiana più
// vicina disponibile (nessun browser ha una voce dialettale nativa, quindi
// la pronuncia risulterà "italianizzata": è un limite noto, non un bug).
// Se la sintesi vocale non è disponibile (o è muta) si torna alle pause
// fisse in window.TIMING, così il prototipo resta usabile ovunque.
// ---------------------------------------------------------------------------
window.VOICE_LANG = { nap: "it-IT", it: "it-IT", en: "en-US", es: "es-ES" };

// Le voci locali (SAPI, tipo "Cosimo"/"Elsa") sono pronte quasi subito dopo
// il caricamento; quelle "Remote" (online/neurali, es. Giuseppe, ma vale per
// qualunque voce online: sono tutte buone) arrivano un po' dopo. Le si
// "scalda" qui sotto appena questo file viene eseguito — PRIMA che l'utente
// clicchi il primo numero — con qualche tentativo ravvicinato in background.
function hasRemoteVoiceFor(list, base) {
  return list.some(function (v) {
    return !v.localService && v.lang && v.lang.toLowerCase().indexOf(base) === 0;
  });
}
function warmUpVoices(attemptsLeft) {
  var synth = window.speechSynthesis;
  if (!synth || attemptsLeft <= 0) return;
  var list = synth.getVoices();
  if (hasRemoteVoiceFor(list, "it")) return;
  synth.onvoiceschanged = function () {
    warmUpVoices(attemptsLeft - 1);
  };
  setTimeout(function () {
    warmUpVoices(attemptsLeft - 1);
  }, 800);
}
if (window.speechSynthesis) {
  warmUpVoices(8); // ~6-7s di tentativi in background, appena si apre la pagina
}

// Qualunque voce "Remote" (online, v.localService === false) per la lingua
// richiesta va bene — non serve più cercare "Giuseppe" per nome, tutte le
// voci online sono di qualità simile; quelle "Local"/offline invece no.
function pickVoice(voices, bcp47) {
  var base = bcp47.split("-")[0].toLowerCase();

  var remoteExact = voices.filter(function (v) { return !v.localService && v.lang === bcp47; });
  if (remoteExact.length) return remoteExact[0];

  var remoteSameLang = voices.filter(function (v) {
    return !v.localService && v.lang && v.lang.toLowerCase().indexOf(base) === 0;
  });
  if (remoteSameLang.length) return remoteSameLang[0];

  // Nessuna voce remota trovata per questa lingua: meglio una locale nella
  // lingua giusta che una remota in un'altra lingua.
  var exact = voices.filter(function (v) { return v.lang === bcp47; });
  if (exact.length) return exact[0];
  var sameLang = voices.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf(base) === 0; });
  return sameLang.length ? sameLang[0] : null;
}

// Legge `text` ad alta voce nella lingua `lang`. Risolve la Promise (con
// `true`) quando la lettura finisce; risolve subito con `false` se la TTS
// non è disponibile o è mutata, così il chiamante sa se deve ricadere sulla
// pausa fissa in window.TIMING.
window.speak = function (text, lang, muted) {
  var synth = window.speechSynthesis;
  if (muted || !synth || typeof SpeechSynthesisUtterance === "undefined") {
    return Promise.resolve(false);
  }
  var bcp47 = window.VOICE_LANG[lang] || "it-IT";
  // Lettura SINCRONA delle voci (niente Promise/setTimeout qui dentro): la
  // lista dovrebbe già essere pronta grazie a warmUpVoices() fatto partire al
  // caricamento del file. Aspettare qui rischierebbe di far perdere il
  // collegamento con il gesto dell'utente (vedi commento sopra warmUpVoices).
  var voices = synth.getVoices();
  return new Promise(function (resolve) {
    var utter = new SpeechSynthesisUtterance(text);
    utter.lang = bcp47;
    utter.rate = 0.95; // leggermente più lenta del default: suona più naturale (vedi test-webspeech-napoletano.html)
    var voice = pickVoice(voices, bcp47);
    if (voice) utter.voice = voice;
    // Diagnostica: esposta anche a window.__lastVoiceUsed (mostrata a schermo
    // dall'app, niente console necessaria) — include quante voci "Remote" vs
    // "Local" l'app vede per questa lingua nel momento esatto della lettura,
    // per capire se il problema è "non le trova" o "le trova ma non le sceglie".
    var base = bcp47.split("-")[0].toLowerCase();
    var langVoices = voices.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf(base) === 0; });
    var remoteCount = langVoices.filter(function (v) { return !v.localService; }).length;
    var localCount = langVoices.length - remoteCount;
    var voiceLabel = voice
      ? voice.name + " (" + (voice.localService ? "locale" : "online") + ")"
      : "voce di sistema di default";
    voiceLabel += " · " + langVoices.length + " voci " + bcp47 + " viste (" + remoteCount + " remote, " + localCount + " locali)";
    window.__lastVoiceUsed = voiceLabel;
    window.__lastVoiceCount = voices.length;
    console.log("[Tumbulella TTS] voce scelta:", voiceLabel, "— " + voices.length + " voci disponibili in totale");
    utter.onend = function () {
      resolve(true);
    };
    utter.onerror = function () {
      resolve(true);
    };
    synth.speak(utter);
  });
};

window.stopSpeaking = function () {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
};

// Fase 1: solo numero + nome Smorfia (nessun aggancio al racconto).
window.buildCall = function (num, lang) {
  return num + ", " + meaningFor(num, lang);
};

// Stesso "numero, significato" di buildCall ma con la virgola finale, per
// anteporlo al testo generato dal backend in fase 2 (che il modello scrive
// SENZA questa parte, già annunciata dalla chiamata — vedi backend/app/prompts.py).
window.buildPrefix = function (num, lang) {
  return num + ", " + meaningFor(num, lang) + ", ";
};

// ---------------------------------------------------------------------------
// Backend reale (Python + FastAPI + Gemini): la fase 2 (narrazione) chiama
// POST /api/narrate invece del motore a template qui sotto. Il motore a
// template resta nel file (buildNarrationParts/buildNarration) come fallback
// per sviluppo/offline, ma l'app normalmente non lo usa più — vedi
// window.fetchNarration, chiamato da index.html.
// ---------------------------------------------------------------------------
// In locale (file:// o localhost) punta al backend di sviluppo; altrove
// (pagina pubblicata) punta al backend pubblico — sostituire il placeholder
// qui sotto con l'URL vero non appena il backend è online (es. Render/HF/Cloud Run).
window.BACKEND_URL = (function () {
  var h = window.location.hostname;
  if (!h || h === "localhost" || h === "127.0.0.1") {
    return "http://127.0.0.1:8000";
  }
  return "https://tumbulella.onrender.com";
})();

// Due errori ben distinti: il backend non risponde affatto (server spento,
// rete giù) vs il backend risponde ma segnala un problema suo (es. quota LLM
// esaurita, chiave non configurata). Confonderli è fuorviante: il secondo
// caso NON significa "riavvia il server", e nasconderlo dietro un messaggio
// generico rende impossibile capire cosa sta succedendo davvero.
window.LLM_UNREACHABLE_TEXT = {
  nap: "(nun so' riuscito a collegarme cu 'o backend — controlla ca sia acceso)",
  it: "(non sono riuscito a contattare il backend — controlla che sia acceso)",
  en: "(couldn't reach the backend — check that it's running)",
  es: "(no pude contactar con el backend — comprueba que esté encendido)",
};
window.LLM_BACKEND_ERROR_PREFIX = {
  nap: "(errore da 'o backend: ",
  it: "(errore dal backend: ",
  en: "(error from the backend: ",
  es: "(error del backend: ",
};

// Chiama il backend reale per generare il pezzo di racconto del numero
// appena uscito. Lancia un errore con `.kind` = "unreachable" (nessuna
// risposta: server spento, rete giù) oppure "backend_error" (risposta HTTP
// di errore, es. quota Gemini esaurita) — chi chiama sceglie il messaggio
// giusto in base al kind (vedi playSequence in index.html).
window.fetchNarration = async function (number, previousNumbers, storySoFar, intensity, language) {
  let res;
  try {
    res = await fetch(window.BACKEND_URL + "/api/narrate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        number: number,
        previous_numbers: previousNumbers,
        story_so_far: storySoFar,
        intensity: intensity,
        language: language,
      }),
    });
  } catch (networkErr) {
    const err = new Error("unreachable");
    err.kind = "unreachable";
    throw err;
  }
  if (!res.ok) {
    let detail = "";
    try {
      detail = (await res.json()).detail || "";
    } catch (e) {}
    const err = new Error(detail || "HTTP " + res.status);
    err.kind = "backend_error";
    throw err;
  }
  const data = await res.json();
  return data.narration;
};

// Il testo generato (fase 2) deve SEMPRE avere QUATTRO parti, in quest'ordine:
//   1. il numero
//   2. il significato Smorfia
//   3. una SCENETTA concreta (con un verbo d'azione, non un semplice accostamento
//      di nomi) che coinvolge sia il significato corrente sia quello precedente,
//      seguita da un'ipotesi buffa sul perché sia successo
//   4. una chiusura che guarda avanti, al prossimo numero
// es. "76, 'a fontana, Pullecenella cade dint' 'a fontana! Forse quaccheduno
//      l'ha spinto, o forse teneva 'nu poco 'e caldo. Vedimmo mo che succede!"

// Alcuni significati sono nomi propri (persone/feste): non vanno mai scritti
// con la iniziale minuscola, a differenza dei nomi comuni quando finiscono a
// metà frase (es. "'a fontana" -> "la fontana" resta minuscolo, "Pullecenella" no).
var PROPER_NOUN_NUMS = { 1: true, 8: true, 13: true, 19: true, 25: true, 26: true, 52: true, 75: true };
function midSentence(num, meaning) {
  if (PROPER_NOUN_NUMS[num]) return meaning;
  // Il napoletano spesso inizia con un apostrofo ("'A fontana"): la minuscola
  // va applicata alla prima lettera vera, non all'apostrofo stesso.
  return meaning.replace(/^('*)([A-Za-zÀ-ÖØ-öø-ÿ])/, function (m, apo, letter) {
    return apo + letter.toLowerCase();
  });
}

// Alcuni significati sono plurali ("'e corne", "'e fasule"...): lo deduciamo
// dalla forma napoletana canonica e riusiamo lo stesso flag in tutte le lingue,
// per scegliere la coniugazione giusta del verbo nella scenetta.
function isPluralNum(num) {
  var m = (window.SMORFIA_BY_N[num] || {}).meaning || "";
  return /^'e\s+/i.test(m);
}

function fill(template, curr, prev) {
  return template.replace(/\{curr\}/g, curr).replace(/\{prev\}/g, prev);
}

// Ogni numero è classificato per TIPO, così la scenetta usa un'azione
// sensata per quel tipo di cosa (non si può "cadere dentro" il Natale, ma
// ci si può "andare a passare insieme"). Il tipo del numero appena uscito
// decide quale famiglia di scenette usare.
//   person   — persone/personaggi/ruoli/gruppi di persone
//   event    — festività, ricorrenze
//   place    — luoghi, contenitori
//   animal   — animali
//   object   — oggetti fisici, cibo, parti del corpo, vestiti
//   abstract — sentimenti, stati, concetti non fisici
var CATEGORY_BY_N = {
  1: "place", 2: "person", 3: "person", 4: "animal", 5: "object", 6: "person", 7: "abstract", 8: "person", 9: "person", 10: "object",
  11: "animal", 12: "person", 13: "person", 14: "person", 15: "person", 16: "object", 17: "abstract", 18: "object", 19: "person", 20: "event",
  21: "person", 22: "person", 23: "person", 24: "person", 25: "event", 26: "person", 27: "abstract", 28: "abstract", 29: "person", 30: "object",
  31: "person", 32: "animal", 33: "abstract", 34: "object", 35: "animal", 36: "object", 37: "person", 38: "abstract", 39: "object", 40: "object",
  41: "object", 42: "object", 43: "person", 44: "place", 45: "object", 46: "object", 47: "person", 48: "person", 49: "object", 50: "object",
  51: "place", 52: "person", 53: "person", 54: "object", 55: "abstract", 56: "abstract", 57: "person", 58: "abstract", 59: "animal", 60: "abstract",
  61: "person", 62: "person", 63: "person", 64: "object", 65: "abstract", 66: "person", 67: "object", 68: "object", 69: "abstract", 70: "place",
  71: "person", 72: "abstract", 73: "place", 74: "place", 75: "person", 76: "place", 77: "object", 78: "person", 79: "person", 80: "object",
  81: "object", 82: "object", 83: "abstract", 84: "place", 85: "person", 86: "place", 87: "animal", 88: "object", 89: "animal", 90: "abstract",
};
function categoryOf(num) {
  return CATEGORY_BY_N[num] || "object";
}

// Scenetta per il primo numero della partita (nessun precedente da coinvolgere).
// Per persone/animali si usa la stessa domanda "dove va/vanno" di sempre;
// per gli altri tipi un'introduzione più generica.
var OPENER_MOVEMENT = {
  nap: {
    soft: { sing: "Vedimmo addó va {curr}!", plur: "Vedimmo addó vanno {curr}!" },
    spinto: { sing: "Vedimmo addó va {curr}, cu chella furbizia!", plur: "Vedimmo addó vanno {curr}, cu chella furbizia!" },
  },
  it: {
    soft: { sing: "Vediamo dove va {curr}!", plur: "Vediamo dove vanno {curr}!" },
    spinto: { sing: "Vediamo dove va {curr}, con quell'aria furba!", plur: "Vediamo dove vanno {curr}, con quell'aria furba!" },
  },
  en: {
    soft: { sing: "Let's see where {curr} goes!", plur: "Let's see where {curr} go!" },
    spinto: { sing: "Let's see where {curr} goes, looking that sly!", plur: "Let's see where {curr} go, looking that sly!" },
  },
  es: {
    soft: { sing: "¡Vamos a ver adónde va {curr}!", plur: "¡Vamos a ver adónde van {curr}!" },
    spinto: { sing: "¡Vamos a ver adónde va {curr}, con esa cara de pícaro!", plur: "¡Vamos a ver adónde van {curr}, con esa cara de pícaro!" },
  },
};
var OPENER_GENERIC = {
  nap: { soft: "Eccolo, {curr}! E già se annunzia quacchecosa 'e bello.", spinto: "Eccolo, {curr}! E già se sente ll'aria 'e nu poco 'e sfizio." },
  it: { soft: "Eccolo, {curr}! E si preannuncia già qualcosa di bello.", spinto: "Eccolo, {curr}! E si sente già un po' di pepe nell'aria." },
  en: { soft: "There it is, {curr}! Something good is already in the air.", spinto: "There it is, {curr}! You can already feel a little spice in the air." },
  es: { soft: "¡Ahí está, {curr}! Y ya se anuncia algo bueno.", spinto: "¡Ahí está, {curr}! Y ya se siente un poco de picante en el aire." },
};

// Scenetta che collega {curr} (numero appena uscito) e {prev} (quello di
// prima), una famiglia diversa per ogni categoria di {curr} — tranne "place",
// dove è {prev} a "muoversi" dentro il luogo. Verbi all'indicativo presente:
// serve solo l'accordo di numero (sing/plur), non quello di genere.
var CATEGORY_LINK = {
  person: {
    nap: {
      soft: { sing: "Ecco {curr}! Se unisce a {prev} comme si se cunuscessero 'a 'na vita. Chi parla primmo?", plur: "Ecco {curr}! Se uneno a {prev} comme si se cunuscessero 'a 'na vita. Chi parla primmo?" },
      spinto: { sing: "Ecco {curr}! Se struscia vicino a {prev} cu n'aria furba. Chi ce sta a sentì?", plur: "Ecco {curr}! Se strusciano vicino a {prev} cu n'aria furba. Chi ce sta a sentì?" },
    },
    it: {
      soft: { sing: "Ecco {curr}! Si unisce a {prev} come se si conoscessero da una vita. Chi parla per primo?", plur: "Ecco {curr}! Si uniscono a {prev} come se si conoscessero da una vita. Chi parla per primo?" },
      spinto: { sing: "Ecco {curr}! Si strofina vicino a {prev} con aria furba. Chi sta ad ascoltare?", plur: "Ecco {curr}! Si strofinano vicino a {prev} con aria furba. Chi sta ad ascoltare?" },
    },
    en: {
      soft: { sing: "Here comes {curr}! It joins {prev} like they've known each other forever. Who speaks first?", plur: "Here come {curr}! They join {prev} like they've known each other forever. Who speaks first?" },
      spinto: { sing: "Here comes {curr}! It cozies up to {prev} with a sly look. Who's listening in?", plur: "Here come {curr}! They cozy up to {prev} with a sly look. Who's listening in?" },
    },
    es: {
      soft: { sing: "¡Aquí llega {curr}! Se une a {prev} como si se conocieran de toda la vida. ¿Quién habla primero?", plur: "¡Aquí llegan {curr}! Se unen a {prev} como si se conocieran de toda la vida. ¿Quién habla primero?" },
      spinto: { sing: "¡Aquí llega {curr}! Se acerca a {prev} con cara de pícaro. ¿Quién anda escuchando?", plur: "¡Aquí llegan {curr}! Se acercan a {prev} con cara de pícaro. ¿Quién anda escuchando?" },
    },
  },
  event: {
    nap: {
      soft: { sing: "Ah, {prev} vò passà {curr} 'nzieme! Che bella cumpagnia. Chi se ne va aiungenno pure isso?", plur: "Ah, {prev} vonno passà {curr} 'nzieme! Che bella cumpagnia. Chi se ne va aiungenno pure isso?" },
      spinto: { sing: "Ah, {prev} vò passà {curr} 'nzieme, cu tutte 'e comodità! E chi ce dice ca è tutto innucente?", plur: "Ah, {prev} vonno passà {curr} 'nzieme, cu tutte 'e comodità! E chi ce dice ca è tutto innucente?" },
    },
    it: {
      soft: { sing: "Ah, {prev} decide di passare {curr} insieme! Che bella compagnia. Chi altro si unisce?", plur: "Ah, {prev} decidono di passare {curr} insieme! Che bella compagnia. Chi altro si unisce?" },
      spinto: { sing: "Ah, {prev} decide di passare {curr} insieme, con tutti i comfort! E chi dice che sia tutto innocente?", plur: "Ah, {prev} decidono di passare {curr} insieme, con tutti i comfort! E chi dice che sia tutto innocente?" },
    },
    en: {
      soft: { sing: "Ah, {prev} decides to spend {curr} together! What lovely company. Who else joins in?", plur: "Ah, {prev} decide to spend {curr} together! What lovely company. Who else joins in?" },
      spinto: { sing: "Ah, {prev} decides to spend {curr} together, with all the comforts! And who says it's all innocent?", plur: "Ah, {prev} decide to spend {curr} together, with all the comforts! And who says it's all innocent?" },
    },
    es: {
      soft: { sing: "Ah, ¡{prev} decide pasar {curr} juntos! Qué buena compañía. ¿Quién más se une?", plur: "Ah, ¡{prev} deciden pasar {curr} juntos! Qué buena compañía. ¿Quién más se une?" },
      spinto: { sing: "Ah, ¡{prev} decide pasar {curr} juntos, con todas las comodidades! ¿Y quién dice que es todo inocente?", plur: "Ah, ¡{prev} deciden pasar {curr} juntos, con todas las comodidades! ¿Y quién dice que es todo inocente?" },
    },
  },
  place: {
    nap: {
      soft: { sing: "Mammamia! {prev} cade dint' {curr}! Vedimmo comme ne esce!", plur: "Mammamia! {prev} cadeno dint' {curr}! Vedimmo comme ne esceno!" },
      spinto: { sing: "Uh mamma, {prev} fernesce tutto 'nzuppato dint' {curr}! Vedimmo comme ne esce stavota!", plur: "Uh mamma, {prev} fernesceno tutte 'nzuppate dint' {curr}! Vedimmo comme ne esceno stavota!" },
    },
    it: {
      soft: { sing: "Mammamia! {prev} cade dentro {curr}! Vediamo come ne esce!", plur: "Mammamia! {prev} cadono dentro {curr}! Vediamo come ne escono!" },
      spinto: { sing: "Uh mamma, {prev} finisce tutto zuppo dentro {curr}! Vediamo come ne esce stavolta!", plur: "Uh mamma, {prev} finiscono tutti zuppi dentro {curr}! Vediamo come ne escono stavolta!" },
    },
    en: {
      soft: { sing: "Oh my! {prev} falls right into {curr}! Let's see how it gets out!", plur: "Oh my! {prev} fall right into {curr}! Let's see how they get out!" },
      spinto: { sing: "Oh mama, {prev} ends up soaking wet inside {curr}! Let's see how it gets out this time!", plur: "Oh mama, {prev} end up soaking wet inside {curr}! Let's see how they get out this time!" },
    },
    es: {
      soft: { sing: "¡Madre mía! {prev} cae dentro de {curr}! ¡Vamos a ver cómo sale!", plur: "¡Madre mía! {prev} caen dentro de {curr}! ¡Vamos a ver cómo salen!" },
      spinto: { sing: "Ay mamá, {prev} termina todo mojado dentro de {curr}! ¡Vamos a ver cómo sale esta vez!", plur: "Ay mamá, {prev} terminan todos mojados dentro de {curr}! ¡Vamos a ver cómo salen esta vez!" },
    },
  },
  animal: {
    nap: {
      soft: { sing: "Eccolo, {curr}! Se retrova faccia a faccia cu {prev}. Chi scappa primmo?", plur: "Eccole, {curr}! Se retroveno faccia a faccia cu {prev}. Chi scappa primmo?" },
      spinto: { sing: "Eccolo, {curr}! Se struscia cuntro {prev} cu tanto 'e gusto. Chi scappa primmo?", plur: "Eccole, {curr}! Se strusceno cuntro {prev} cu tanto 'e gusto. Chi scappa primmo?" },
    },
    it: {
      soft: { sing: "Eccolo, {curr}! Si ritrova faccia a faccia con {prev}. Chi scappa per primo?", plur: "Eccoli, {curr}! Si ritrovano faccia a faccia con {prev}. Chi scappa per primo?" },
      spinto: { sing: "Eccolo, {curr}! Si struscia contro {prev} con gran gusto. Chi scappa per primo?", plur: "Eccoli, {curr}! Si strusciano contro {prev} con gran gusto. Chi scappa per primo?" },
    },
    en: {
      soft: { sing: "There it is, {curr}! It comes face to face with {prev}. Who runs off first?", plur: "There they are, {curr}! They come face to face with {prev}. Who runs off first?" },
      spinto: { sing: "There it is, {curr}! It rubs right up against {prev} with real enthusiasm. Who runs off first?", plur: "There they are, {curr}! They rub right up against {prev} with real enthusiasm. Who runs off first?" },
    },
    es: {
      soft: { sing: "¡Ahí está, {curr}! Se encuentra cara a cara con {prev}. ¿Quién sale corriendo primero?", plur: "¡Ahí están, {curr}! Se encuentran cara a cara con {prev}. ¿Quién sale corriendo primero?" },
      spinto: { sing: "¡Ahí está, {curr}! Se restriega contra {prev} con muchas ganas. ¿Quién sale corriendo primero?", plur: "¡Ahí están, {curr}! Se restriegan contra {prev} con muchas ganas. ¿Quién sale corriendo primero?" },
    },
  },
  object: {
    nap: {
      soft: { sing: "Uh, {curr} fernesce dritto dritto 'mmano a {prev}! Che ne farrà mo?", plur: "Uh, {curr} fernesceno dritto dritto 'mmano a {prev}! Che ne farranno mo?" },
      spinto: { sing: "Uh, {curr} fernesce 'mmano a {prev}, e già se sente 'na risatella! Che ne farrà mo?", plur: "Uh, {curr} fernesceno 'mmano a {prev}, e già se sente 'na risatella! Che ne farranno mo?" },
    },
    it: {
      soft: { sing: "Uh, {curr} finisce dritto dritto in mano a {prev}! Cosa ne farà ora?", plur: "Uh, {curr} finiscono dritti dritti in mano a {prev}! Cosa ne faranno ora?" },
      spinto: { sing: "Uh, {curr} finisce in mano a {prev}, e si sente già una risatina! Cosa ne farà ora?", plur: "Uh, {curr} finiscono in mano a {prev}, e si sente già una risatina! Cosa ne faranno ora?" },
    },
    en: {
      soft: { sing: "Uh, {curr} ends up right in {prev}'s hands! What will it do with it now?", plur: "Uh, {curr} end up right in {prev}'s hands! What will it do with them now?" },
      spinto: { sing: "Uh, {curr} ends up in {prev}'s hands, and you can already hear a little giggle! What now?", plur: "Uh, {curr} end up in {prev}'s hands, and you can already hear a little giggle! What now?" },
    },
    es: {
      soft: { sing: "Uy, {curr} termina justo en las manos de {prev}! ¿Qué hará con eso ahora?", plur: "Uy, {curr} terminan justo en las manos de {prev}! ¿Qué hará con eso ahora?" },
      spinto: { sing: "Uy, {curr} termina en las manos de {prev}, ¡y ya se oye una risita! ¿Qué hará ahora?", plur: "Uy, {curr} terminan en las manos de {prev}, ¡y ya se oye una risita! ¿Qué hará ahora?" },
    },
  },
  abstract: {
    nap: {
      soft: { sing: "Uh, {curr} piglia {prev} 'e surpresa! Che succerarrà mo?", plur: "Uh, {curr} piglieno {prev} 'e surpresa! Che succerarrà mo?" },
      spinto: { sing: "Uh, {curr} piglia {prev} 'e surpresa, e nun se sape addó jarrimmo a ffernì! Che succerarrà mo?", plur: "Uh, {curr} piglieno {prev} 'e surpresa, e nun se sape addó jarrimmo a ffernì! Che succerarrà mo?" },
    },
    it: {
      soft: { sing: "Uh, {curr} coglie {prev} di sorpresa! Cosa succederà ora?", plur: "Uh, {curr} colgono {prev} di sorpresa! Cosa succederà ora?" },
      spinto: { sing: "Uh, {curr} coglie {prev} di sorpresa, e qui non si sa dove si va a finire! Cosa succederà ora?", plur: "Uh, {curr} colgono {prev} di sorpresa, e qui non si sa dove si va a finire! Cosa succederà ora?" },
    },
    en: {
      soft: { sing: "Uh, {curr} catches {prev} by surprise! What'll happen now?", plur: "Uh, {curr} catch {prev} by surprise! What'll happen now?" },
      spinto: { sing: "Uh, {curr} catches {prev} by surprise, and who knows where this is headed! What'll happen now?", plur: "Uh, {curr} catch {prev} by surprise, and who knows where this is headed! What'll happen now?" },
    },
    es: {
      soft: { sing: "Uy, {curr} agarra a {prev} por sorpresa! ¿Qué pasará ahora?", plur: "Uy, {curr} agarran a {prev} por sorpresa! ¿Qué pasará ahora?" },
      spinto: { sing: "Uy, {curr} agarra a {prev} por sorpresa, ¡y aquí no se sabe dónde vamos a parar! ¿Qué pasará ahora?", plur: "Uy, {curr} agarran a {prev} por sorpresa, ¡y aquí no se sabe dónde vamos a parar! ¿Qué pasará ahora?" },
    },
  },
};

// Fase 2: SEMPRE "numero, significato, scenetta" nel testo SCRITTO — la
// scenetta usa la famiglia di template giusta per il TIPO del numero appena
// uscito, quindi resta sensata anche per coppie non fisiche (es. "guardie" +
// "Natale"). Restituisce { prefix, body }: il "numero, significato" va
// scritto nel racconto ma NON va riletto ad alta voce, perché la fase 1
// (chiamata) l'ha già detto — altrimenti il TTS ripete il numero due volte
// di fila. window.buildNarration(...) resta come comodo alias per il solo
// testo scritto (prefix + body).
window.buildNarrationParts = function (clickIndex, num, prevNum, lang, intensity) {
  var level = intensity === "spinto" ? "spinto" : "soft";
  var langKey = window.MEANING_BY_LANG[lang] ? lang : "nap";
  var meaning = meaningFor(num, langKey);
  var prefix = num + ", " + meaning + ", ";
  var currMid = midSentence(num, meaning);
  var cat = categoryOf(num);

  if (clickIndex === 0 || !prevNum) {
    var currForm = isPluralNum(num) ? "plur" : "sing";
    if (cat === "person" || cat === "animal") {
      var moveTpl = OPENER_MOVEMENT[langKey][level][currForm];
      return { prefix: prefix, body: fill(moveTpl, currMid, "") };
    }
    var genericTpl = OPENER_GENERIC[langKey][level];
    return { prefix: prefix, body: fill(genericTpl, currMid, "") };
  }

  var prevMid = midSentence(prevNum, meaningFor(prevNum, langKey));
  // Per "place" ed "event" è {prev} il soggetto grammaticale (chi cade nel
  // luogo, chi festeggia); per tutte le altre categorie è {curr}.
  var subjectNum = (cat === "place" || cat === "event") ? prevNum : num;
  var form = isPluralNum(subjectNum) ? "plur" : "sing";
  var bank = CATEGORY_LINK[cat][langKey][level];
  var template = bank[form] || bank.sing;
  return { prefix: prefix, body: fill(template, currMid, prevMid) };
};

window.buildNarration = function (clickIndex, num, prevNum, lang, intensity) {
  var parts = window.buildNarrationParts(clickIndex, num, prevNum, lang, intensity);
  return parts.prefix + parts.body;
};

// ---------------------------------------------------------------------------
// Contenuto del pulsante "Cosa è", estratto da cosa-e-tumbulella.docx (testo
// originale italiano) e poi tradotto a mano nelle altre 3 lingue del selettore
// — mock come le altre traduzioni del prototipo, non riviste da madrelingua.
// Se il documento cambia, va ri-estratto il testo italiano e ri-tradotto QUESTO
// blocco (unico punto dove vive il contenuto — la finestra lo legge da qui in
// base alla lingua attiva, non ha testo proprio duplicato altrove).
// ---------------------------------------------------------------------------
window.ABOUT_CONTENT = {
  it: {
    title: "Cosa è Tumbulella",
    tagline: "La tombola napoletana raccontata da un'antica tradizione, in chiave moderna.",
    sections: [
      {
        heading: "Cos'è Tumbulella",
        blocks: [
          { type: "p", text: "Tumbulella non è un gioco completo, e non vuole sostituirsi alla tombola vera. È un compagno di gioco: un supporto pensato per rendere ancora più divertente la tombola che già giocate tra amici e in famiglia, aggiungendo un elemento in più — una storia, buffa e a tratti scabrosa, che nasce numero dopo numero, man mano che li estraete." },
          { type: "p", text: "Voi restate protagonisti della partita: cartelle, fagioli o ceci per coprire i numeri, chi grida «Tombola!» oppure chi grida «Ambo» dopo il primo numero." },
          { type: "p", text: "Tumbulella si limita ad accompagnare ogni numero estratto con la sua voce, la Smorfia, trasformando l'estrazione in un racconto che si costruisce da sé, con il ritmo e l'ironia della tradizione napoletana." },
        ],
      },
      {
        heading: "La tombola: cos'è e come si gioca",
        blocks: [
          { type: "p", text: "La tombola è uno dei giochi più amati delle feste italiane, in particolare a Napoli, dove è protagonista indiscussa delle serate di Natale e Capodanno. Il gioco del lotto da cui deriva nasce a Genova nel 1539, ma è a Napoli che la tombola come la conosciamo oggi prende forma, diventando un rito collettivo fatto di cartelle, numeri urlati a voce alta e significati popolari legati a ciascun numero." },
          { type: "h4", text: "Come si gioca, in breve:" },
          {
            type: "list",
            items: [
              "Ogni giocatore ha una o più cartelle, ciascuna con 15 numeri da 1 a 90, disposti su tre righe.",
              "A turno, una persona (la «chiamante») estrae un numero alla volta da un sacchetto o un panariello (il cestino intrecciato tradizionale) e lo annuncia ad alta voce, spesso accompagnandolo con il suo nome nella Smorfia.",
              "Chi ha quel numero sulla propria cartella lo copre, tipicamente con legumi secchi (fagioli o ceci) o gettoni.",
              "Si vince completando, nell'ordine, una combinazione di numeri su una riga: ambo (2 numeri), terno (3), quaterna (4), cinquina (5), fino alla tombola, che si ottiene coprendo tutti e 15 i numeri della cartella.",
            ],
          },
          { type: "p", text: "Non serve fortuna soltanto: la tombola napoletana è anche intrattenimento puro, fatto di battute, doppi sensi e improvvisazione — è proprio questa parte che Tumbulella riprende e rilancia." },
        ],
      },
      {
        heading: "La storia della Smorfia e della Cabala a Napoli",
        blocks: [
          { type: "p", text: "La Smorfia napoletana, chiamata anche Cabala, è il libro non scritto — tramandato oralmente di generazione in generazione — che associa a ciascuno dei 90 numeri del lotto un significato: un oggetto, una persona, una situazione della vita quotidiana, spesso legata ai sogni." },
          { type: "p", text: "Le sue origini si perdono nel tempo e restano in parte incerte. Una delle piste più accreditate la collega alla Cabala ebraica (la Qabbalah), la tradizione mistica secondo cui ogni parola e ogni lettera nasconde un significato più profondo da interpretare: un principio che i napoletani hanno reinterpretato in chiave popolare e goliardica, molto lontana dalla solennità originaria. Un'altra ipotesi risale fino alla civiltà greca, ad Artemidoro di Daldi, che nel suo trattato sui sogni cominciò a mettere in relazione le visioni notturne con significati nascosti — da cui deriverebbe anche il nome «Smorfia», legato a Morfeo, dio del sogno." },
          { type: "p", text: "Qualunque sia la vera origine, ciò che rende unica la Smorfia napoletana è come il popolo se ne sia appropriato: l'ha resa concreta, ironica, a tratti irriverente. I numeri non restano legati solo ai sogni, ma diventano personaggi, oggetti, situazioni della vita di ogni giorno — dal Re al morto che parla, dalla disgrazia alla festa — spesso con un secondo significato allusivo, affidato all'arte antica dell'eufemismo." },
          { type: "p", text: "Ogni quartiere di Napoli, nel tempo, ha sviluppato le proprie varianti e le proprie «tombolelle»: improvvisazioni recitate a ogni numero estratto, in cui la chiamante — spesso una vera protagonista di queste serate — costruiva sul momento piccole storie, intrecciando i significati dei numeri via via che uscivano, tra risate e ammiccamenti. È esattamente questa tradizione orale, viva nei bassi e nei vicoli della città, che Tumbulella prova a far rivivere in una veste digitale, senza perdere lo spirito originale: ironico, popolare, un po' scabroso — e sempre, prima di tutto, divertente." },
        ],
      },
    ],
  },
  nap: {
    title: "Ch'è Tumbulella",
    tagline: "'A tombola napulitana cuntata da 'n'antica tradizione, a modo moderno.",
    sections: [
      {
        heading: "Ch'è Tumbulella",
        blocks: [
          { type: "p", text: "Tumbulella nun è nu gioco completo, e nun vò pigliá 'o posto d''a tombola overa. È nu cumpagno 'e gioco: nu supporto pensato pe' fa addeventá ancora cchiù bella 'a tombola ca già ve iucate cu ll'amice e 'ncoppa â famiglia, aggiungenno n'elemento 'e cchiù — 'na storia, buffa e ogni tanto nu poco spinta, ca nasce nummero dopo nummero, man mano ca ll'estraite." },
          { type: "p", text: "Vuie restate 'e protagoniste d''a partita: cartelle, fasule o ciceri pe' cummigliá 'e nummere, chi grira «Tombola!» oppure chi grira «Ambo» doppo 'o primmo nummero." },
          { type: "p", text: "Tumbulella se limita ad accumpagná ogne nummero astratto cu 'a voce soia, 'a Smorfia, e trasforma ll'estrazione 'n'nu raccunto ca se costruisce sulo sulo, cu 'o ritmo e ll'ironia d''a tradizione napulitana." },
        ],
      },
      {
        heading: "'A tombola: ch'è e comme se ioca",
        blocks: [
          { type: "p", text: "'A tombola è uno d''e ggiochi cchiù amate d''e feste italiane, sopratutto a Napule, addó è protagonista senza discussione d''e serate 'e Natale e Capodanno. 'O gioco d''o lotto addó nasce vene 'a Genova int' 'o 1539, ma è a Napule ca 'a tombola comme 'a canoscimmo ogge piglia forma, addeventanno nu rito collettivo fatto 'e cartelle, nummere urlate a voce àuta e significate popolare legate a ogne nummero." },
          { type: "h4", text: "Comme se ioca, 'nzomma:" },
          {
            type: "list",
            items: [
              "Ogne iucatore tene 'na cartella o cchiù, ognuna cu 15 nummere 'a 1 a 90, mise 'ncoppa tre righe.",
              "A turno, 'na persona ('a chiammante') astrae nu nummero â vota 'a 'nu sacchetiello o 'nu panariello ('o cesto 'ntrecciato tradizionale) e ll'annunzia a voce àuta, spisso cu 'o nomme soio d''a Smorfia.",
              "Chi tene chillu nummero 'ncoppa 'a cartella soia 'o cummoglia, tipicamente cu legumi secche (fasule o ciceri) o gettune.",
              "Se vence completanno, 'nzerie, 'na combinazione 'e nummere 'ncoppa 'na riga: ambo (2 nummere), terno (3), quaterna (4), cinquina (5), fino â tombola, ca s'ottene cummuglianno tutte e 15 'e nummere d''a cartella.",
            ],
          },
          { type: "p", text: "Nun serve sulo 'a fortuna: 'a tombola napulitana è pure spasso puro, fatto 'e battute, doppie senze e 'mprovvisazione — è proprio chesta parte ca Tumbulella piglia e allanga." },
        ],
      },
      {
        heading: "'A storia d''a Smorfia e d''a Cabala a Napule",
        blocks: [
          { type: "p", text: "'A Smorfia napulitana, chiammata pure Cabala, è 'o libro nun scritto — tramannato a voce 'e generazione 'n generazione — ca associa a ognuno d''e 90 nummere d''o lotto nu significato: n'oggetto, 'na persona, 'na situazione d''a vita 'e tutte 'e juorne, spisso legata a' suonne." },
          { type: "p", text: "'E origine soie se perdeno int' 'o tiempo e restano 'nparte 'ncerte. 'Na d''e piste cchiù accreditate 'a collega â Cabala ebraica ('a Qabbalah), 'a tradizione mistica seconno 'a quale ogne parola e ogne lettera annasconne nu significato cchiù profunno 'a 'nterpretá: nu principio ca 'e napulitane hanno 'nterpretato n'ata vota a modo popolare e goliardico, luntano assaie d''a solennità 'e primma. N'ata ipotesi resale fino â civiltà greca, a Artemidoro 'e Daldi, ca int' 'o trattato suio ncopp' 'e suonne accumminciaie a mettere 'n relazione 'e visione 'e notte cu significate annascuoste — 'a addó derivarrìa pure 'o nomme «Smorfia», legato a Morfeo, dio d''o suonno." },
          { type: "p", text: "Qualunque sia 'a vera origine, chello ca fa unica 'a Smorfia napulitana è comme 'o popolo se ll'ha pigliata pe' isso: ll'ha fatta cuncreta, ironica, e ogni tanto nu poco irriverente. 'E nummere nun restano legate sulo a' suonne, ma addeventano personagge, oggette, situazione d''a vita 'e ogne ghiuorno — d' 'o Rre â muorto ca parla, d''a disgrazzia â festa — spisso cu 'nu seconno significato allusivo, affidato all'arte antica dell'eufemismo." },
          { type: "p", text: "Ogne quartiere 'e Napule, cu 'o tiempo, ha sviluppato 'e varianti soie e 'e «tombolelle» soie: 'mprovvisazione recitate a ogne nummero astratto, addó 'a chiammante — spisso 'na vera protagonista 'e sti serate — costruiva ncopp' 'o mumento piccole storie, 'ntricciando 'e significate d''e nummere man mano ca ascevano, tra resate e ammiccamiente. È proprio chesta tradizione orale, viva int' 'e bbasse e int' 'e viche d''a città, ca Tumbulella prova a fá rivivere 'n na veste digitale, senza perdere 'o spirito originale: ironico, popolare, 'nu poco spinto — e sempe, primma 'e tutto, divertente." },
        ],
      },
    ],
  },
  en: {
    title: "What is Tumbulella",
    tagline: "The Neapolitan tombola, told through an ancient tradition, in a modern key.",
    sections: [
      {
        heading: "What is Tumbulella",
        blocks: [
          { type: "p", text: "Tumbulella isn't a complete game, and it doesn't want to replace real tombola. It's a playing companion: a tool designed to make the tombola you already play with friends and family even more fun, by adding one extra element — a story, funny and sometimes a bit racy, that's born number after number, as you draw them." },
          { type: "p", text: "You remain the stars of the game: cards, beans or chickpeas to cover the numbers, someone shouting «Tombola!» or someone shouting «Ambo» after the first number." },
          { type: "p", text: "Tumbulella simply accompanies each number drawn with its voice, the Smorfia, turning the draw into a story that builds itself, with the rhythm and irony of Neapolitan tradition." },
        ],
      },
      {
        heading: "Tombola: what it is and how to play",
        blocks: [
          { type: "p", text: "Tombola is one of the most beloved games of Italian holidays, especially in Naples, where it's the undisputed star of Christmas and New Year's Eve evenings. The lottery game it derives from was born in Genoa in 1539, but it's in Naples that tombola as we know it today took shape, becoming a collective ritual made of cards, numbers shouted out loud, and popular meanings tied to each number." },
          { type: "h4", text: "How to play, in brief:" },
          {
            type: "list",
            items: [
              "Each player has one or more cards, each with 15 numbers from 1 to 90, arranged over three rows.",
              "In turn, one person (the «caller») draws one number at a time from a bag or a panariello (the traditional woven basket) and announces it out loud, often together with its name from the Smorfia.",
              "Whoever has that number on their card covers it, typically with dried legumes (beans or chickpeas) or tokens.",
              "You win by completing, in order, a combination of numbers on one row: ambo (2 numbers), terno (3), quaterna (4), cinquina (5), all the way to tombola, achieved by covering all 15 numbers on the card.",
            ],
          },
          { type: "p", text: "It's not just about luck: Neapolitan tombola is also pure entertainment, made of jokes, double meanings and improvisation — and it's exactly this part that Tumbulella picks up and relaunches." },
        ],
      },
      {
        heading: "The history of the Smorfia and the Cabala in Naples",
        blocks: [
          { type: "p", text: "The Neapolitan Smorfia, also called Cabala, is the unwritten book — handed down orally from generation to generation — that assigns each of the 90 lottery numbers a meaning: an object, a person, an everyday situation, often tied to dreams." },
          { type: "p", text: "Its origins are lost in time and remain partly uncertain. One of the most credited theories links it to the Jewish Kabbalah (the Qabbalah), the mystical tradition according to which every word and every letter hides a deeper meaning to interpret — a principle Neapolitans reinterpreted in a popular, jovial key, far from its original solemnity. Another hypothesis traces back to Greek civilization, to Artemidorus of Daldis, who in his treatise on dreams began linking night visions to hidden meanings — from which the name «Smorfia» would also derive, tied to Morpheus, god of dreams." },
          { type: "p", text: "Whatever its true origin, what makes the Neapolitan Smorfia unique is how the people made it their own: they made it concrete, ironic, at times irreverent. The numbers aren't only tied to dreams, but become characters, objects, everyday-life situations — from the King to the talking dead man, from misfortune to celebration — often with a second, allusive meaning, entrusted to the ancient art of euphemism." },
          { type: "p", text: "Over time, every neighbourhood of Naples developed its own variants and its own «tombolelle»: improvisations recited at every number drawn, in which the caller — often a real star of those evenings — built little stories on the spot, weaving together the meanings of the numbers as they came out, amid laughter and winks. It's exactly this oral tradition, alive in the city's bassi and alleyways, that Tumbulella tries to bring back to life in a digital form, without losing its original spirit: ironic, popular, a bit racy — and always, above all, fun." },
        ],
      },
    ],
  },
  es: {
    title: "Qué es Tumbulella",
    tagline: "El bingo napolitano contado por una antigua tradición, en clave moderna.",
    sections: [
      {
        heading: "Qué es Tumbulella",
        blocks: [
          { type: "p", text: "Tumbulella no es un juego completo, y no quiere sustituir al bingo de verdad. Es un compañero de juego: un apoyo pensado para hacer aún más divertido el bingo que ya jugáis entre amigos y en familia, añadiendo un elemento más — una historia, graciosa y a veces un poco picante, que nace número tras número, a medida que los vais sacando." },
          { type: "p", text: "Vosotros seguís siendo los protagonistas de la partida: cartones, judías o garbanzos para cubrir los números, quien grita «¡Bingo!» o quien grita «Ambo» después del primer número." },
          { type: "p", text: "Tumbulella se limita a acompañar cada número extraído con su voz, la Smorfia, transformando la extracción en un relato que se construye solo, con el ritmo y la ironía de la tradición napolitana." },
        ],
      },
      {
        heading: "El bingo: qué es y cómo se juega",
        blocks: [
          { type: "p", text: "El bingo es uno de los juegos más queridos de las fiestas italianas, sobre todo en Nápoles, donde es protagonista indiscutible de las noches de Navidad y Fin de Año. El juego de la lotería del que deriva nace en Génova en 1539, pero es en Nápoles donde el bingo tal como lo conocemos hoy toma forma, convirtiéndose en un rito colectivo hecho de cartones, números gritados en voz alta y significados populares ligados a cada número." },
          { type: "h4", text: "Cómo se juega, en resumen:" },
          {
            type: "list",
            items: [
              "Cada jugador tiene uno o más cartones, cada uno con 15 números del 1 al 90, dispuestos en tres filas.",
              "Por turnos, una persona (la «cantora») saca un número a la vez de una bolsa o un panariello (la cesta trenzada tradicional) y lo anuncia en voz alta, a menudo junto con su nombre en la Smorfia.",
              "Quien tenga ese número en su cartón lo cubre, normalmente con legumbres secas (judías o garbanzos) o fichas.",
              "Se gana completando, por orden, una combinación de números en una fila: ambo (2 números), terno (3), cuaterna (4), quina (5), hasta el bingo, que se consigue cubriendo los 15 números del cartón.",
            ],
          },
          { type: "p", text: "No hace falta solo suerte: el bingo napolitano es también puro entretenimiento, hecho de bromas, dobles sentidos e improvisación — y es precisamente esta parte la que Tumbulella recoge y relanza." },
        ],
      },
      {
        heading: "La historia de la Smorfia y de la Cábala en Nápoles",
        blocks: [
          { type: "p", text: "La Smorfia napolitana, también llamada Cábala, es el libro no escrito — transmitido oralmente de generación en generación — que asocia a cada uno de los 90 números de la lotería un significado: un objeto, una persona, una situación de la vida cotidiana, a menudo ligada a los sueños." },
          { type: "p", text: "Sus orígenes se pierden en el tiempo y siguen siendo en parte inciertos. Una de las hipótesis más acreditadas la vincula con la Cábala judía (la Qabbalah), la tradición mística según la cual cada palabra y cada letra esconde un significado más profundo que interpretar: un principio que los napolitanos reinterpretaron en clave popular y desenfadada, muy lejos de la solemnidad original. Otra hipótesis se remonta a la civilización griega, a Artemidoro de Daldis, que en su tratado sobre los sueños empezó a relacionar las visiones nocturnas con significados ocultos — de donde derivaría también el nombre «Smorfia», ligado a Morfeo, dios del sueño." },
          { type: "p", text: "Sea cual sea el verdadero origen, lo que hace única a la Smorfia napolitana es cómo el pueblo se la apropió: la hizo concreta, irónica, a veces irreverente. Los números no quedan ligados solo a los sueños, sino que se convierten en personajes, objetos, situaciones de la vida cotidiana — del Rey al muerto que habla, de la desgracia a la fiesta — a menudo con un segundo significado alusivo, confiado al antiguo arte del eufemismo." },
          { type: "p", text: "Cada barrio de Nápoles, con el tiempo, desarrolló sus propias variantes y sus propias «tombolelle»: improvisaciones recitadas con cada número extraído, en las que la cantora — a menudo una verdadera protagonista de esas veladas — construía sobre la marcha pequeñas historias, entrelazando los significados de los números a medida que salían, entre risas y guiños. Es exactamente esta tradición oral, viva en los bajos y callejones de la ciudad, la que Tumbulella intenta hacer revivir en formato digital, sin perder el espíritu original: irónico, popular, un poco picante — y siempre, ante todo, divertido." },
        ],
      },
    ],
  },
};

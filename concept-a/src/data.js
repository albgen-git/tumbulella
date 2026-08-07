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

var voicesReadyPromise = null;
function ensureVoicesLoaded() {
  if (voicesReadyPromise) return voicesReadyPromise;
  voicesReadyPromise = new Promise(function (resolve) {
    var synth = window.speechSynthesis;
    if (!synth) return resolve([]);
    var existing = synth.getVoices();
    if (existing.length) return resolve(existing);
    synth.onvoiceschanged = function () {
      resolve(synth.getVoices());
    };
    // Fallback: alcuni browser non sparano mai onvoiceschanged.
    setTimeout(function () {
      resolve(synth.getVoices());
    }, 1000);
  });
  return voicesReadyPromise;
}

function pickVoice(voices, bcp47) {
  var exact = voices.filter(function (v) {
    return v.lang === bcp47;
  });
  if (exact.length) return exact[0];
  var base = bcp47.split("-")[0];
  var sameLang = voices.filter(function (v) {
    return v.lang && v.lang.indexOf(base) === 0;
  });
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
  return ensureVoicesLoaded().then(function (voices) {
    return new Promise(function (resolve) {
      var utter = new SpeechSynthesisUtterance(text);
      utter.lang = bcp47;
      var voice = pickVoice(voices, bcp47);
      if (voice) utter.voice = voice;
      utter.onend = function () {
        resolve(true);
      };
      utter.onerror = function () {
        resolve(true);
      };
      synth.speak(utter);
    });
  });
};

window.stopSpeaking = function () {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
};

// Fase 1: solo numero + nome Smorfia (nessun aggancio al racconto).
window.buildCall = function (num, lang) {
  return num + ", " + meaningFor(num, lang);
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

// Fase 2: SEMPRE "numero, significato, scenetta" — la scenetta usa la
// famiglia di template giusta per il TIPO del numero appena uscito, quindi
// resta sensata anche per coppie non fisiche (es. "guardie" + "Natale").
window.buildNarration = function (clickIndex, num, prevNum, lang, intensity) {
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
      return prefix + fill(moveTpl, currMid, "");
    }
    var genericTpl = OPENER_GENERIC[langKey][level];
    return prefix + fill(genericTpl, currMid, "");
  }

  var prevMid = midSentence(prevNum, meaningFor(prevNum, langKey));
  // Per "place" ed "event" è {prev} il soggetto grammaticale (chi cade nel
  // luogo, chi festeggia); per tutte le altre categorie è {curr}.
  var subjectNum = (cat === "place" || cat === "event") ? prevNum : num;
  var form = isPluralNum(subjectNum) ? "plur" : "sing";
  var bank = CATEGORY_LINK[cat][langKey][level];
  var template = bank[form] || bank.sing;
  return prefix + fill(template, currMid, prevMid);
};

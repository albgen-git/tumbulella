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
  { code: "nap", label: "Napoletano", flag: "🎭", short: "NAP" },
  { code: "it", label: "Italiano", flag: "🇮🇹", short: "IT" },
  { code: "en", label: "English", flag: "🇬🇧", short: "EN" },
  { code: "es", label: "Español", flag: "🇪🇸", short: "ES" },
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
// Le costanti sotto valgono solo come fallback quando il TTS non è
// disponibile (altrimenti il ritmo lo detta la durata reale della voce, vedi
// speakOrWait) — TRANNE PAUSE_MS, sempre applicata (pausa fissa per cercare
// il numero sulla cartella). Ridotte per un ritmo più serrato.
// ---------------------------------------------------------------------------
window.TIMING = {
  CALL_MS: 900, // durata "lettura" della chiamata (fase 1)
  PAUSE_MS: 3000, // pausa per cercare il numero sulla cartella
  NARRATION_MS: 1300, // durata "lettura" della narrazione (fase 2)
};

window.STATUS_LABELS = {
  nap: { calling: "'A chiammante sta chiammanno...", pausa: "🔍 Ricerca d''o nummero...", narrando: "'A chiammante sta cuntanno...", idle: "In pausa" },
  it: { calling: "Il banditore sta chiamando...", pausa: "🔍 Ricerca del numero...", narrando: "Il banditore sta raccontando...", idle: "In pausa" },
  en: { calling: "The caller is announcing...", pausa: "🔍 Looking for the number...", narrando: "The caller is telling the story...", idle: "Waiting" },
  es: { calling: "El presentador está llamando...", pausa: "🔍 Buscando el número...", narrando: "El presentador está contando...", idle: "En espera" },
};

window.EMPTY_STATE_TEXT = {
  nap: "Struscia 'o dito 'ncoppa 'o tabbellone e clicca 'o primmo nummero pe' fa accummencià 'a storia.",
  it: "Sfiora il tabellone e clicca il primo numero per iniziare la storia.",
  en: "Tap the board and click the first number to start the story.",
  es: "Toca el tablero y pulsa el primer número para empezar la historia.",
};

// ---------------------------------------------------------------------------
// Pulsante "!" (esortazione): per i momenti di silenzio tra un numero e
// l'altro. Frasi statiche (frasi-pazze-{lingua}.txt nella root del repo),
// MAI generate dall'LLM e MAI mandate al motore di narrazione — pura
// animazione/intrattenimento, non entrano nel racconto scritto né vengono
// mostrate a schermo, solo lette ad alta voce.
// ---------------------------------------------------------------------------
window.EXCLAMATION_PHRASES = {
  nap: [
    "Jamm bell jamm", "Facimme ambress", "Datevi una mossa", "Forza ragazzi",
    "Cercate 'e nun addurmi'", "Maronna mia", "Azz, ma qua state durmenno?", "Uagliù, sveglia!",
    "Ma che aspettammo, 'o treno?", "Muovmmece, muovmmece", "E mo? Simme rimaste 'a mmiez' 'a via?",
    "Uh, che silenzio, mannaggia", "Ma sti nummere s'hann''a piglià sule?", "Forza e curaggio",
    "Jamme jamme, nun ce sta tiempo 'a perdere", "Chi dorme nun piglia pesce",
    "Sveglia sveglia, ca simme a bbuono punto", "Azz, chi ha rubato 'a voce a tutte quante?",
    "E mo parlate, no?", "Muoviteve, ca 'a tombola nun aspetta",
  ],
  it: [
    "Dai, forza, andiamo", "Diamoci una mossa", "Forza ragazzi", "Cercate di non addormentarvi",
    "Mamma mia", "Ehi, ma qui state dormendo?", "Sveglia, gente!", "Ma cosa aspettiamo, il treno?",
    "Muoviamoci, muoviamoci", "E adesso? Siamo rimasti a metà strada?", "Che silenzio, mannaggia",
    "Ma questi numeri si tirano fuori da soli?", "Forza e coraggio", "Andiamo, non c'è tempo da perdere",
    "Chi dorme non piglia pesci", "Sveglia sveglia, che siamo a buon punto",
    "Ma chi ha rubato la voce a tutti quanti?", "E allora, parlate o no?",
    "Muovetevi, che la tombola non aspetta", "Dai su, ancora pochi numeri",
  ],
  en: [
    "Come on, let's go", "Get a move on", "Come on, everyone", "Try not to fall asleep",
    "Oh my goodness", "Hey, is everyone asleep in here?", "Wake up, people!", "What are we waiting for, a bus?",
    "Let's move it, let's move it", "Well? Did we all doze off?", "So quiet in here, come on",
    "Are these numbers going to call themselves?", "Come on, courage", "Let's go, no time to lose",
    "The early bird catches the worm", "Wake up, wake up, we're doing great", "Who stole everyone's voice?",
    "Well? Speak up, will you?", "Get moving, the game won't wait", "Come on, just a few more numbers",
  ],
  es: [
    "Vamos, vamos", "Muévanse un poco", "Vamos, chicos", "Traten de no dormirse", "Madre mía",
    "Oye, ¿aquí todo el mundo está dormido?", "¡Despierten, gente!", "¿Qué esperamos, el autobús?",
    "Vamos, vamos, muévanse", "¿Y ahora? ¿Nos quedamos a mitad de camino?", "Qué silencio, por favor",
    "¿Estos números van a salir solos?", "Ánimo y valor", "Vamos, no hay tiempo que perder",
    "A quien madruga, Dios lo ayuda", "Despierten, despierten, vamos muy bien", "¿Quién le robó la voz a todos?",
    "¿Y bien? ¿Van a hablar o no?", "Muévanse, que el juego no espera", "Vamos, ya quedan pocos números",
  ],
};

window.pickRandomExclamation = function (lang) {
  var list = window.EXCLAMATION_PHRASES[lang] || window.EXCLAMATION_PHRASES.nap;
  return list[Math.floor(Math.random() * list.length)];
};

// ---------------------------------------------------------------------------
// Frase "riempitivo" al primo numero della partita, letta SEMPRE via Web
// Speech locale (mai Gemini) e in parallelo alla prima chiamata al backend
// (vedi playSequence in index.html): il backend su Render va in sleep dopo
// un po' di inattività e la prima richiesta può metterci fino a ~1 minuto a
// risvegliarlo. Senza questa frase, quel minuto sarebbe silenzio morto.
// ---------------------------------------------------------------------------
window.COLD_START_FILLER = {
  nap: "Jamme, sistemate 'e cartelle ca accumminciammo!",
  it: "Iniziate a sistemare le cartelle, si comincia!",
  en: "Start setting up your cards, here we go!",
  es: "Empezad a preparar los cartones, ya arrancamos!",
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

// Bug noto di Chrome/Edge: speechSynthesis "si addormenta" dopo periodi di
// inattività e può smettere di produrre audio pur continuando a generare
// normalmente gli eventi onstart/onend. Prima si teneva "sveglio" con
// pause/resume periodici MENTRE stava parlando, ma le nostre letture sono
// sempre brevi (pochi secondi) — interrompere una lettura in corso ogni 10s
// rischiava di far restare il motore bloccato a metà (sintomo: l'app resta
// ferma su "sta raccontando" senza mai sentire nulla né finire). Il risveglio
// va fatto SOLO prima di iniziare una nuova lettura (mai durante), vedi
// speakWebSpeech; qui sotto resta solo il timeout di sicurezza a livello di
// singola utterance.

// Nomi di voci tipicamente maschili per lingua (solo euristica sul nome:
// l'API Web Speech non espone il genere) — usati per restare sulla stessa
// identità vocale del progetto (voce maschile, come "Diego") anche quando
// Diego non è installato, invece di ricadere su qualunque voce disponibile
// per caso sul dispositivo. Causa nota della voce maschile su Edge desktop
// e femminile su Chrome mobile: prima la preferenza remoto/locale sceglieva
// voci diverse per pura disponibilità, non per genere.
var MALE_VOICE_NAME_PATTERNS = {
  it: /diego|cosimo|luca|giorgio|riccardo|matteo|paolo/i,
  en: /guy|david|mark|daniel|matthew|ryan|george|james/i,
  es: /jorge|pablo|[aá]lvaro|enrique|fernando|diego/i,
};

// Preferisce sempre la voce "Diego" (se presente nel browser/sistema),
// indipendentemente dalla lingua richiesta — per napoletano/italiano è la
// voce scelta per il progetto. Se non è disponibile, prova un'altra voce
// maschile nota per la lingua richiesta, poi ricade sulla vecchia logica
// (una voce Remote qualunque per la lingua, poi Local).
function pickVoice(voices, bcp47) {
  var base = bcp47.split("-")[0].toLowerCase();

  var diego = voices.filter(function (v) { return /diego/i.test(v.name); });
  if (diego.length) return diego[0];

  var malePattern = MALE_VOICE_NAME_PATTERNS[base];
  if (malePattern) {
    var maleMatches = voices.filter(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(base) === 0 && malePattern.test(v.name);
    });
    if (maleMatches.length) {
      var maleRemote = maleMatches.filter(function (v) { return !v.localService; });
      return maleRemote.length ? maleRemote[0] : maleMatches[0];
    }
  }

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

// TTS reale in napoletano via Gemini (voce "Puck", backend /api/tts) — vedi
// requirements.md. Ritorna true se riprodotto con successo; false se il
// backend non risponde/da errore, così window.speak ricade su Web Speech
// (mai un turno silenzioso solo perché il servizio a pagamento è giù).
function speakNapoletanoTTS(text) {
  return fetch(window.BACKEND_URL + "/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.blob();
    })
    .then(function (blob) {
      var url = URL.createObjectURL(blob);
      return new Promise(function (resolve) {
        var audio = new Audio(url);
        audio.onended = function () {
          URL.revokeObjectURL(url);
          resolve(true);
        };
        audio.onerror = function () {
          URL.revokeObjectURL(url);
          resolve(false);
        };
        audio.play().catch(function () {
          URL.revokeObjectURL(url);
          resolve(false);
        });
      });
    })
    .catch(function () {
      return false;
    });
}

// Legge `text` ad alta voce nella lingua `lang`. Risolve la Promise (con
// `true`) quando la lettura finisce; risolve subito con `false` se la TTS
// non è disponibile o è mutata, così il chiamante sa se deve ricadere sulla
// pausa fissa in window.TIMING. Per il napoletano prova prima il TTS reale
// (Gemini, voce "Puck"); se fallisce, ricade su Web Speech come le altre lingue.
window.speak = function (text, lang, muted) {
  if (muted) return Promise.resolve(false);
  if (lang === "nap") {
    return speakNapoletanoTTS(text).then(function (ok) {
      if (ok) {
        window.__lastVoiceUsed = "Gemini TTS (Puck)";
        return true;
      }
      return speakWebSpeech(text, lang, muted);
    });
  }
  return speakWebSpeech(text, lang, muted);
};

function speakWebSpeech(text, lang, muted) {
  var synth = window.speechSynthesis;
  if (muted || !synth || typeof SpeechSynthesisUtterance === "undefined") {
    return Promise.resolve(false);
  }
  // "Sveglia" il motore prima di ogni nuova lettura (mai durante una lettura
  // in corso, vedi nota sopra warmUpVoices) e ripulisce eventuali utterance
  // precedenti rimaste "appese" nella coda: in alcuni casi il motore vocale
  // si blocca su una lettura precedente e quella nuova non parte mai
  // (nessun suono, ma onend/onstart normali).
  synth.resume();
  synth.cancel();
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
    var settled = false;
    var safetyTimer = null;
    function finish(ok) {
      if (settled) return;
      settled = true;
      clearTimeout(safetyTimer);
      resolve(ok);
    }
    utter.onend = function () {
      finish(true);
    };
    utter.onerror = function () {
      finish(true);
    };
    // Rete di sicurezza: se il motore si blocca (nessun onend/onerror in
    // arrivo), non si resta fermi per sempre su "sta raccontando" — si
    // sblocca comunque la UI dopo un tempo ampio, proporzionale al testo.
    safetyTimer = setTimeout(function () {
      synth.cancel();
      finish(true);
    }, Math.max(4000, text.length * 110) + 4000);
    // Piccolo ritardo dopo cancel(): parlare nello stesso tick di un cancel()
    // può far perdere la nuova utterance in Chrome/Edge (bug noto).
    setTimeout(function () {
      synth.speak(utter);
    }, 30);
  });
};
window.speakWebSpeech = speakWebSpeech; // esposta per il filler audio d'avvio (index.html), che deve restare gratuito/locale anche per il napoletano

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

// Solo il significato, senza il numero — usato per arricchire (solo
// internamente, mai a schermo) il contesto del turno 1 con la parola vera,
// vedi playSequence in index.html.
window.meaningOnly = function (num, lang) {
  return meaningFor(num, lang);
};

// ---------------------------------------------------------------------------
// Backend reale (Python + FastAPI + Gemini): la fase 2 (narrazione) chiama
// POST /api/narrate — vedi window.fetchNarration, chiamato da index.html.
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
// appena uscito. Contesto per il MODELLO a costo pressoché costante per
// tutta la partita (vedi prompt-narrazione_1.md nella root del repo): mai
// una cronologia che cresce, solo le ULTIME DUE frasi generate + la parola
// nuova. Il primo numero della partita (previousSentences vuoto) non chiama
// nemmeno l'LLM: il backend pesca una frase statica da frasi-iniziali.txt.
// previousNumbers (tutti i numeri usciti finora, non solo gli ultimi due)
// viene mandato SOLO per il grassetto: il backend lo usa per evidenziare in
// modo deterministico le parole Smorfia realmente uscite nel testo generato,
// non viene passato al modello (è economico: solo numeri interi).
// Ritorna il testo della narrazione (stringa). Lancia un errore con `.kind`
// = "unreachable" (nessuna risposta: server spento, rete giù) oppure
// "backend_error" (risposta HTTP di errore, es. quota Gemini esaurita) — chi
// chiama sceglie il messaggio giusto in base al kind (vedi playSequence in
// index.html).
window.fetchNarration = async function (number, previousSentences, previousNumbers, language) {
  let res;
  try {
    res = await fetch(window.BACKEND_URL + "/api/narrate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        number: number,
        previous_sentences: previousSentences,
        previous_numbers: previousNumbers,
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

// Spezza un testo con marcatori **grassetto** (i soli usati dal backend, per
// evidenziare le parole Smorfia nella frase) in segmenti { text, bold }, per
// renderizzarli come <strong> in StoryPanel senza dover interpretare markdown
// generico. Esempio: "Ecco **'a fontana**!" -> [{text:"Ecco ",bold:false}, {text:"'a fontana",bold:true}, {text:"!",bold:false}]
window.splitBoldSegments = function (text) {
  var parts = String(text || "").split(/\*\*(.+?)\*\*/g);
  return parts.map(function (part, i) {
    return { text: part, bold: i % 2 === 1 };
  }).filter(function (seg) { return seg.text.length > 0; });
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
    downloadLink: { href: "Cartelle%20Tumbullella%20da%20stampare.pdf", text: "📄 Scarica le cartelle da stampare (PDF)" },
    donation: {
      text: "Se questo gioco ti piace e ci giochi spesso, offrimi un piccolo contributo per sostenere Tumbulella: l'audio e l'intelligenza artificiale che generano la storia hanno un costo ad ogni numero estratto.",
      linkText: "👉 paypal.me/AlbertoGenovese859",
      url: "https://paypal.me/AlbertoGenovese859",
    },
    credit: { text: "Questo gioco è un progetto AI realizzato da Alberto Genovese. Per informazioni, scrivete a", email: "info@tumbulella.it" },
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
    downloadLink: { href: "Cartelle%20Tumbullella%20da%20stampare.pdf", text: "📄 Scarica 'e cartelle da stampá (PDF)" },
    donation: {
      text: "Se questo gioco ti piace e ci giochi spesso, offrimi un piccolo contributo per sostenere Tumbulella: l'audio e l'intelligenza artificiale che generano la storia hanno un costo ad ogni numero estratto.",
      linkText: "👉 paypal.me/AlbertoGenovese859",
      url: "https://paypal.me/AlbertoGenovese859",
    },
    credit: { text: "Questo gioco è un progetto AI realizzato da Alberto Genovese. Per informazioni, scrivete a", email: "info@tumbulella.it" },
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
    downloadLink: { href: "Cartelle%20Tumbullella%20da%20stampare.pdf", text: "📄 Download printable cards (PDF)" },
    donation: {
      text: "Se questo gioco ti piace e ci giochi spesso, offrimi un piccolo contributo per sostenere Tumbulella: l'audio e l'intelligenza artificiale che generano la storia hanno un costo ad ogni numero estratto.",
      linkText: "👉 paypal.me/AlbertoGenovese859",
      url: "https://paypal.me/AlbertoGenovese859",
    },
    credit: { text: "Questo gioco è un progetto AI realizzato da Alberto Genovese. Per informazioni, scrivete a", email: "info@tumbulella.it" },
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
    downloadLink: { href: "Cartelle%20Tumbullella%20da%20stampare.pdf", text: "📄 Descargar los cartones para imprimir (PDF)" },
    donation: {
      text: "Se questo gioco ti piace e ci giochi spesso, offrimi un piccolo contributo per sostenere Tumbulella: l'audio e l'intelligenza artificiale che generano la storia hanno un costo ad ogni numero estratto.",
      linkText: "👉 paypal.me/AlbertoGenovese859",
      url: "https://paypal.me/AlbertoGenovese859",
    },
    credit: { text: "Questo gioco è un progetto AI realizzato da Alberto Genovese. Per informazioni, scrivete a", email: "info@tumbulella.it" },
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

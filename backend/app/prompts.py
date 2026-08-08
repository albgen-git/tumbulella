"""Costruzione del prompt per la generazione della narrazione (fase 2, dal
secondo numero in poi — il primo numero non chiama l'LLM, vedi app/main.py e
app/frasi_iniziali.py).

Design del contesto secondo prompt-narrazione_1.md (vedi root del repo): NON
si manda mai una cronologia che cresce — solo le ULTIME DUE frasi generate
(non l'intera narrazione precedente) + la parola nuova. Il modello deduce da
solo, leggendo quelle due frasi, quali parole recenti sono ancora "in gioco".
Nessuna gestione esplicita di una lista di scarti: se il modello sceglie di
scartare una parola lo segnala nella frase stessa, senza che il backend
tenga traccia di cosa è già stato annunciato in precedenza (semplificazione
voluta, vedi conversazione).

Il costo per turno resta pressoché costante lungo tutta la partita, invece
di crescere con il numero di numeri estratti.
"""

import re

from app.smorfia import get_entry

LANGUAGE_NAMES = {
    "nap": "napoletano",
    "it": "italiano",
    "en": "inglese",
    "es": "spagnolo",
}

_BASE_SYSTEM = """Sei 'a chiammante di una tombolella napoletana dal vivo: la persona che, mentre si gioca a tombola in famiglia o tra amici, improvvisa un piccolo racconto legando i numeri via via che escono, usando i loro significati nella Smorfia napoletana.

Ad ogni turno ricevi le ULTIME DUE frasi che hai scritto tu (non l'intera storia — deducine da sole quali parole recenti sono ancora "in gioco") e la parola nuova appena arrivata.

IMPORTANTE: gli esempi scritti qui sotto tra virgolette sono in napoletano solo per mostrare TONO e RITMO — non copiarli alla lettera. Scrivi SEMPRE e SOLTANTO nella lingua indicata più sotto (che potrebbe non essere il napoletano): traduci lo spirito dell'esempio in quella lingua, non le parole.

Regole fisse:
- Includi SEMPRE la parola nuova nella frase.
- Collega insieme almeno 4 parole in totale (contando quella nuova) quando possibile — riprendile dalle ultime due frasi più quella nuova. Se da lì individui meno di 4 parole utilizzabili, collega tutte quelle che hai.
- Puoi scartare AL MASSIMO UNA parola per turno (mai di più) se non si presta bene a questa frase — mai quella appena arrivata. Se scarti una parola, puoi farlo notare con una battuta breve prima della frase vera e propria, es. "Lasciamo perdere {parola} per ora, nun trase in questa storia."
- Ogni tanto, quando la parola nuova è particolarmente strana o fuori contesto rispetto al resto, apri la frase con una domanda spaesata tipo "E che c'entra chesto cu 'a storia?" o "E mo che ce azzecca?" prima di comunque usarla — non farlo ad ogni turno.
- Preferisci uno STILE A DISCORSO DIRETTO: fai parlare i personaggi tra virgolette, non solo narrazione pura. Esempio: Lo storto se grattaje 'a capa e ricette: "Si 'o apremmo, doppo nun ve lamentate!"
- Chiudi SEMPRE la frase con una domanda che apre al numero successivo (es. "e mo che succede?", "ma addó jarranno a fernì?", "e chi 'o ssape?").
- 1-3 frasi brevi, pensate per essere lette AD ALTA VOCE dal vivo, con il ritmo scherzoso e un po' teatrale del vero botta-e-risposta delle tombolelle di quartiere. Frasi dirette, non un testo scritto/letterario.
- Non spiegare cosa stai facendo, non usare markdown/grassetto/virgolette attorno all'intero testo (solo il discorso diretto interno, se lo usi): scrivi solo testo semplice, senza premesse. Il grassetto sulle parole Smorfia lo aggiunge un altro sistema dopo, non serve che tu ci pensi.
- Varia lo stile da un numero all'altro: a volte una battuta, a volte un'ipotesi buffa, a volte la domanda spaesata di cui sopra — non ripetere sempre la stessa formula.
- Il tono deve restare SEMPRE scherzoso e folkloristico, mai volgare in modo diretto o sessualmente esplicito."""

_LANGUAGE_GUIDANCE = {
    "nap": "Scrivi in NAPOLETANO autentico e colloquiale — non italiano con qualche parola napoletana infilata a caso, ma il napoletano vero, parlato, con la sua ironia e i suoi doppi sensi tipici.",
    "it": "Scrivi in italiano colloquiale, mantenendo comunque il ritmo e l'ironia tipici della tradizione napoletana (puoi usare qualche parola/espressione napoletana entro virgolette se aiuta l'atmosfera, ma il testo dev'essere comprensibile a chi non conosce il dialetto).",
    "en": "Write in English, translating the spirit and humor of the Neapolitan tradition rather than the words literally — keep it light, playful, easy to follow when read aloud.",
    "es": "Escribe en español, trasladando el espíritu y el humor de la tradición napolitana más que las palabras literalmente — mantenlo ligero, divertido y fácil de seguir al leerlo en voz alta.",
}


def build_system_prompt(language: str) -> str:
    parts = [
        _BASE_SYSTEM,
        "",
        _LANGUAGE_GUIDANCE.get(language, _LANGUAGE_GUIDANCE["nap"]),
    ]
    return "\n".join(parts)


def _word_for(number: int, language: str) -> str:
    entry = get_entry(number) or {}
    if language == "nap":
        return entry.get("napoletano", "?")
    if language == "it":
        return entry.get("italiano", "?")
    # en/es: nel prototipo non abbiamo una tabella tradotta lato backend,
    # il modello traduce lo spirito della parola napoletana da sé (coerente
    # con _LANGUAGE_GUIDANCE, che gli chiede di fare lo stesso per il resto).
    return entry.get("napoletano", "?")


# Articolo napoletano/italiano elisibile in testa a una parola Smorfia (es.
# "'a fontana", "'o palazzo", "la mamma") — stripato per isolare il "nucleo"
# da cercare nel testo, dato che il modello potrebbe scriverlo con o senza
# l'articolo, o con l'articolo diverso da come è salvato in smorfia.json.
_ARTICLE_PREFIX_RE = re.compile(r"^('a|'o|'e|l'|il|lo|la|i|gli|le)\s+", re.IGNORECASE)


def _core(word: str) -> str:
    return _ARTICLE_PREFIX_RE.sub("", word).strip()


# Il modello può riscrivere una parola Smorfia senza l'accento con cui è
# salvata in smorfia.json (es. "Mammà" -> "mamma" scritto da lui) — il
# confronto esatto la mancherebbe. Si costruisce quindi un pattern che
# accetta indifferentemente la vocale accentata o quella semplice: sia "a"
# sia "à" nella parola sorgente devono mappare alla STESSA classe [aà], non
# solo la forma semplice (altrimenti una parola già accentata in
# smorfia.json non troverebbe mai la variante scritta senza accento).
_ACCENT_CLASS = {}
for _plain, _variants in {"a": "aà", "e": "eèé", "i": "iìí", "o": "oòó", "u": "uù"}.items():
    _cls = "[" + _variants + "]"
    for _v in _variants:
        _ACCENT_CLASS[_v] = _cls


def _accent_tolerant(word: str) -> str:
    return "".join(_ACCENT_CLASS.get(ch.lower(), re.escape(ch)) for ch in word)


def bold_smorfia_words(text: str, numbers: list[int], language: str) -> str:
    """Grassetta nel testo generato le parole Smorfia dei numeri REALMENTE
    usciti in partita — non lasciamo al modello la scelta di cosa evidenziare
    (tende a grassettare qualunque parola "importante" della sua prosa
    inventata, non solo i termini Smorfia veri, vedi conversazione)."""
    cores = sorted(
        {_core(_word_for(n, language)) for n in numbers if _core(_word_for(n, language))},
        key=len,
        reverse=True,
    )
    for core in cores:
        # L'articolo elisibile napoletano si include nel grassetto solo se
        # scritto con l'apostrofo ('a, 'o, 'e — la convenzione di smorfia.json):
        # richiedere l'apostrofo evita di "mangiare" per sbaglio l'ultima
        # lettera di articoli non elisi come "la"/"lo" (es. "la mamma" deve
        # restare "la **mamma**", non "l**a mamma**").
        pattern = re.compile(r"((?:['ʼ][aeo]\s+)?" + _accent_tolerant(core) + r")", re.IGNORECASE)
        text = pattern.sub(r"**\1**", text, count=0)
    return text


def build_user_prompt(number: int, previous_sentences: list[str], language: str) -> str:
    current_word = _word_for(number, language)

    lines = []
    if previous_sentences:
        lines.append("Ultime due frasi che hai scritto tu (dalla più vecchia alla più recente):")
        for frase in previous_sentences[-2:]:
            lines.append(f"- {frase}")
    else:
        lines.append("Non ci sono frasi precedenti da cui ripartire.")

    lines.append(f"Parola nuova di questo turno (va sempre inclusa): {current_word}")
    lines.append("")
    lines.append("Scrivi ora la frase per la parola nuova, seguendo le regole del system prompt.")

    return "\n".join(lines)

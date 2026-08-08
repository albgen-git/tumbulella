#!/usr/bin/env python3
"""
Test di simulazione partita — Tumbulella

Simula una partita di N numeri estratti, chiamando l'API Claude ad ogni
turno con la logica "stato compatto" (ultima frase + lista scarti annunciati,
mai la cronologia completa né l'intero file smorfia.json).

Uso:
  python3 test_partita.py                     # partita reale via API Claude
  python3 test_partita.py --mock              # simulazione offline, senza chiamate API
  python3 test_partita.py --numeri 30          # partita da 30 numeri invece di 20
  python3 test_partita.py --intensita spinto   # livello di intensità

Richiede:
  - variabile d'ambiente ANTHROPIC_API_KEY impostata (non necessaria in --mock)
  - libreria anthropic:  pip install anthropic
  - il file smorfia.json nella stessa cartella (o passare --smorfia path)
"""

import json
import random
import argparse
import os
import sys

# ---------------------------------------------------------------------------
# Prezzi indicativi per stima costo (verifica sempre i prezzi correnti su
# https://docs.claude.com — questi sono solo per avere un ordine di grandezza)
# ---------------------------------------------------------------------------
PREZZI_PER_MILIONE = {
    "claude-sonnet-5": {"input": 2.0, "output": 10.0},
    "claude-haiku-4-5-20251001": {"input": 1.0, "output": 5.0},
    "claude-opus-4-8": {"input": 5.0, "output": 25.0},
}

SYSTEM_PROMPT = """Facciamo un gioco della tombola napoletana.
Io ti do due parole a caso e tu mi crei una frase divertente che le collega.
Poi ti do una terza parola e tu mi crei una frase divertente che le collega.
Poi ti do una quarta parola e tu mi crei una frase divertente che ne collega almeno tre, scegliendo quelle più sensate o divertenti.
Poi ti do una quinta parola e tu mi crei una frase divertente che ne collega almeno quattro, scegliendo quelle più sensate o divertenti.
Per le parole successive, scegli sempre almeno quattro parole, scegliendo quelle più sensate o divertenti.

Non scartare mai l'ultima parola che è arrivata in input.
Puoi scartare al massimo una parola per turno.

Quando scarti una parola, provi a farlo presente. Esempio, se scarti il porco dici
all'inizio della risposta "Lasciamo stare adesso il porco che fa parte di un'altra storia".
Non ripetere l'annuncio di scarto per una parola già segnalata come scartata in precedenza
(ti verrà indicato quali parole sono già state annunciate come scartate).

Ogni tanto, quando esce qualche parola strana, inserisci una domanda iniziale del tipo
"E cosa c'entra con questa storia?" oppure "Cosa ci facciamo?".

Concludi ogni frase con una domanda che apre un contesto per il numero successivo.
Esempio: "e cosa fanno?" oppure "ma dove andranno?" oppure "cosa succederà adesso".

Preferisci uno stile con discorso diretto. Esempio: Lo storto si grattò la testa e disse:
"Se la apriamo, poi non lamentatevi!"

Metti in grassetto (tra **asterischi**) le parole della Smorfia usate nella frase.

Livello di intensità richiesto: {intensita}. Con intensità "spinto" puoi giocare con doppi
sensi ed eufemismi nello spirito della tradizione della Smorfia napoletana, restando comunque
scherzoso e mai esplicito.

IMPORTANTE — rispondi SOLO con un oggetto JSON valido, senza testo prima o dopo, con questa struttura esatta:
{{
  "frase": "la frase generata, con le parole Smorfia in **grassetto**",
  "scarto": null oppure {{"parola": "nome della parola scartata in questo turno", "annuncia": true oppure false}}
}}
Imposta "annuncia": true solo se questa parola non era già stata annunciata come scartata prima
(controlla la lista degli scarti già annunciati che ti viene fornita)."""


def carica_smorfia(path):
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    return data["numeri"]


def costruisci_messaggio_utente(numero, voce_smorfia, ultima_frase, scarti_annunciati):
    parola = voce_smorfia["napoletano"]
    italiano = voce_smorfia["italiano"]
    righe = [
        f"Numero estratto: {numero}",
        f"Parola Smorfia: {parola} ({italiano})",
    ]
    if ultima_frase:
        righe.append(f"Frase precedente: {ultima_frase}")
    else:
        righe.append("Frase precedente: (nessuna, è il primo numero)")
    if scarti_annunciati:
        righe.append(f"Parole già annunciate come scartate: {', '.join(scarti_annunciati)}")
    else:
        righe.append("Parole già annunciate come scartate: nessuna")
    return "\n".join(righe)


def chiama_claude(client, model, intensita, messaggio_utente):
    system = SYSTEM_PROMPT.format(intensita=intensita)
    response = client.messages.create(
        model=model,
        max_tokens=300,
        system=system,
        messages=[{"role": "user", "content": messaggio_utente}],
    )
    testo = response.content[0].text
    usage = response.usage
    return testo, usage.input_tokens, usage.output_tokens


def chiama_mock(messaggio_utente, turno):
    # Risposta finta per testare la logica dello script senza chiamare l'API
    parola = messaggio_utente.split("Parola Smorfia: ")[1].split(" (")[0]
    frase = f"[MOCK turno {turno}] Qualcosa succede con **{parola}**... e poi cosa succederà?"
    input_tok = 180 + turno * 5   # stima finta, cresce pochissimo
    output_tok = 40
    return json.dumps({"frase": frase, "scarto": None}), input_tok, output_tok


def stima_costo(model, input_tokens, output_tokens):
    prezzi = PREZZI_PER_MILIONE.get(model)
    if not prezzi:
        return None
    return (input_tokens / 1_000_000) * prezzi["input"] + (output_tokens / 1_000_000) * prezzi["output"]


def main():
    parser = argparse.ArgumentParser(description="Simula una partita Tumbulella e misura costo/qualità")
    parser.add_argument("--numeri", type=int, default=25, help="Quanti numeri estrarre nella partita simulata")
    parser.add_argument("--intensita", choices=["soft", "spinto"], default="soft")
    parser.add_argument("--model", default="claude-sonnet-5")
    parser.add_argument("--smorfia", default="smorfia.json")
    parser.add_argument("--mock", action="store_true", help="Non chiama l'API, usa risposte finte per testare la logica")
    parser.add_argument("--seed", type=int, default=None, help="Seed per rendere ripetibile l'estrazione dei numeri")
    args = parser.parse_args()

    if args.seed is not None:
        random.seed(args.seed)

    smorfia = carica_smorfia(args.smorfia)
    numeri_estratti = random.sample(range(1, 91), min(args.numeri, 90))

    client = None
    if not args.mock:
        try:
            import anthropic
        except ImportError:
            print("Manca la libreria 'anthropic'. Installala con: pip install anthropic --break-system-packages")
            sys.exit(1)
        api_key = os.environ.get("ANTHROPIC_API_KEY")
        if not api_key:
            print("Variabile ANTHROPIC_API_KEY non impostata. Esporta la chiave o usa --mock per un test offline.")
            sys.exit(1)
        client = anthropic.Anthropic(api_key=api_key)

    ultima_frase = ""
    scarti_annunciati = []
    totale_input_tok = 0
    totale_output_tok = 0

    print(f"=== Simulazione partita — {len(numeri_estratti)} numeri, intensità: {args.intensita}, modello: {args.model} ===\n")

    for turno, numero in enumerate(numeri_estratti, start=1):
        voce = smorfia[str(numero)]
        messaggio_utente = costruisci_messaggio_utente(numero, voce, ultima_frase, scarti_annunciati)

        if args.mock:
            grezzo, in_tok, out_tok = chiama_mock(messaggio_utente, turno)
        else:
            grezzo, in_tok, out_tok = chiama_claude(client, args.model, args.intensita, messaggio_utente)

        totale_input_tok += in_tok
        totale_output_tok += out_tok

        try:
            risposta = json.loads(grezzo)
        except json.JSONDecodeError:
            print(f"[turno {turno}] ATTENZIONE: risposta non in JSON valido, la mostro grezza:")
            print(grezzo)
            continue

        frase = risposta.get("frase", "")
        scarto = risposta.get("scarto")

        ultima_frase = frase
        if scarto and scarto.get("parola") and scarto["parola"] not in scarti_annunciati:
            scarti_annunciati.append(scarto["parola"])

        costo_turno = stima_costo(args.model, in_tok, out_tok)
        costo_str = f" (~{costo_turno*100:.3f} centesimi)" if costo_turno is not None else ""

        print(f"[{turno:2d}] Numero {numero} — {voce['napoletano']} ({voce['italiano']})")
        print(f"     {frase}")
        print(f"     token: {in_tok} in / {out_tok} out{costo_str}\n")

    print("=== Riepilogo partita ===")
    print(f"Numeri estratti: {len(numeri_estratti)}")
    print(f"Token totali: {totale_input_tok} input / {totale_output_tok} output")
    costo_totale = stima_costo(args.model, totale_input_tok, totale_output_tok)
    if costo_totale is not None:
        print(f"Costo stimato partita: ${costo_totale:.4f} (~{costo_totale*100:.2f} centesimi)")
    print(f"Parole scartate e annunciate: {scarti_annunciati}")


if __name__ == "__main__":
    main()

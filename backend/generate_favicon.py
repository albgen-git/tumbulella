"""Script una tantum: genera il favicon (logo Vesuvio) a partire da
concept-b/img/vesuvio.jpg, che è rettangolare (600x360) e va quindi
adattato a un formato quadrato prima di diventare un'icona di tab.
Vedi requirements.md sezione SEO / identità visiva."""

from PIL import Image

SRC = "../concept-b/img/vesuvio.jpg"
NAPOLI_50 = (234, 247, 255)

OUT_ICO = "../concept-b/favicon.ico"
OUT_PNG_192 = "../concept-b/img/favicon-192.png"
OUT_APPLE = "../concept-b/img/apple-touch-icon.png"


def square_canvas(im: Image.Image, size: int, bg) -> Image.Image:
    """Adatta l'immagine (rettangolare) a un canvas quadrato: la scala per
    riempire il lato corto e ritaglia il resto, così il Vesuvio riempie
    l'icona invece di restare piccolo con bordi bianchi enormi."""
    w, h = im.size
    scale = size / min(w, h)
    new_w, new_h = round(w * scale), round(h * scale)
    im = im.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - size) // 2
    top = (new_h - size) // 2
    return im.crop((left, top, left + size, top + size))


def main():
    src = Image.open(SRC).convert("RGB")

    canvas_1024 = square_canvas(src, 1024, NAPOLI_50)

    canvas_1024.save(OUT_APPLE.replace(".png", "_tmp.png"))
    import os

    # apple-touch-icon: 180x180
    apple = canvas_1024.resize((180, 180), Image.LANCZOS)
    apple.save(OUT_APPLE, "PNG")
    os.remove(OUT_APPLE.replace(".png", "_tmp.png"))

    # PNG moderno per manifest/icona ad alta risoluzione
    png192 = canvas_1024.resize((192, 192), Image.LANCZOS)
    png192.save(OUT_PNG_192, "PNG")

    # favicon.ico multi-risoluzione (16/32/48) — quello che i browser
    # (Edge incluso) cercano di default in /favicon.ico
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    canvas_1024.save(OUT_ICO, format="ICO", sizes=ico_sizes)

    print(f"Salvati: {OUT_ICO}, {OUT_PNG_192}, {OUT_APPLE}")


if __name__ == "__main__":
    main()

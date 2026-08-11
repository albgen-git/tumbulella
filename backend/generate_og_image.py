"""Script una tantum: genera un placeholder 1200x630 per og:image/twitter:image
(concept-b/img/og-image.jpg) usando Pillow, coi colori del brand. Da sostituire
con una versione curata quando ce n'e' una — vedi requirements.md sezione SEO."""

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT_PATH = "../concept-b/img/og-image.jpg"

NAPOLI_900 = (12, 59, 94)
NAPOLI_700 = (12, 92, 148)
NAPOLI_500 = (15, 146, 224)
LEMON_400 = (255, 210, 63)
WHITE = (255, 255, 255)

FONT_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FONT_REGULAR = "C:/Windows/Fonts/arial.ttf"


def vertical_gradient(w, h, top, bottom):
    img = Image.new("RGB", (w, h), top)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / (h - 1)
        r = round(top[0] + (bottom[0] - top[0]) * t)
        g = round(top[1] + (bottom[1] - top[1]) * t)
        b = round(top[2] + (bottom[2] - top[2]) * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
    return img


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        trial = (current + " " + word).strip()
        if draw.textlength(trial, font=font) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def main():
    img = vertical_gradient(W, H, NAPOLI_700, NAPOLI_900)
    draw = ImageDraw.Draw(img, "RGBA")

    # Decorazione: un cerchio "sole" color limone in alto a destra, morbido.
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([880, -160, 1420, 380], fill=(*LEMON_400, 60))
    glow_draw.ellipse([-200, 380, 260, 840], fill=(*NAPOLI_500, 70))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    draw = ImageDraw.Draw(img)

    title_font = ImageFont.truetype(FONT_BOLD, 108)
    tagline_font = ImageFont.truetype(FONT_REGULAR, 34)
    domain_font = ImageFont.truetype(FONT_BOLD, 28)

    title = "Tumbulella"
    tagline = "La tombola napoletana raccontata da un'antica tradizione, in chiave moderna."

    margin = 90
    title_y = 210
    draw.text((margin, title_y), title, font=title_font, fill=WHITE)

    tagline_lines = wrap_text(draw, tagline, tagline_font, W - margin * 2)
    ty = title_y + 140
    for line in tagline_lines:
        draw.text((margin, ty), line, font=tagline_font, fill=(230, 240, 250))
        ty += 46

    draw.text((margin, H - 70), "www.tumbulella.it", font=domain_font, fill=(*LEMON_400,))

    img.save(OUT_PATH, "JPEG", quality=90)
    print(f"Salvato {OUT_PATH} ({W}x{H})")


if __name__ == "__main__":
    main()

"""Script una tantum: converte le icone SVG inline di concept-b in file JPG
reali, cosi l'utente puo sostituirle senza toccare il codice. Non fa parte
dell'app, va lanciato solo quando servono nuove versioni raster delle icone."""

import io

from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
from PIL import Image

OUT_DIR = "../concept-b/img"

ICONS = {
    "vesuvio": {
        "viewbox": "0 0 100 60",
        "bg": "#ffffff",
        "body": """
            <path d="M4 54 L34 12 L42 24 L50 8 L96 54 Z" fill="#c1553b" stroke="#2b2622" stroke-width="2.5" stroke-linejoin="round" />
            <path d="M42 24 L50 8 L58 22" stroke="#2b2622" stroke-width="2.5" stroke-linejoin="round" fill="#e0a93e" />
            <path d="M46 16 q4 -8 10 -4" stroke="#2b2622" stroke-width="2" fill="none" stroke-linecap="round" />
        """,
    },
    "cornetto": {
        "viewbox": "0 0 70 90",
        "bg": "#eaf7ff",
        "body": """
            <path
                d="M34 16c5 1 9 6 8 12-1 5-4 8-4 13 0 4 2 7 1 12-1 6-4 11-4 17-1 6-3 11-3 15-2-5-4-10-4-16 0-5 2-9 2-14 0-4-2-7-1-11 1-6 4-9 4-14 0-5-1-10 1-14Z"
                fill="#ff6b52" stroke="#0c5c94" stroke-width="2.2" stroke-linejoin="round" />
            <circle cx="33" cy="17" r="3" fill="none" stroke="#0c5c94" stroke-width="2.2" />
            <path d="M31 30q-3 14 0 26" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.65" />
        """,
    },
    "pulcinella": {
        "viewbox": "0 0 70 90",
        "bg": "#ffe27a",
        "body": """
            <path d="M35 11 L49 40 L21 40 Z" fill="#ffffff" stroke="#0c5c94" stroke-width="2.3" stroke-linejoin="round" />
            <circle cx="35" cy="11" r="2.6" fill="#ffffff" stroke="#0c5c94" stroke-width="2" />
            <circle cx="35" cy="55" r="18" fill="#ffffff" stroke="#0c5c94" stroke-width="2.3" />
            <rect x="21" y="47" width="28" height="9" rx="4.5" fill="#0c5c94" />
            <path d="M40 49 L52 55 L40 59 Z" fill="#0c5c94" />
            <circle cx="28" cy="51.5" r="1.6" fill="#ffe27a" />
            <circle cx="42" cy="51.5" r="1.6" fill="#ffe27a" />
            <path d="M29 68q6 4 12 0" stroke="#0c5c94" stroke-width="2" fill="none" stroke-linecap="round" />
        """,
    },
    "asinello": {
        "viewbox": "0 0 90 70",
        "bg": "#8ff0d4",
        "body": """
            <ellipse cx="18" cy="31" rx="8" ry="16" fill="#d7dee3" stroke="#0c5c94" stroke-width="2.3" transform="rotate(-25 18 31)" />
            <ellipse cx="72" cy="31" rx="8" ry="16" fill="#d7dee3" stroke="#0c5c94" stroke-width="2.3" transform="rotate(25 72 31)" />
            <ellipse cx="45" cy="40" rx="20" ry="18" fill="#ffffff" stroke="#0c5c94" stroke-width="2.3" />
            <path d="M40 19q5-6 10 0" stroke="#0c5c94" stroke-width="2" fill="none" stroke-linecap="round" />
            <ellipse cx="45" cy="53" rx="12" ry="8.5" fill="#f0f3f5" stroke="#0c5c94" stroke-width="2" />
            <circle cx="40" cy="54" r="1.6" fill="#0c5c94" />
            <circle cx="50" cy="54" r="1.6" fill="#0c5c94" />
            <circle cx="36" cy="35" r="2.2" fill="#0c5c94" />
            <circle cx="54" cy="35" r="2.2" fill="#0c5c94" />
        """,
    },
}

SCALE = 8  # viewBox originali sono piccoli (60-90px) — scala per un JPG a risoluzione decente

for name, spec in ICONS.items():
    vb = spec["viewbox"].split()
    w, h = vb[2], vb[3]
    svg = f'''<svg viewBox="{spec['viewbox']}" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="{w}" height="{h}" fill="{spec['bg']}" />
        {spec['body']}
    </svg>'''
    out_path = f"{OUT_DIR}/{name}.jpg"
    drawing = svg2rlg(io.BytesIO(svg.encode("utf-8")))
    drawing.width *= SCALE
    drawing.height *= SCALE
    drawing.scale(SCALE, SCALE)
    png_bytes = renderPM.drawToString(drawing, fmt="PNG")
    img = Image.open(io.BytesIO(png_bytes)).convert("RGB")
    img.save(out_path, "JPEG", quality=92)
    print("scritto", out_path, img.size)

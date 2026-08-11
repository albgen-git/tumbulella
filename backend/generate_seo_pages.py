"""Script una tantum (da rilanciare se smorfia.json cambia): genera le pagine
statiche /smorfia/ e /smorfia/{n}/ per la SEO, vedi requirements.md sezione
SEO. Nessun build step nel progetto (concept-b è file statici puri serviti
da Netlify), quindi qui si scrivono file HTML reali — niente React Router
né prerendering: cosi' Google vede il contenuto senza dover eseguire JS."""

import json

SITE_URL = "https://tumbulella.it"
SMORFIA_JSON = "../smorfia.json"
OUT_DIR = "../concept-b/smorfia"

HEAD_RESOURCES = """<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          napoli: { 50:'#eaf7ff',100:'#cceeff',200:'#99ddff',300:'#5cc6f7',400:'#2caeef',500:'#0f92e0',600:'#0a72b8',700:'#0c5c94',800:'#0e4c78',900:'#0c3b5e' },
          lemon: { 400:'#ffd23f',500:'#fcc419' },
        },
        fontFamily: { display: ['Baloo 2', 'sans-serif'], body: ['Poppins', 'sans-serif'] },
        borderRadius: { xl2: '1.4rem' },
      },
    },
  };
</script>
<style>body{font-family:'Poppins',sans-serif}h1,h2,.font-display{font-family:'Baloo 2',sans-serif}</style>"""


def header_html():
    return """<header class="bg-napoli-800 text-white">
  <div class="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
    <a href="/" class="font-display font-extrabold text-xl">Tumbulella</a>
    <a href="/" class="text-sm bg-white text-napoli-800 font-bold rounded-full px-4 py-2 hover:bg-napoli-50 transition-colors">🎲 Gioca ora</a>
  </div>
</header>"""


def footer_html():
    return """<footer class="max-w-3xl mx-auto px-5 py-10 text-sm text-napoli-900/60">
  <p>Tumbulella — un progetto AI di Alberto Genovese. <a href="mailto:info@tumbulella.it" class="underline hover:text-napoli-700">info@tumbulella.it</a></p>
</footer>"""


def page_shell(*, title, description, canonical, body):
    return f"""<!doctype html>
<html lang="it">
<head>
{HEAD_RESOURCES}
<title>{title}</title>
<meta name="description" content="{description}" />
<link rel="canonical" href="{canonical}" />
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/img/favicon-192.png" type="image/png" sizes="192x192" />
<link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="{SITE_URL}/img/og-image.jpg" />
<meta property="og:url" content="{canonical}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="{SITE_URL}/img/og-image.jpg" />
</head>
<body class="bg-napoli-50 text-napoli-900">
{header_html()}
<main class="max-w-3xl mx-auto px-5 py-8">
{body}
</main>
{footer_html()}
</body>
</html>
"""


def build_index_page(numeri: dict) -> str:
    rows = []
    for n in range(1, 91):
        e = numeri[str(n)]
        rows.append(
            f'<tr class="border-b border-napoli-900/10 hover:bg-napoli-100/50">'
            f'<td class="py-2 pr-3 font-display font-bold text-napoli-700">{n}</td>'
            f'<td class="py-2 pr-3">{e["napoletano"]}</td>'
            f'<td class="py-2 pr-3">{e["italiano"]}</td>'
            f'<td class="py-2 pr-3 hidden sm:table-cell">{e["inglese"]}</td>'
            f'<td class="py-2 pr-3 hidden sm:table-cell">{e["spagnolo"]}</td>'
            f'<td class="py-2"><a href="/smorfia/{n}/" class="text-napoli-600 font-bold underline hover:text-napoli-800">Scopri →</a></td>'
            f"</tr>"
        )
    body = f"""<h1 class="font-display font-extrabold text-2xl sm:text-3xl text-napoli-800 mb-3">La Smorfia Napoletana: significato dei 90 numeri del Lotto</h1>
<p class="text-napoli-900/80 leading-relaxed mb-6">La Smorfia napoletana, chiamata anche Cabala, associa a ciascuno dei 90 numeri del lotto un significato popolare — un oggetto, una persona, una situazione della vita quotidiana. Qui sotto trovi la tavola completa, con il significato in napoletano, italiano, inglese e spagnolo per ogni numero. Clicca su un numero per la pagina dedicata, oppure scopri come Tumbulella trasforma questi significati in una storia raccontata a voce durante la tombola.</p>
<div class="overflow-x-auto rounded-xl2 bg-white shadow-sm">
<table class="w-full text-sm text-left">
<thead><tr class="border-b-2 border-napoli-800/20 text-napoli-800 font-display">
<th class="py-2 pr-3">#</th><th class="py-2 pr-3">Napoletano</th><th class="py-2 pr-3">Italiano</th><th class="py-2 pr-3 hidden sm:table-cell">English</th><th class="py-2 pr-3 hidden sm:table-cell">Español</th><th class="py-2"></th>
</tr></thead>
<tbody>
{"".join(rows)}
</tbody>
</table>
</div>"""
    return page_shell(
        title="La Smorfia Napoletana: significato dei 90 numeri del Lotto — Tumbulella",
        description="Tavola completa della Smorfia napoletana: significato di tutti i 90 numeri del lotto in napoletano, italiano, inglese e spagnolo, numero per numero.",
        canonical=f"{SITE_URL}/smorfia/",
        body=body,
    )


def build_number_page(n: int, e: dict) -> str:
    prev_link = f'<a href="/smorfia/{n-1}/" class="text-napoli-600 font-bold hover:underline">← Numero {n-1}</a>' if n > 1 else '<span></span>'
    next_link = f'<a href="/smorfia/{n+1}/" class="text-napoli-600 font-bold hover:underline">Numero {n+1} →</a>' if n < 90 else '<span></span>'
    body = f"""<nav class="text-sm text-napoli-900/50 mb-4"><a href="/" class="hover:underline">Home</a> / <a href="/smorfia/" class="hover:underline">Smorfia</a> / {n}</nav>
<h1 class="font-display font-extrabold text-2xl sm:text-3xl text-napoli-800 mb-1">Smorfia napoletana — Numero {n}</h1>
<p class="text-napoli-900/60 italic mb-6">Significato del numero {n} nella Smorfia napoletana e nella tombola tradizionale.</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
  <div class="bg-white rounded-xl2 shadow-sm p-4"><p class="text-xs uppercase tracking-wide text-napoli-500 font-bold mb-1">Napoletano</p><p class="text-lg font-display font-bold text-napoli-800">{e["napoletano"]}</p></div>
  <div class="bg-white rounded-xl2 shadow-sm p-4"><p class="text-xs uppercase tracking-wide text-napoli-500 font-bold mb-1">Italiano</p><p class="text-lg font-display font-bold text-napoli-800">{e["italiano"]}</p></div>
  <div class="bg-white rounded-xl2 shadow-sm p-4"><p class="text-xs uppercase tracking-wide text-napoli-500 font-bold mb-1">English</p><p class="text-lg font-display font-bold text-napoli-800">{e["inglese"]}</p></div>
  <div class="bg-white rounded-xl2 shadow-sm p-4"><p class="text-xs uppercase tracking-wide text-napoli-500 font-bold mb-1">Español</p><p class="text-lg font-display font-bold text-napoli-800">{e["spagnolo"]}</p></div>
</div>
<div class="bg-napoli-800 text-white rounded-xl2 p-5 mb-8 text-center">
  <p class="mb-3">Vuoi sentire il numero {n} diventare parte di un racconto vero, durante la tua partita a tombola?</p>
  <a href="/" class="inline-block bg-lemon-400 text-napoli-900 font-display font-bold rounded-full px-6 py-2.5 hover:bg-lemon-500 transition-colors">🎲 Gioca a Tumbulella</a>
</div>
<div class="flex items-center justify-between text-sm">{prev_link}{next_link}</div>"""
    description = f"Numero {n} della Smorfia napoletana: {e['napoletano']} ({e['italiano']}). Significato in napoletano, italiano, inglese e spagnolo, con la storia raccontata da Tumbulella."
    if len(description) > 160:
        description = f"Numero {n} della Smorfia napoletana: {e['napoletano']} ({e['italiano']}). Significato in 4 lingue, con la storia raccontata da Tumbulella."
    return page_shell(
        title=f"Smorfia napoletana numero {n}: {e['italiano']} — Tumbulella",
        description=description,
        canonical=f"{SITE_URL}/smorfia/{n}/",
        body=body,
    )


def build_sitemap(urls: list[str]) -> str:
    entries = "\n".join(f"  <url><loc>{u}</loc></url>" for u in urls)
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{entries}\n</urlset>\n'


def main():
    with open(SMORFIA_JSON, encoding="utf-8") as f:
        data = json.load(f)
    numeri = data["numeri"]

    import os
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(os.path.join(OUT_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(build_index_page(numeri))

    for n in range(1, 91):
        n_dir = os.path.join(OUT_DIR, str(n))
        os.makedirs(n_dir, exist_ok=True)
        with open(os.path.join(n_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(build_number_page(n, numeri[str(n)]))

    print(f"Generate 91 pagine in {OUT_DIR} (index + 90 numeri)")

    sitemap_urls = [f"{SITE_URL}/", f"{SITE_URL}/smorfia/"] + [f"{SITE_URL}/smorfia/{n}/" for n in range(1, 91)]
    sitemap_path = "../concept-b/sitemap.xml"
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(build_sitemap(sitemap_urls))
    print(f"Generato {sitemap_path} ({len(sitemap_urls)} URL)")


if __name__ == "__main__":
    main()

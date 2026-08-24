# Portfolio — Nithyananda Rao

Personal portfolio site, built as plain HTML/CSS/JS (no framework, no build step) and hosted on GitHub Pages.

**Live:** https://sirasatinithyanand.github.io/portfolio/

## Stack

- Static HTML5 + CSS (custom properties, no framework)
- Vanilla JS (mobile nav, scroll-reveal via `IntersectionObserver`)
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (mono accents), via Google Fonts

## Structure

```
index.html              # single-page site, section order: Hero → About → Experience → Projects → Skills → Education → Contact
assets/css/style.css    # all styling
assets/js/main.js       # mobile nav + scroll-reveal
favicon.svg             # NR monogram favicon
PORTFOLIO_CONTENT.md    # source content/copy the site is built from
```

## Local development

No build step — just serve the directory statically:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Editing content

Update `index.html` directly (and `PORTFOLIO_CONTENT.md` if you want to keep the source-of-truth copy in sync). Colours, type, and spacing live in `assets/css/style.css` as CSS custom properties under `:root`.

## Deployment

Hosted via **GitHub Pages**, deployed from the `main` branch root. Push to `main` and Pages redeploys automatically (usually within a minute).

To (re)enable Pages on this repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

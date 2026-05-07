# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static HTML/CSS/JS portfolio for Marcus Cunha (Frontend Engineer & UX/UI Designer). No build step, no framework, no package manager. All source is served directly.

## Previewing locally

```bash
open index.html
# or with a server (avoids any CORS edge cases):
python3 -m http.server 8080
```

## Deploying

Connected to Vercel (project `marcus-cunha-portfolio`, org `team_uxlAmelNivm0WlQqpVF9UX9w`). Push to the linked git remote to trigger a deploy automatically.

## Page structure

```
index.html                          # main portfolio — career timeline
pages/sobre.html                    # about page
pages/labs/index.html               # labs hub
pages/labs/tjbooks/index.html       # TJBOOKS project (lab)
pages/projetos/almaviva/index.html
pages/projetos/engineering/index.html
pages/projetos/tjrj-pje/index.html
pages/projetos/spassu/index.html
pages/projetos/eds/tjrj-pje/index.html
pages/projetos/instant-solutions/index.html
pages/projetos/sefaz-rj/index.html
pages/projetos/cecierj/index.html
pages/projetos/casa-digital/index.html
pages/projetos/par-perfeito/index.html
pages/projetos/record/index.html
```

## Architecture

### CSS & design tokens

Every HTML file is self-contained: CSS lives in a `<style>` block, scripts in `<script>` tags at the bottom. There is no shared stylesheet.

The same design token set is duplicated in every file's `:root`:

```css
--void:#0c0c0f; --void-2:#13131a; --page:#f6f3ee; --ink:#1a1a20;
--muted:#918d88; --orange:#e05b1a; --orange-d:#b34714; --orange-s:#fbf0e9;
--line:#ddd9d1; --blue:#1a5cc8; --warm:#ede9e2;
--font-disp:'Nunito',system-ui,sans-serif;
--ease:cubic-bezier(0.16,1,0.3,1);
```

Keep these in sync across all files when changing colors.

### Shared JS files (loaded by every page)

| File | Purpose |
|---|---|
| `i18n.js` | PT/EN translations — all strings live here in a `STR` object keyed by page (`data-i18n-page` attribute on `<html>`). Dispatches `i18n:applied` on language change. Language stored in `localStorage` key `mc-portfolio-lang`. |
| `a11y.js` | Accessibility toolbar — font size (0–3 steps, stored as `mc-a11y-fs`) and high-contrast mode (`mc-a11y-hc`). Writes `data-a11y-fs` / `data-a11y-hc` attributes on `<html>`. |
| `testimonials.js` | Testimonials carousel — data array plus all carousel logic (keyboard, swipe, dots, fade animation). Reads current language from `document.documentElement.getAttribute('data-lang')` and re-renders on `i18n:applied`. |

CDN dependencies:
- **Nunito** font via Google Fonts
- **Feather Icons** via unpkg (`feather.replace()` called at page load)

### i18n conventions

- `<html lang="pt-BR" data-lang="pt" data-i18n-page="<page-key>">` — `data-lang` is toggled by `i18n.js` between `"pt"` and `"en"`.
- Translatable elements carry `data-i18n="<key>"` (text content) or `data-i18n-aria="<key>"` (aria-label).
- To add a new translatable string: add the key to both `pt` and `en` objects in `i18n.js`, then use the attribute in HTML.

### Project detail page layout

Each `pages/projetos/*/index.html` shares the same structure:
- `.page-bar` — sticky dark nav with back-to-portfolio link and PT/EN lang-switch
- `.page-hero` — orange hero section
- Inline CSS only (no shared file)

## Updating content

All text, job titles, dates, and links are hardcoded in `index.html`. Search by company name or role title to locate the right section.

- **Logos:** SVGs in `imagens/logos/` — reference with relative paths (`imagens/logos/filename.svg`)
- **Social links:** search `behance.net` or `linkedin.com` in `index.html`
- **Testimonials:** edit the `DATA` array in `testimonials.js` (each entry has `pt` and `en` objects)
- **Nav/UI strings:** edit `i18n.js` — the `STR` object has a section per page key

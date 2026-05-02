# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static HTML/CSS/JS portfolio for Marcus Cunha (Frontend Engineer & UX/UI Designer). No build step, no framework, no package manager. All source is served directly.

## Pages

- `index.html` — main portfolio with career timeline (~1600+ lines, self-contained)
- `sobre.html` — "About me" page

## Architecture

Everything lives inline in each HTML file: CSS custom properties (design tokens) in `:root`, styles in `<style>`, scripts in `<script>` at the bottom. No external CSS or JS files beyond two CDN dependencies:

- **Nunito** font via Google Fonts
- **Feather Icons** via unpkg (`feather.replace()` called at page load)

Design tokens are defined at the top of the `<style>` block in `index.html`. `sobre.html` has its own minimal subset of the same tokens — keep them in sync if updating colors.

## Previewing locally

Open any `.html` file directly in the browser (no server needed):

```bash
open index.html
open sobre.html
```

Or use a simple server to avoid any CORS edge cases with local assets:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploying

The project is connected to Vercel (project `marcus-cunha-portfolio`, org `team_uxlAmelNivm0WlQqpVF9UX9w`). Push to the linked git remote to trigger a deploy automatically. No build configuration needed — Vercel serves static files as-is.

## Updating content

All text, job titles, dates, and links are hardcoded in `index.html`. Search by company name or role title to locate the right section. Company logos are SVGs in `imagens/logos/`; reference them with relative paths (`imagens/logos/filename.svg`).

Social links: search for `behance.net` or `linkedin.com` in `index.html`.

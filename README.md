# Overlazy website

The marketing site for [Overlazy](https://github.com/jfahrenkrug/TinyHello), an
iOS app that applies a beautiful overlay to your photo the instant you shoot
it, ready to print and hand to someone through an HP Sprocket. Built with
[Astro](https://astro.build) and Tailwind CSS, deployed as a static site to
GitHub Pages at [overlazy.app](https://overlazy.app).

See `AGENTS.md` for the full repository guide (localization, design
workflow, and the branch/PR process). `CLAUDE.md` points at the same file.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Type-check and build the static site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Structure

- `src/pages/[locale]/` — the teaser page and Impressum, one route tree per
  supported language.
- `src/i18n/` — the locale list and translation dictionary. The supported
  languages always mirror the Overlazy iOS app's own localization set.
- `src/components/`, `src/layouts/` — shared UI.
- `PRODUCT.md` / `DESIGN.md` — product context and the visual design system,
  maintained via the `impeccable` skill (`.agents/skills/impeccable/`).

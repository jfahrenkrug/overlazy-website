# Overlazy website

Marketing website for [Overlazy](https://github.com/jfahrenkrug/TinyHello), an
iOS app for creating branded photo overlays, capturing photos, and printing
composites through HP Sprocket. Built with [Astro](https://astro.build) and
deployed as a static site to GitHub Pages at `overlazy.app`.

The site currently ships a single "launching soon" teaser page plus the
legally required Impressum, in every language the app itself ships in.

## Project

- Static site generator: Astro 7, styled with Tailwind CSS v4.
- Output: static HTML, deployed to GitHub Pages (`public/CNAME` pins the
  custom domain `overlazy.app`).
- Design guidance comes from the `impeccable` skill under
  `.agents/skills/impeccable/`; `PRODUCT.md` and `DESIGN.md` at the repo root
  (once generated) are the source of truth for product and visual direction.

## Repository map

- `src/pages/` — routes. `[locale]/index.astro` is the teaser page,
  `[locale]/imprint.astro` is the Impressum, for each supported locale.
- `src/layouts/` — shared page shells.
- `src/components/` — UI fragments (language picker, etc.).
- `src/i18n/` — translation dictionaries and locale helpers.
- `public/` — static assets, including `CNAME` and app imagery.

## Internationalization

The website's supported languages always mirror the app's. The app is
localized via `scripts/translations.json` in the TinyHello repo; check that
file (`Overlazy/Resources/Localizable.xcstrings`) whenever the app adds or
drops a language, and update `src/i18n/` and `astro.config.mjs`'s `i18n.locales`
to match.

- Locales ship under a language-prefixed path (`/en/`, `/de/`, `/es/`,
  `/pt-BR/`) via Astro's built-in i18n routing (`prefixDefaultLocale: true`),
  so there is no ambiguous unprefixed root.
- The root `/` is a static redirect page: it detects the visitor's preferred
  language client-side (`navigator.language`, falling back to a stored
  preference) and forwards to the matching locale, defaulting to `/en/` when
  no supported language matches. This runs client-side because GitHub Pages
  serves static files with no server-side language negotiation.
- Every page includes a language picker so a visitor can override detection.
- Do not hand-roll new strings inside `.astro` templates — add them to
  `src/i18n/` so every locale stays in sync, and never leave a locale with a
  stale or missing key.

## Design workflow

Use the `impeccable` skill for anything touching layout, visual design, copy
tone, or UX. Do not freehand UI changes that skip it. Run
`$impeccable audit` before shipping visual changes and follow its guidance in
`.agents/skills/impeccable/reference/`.

## Build and verification

- `npm install` synchronizes dependencies.
- `npm run dev` starts the dev server (`http://localhost:4321`).
- `npm run build` builds the static site to `dist/` (includes `astro check`
  where the build script is configured to run it).
- `npm run preview` serves the production build for a final smoke test.
- Use the `agent-browser` skill to click through every locale and the
  language picker in a real browser before calling visual work done.

## Commit messages

- Follow the Conventional Commits format: `type(optional-scope): description`.
- Every commit message must include a body. This is required even for small
  or seemingly self-explanatory changes.
- Use the body primarily to explain why the change is needed: the
  motivation, product context, and any important tradeoffs or constraints.
- Do not use the body merely to restate what is already visible in the diff.
- Reference the relevant GitHub issue when one exists.

## Branch and pull-request workflow

- Never commit directly to `main`.
- Start every change on a task-specific branch created from the current
  `origin/main` (or from the already-active task branch when continuing
  work).
- Push the branch and open a pull request for review; merge changes through
  the pull request using the repository's normal GitHub workflow.
- Before handing off, verify the branch is clean and that `main` contains the
  change only through the merged pull request.

## Definition of done

- The site builds without errors or warnings (`npm run build`).
- Every supported locale renders with no missing translation keys.
- Visual changes have been observed in a real browser, in both the teaser
  page and the Impressum, across mobile and desktop widths.
- `git diff --check` passes.

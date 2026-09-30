# Overlazy website

The marketing site for [Overlazy](https://github.com/jfahrenkrug/Overlazy), an
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

- `src/pages/[locale]/` — the minimal homepage, privacy policy and Impressum, one route tree per
  supported language.
- `src/i18n/` — the locale list and translation dictionary. The supported
  languages always mirror the Overlazy iOS app's own localization set.
- `src/components/`, `src/layouts/` — shared UI.
- `PRODUCT.md` / `DESIGN.md` — product context and the visual design system,
  maintained via the `impeccable` skill (`.agents/skills/impeccable/`).

## Launch and privacy policy

The homepage is deliberately just the Overlazy name on orange, with legal
links and a language picker. The full app privacy policy is available at
`https://overlazy.app/privacy-policy/`, without JavaScript or redirects.
Localized copies live at `/<locale>/privacy-policy/`. Locales mirror the app:
English, German, Spanish, Brazilian Portuguese, French, Japanese and Korean.

The policy was checked against `~/Code/TinyHello/Overlazy` on 30 September
2026: local photo composition and storage, add-only photo saving, system
pickers, optional sharing, and opt-in beta email/TestFlight feedback. Review
it whenever the app's data handling changes. It also covers this website's
language preference and GitHub Pages hosting. The existing legal notice's
operator and contact details are used for privacy enquiries.

## Publishing to overlazy.app

The public repository uses `.github/workflows/deploy.yml`: pull requests run
the checked production build, and pushes to `main` build and deploy `dist/`
through GitHub Pages. GitHub Pages is configured with `overlazy.app` as its
custom domain. Namecheap BasicDNS points the apex at GitHub Pages' four A
addresses (`185.199.108.153` through `185.199.111.153`); the domain's Google
mail records remain in place.

GitHub provisions the domain's TLS certificate after its DNS check. Enable
**Enforce HTTPS** in **Settings → Pages** once the certificate is ready, then
verify the homepage and `/privacy-policy/` over HTTPS. Use
`https://overlazy.app/privacy-policy/` as the App Store Connect privacy policy
URL. The iOS app's in-app link is maintained in the [app repository](https://github.com/jfahrenkrug/Overlazy).

The `site` URL in `astro.config.mjs` and `public/CNAME` use the domain. For
Actions deployment, the Pages custom-domain setting is authoritative; the
`CNAME` file alone does not configure it.

Sources: [GitHub custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site),
[GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site),
[Apple privacy policy requirements](https://developer.apple.com/app-store/app-privacy-details/).

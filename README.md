# Overlazy website

The marketing site for [Overlazy](https://github.com/jfahrenkrug/TinyHello), an
iOS app that applies a beautiful overlay to your photo the instant you shoot
it, ready to print and hand to someone through an HP Sprocket. Built with
[Astro](https://astro.build) and Tailwind CSS, prepared for static deployment to
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

The repository now includes `.github/workflows/deploy.yml`. Pull requests
run the checked production build; pushes to `main` build and deploy `dist/`
through GitHub Pages. No separate server or paid hosting is required for a
public repository.

On 30 September 2026, GitHub's Pages API returned 404 for this repository
(no Pages site configured), and the domain's A record was `192.64.119.151`,
which is not a GitHub Pages address. The repository is private: Pages
requires a plan supporting private repositories (such as GitHub Pro), or
you can choose to make the repository public. To launch:

1. In the repository's **Settings → Pages**, select **GitHub Actions** as
   the publishing source and set **Custom domain** to `overlazy.app`.
   Verify the domain in your GitHub account's Pages settings using the
   supplied TXT record. Set up the domain in GitHub before changing DNS.
2. At your domain's DNS provider, replace the existing parking/forwarding
   A record for `@` with these four A records:

   | Host | Type | Value |
   | --- | --- | --- |
   | @ | A | 185.199.108.153 |
   | @ | A | 185.199.109.153 |
   | @ | A | 185.199.110.153 |
   | @ | A | 185.199.111.153 |
   | www | CNAME | jfahrenkrug.github.io |

   The `www` record is optional. Leave email MX/TXT records intact. If you
   enable IPv6, use GitHub's documented AAAA addresses; do not retain an
   unrelated AAAA record. An apex ALIAS/ANAME pointing to
   `jfahrenkrug.github.io` is an alternative to the four A records.
3. Merge the pull request, or run **Actions → Build and deploy website →
   Run workflow** on `main` if it was merged before Pages was enabled.
4. Once DNS and GitHub's certificate are ready, enable **Enforce HTTPS** in
   Pages settings. DNS/certificate provisioning can take up to 24 hours.
5. Open `https://overlazy.app/` and `https://overlazy.app/privacy-policy/`.
   Use the latter as the App Store Connect privacy policy URL. Apple also
   requires a readily accessible policy link inside the app; this website
   change does not add that link to the iOS app.

The `site` URL in `astro.config.mjs` and `public/CNAME` already use the domain.
For Actions deployment, the custom domain must be configured in Pages
settings; the CNAME file alone does not configure it.

Sources: [GitHub custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site),
[GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site),
[Apple privacy policy requirements](https://developer.apple.com/app-store/app-privacy-details/).

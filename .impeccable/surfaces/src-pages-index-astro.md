---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/[locale]/index.astro"
related_targets: ["src/pages/index.astro", "src/pages/[locale]/imprint.astro", "src/pages/[locale]/privacy-policy.astro", "src/pages/privacy-policy.astro"]
---

## Scope and visitor mode

Home: Experience, a minimal brand holding page. Legal pages: Read.
Seven locales mirror the current app: en, de, es, pt-BR, fr, ja, ko.

## Direction contract

The user explicitly rejected the tactile teaser on 30 September 2026 and
pinned the replacement: simply “Overlazy” on orange. Solid #fa5830 fills the
viewport; deep navy #0c1b52 carries the centered name in the existing Baloo 2
brand face, now self-hosted. No illustration, texture, promotional copy,
card, launch claim, or motion. Small footer links provide privacy policy,
legal notice, and language switching. The system remains equally plain on
legal pages, with a readable column and clear headings. The stable
`/privacy-policy/` route renders the complete English policy without JS.

## Interaction and verification

A native details language picker works without JS, preserves the page type,
and closes on Escape or outside click when JS is available. All controls
have at least 44px height and visible focus. Mobile footer items may wrap.
The root preserves the existing browser-language/stored-preference redirect.
Policy text is grounded in current app code, including local storage and
optional feedback rather than an absolute “no personal data” claim.

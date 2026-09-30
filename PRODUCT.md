# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7, styled with Tailwind CSS v4, deployed as a fully static site to
GitHub Pages under a custom domain. Chosen by the user before this init
(not delegated).

## Users

People capturing a special moment with friends or at an event — a party,
gathering, or get-together — who want to hand someone a physical printed
photo right away, with a beautiful branded/thematic overlay already on it.
The moment matters more than the tool: the app exists so nobody has to stop
and fiddle with their phone after the shot to make it presentable.

## Product Purpose

Overlazy (iOS) lets someone prepare a reusable photo overlay once — a
colored band with a title, optional second line, and optional logo — then
shoot: the phone's camera composites the overlay onto the photo the instant
the shutter fires. There is no review-and-edit step. The finished composite
saves straight to Photos, ready to print through the HP Sprocket app onto
2×3" sticky-backed photo paper and hand to the person on the spot.

Success is a guest walking away, seconds after the photo was taken, holding
a printed keepsake that already looks intentionally designed for the
occasion.

## Positioning

"Shoot. Done." is the app's own framing (confirmed from its onboarding
screen — see Evidence). The mechanism a competitor can't casually copy:
overlay application happens at capture time, not as a post-capture edit
step, and the overlay itself is constrained so that every combination a
user can produce still looks professionally designed — there is no path to
an ugly result. Users are never put in the position of "designer."

## Operating Context

- The photo is taken and printed live, in front of the person receiving it,
  at a party, wedding, brand activation, or casual friend gathering — not
  edited later at a desk.
- Printing happens through Apple's Photos → HP Sprocket app handoff.
  Overlazy does not talk to the printer directly.
- iPhone only, portrait only, iOS 17+.

## Capabilities and Constraints

- One overlay is active at a time; a user can save up to 20 overlays and
  switch between them, but authors one "look" before shooting for a given
  event/occasion.
- Overlay = colored/shaped band (straight, sloped, wave, or arch) + printed
  title + optional second line + optional logo. All strings and sizing are
  chosen so nothing a user can configure prints illegibly or off the
  print-safe area — see TinyHello's `docs/product/v1-specification.md` for
  the enforced text-fit and layout rules.
- Pricing/availability model: paid or freemium — undecided which for the
  teaser, so the website must not state a specific price or claim "free."
  It can say the app is launching on the App Store.
- Localized into English, German, Spanish, Brazilian Portuguese, French, Japanese, and Korean (from
  `TinyHello/scripts/translations.json` / `Localizable.xcstrings`). The
  website's supported languages must always mirror this list; when the app
  adds or drops a language, the website's locales must follow.
- Launch is "this month" (September 2026) at the time this teaser is being
  built — durable fact is "launching soon," not a specific date, since no
  fixed date was confirmed.

## Brand Commitments

- App name: Overlazy. Custom domain: overlazy.app.
- App icon (see `public/images/app-icon.png`): a cream-white Sprocket-style
  instant printer on a warm orange-red ground, ejecting a printed photo — a
  sunset-mountain scene in orange/cream over a navy band with a white
  four-point sparkle. This icon is the strongest existing brand evidence:
  warm orange-red as the dominant color, cream/off-white as a light neutral,
  deep navy as a dark anchor, with a small sparkle/accent motif.
- Real in-app copy confirmed from the onboarding screen (see Evidence):
  headline "Shoot. Done.", subhead "Your words are on the photo the moment
  you press the button. No editing, no fiddling, no step two.", buttons
  "Start shooting" / "Pick a look first", and a two-part sample overlay
  labeled "SHOOT" / "PRINT, IF YOU LIKE" shown inside a printer illustration
  matching the app icon's device.
- Voice, from the user directly: casual, warm, a little playful — not
  corporate. The core idea worth repeating in marketing copy: no fiddling
  with your phone after the shot ruins the moment; it's designed so you
  can't make an ugly overlay even if you tried.

## Evidence on Hand

- `public/images/app-icon.png` — real 1024×1024 App Icon artwork.
- `public/images/app-screenshot.png` — a real screenshot captured from a
  Simulator build of the actual TinyHello/Overlazy Xcode project (onboarding
  screen, see Brand Commitments above for its exact copy). UI-automation
  tooling to drive the app further (create an overlay, take a photo, see a
  finished composite) was not available in this session, so this is the one
  real in-app screenshot on hand. No other real screenshots exist yet — the
  app has not shipped. Do not fabricate additional screenshots or UI mockups
  presented as real product; illustrative/original graphics are fine.
- `~/Code/TinyHello/docs/product/v1-specification.md` — authoritative print
  and layout spec if deeper product detail is ever needed.
- No testimonials, press, pricing figures, or usage numbers exist. Do not
  invent any.

## Product Principles

1. The moment comes first. Nothing about the product or its marketing should
   suggest post-capture fiddling, editing, or delay — nothing about the site
   should feel like a workflow tool.
2. Every result looks designed. The overlay system removes bad outcomes by
   construction; the site's own craft should demonstrate the same
   promise — it should not look like a placeholder "coming soon" template.
3. Print is physical and immediate. The keepsake being real, printed paper
   handed to a real person is the emotional core, not a digital share.
4. Truthful and modest about the unlaunched state: "launching soon," no
   fabricated pricing, testimonials, or availability claims.
5. One product, every supported language, always in lockstep with the app's
   own localization set.

## Accessibility & Inclusion

No product-specific requirement beyond ordinary WCAG AA web practice
(contrast, keyboard operability, respecting reduced-motion) — treat as
standard baseline, not a special constraint.

## Current website scope

The user rejected the original tactile teaser on 30 September 2026. The
launch site must show only “Overlazy” on a solid orange background, with
quiet privacy/legal links and a language picker. The policy is based on
the current app implementation: no tracking or analytics, local photo and
overlay processing, and optional user-initiated support/beta feedback.
The stable App Store policy URL is `/privacy-policy/`. Do not reintroduce
marketing sections, illustrations, textures, or launch claims.

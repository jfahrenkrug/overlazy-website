---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/imprint.astro"]
---

## Scope and visitor mode

Persuade. Single-page "launching soon" teaser (`src/pages/[locale]/index.astro`)
plus its required Impressum page (`src/pages/[locale]/imprint.astro`), in
en/de/es/pt-BR. New visual world — no incumbent identity exists.

## Audience, job, action, proof, constraints

Audience: people who go to parties/events with friends and want a physical,
designed keepsake handed to someone on the spot — not event organizers, not
designers. Job: understand in seconds what Overlazy is and why it matters,
believe it's real and coming soon, and leave an interest signal (email) or
follow through to the App Store when it ships. Proof on hand: the real app
icon, one real in-app screenshot (onboarding: "Shoot. Done." / "Your words
are on the photo the moment you press the button. No editing, no fiddling,
no step two." / "Start shooting" / "Pick a look first"), and the print/paper
mechanic itself. Constraints: no pricing claim, no fabricated testimonials,
no fixed launch date — "launching soon" only. **Corrected by the user: the
printed artifact is NOT a Polaroid.** It is a small 2×3" HP Sprocket
sticky-backed print — square-cut edges, portrait 2:3, no white plastic
frame — that peels off an adhesive backing paper. That peel (a corner lifted,
adhesive backing visible) is the real, specific, on-brand detail to use
instead of any Polaroid-frame convention.

## Direction contract

THESIS: The page IS a small printed photo sticker someone just peeled off
and got handed — not a screen describing an app, and not a Polaroid. It
refuses the category default (a phone-frame mockup floating over a gradient
blob) by never showing a phone at all in the first viewport; the product
proves itself through the printed artifact, the same way the app does.

OWN-WORLD: A warm kraft/linen tabletop ground (not white). One small,
portrait 2:3 Sprocket print — square-cut edges, no border frame — slightly
tilted as if just set down, its own Overlazy-orange band across the bottom
(identical logic to the app's own overlay band) carrying the headline. One
corner is peeled up off its adhesive backing paper, the backing's release
liner visible underneath — the real, specific Sprocket-sticker detail,
never a Polaroid frame. A single torn strip of cream washi tape pins the
opposite corner flat. Captions and small labels set in a genuine
handwriting face (the world's own convention: things are hand-labeled at a
party, not typeset); body copy and UI in a clean geometric sans for
legibility. Palette: Committed strategy — the icon's orange-red (~30-40% of
the surface, carried by the print's band, the CTA, and accents), a warm
cream/kraft neutral ground, deep navy as the dark ink for text and detail,
the icon's small four-point sparkle as the one recurring mark (never a
generic star/sparkle emoji).

STORY: A visitor lands, instantly reads the small print-on-a-table scene as
"someone just peeled a printed photo off its backing and handed it over,"
reads the handwritten-style headline ("Shoot. Done." — real in-app copy)
and the one-line explanation, believes it because the print looks like a
real physical sticker (peel + backing + correct 2:3 proportion), and signs
up to be notified or heads to the App Store link once it's live.

FIRST VIEWPORT: Full-bleed kraft/linen ground. Center-to-right, the tilted
2×3 Sprocket print (using the real captured app screenshot's photo content
where it reads correctly at that crop, or an authored illustrative scene
consistent with the icon when it doesn't) with its orange band and headline,
one corner peeled off its backing liner. Left/upper area: eyebrow
("Launching soon"), one-line promise ("No editing. No fiddling. Just a
beautiful printed photo, seconds after you shoot."), and the primary
action — an email capture styled as a torn kraft tag on a bit of string, plus
a secondary "Notify me" affordance. Language picker sits quiet, top-right,
never competing with the print. Washi tape strip crosses one corner; the
peeled corner casts a small paper shadow onto the table.

FORM: Grounded candidate 5 of 7 (kraft/washi keepsake world, corrected from
Polaroid to Sprocket-sticker per the user), assigned by the roll. Seed key
c0423bb8. Raised twice against dealt challengers: (1) IRREVERSIBLE-COPY,
donated by the declined ebru floated-pigment challenger — the page never
implies an edit/undo step anywhere, echoing the product's own "no editing,
no fiddling" promise; (2) REVEAL-RITUAL, donated by the declined
sneaker-box-archive challenger — the print's entrance motion is a
peel-and-lift (the corner coming up off the backing liner), not a generic
fade-in — now literally true to the product instead of a borrowed metaphor.
A third discipline, RESTRAINT, is carried in from the declined ikebana
challenger to keep the kraft/washi world from tipping into busy
craft-store clutter: exactly one washi strip, one print, deliberate empty
kraft space, nothing pasted on for decoration alone.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying
its provenance.

## Unresolved decisions

- Exact handwriting webfont and geometric sans pairing — pick during build,
  Google Fonts only (CSP allowlist).
- Whether the print's photo content uses the captured Simulator screenshot
  (cropped) or an authored illustrative scene — decide once test-fitted
  against the 2:3 frame; must never read as a Polaroid.
- No image generation is available this session (context.mjs reported no
  IMAGE_GEN_AVAILABLE key), so this build is code-led by contract, not
  choice: no comp round, no decision-page renders. The direction contract
  above carries the ambition the comp round would otherwise have set, and
  the finish review audits the shipped page against it directly.

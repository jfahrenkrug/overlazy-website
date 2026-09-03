---
name: Overlazy website
description: A small printed photo sticker, just peeled and handed over — the launch teaser for Overlazy.
colors:
  ink: "#0c1b52"
  ink-soft: "#34406f"
  kraft: "#efe2cd"
  kraft-dark: "#dfcda8"
  cream: "#fcebd9"
  flame: "#fa5830"
  flame-deep: "#e8471f"
  paper: "#fff8ec"
typography:
  display:
    fontFamily: "Baloo 2, ui-rounded, SF Pro Rounded, system-ui, sans-serif"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  hand:
    fontFamily: "Caveat, cursive"
    fontWeight: 700
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  tag: "0px (clipped to a tag silhouette, not rounded)"
  card: "0px (square-cut print edges)"
  panel: "24px"
  pill: "999px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
components:
  cta-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.25rem"
  kraft-tag:
    backgroundColor: "{colors.kraft-dark}"
    textColor: "{colors.ink}"
    typography: "{typography.hand}"
---

# Design System: Overlazy website

## Overview

**Creative North Star: "The print, not the mockup"**

The site's one idea: never show a phone. Overlazy's promise is a physical
object — a small 2×3″ sticker photo, peeled off its backing and handed to
someone at a party, seconds after it printed. The website proves that by
being the object: the first thing a visitor sees is a print card, tilted on
a warm kraft tabletop, pinned by a strip of washi tape, one corner already
peeled up off its adhesive backing. There is no phone frame, no app-store
screenshot grid, no gradient-blob SaaS hero anywhere on the page. Confirmed
visual rejection, from the user directly: the print must never read as a
Polaroid — no white plastic frame, ever. It is a Sprocket sticker: square-cut
edges, portrait 2:3, adhesive backing visible where it peels.

The world is built from real evidence, not invented mood: every color in
the palette is sampled from `public/images/app-icon.png`, and the headline
("Shoot. Done.") and its supporting line are the app's own onboarding copy,
captured live from a Simulator build (see `public/images/app-screenshot.png`
and the surface brief at `.impeccable/surfaces/src-pages-index-astro.md`).

**Key Characteristics:**
- Warm, tactile, handmade — kraft paper, washi tape, a handwriting face for
  small labels — never a slick tech-product register.
- One committed accent (the icon's orange-red) carries a third to a half of
  the surface; it is not a sprinkle.
- Exactly one washi strip, one print, deliberate empty kraft space. The
  world stays restrained on purpose so it never tips into craft-store
  clutter.
- No kicker/eyebrow labels above headings anywhere; headings carry their
  own weight.

## Colors

Committed strategy: the flame orange-red is not an accent chip, it is the
print's own band, the primary CTA, and the sparkle mark — the same role it
plays inside the real app icon.

### Primary
- **Flame** (`#fa5830`): the app icon's own orange-red. Used at page scale —
  the print card's overlay band background is drawn from it as a gradient
  scene, the sparkle glyph, and the step numerals.
- **Flame Deep** (`#e8471f`): the darker mountain tone from the icon's own
  artwork; used for hover/active states on links and for the printed step
  numerals' resting color.

### Neutral
- **Kraft** (`#efe2cd`): the page ground — a warm tabletop color, never
  white. Carries a very faint dot texture (`radial-gradient` at 14px) to
  read as linen/paper rather than a flat fill.
- **Kraft Dark** (`#dfcda8`): the kraft tag's fill — one step darker than
  the page ground so the tag reads as a separate physical object sitting on
  the table.
- **Paper** (`#fff8ec`): card backgrounds (the imprint panel, the print's
  own base) — a warmer white than pure `#fff`, matching the icon's printer
  body.
- **Ink** (`#0c1b52`): body text, the print's overlay band, and the primary
  CTA pill background — the icon's own navy, sampled directly from its
  printed-photo band.
- **Ink Soft** (`#34406f`): secondary copy (subheads, step descriptions,
  footer text) — ink tinted toward the page's warm hue rather than gray, so
  secondary text never goes cold.
- **Cream** (`#fcebd9`): text set on ink/flame surfaces (the CTA pill label,
  the band headline, the sparkle fill on dark ground).

### Named Rules
**The No White Rule.** Nothing on this page is pure `#ffffff` or pure
`#000000`. Every neutral, light or dark, is tinted from the icon's own warm
palette.

## Typography

**Display Font:** Baloo 2 (with ui-rounded, SF Pro Rounded, system-ui fallback)
**Hand Font:** Caveat (cursive fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** Baloo 2 is rounded and friendly — it echoes the app's own
in-app type (a bold rounded sans, confirmed from the captured "Shoot. Done."
onboarding screenshot) — reserved for headlines and numerals people are
meant to notice first. Caveat is genuine handwriting, used only where the
world's own logic calls for a hand-label: a kraft tag, a step numeral.
Inter is the workhorse for anything meant to be read at length or scanned
quickly (subheads, body copy, legal text); it is never used as a display
voice.

### Hierarchy
- **Display** (800, `clamp(2.8rem, 7vw, 5.2rem)`, line-height 0.95): the hero
  headline only, always the app's own real copy line for that locale.
- **Title** (700, 1.5rem, line-height 1.2, Baloo 2): the three step
  headings ("Shoot" / "Print" / "Hand it over").
- **Hand label** (700, 1.15rem–1.9rem, Caveat): the kraft tag text and the
  three step numerals — the only places handwriting appears.
- **Body** (400–600, 1rem–1.25rem, line-height 1.6, Inter): subhead, step
  descriptions, footer, legal copy. Kept short of the 65–75ch measure
  everywhere it appears at this page's narrow column widths.

## Layout

Single-column content stacked inside a `max-w-6xl` (teaser) / `max-w-3xl`
(imprint) centered container. The hero is a two-column grid at `lg` and
wider (copy left, print card right); it collapses to one column, print card
centered, below that. Section rhythm: generous vertical space above each
heading, tighter space below it, consistent with the craft floor's spacing
rule. The page never scrolls horizontally at any width; the print card
itself is fluid (`clamp(200px, 24vw, 280px)` wide, fixed 2:3 aspect ratio)
rather than a fixed-pixel object that would overflow narrow viewports.

## Elevation & Depth

Soft, warm, offset shadows only — no flat cards, no borders standing in for
elevation. The print card carries a colored drop-shadow (`14px 22px 26px`,
navy at 28% opacity) so it reads as physically resting on the table, not
pasted flat onto it. The peeled corner and washi tape each carry their own
small offset shadow so the illusion of layered paper survives at any zoom
level.

### Shadow Vocabulary
- **card-rest** (`filter: drop-shadow(14px 22px 26px rgba(12,27,82,.28))`):
  the print card's resting shadow on the kraft ground.
- **peel-lift** (`box-shadow: -6px -6px 10px rgba(12,27,82,.18)`): the
  peeled corner's shadow onto the card beneath it.
- **panel** (`shadow: 6px 6px 0 rgba(12,27,82,.06)`): the imprint page's
  content panel — a flatter, hard-edged offset (not a blur) because that
  panel is a legal document, not a physical prop; it borrows the world's
  color without borrowing the print's soft materiality.

## Shapes

Two silhouette languages, used deliberately for different objects. Physical
props (the print, the kraft tag, the washi tape) are cut with irregular or
angular `clip-path` edges — a tag's notch, tape's torn zigzag, the print's
own peeled-corner cut — because they are meant to read as paper objects, not
UI chrome. UI chrome itself (the CTA pill, the language picker, the imprint
panel) uses conventional soft geometry: full pill radii for small controls,
24px panel radii for containers. The print's own corners are square, not
rounded — the one deliberate exception that keeps it from ever reading as a
Polaroid.

## Components

### CTA statement
A pill-shaped ink-background chip carrying the sparkle glyph and the launch
statement ("Overlazy is launching soon on the App Store."). Not a clickable
button — it makes no promise the site cannot keep, since there is nothing
to link to yet.

### Kraft tag
The "Launching soon" label: a notched kraft-dark tag with a hand-drawn
string and hole-punch circle above it (inline SVG), set in Caveat, rotated
-3°. Stands in for the banned kicker/eyebrow pattern — it is a physical
prop, not a typographic label riding above the heading.

### Print card
The signature component. Structure: an SVG sky/sun/mountain scene (matching
the icon's own geometry) over an ink-colored overlay band carrying the
sparkle glyph and a short band headline; a washi-tape strip pinning the
top-left corner (torn zigzag `clip-path`, semi-transparent cream); a peeled
triangular corner bottom-right (striped "release liner" texture) lifting
off the card. Entrance motion: the card settles into place (rotate + fade +
scale, 0.9s), the tape presses down after it, then the corner peels up last
— one authored sequence, not scattered hover effects, and it no-ops under
`prefers-reduced-motion`.

### Language picker
A pill button (globe glyph + current language name) that expands a listbox
of the other locales on click; current locale marked in flame-deep.
Full-radius controls, ink/15%-opacity border, matches the CTA pill's
control language.

## Do's and Don'ts

### Do:
- **Do** keep every raster/vector "photo" on the page geometric and
  synthetic-labeled by construction (the SVG sun/mountain scene mirrors the
  app icon) — never present a mockup as a real customer photo.
- **Do** reuse the app's own real copy verbatim for the headline in every
  locale (e.g. "Shoot. Done." / "Klick. Fertig.") rather than paraphrasing
  it away.
- **Do** keep the print's edges square and its corner peel adhesive-backed;
  that is the one non-negotiable visual fact distinguishing it from a
  Polaroid.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading — use a physical
  prop (the kraft tag) instead.
- **Don't** show a phone frame, app-store screenshot grid, or gradient-blob
  hero anywhere on this surface.
- **Don't** state a price, a fixed launch date, or any capability the app
  does not have; the CTA is a statement, not a form, until there is
  somewhere real for it to go.

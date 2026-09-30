---
name: Overlazy website
description: A minimal Overlazy wordmark on a solid orange ground.
colors:
  flame: "#fa5830"
  ink: "#0c1b52"
typography:
  display:
    fontFamily: "Baloo 2, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 13vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  brand:
    fontFamily: "Baloo 2, ui-rounded, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.7
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
spacing:
  panel: "0.5rem"
  paragraph: "1rem"
  gutter: "1.5rem"
  section: "2.5rem"
components:
  wordmark:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: "3rem 1.5rem"
  footer:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "1.25rem 1.5rem"
  language-panel:
    backgroundColor: "{colors.flame}"
    textColor: "{colors.ink}"
    padding: "{spacing.panel}"
  language-link:
    textColor: "{colors.ink}"
    padding: "0.5rem 0.75rem"
---

# Design System: Overlazy website

## Overview

**Creative North Star: "Overlazy on orange"**

The user pinned a plain identity: the name Overlazy on an uninterrupted
orange ground. Rounded, heavy brand lettering provides the personality;
space and a two-color palette provide the composition. Legal reading and
language selection use quiet system typography on the same ground.

This replaces the rejected tactile teaser. Its paper props, print
illustration, texture, launch statement, and decorative motion are no
longer part of the visual system. The current implementation in
`src/styles/global.css` and the shared components is the source of truth.

**Key Characteristics:**

- Solid flame background with ink text throughout.
- Self-hosted brand lettering; system fonts for navigation and legal copy.
- Sparse, flat composition with small functional footer navigation.
- No imagery, textures, cards, shadows, or animated effects in page content.

## Colors

The palette pairs a saturated orange-red ground with a deep navy foreground.
The frontmatter defines both normative values; the names match the source
CSS tokens.

### Primary

- **Flame:** fills the page and the language panel. It remains a solid field
  rather than a gradient, texture, or small accent.

### Neutral

- **Ink:** carries the wordmark, reading text, links, language-panel border,
  and focus outline. Selected text reverses the pair: ink background with
  flame lettering.

**The Solid Ground Rule.** Keep the same uninterrupted flame ground on the
home, legal notice, and privacy policy pages.

## Typography

**Display Font:** Baloo 2, with ui-rounded, system-ui, and sans-serif fallbacks.
The licensed font is served locally from `public/fonts/baloo-2-bold.ttf`,
declared at weight 800 with `font-display: swap`.

**Body Font:** ui-sans-serif, system-ui, sans-serif. There is no additional
body-font download or handwriting face.

**Character:** The rounded brand face makes the name warm and recognizable.
System lettering gives legal text and controls a familiar, readable voice.

### Hierarchy

- **Display:** the home wordmark, using the frontmatter's fluid display role.
- **Brand:** the smaller Overlazy home link above legal content.
- **Headline:** legal page headings, with balanced text wrapping.
- **Title:** legal section headings.
- **Body:** legal paragraphs in a column capped at 76ch, with long strings
  allowed to wrap anywhere.
- **Label:** footer links and the language selector. The active language is
  bold (700) and underlined.

**The Brand Type Rule.** Reserve Baloo 2 for the Overlazy name; use system
type for legal headings, body copy, and controls.

## Layout

The home page is a vertical flex layout with a minimum height of one small
viewport (`100svh`). Its main region fills the space above the footer and
centers the single wordmark in both axes. The main region has generous
vertical padding (3rem) and the shared horizontal gutter.

Legal pages use one centered reading column, capped at 76ch with the shared
horizontal gutter. Their brand header has vertical padding (2rem); the
reading region has top padding (1.5rem) and bottom padding (3rem). Sections
are separated by the section spacing token, consecutive paragraphs by the
paragraph token. The back link follows the same section spacing.

The footer wraps as needed, with a small row gap (.25rem) and the shared
gutter between items. It is centered on home and aligned to the reading
column on legal pages, where its horizontal padding is removed.

At widths up to 480px, the footer becomes the language panel's positioning
anchor. The panel sits one rem from its right edge, so wrapping footer
items do not cause the list to clip off-screen.

## Elevation & Depth

The system has no shadows, gradients, or material effects. The open language
list sits above content through positioning and a z-index (2), distinguished
by a thin ink border rather than a raised surface or alternate fill.
There are no transitions or entrance animations.

## Shapes

Page content and the language list are flat and square. There are no pills,
rounded panels, clipped paper silhouettes, or decorative containers. The
language summary uses a small CSS chevron made from two borders; its native
details marker is hidden.

## Components

### Wordmark

The only home-page main content is an `h1` reading “Overlazy,” centered in
its available region and styled with the display role. It has no supporting
copy, illustration, or launch claim.

### Legal reading column

A smaller brand link leads back home, followed by a clear page heading,
section headings, paragraphs, and a back link. Body links are always
underlined. Impressum and privacy policy share the same visual treatment;
the stable `/privacy-policy/` route renders the complete English policy.

### Footer navigation

Privacy policy, legal notice, and the language summary use small ink text
on the page ground. Links underline on hover. Footer links and the language
summary have a minimum interaction height (44px); this preserves an easy
target without increasing their visual prominence.

### Language picker

A native `details` and `summary` control works without JavaScript. Its
language list opens upward, separated from the summary by half a rem, with
a minimum width (12rem), thin ink border (1px), and the panel padding token.
Each language link has a minimum height (44px); the current locale is bold
and underlined.

Language links preserve home, Impressum, or privacy policy page type across
all seven locales. JavaScript adds outside-click dismissal and Escape
handling; Escape returns focus to the summary. The locale preference is
stored when available for the root redirect.

### Focus and text selection

Keyboard focus uses a visible ink outline (2px) with an offset (4px).
Links use a text underline offset (.2em). Text selection reverses the two
brand colors. These states do not introduce extra colors or motion.

## Do's and Don'ts

### Do:

- **Do** preserve the solid flame ground and ink foreground on every page.
- **Do** keep the name centered and let empty space carry the home composition.
- **Do** use the self-hosted Baloo 2 face for the name and system type for reading.
- **Do** preserve visible keyboard focus, 44px control heights, and wrapping
  footer navigation.
- **Do** keep language switching native and preserve the visitor's page type.
- **Do** maintain the same plain reading treatment for every legal locale.

### Don't:

- **Don't** restore the rejected tactile world, paper props, cards, textures,
  illustrations, or decorative motion.
- **Don't** add promotional sections, supporting home copy, or launch claims
  to the pinned minimal page.
- **Don't** introduce additional palette colors, downloaded body fonts,
  shadows, or rounded control chrome.
- **Don't** anchor the mobile language list to a wrapping summary in a way
  that lets it extend beyond the viewport.

---
name: Better Concepcion
description: Independent civic portal for Concepcion (Sibale Island), Romblon, built as wayfinding signage.
colors:
  sign-yellow: "#ffc917"
  sign-yellow-deep: "#f2b600"
  sign-yellow-soft: "#fff4c7"
  ink: "#000000"
  ink-2: "#2e2e2b"
  ink-3: "#55554f"
  paper: "#ffffff"
  concrete: "#ededea"
  concrete-2: "#dcdcd7"
  on-ink-muted: "#d8d8d2"
  on-ink-label: "#b8b8b0"
  go-green: "#0a7d3b"
  stop-red: "#c4161c"
typography:
  monumental:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 9vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  display:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  number:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  sign-title:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  label:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  none: "0px"
  sign: "2px"
spacing:
  rule-thin: "2px"
  rule-sign-gap: "3px"
  rule: "4px"
  rule-footer: "8px"
  row: "18px"
  hero-gap: "48px"
  container: "1240px"
components:
  sign:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.sign-title}"
    rounded: "{rounded.none}"
    padding: "16px 14px"
    height: "88px"
  sign-hover:
    backgroundColor: "{colors.sign-yellow-deep}"
    textColor: "{colors.ink}"
  sign-is-here:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sign-yellow}"
  sign-pic:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "46px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sign-yellow}"
    rounded: "{rounded.sign}"
  button-primary-hover:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.sign-yellow}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
  button-outline-hover:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px"
  page-header:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    padding: "40px 0 44px"
  boat-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.monumental}"
    rounded: "{rounded.none}"
    padding: "26px 28px"
  hotline-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    padding: "16px 18px"
  hotline-card-911:
    backgroundColor: "{colors.stop-red}"
    textColor: "{colors.paper}"
  card-hover:
    backgroundColor: "{colors.sign-yellow-soft}"
  hotline-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "7px 0"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink-muted}"
---

# Design System: Better Concepcion

## Overview

**Creative North Star: "Wayfinding Bands"**

Every page is a junction on Sibale. The site reads like terminal signage at a ferry port: a black hotline strip, a white header ruled off in black, then a full-width yellow band of decision signs that re-signs itself on each page and marks the current section by inverting to black ("You are here"). Below the band, content is set on white and concrete grey as ruled rows, not floating cards. Numbers that people act on (phone numbers, the next boat time, population, area) are set at monumental tabular scale, as a sign would set them.

The system is flat, square and high contrast, built for older residents reading on a phone over a weak signal. One typeface, Atkinson Hyperlegible Next, carries everything in sentence case. Colour is committed rather than accented: yellow appears as whole fields (the sign band, page headers, the footer's top rule), black as whole panels (the boat panel, the executive cards, the footer). It replaces both the BetterSolano template look (navy hero, centred welcome, wall of coloured cards) and an earlier illustrated island theme (script welcome, illustrated hero, red hotline bar), which the maintainer rejected.

The theme lives in one stylesheet, loaded last over the template on every page; it re-tokens the template's variables and owns the chrome.

**Key Characteristics:**
- A yellow sign band of five square signs under the header on every page, with an inverted "is-here" sign for the current section.
- Yellow page-header fields with left-aligned 800-weight headlines; no eyebrow labels.
- Black panels with white pictograms in square insets.
- Phone numbers and times at monumental, tabular scale.
- 4px black rules separate regions; 2px black rules separate rows.
- Square corners (2px at most), no ambient shadows, no gradients.

## Colors

Signage colours used as fields: sign yellow and ink black carry the identity; white and concrete grey are the ground; green and red are reserved signals.

### Primary
- **Sign Yellow** (#ffc917): Whole fields only. The sign band, page headers (`page-header`, statistics and transparency heroes), the footer's 8px top rule, timeline year plates, text selection, the focus halo, and the text colour of primary buttons on black.
- **Sign Yellow Deep** (#f2b600): Hover state of a sign in the band.
- **Sign Yellow Soft** (#fff4c7): Hover wash on cards and sign rows. Never a resting fill.

### Secondary
- **Ink** (#000000): Text, all rules and borders, pictogram insets, the boat panel, the "is-here" sign, the hotline strip, primary buttons, the footer.
- **Ink 2** (#2e2e2b): Lead paragraphs and primary-button hover.

### Tertiary
- **Stop Red** (#c4161c): Reserved for emergency and advisories. In the build it fills only the national 911 hotline card.
- **Go Green** (#0a7d3b): Reserved for verified or open. Defined and mapped to the template's success token; no theme surface uses it yet.

### Neutral
- **Paper** (#ffffff): Default page ground, header, cards, search field.
- **Concrete** (#ededea): Alternate section ground (`bg-alt`, history, office hours), the info bar, scrollbar track.
- **Concrete 2** (#dcdcd7): Hairline dividers (info bar, source lines, office-hours rows).
- **Ink 3** (#55554f): Secondary text: brand tag, source lines, "often needed" lead-in, roles under names, the dashed "unverified" chip.
- **On-Ink Muted** (#d8d8d2): Body text on black (footer paragraphs, links lists' context).
- **On-Ink Label** (#b8b8b0): Definition-list terms inside the boat panel.

### Named Rules
**The Whole Field Rule.** Yellow is applied as a field or a rule, never as a small accent chip or a gradient. If it appears, it fills a band, a header, a plate, or a full button face.

**The Reserved Signal Rule.** Red means emergency or cancellation; green means verified or open. Neither is decoration, and neither is used for categories.

## Typography

**Display Font:** Atkinson Hyperlegible Next (with Atkinson Hyperlegible, system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible Next
**Label/Mono Font:** none; the same family with tabular numerals on `body`

**Character:** One legibility-first face, chosen for older residents and for signage clarity. Hierarchy comes from weight (800 against 400 and 600) and size, never from a second family, uppercase, or tracking.

Loaded from Google Fonts at weights 400, 600, 700, 800.

### Hierarchy
- **Monumental** (800, clamp(4.5rem, 9vw, 7.5rem), 0.95): The next boat time in the boat panel. Tabular figures.
- **Display** (800, clamp(2.5rem, 5.2vw, 4.5rem), 1, max 13ch): The home question, "Where do you need to go in Concepcion?".
- **Headline** (800, clamp(2.25rem, 4.6vw, 3.75rem), 1.02): Page-header titles on yellow fields.
- **Title** (800, clamp(1.75rem, 3vw, 2.5rem)): Section heads, each sitting under a 4px black rule.
- **Number** (800, clamp(1.6rem, 2.6vw, 2.25rem), 1.05): Phone numbers in contact rows; stat values run clamp(2rem, 3.4vw, 3rem); hotline card numbers 1.75rem.
- **Sign title** (800, 1.1875rem, 1.1): Sign names in the band and card headings.
- **Body** (400, 1.0625rem): Running text; page-header descriptions at 1.1875rem capped at 62ch; hero lead at 1.25rem/1.45 capped at 52ch.
- **Label** (600, 0.875rem–0.9375rem): Sign subtitles, hotline names, breadcrumbs. The info bar drops to 0.8125rem.

### Named Rules
**The Sentence Case Rule.** All text is set in sentence case with no letter-spacing added. The theme strips `text-transform` and tracking from card headings, badges and footer headings.

**The Monumental Number Rule.** A number someone will dial or act on is the largest thing in its container, at 800 weight with tabular figures (`font-variant-numeric: tabular-nums` is set on `body`).

## Layout

Container max width 1240px; the sign band runs to 1440px. Regions stack vertically and are separated by full-width 4px black rules: hotline strip, header (4px bottom rule), sign band (4px bottom rule), info bar, then content.

- **Sign band:** a five-column grid (first column 1.3fr, the rest 1fr) with 3px black gutters, so the black ground shows between signs. Below 1100px it becomes a horizontal scroll-snap strip of 220px-minimum signs; below 640px each sign takes 78% of the width, so the next sign peeks in.
- **Home first viewport:** a two-column grid (1.35fr / 1fr, 48px gap). Left: the question, lead and search. Right: the black boat panel, stretched to the same height. Stacks to one column below 860px.
- **Destination lists:** home services and contacts are two-column sign rows (40px column gap, 18px row padding, 2px black rule under each row); one column below 860px.
- **Glance strip:** four figures separated by 2px vertical rules, closed by a 2px bottom rule; two by two below 860px.
- **Section heads:** a 4px black top rule with 18px padding above the title, the "view all" link aligned on the baseline.
- Page headers are left aligned, text capped at 820px.

## Elevation & Depth

Flat. Depth comes from field colour (yellow, black, white, concrete) and black rules, not shadows. The template's `--shadow-sm` is set to none and every card, button and panel has `box-shadow: none`; hover never lifts (`transform: none`).

### Shadow Vocabulary
- **Overlay** (`box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12)`): Only on the navigation dropdown menu, which floats over content. Nothing at rest carries it.

### Named Rules
**The Flat Sign Rule.** Surfaces never lift. Hover changes fill (yellow deep, yellow soft) or nudges an arrow; it never adds a shadow or translates the box.

## Shapes

Square sign geometry. Corners are 0 on signs, pictogram insets, search, dropdowns, language buttons, badges and timeline markers, and 2px at most on buttons and cards. Borders are solid black: 4px for regional rules and the home search field, 3px for buttons and the skip link, 2px for cards, rows and dropdowns. Pictograms sit in square black insets (46–48px; 40px on mobile and in the boat panel head) and never stretch into full-height strips. The logo is a black square holding a yellow right-turn arrow drawn with square line caps.

**The Locked Arrow Rule.** Arrows sit at the trailing edge of the element they point past (`margin-left: auto`) and move only along their own axis (4px to the right on hover).

## Components

### Sign band (signature)
Terminal signage under the header on every page.
- **Shape:** square signs (min height 88px; 72px under 640px), 16px 14px padding, 3px black gutters.
- **Content:** a 46px black pictogram inset with a white icon, an 800-weight title, a smaller subtitle, and an arrow locked to the trailing edge. Five signs: Emergency (with the MDRRMO number), Services, Budget and laws, Officials, Boat to Sibale.
- **Hover:** fill deepens to Sign Yellow Deep over 180ms; the arrow moves 4px right over 220ms (`cubic-bezier(0.16, 1, 0.3, 1)`). Both are removed under reduced motion.
- **Is-here:** the current section's sign inverts to black with a yellow title, a yellow inset with a black icon, and white subtitle, and carries `aria-current="page"`.

### Hotline strip
A thin black bar (7px vertical padding) of phone numbers with yellow icons; hover turns the text yellow. It scrolls horizontally without a scrollbar instead of wrapping.

### Header and navigation
- White, 10px padding, 4px black bottom rule. Brand lockup: 48px black square mark (yellow turn arrow), 800-weight name, Ink 3 tag (hidden under 640px).
- Nav links are 600 weight in black; hover and active add a 3px yellow underline.
- Dropdowns: 2px black border, square, yellow row on hover, the one overlay shadow.
- Language switch: square 2px-bordered buttons; active is black with yellow text.

### Page header
A yellow field (40px top, 44px bottom) with a 4px black bottom rule, a left-aligned headline and a description in black at 1.1875rem. Decorative pseudo-elements and eyebrow badges are removed.

### Buttons
- **Shape:** gently squared (2px radius), 700 weight, 3px solid border.
- **Primary:** black face, yellow text. Hover: Ink 2 face.
- **Outline / Secondary:** white face, black text and border. Hover: yellow face.
- **Focus (all interactive):** 3px black outline at 2px offset plus a 6px yellow halo.

### Inputs / Fields
- **Home search:** a 4px black frame holding a borderless white input (18px padding, 1.1875rem) and a square black submit with yellow 800-weight text and an arrow. Under 640px the label hides and only the arrow remains.
- Placeholder text is #6b6b65 at full opacity; caret is black.

### Cards / Containers
- **Corner Style:** 2px.
- **Background:** white; concrete on alternate sections.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 2px solid black.
- **Hover:** Sign Yellow Soft wash, no movement.
- **Black variant:** executive cards and the "all services" entry are solid black with white or yellow text.

### Sign rows
Lists of destinations (home services, home contacts) drop the card box: each row is a black pictogram inset, text, and a trailing arrow, separated by a 2px black rule, with a yellow-soft hover wash. The last "all services" row is black with yellow text.

### Hotline cards
White, 2px black border, 16px 18px padding, a black icon, the name at 600 weight 0.9375rem, and the number below at 1.75rem 800. The national 911 card is the only red surface: Stop Red fill, white text and icon.

### Boat panel
The home page's right column: a black panel (26px 28px) headed by a 40px yellow pictogram inset and a yellow label, the next departure time at monumental size in white, the route at 700 weight, a definition list (trip, fare, boats) with On-Ink Label terms, and a weather warning pinned to the bottom with a yellow icon and yellow link.

### Status chip: unverified
A dashed 2px Ink 3 border around 700-weight 0.8125rem Ink 3 text, used to label unverified facts such as the unofficial officials count.

### Source line
Ink 3 text over a 1px Concrete 2 top rule with 10px padding, placed under figures to show where they came from; links in it are black.

### Footer
Black with an 8px yellow top rule; headings yellow in sentence case at 1.0625rem; body text On-Ink Muted; links white, turning yellow on hover; the contribute button is square with a 2px white border.

## Do's and Don'ts

### Do:
- **Do** apply Sign Yellow (#ffc917) as whole fields: the sign band, page headers, plates and the footer rule.
- **Do** keep the sign band on every page and set `is-here` plus `aria-current="page"` on the current section's sign.
- **Do** put pictograms in square black insets (46–48px) with white icons.
- **Do** set phone numbers and times at monumental tabular scale, 800 weight, larger than their label.
- **Do** separate regions with 4px black rules and rows with 2px black rules.
- **Do** keep corners square (2px maximum) and surfaces flat.
- **Do** write in sentence case with no added tracking, and keep Filipino labels at the same scale as English.
- **Do** put a source line under every figure and label unverified items with the dashed chip.
- **Do** lock arrows to the trailing edge they point past.

### Don't:
- **Don't** use a navy hero with a centred welcome or a wall of coloured cards (the BetterLGU template default).
- **Don't** use illustrated heroes, script welcomes or a red hotline bar (the rejected island theme).
- **Don't** put eyebrow labels, kickers or pill badges above headings; roles follow names.
- **Don't** use uppercase or letter-spaced labels.
- **Don't** use red or green for anything other than emergency/cancellation and verified/open.
- **Don't** add ambient shadows, gradients, or hover lifts; the only shadow is the dropdown overlay.
- **Don't** stretch pictogram insets into full-height coloured strips.
- **Don't** use the official municipal seal or anything that implies this is the LGU's own site.

---
name: Better Concepcion
description: Independent civic portal for Concepcion (Sibale Island), Romblon, in the BetterLGU navy-and-flag-gold civic look.
colors:
  navy: "#00226e"
  navy-2: "#0b3a9e"
  navy-deep: "#001a55"
  navy-ink: "#0f2342"
  gold: "#fcd116"
  gold-hover: "#ffdc3d"
  gold-deep: "#e6b800"
  flag-red: "#ce1126"
  card-blue: "#2b4fb5"
  card-green: "#277a43"
  card-red: "#c13d23"
  card-teal: "#1a6fa0"
  card-navy: "#13294b"
  card-ink: "#0d1d3a"
  paper: "#faf7f2"
  sand: "#f4efe6"
  sand-line: "#e7dfd0"
  white: "#ffffff"
  line: "#d1d8e6"
  muted: "#4b5875"
  placeholder: "#66708a"
  icon-tint-blue: "#e8eefc"
  icon-tint-green: "#e4f4ea"
  icon-tint-teal: "#e3f1fa"
  icon-tint-red: "#fdebe6"
typography:
  display:
    fontFamily: "Inter Tight, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.2vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter Tight, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter Tight, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 800
    letterSpacing: "-0.02em"
  card-title:
    fontFamily: "Inter Tight, Archivo, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 800
    letterSpacing: "-0.01em"
  wordmark:
    fontFamily: "Inter Tight, Archivo, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  small:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  figure-hero:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1
  figure:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "1.375rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
  tag:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
rounded:
  button: "4px"
  control: "6px"
  tile: "10px"
  card: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "56px"
  grid: "44px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.button}"
    padding: "12px 24px"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.navy-ink}"
  button-ghost-on-navy:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 24px"
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
  button-primary-hover:
    backgroundColor: "{colors.navy-2}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
  hotline-pill:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "3px 12px"
  lang-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
  lang-pill-active:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  search-bar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.card}"
    padding: "8px 8px 8px 16px"
  service-card:
    backgroundColor: "{colors.card-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "20px"
  white-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.card}"
  boat-card:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.card}"
    padding: "22px 26px"
  hotline-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.card}"
    padding: "16px 18px"
  hotline-card-emergency:
    backgroundColor: "{colors.flag-red}"
    textColor: "{colors.white}"
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
---

# Design System: Better Concepcion

> This system replaces the earlier "Wayfinding Bands" airport-signage world (and the island theme before it), both rejected by the maintainer. The source of truth is `assets/css/theme-civic.css`, loaded last over the BetterSolano template on every page. The maintainer pinned the look: "I want design like Alcala" (BetterAlcala / BetterLGU family). BetterAlcala's code and assets are unlicensed and were not copied; everything here is recreated in this project's own CSS and SVG.

## Overview

**Creative North Star: "The Navy Front Door"**

A confident, official-feeling but independent civic portal. Every page opens on a deep navy field lit by a soft blue glow from above, ruled by a faint 44px grid, with a gold Philippine-style sun rising from the lower right. Flag gold is the single action colour. Below the hero, the page turns to warm paper and sand, with white bordered cards for information and saturated colour cards for the services people come for.

Density is moderate and scannable: a resident on a phone should see the hotline bar, the welcome, search and the first service card without effort. Colour carries category (blue, red, green, teal, navy) rather than decoration, and figures (phone numbers, times, statistics) are set in IBM Plex Mono so they read as data, not prose.

**Key Characteristics:**
- Navy hero field with radial blue glow, 44px grid and a 22%-opacity gold sunburst, shared by the home hero and every inner page header.
- Flag gold (#fcd116) as the primary action and the accent on navy; never as a page ground.
- Flag-coloured tile band (blue, green, red, teal, 40px squares) under the home hero, topped by a 3px gold rule.
- Saturated service cards with diagonal line texture, a tinted icon square and a mono tag.
- Warm paper ground with alternating sand sections; white cards on a 1px cool-grey border at 12px radius.
- Inter Tight 800 display, Archivo body, IBM Plex Mono figures and tags.

## Colors

Navy and flag gold carry the identity; four flag-derived category hues colour the service layer; warm paper and sand keep the long pages calm.

### Primary
- **Civic Navy** (navy): hero fields, inner page headers, hotline bar, footer, primary buttons, active language pill, search submit. Hover deepens toward **Bright Navy** (navy-2), which is also the link colour.
- **Flag Gold** (gold): the primary action button, the `.org` in the wordmark headline, hero place line, focus ring, selection, footer headings, badges on leadership cards, the sunburst and the 3px/4px gold rules above the tile band and footer. **Gold Deep** (gold-deep) is the darker gold used on white: the "Concepcion" half of the wordmark, search glass, info-bar icons.

### Secondary (category hues)
- **Service Blue** (card-blue), **Field Green** (card-green), **Ember Red** (card-red), **Harbour Teal** (card-teal), **Deep Navy Card** (card-navy) and **Night Ink Card** (card-ink): service-card grounds and the tile band. Blue, green, teal and red also tint the stat-card icons (on their pale **icon tints**) and colour the matching mono stat values.
- **Emergency Red** (flag-red): hotline-card icons and the full-red 911 card. Reserved for emergency.

### Neutral
- **Warm Paper** (paper): body ground.
- **Sand** (sand): alternating sections (stats, history, leadership, office hours), the boat card, dropdown hover. **Sand Line** (sand-line) borders the boat card.
- **White** (white): header (96% with blur), cards, services section ground, search bar.
- **Cool Line** (line): 1px card, header and dropdown borders.
- **Navy Ink** (navy-ink): body text and headings on light grounds. **Muted Slate** (muted): secondary text, source lines, brand tagline. **Placeholder** (placeholder): input placeholder.

### Named Rules
**The One Gold Rule.** Gold is the action and the accent on navy. On any light section, gold appears only as gold-deep detail or a hover underline, never as a button ground next to a navy button.

**The Colour Means Category Rule.** Saturated hues are for service categories and their stat counterparts. Don't use card-red, card-green or card-teal as decoration; flag-red is reserved for emergency.

## Typography

**Display Font:** Inter Tight (with Archivo, system-ui fallback), weights 700 and 800
**Body Font:** Archivo (with system-ui), weights 400–700
**Label/Mono Font:** IBM Plex Mono (with ui-monospace), weights 500 and 600

**Character:** A tight, heavy civic grotesque for headlines over a sturdy, open workhorse for reading; mono marks anything you might dial, compare or cite.

### Hierarchy
- **Display** (800, clamp(2.5rem, 6.2vw, 4.75rem), 0.98, -0.035em): the home hero welcome only. On phones it drops to clamp(1.75rem, 8.4vw, 2.5rem).
- **Headline** (800, clamp(2rem, 4vw, 3rem), -0.025em): inner page header h1 on navy.
- **Title** (800, clamp(1.75rem, 3vw, 2.25rem)): section heads ("Popular services", "Concepcion at a Glance").
- **Card title** (800, 1.1875rem, -0.01em): service, boat and info card headings. Never uppercase.
- **Lead** (400, 1.125rem, 1.55, max 600px): hero lead; inner headers use 1.0625rem at 85% white.
- **Body** (400, 1rem): running text. Small (600, 0.9375rem) for card descriptions, hotline names, nav (0.9375rem, 600).
- **Label** (600–700, 0.8125rem): hotline bar, info bar, source lines.
- **Figures** (Plex Mono 600): boat time 2.75rem, hotline numbers 1.375rem, stat values with -0.02em; card tags 0.75rem.

### Named Rules
**The Figures Are Mono Rule.** Phone numbers, departure times, statistics, years and card tags are IBM Plex Mono 600. Prose never is.

**The No Shouting Rule.** Headings and card titles are sentence case with negative tracking. The template's uppercase section tags and badges are suppressed site-wide; don't reintroduce them.

## Layout

Centred container at 1200px max. The home hero is centred text in an 860px column with the search bar capped at 680px; inner page headers are left-aligned on the same navy field with 46px/50px padding. Section rhythm is about 56–60px vertical; cards sit in 16px gaps; buttons and pills in 8–12px gaps.

Service cards run three columns, two below 900px, one below 640px (min-height 168px, 140px on phones). The boat card is a three-part row (mono time, text, link) that stacks below 640px. On phones the header keeps a single row (emblem 38px, wordmark 1.125rem, tagline hidden, language pills before the menu toggle), the sunburst shrinks to 360px, and the hotline bar scrolls horizontally without a visible scrollbar. The page never scrolls sideways (`overflow-x: clip`).

## Elevation & Depth

Mostly flat with a quiet two-step lift. Rest state is a hairline shadow; hover raises cards 2–3px and deepens to a soft navy-tinted drop. The hero carries depth through the radial glow and grid, not shadows; the search bar alone floats on a strong dark shadow so it reads as the primary action.

### Shadow Vocabulary
- **Rest** (`0 1px 2px rgba(15,35,66,0.06), 0 1px 1px rgba(15,35,66,0.04)`): every card at rest.
- **Lift** (`0 10px 24px -8px rgba(15,35,66,0.22)`): card hover, dropdown menus.
- **Search float** (`0 18px 40px -14px rgba(0,0,0,0.45)`): the hero search bar only.

### Named Rules
**The Lift On Intent Rule.** Shadows deepen only on hover of a link card. Static information never sits higher than the rest shadow.

## Shapes

Soft, consistent corners. Cards, the boat card and the search bar use 12px; icon squares, dropdowns and the search submit 10px; standard buttons, timeline years, tags and the unverified note 6px; the hero buttons are crisper at 4px. Pills (hotline bar, popular searches, language toggle, leadership badges) are fully round. Diagonal 135deg line texture (2px every 14px at 6% white) is the service card's one surface pattern. Category icons sit in 40–44px rounded squares.

## Components

### Buttons
- **Shape:** crisp 4px on the hero, 6px elsewhere.
- **Gold primary:** flag gold, navy-ink text, 700 weight, 12px 24px, optional trailing arrow. Hover brightens to gold-hover and lifts 1px (160ms).
- **Ghost on navy:** 1.5px 55%-white border on 6% white; hover to 14% white.
- **Navy primary / outline (inner pages):** navy fill with white text, hover to navy-2; outline is white with a 1.5px navy border.
- **Focus:** 3px gold outline, 2px offset, everywhere.

### Hotline bar and pills
Navy strip, 0.8125rem, every hotline a translucent white pill with a gold phone icon; static (no marquee), horizontally scrollable on phones.

### Header and navigation
96% white with backdrop blur and a 1px line border. Sun emblem (gold rays and disc over a navy wave) plus a two-line wordmark: "Better" in navy, "Concepcion" in gold-deep, small muted tagline. Nav links navy-ink 600; hover and active get a 3px gold underline (inset shadow). EN/FIL are round pills with a 1.5px navy border, filled navy when active. Dropdowns: 10px radius, line border, lift shadow, sand hover.

### Navy hero field (signature)
Navy ground, radial blue glow from the top centre, 44px white grid at 4.5%, gold sunburst at 22% opacity bleeding off the lower right. Home: gold place line, display welcome with gold `.org`, lead, three fact items marked with gold, green and blue dots, gold and ghost buttons, white search bar with a navy square submit, then popular-search pills. Inner pages reuse the field at smaller scale with a left-aligned headline.

### Tile band (signature)
A 40px-tall row of 40px icon squares cycling blue, green, red, teal under a 3px gold top rule. Decorative (`aria-hidden`), home only.

### Service cards (signature)
Saturated colour card (blue, red, navy, green, teal, ink), 12px radius, 20px padding, diagonal line texture. Top-left 40px tinted icon square (16% white), top-right mono tag on 22% black, title and description at the bottom in white. Hover lifts 3px with the lift shadow (180ms); reduced motion disables the transform.

### White cards / containers
White, 1px line border, 12px radius, rest shadow, any template background image removed. Icons in 44px squares on icon-tint-blue (stat cards cycle green, teal, red). Link cards lift 2px on hover.

### Boat card
Sand panel with sand-line border: navy mono departure time, card-title route, muted detail line, bold link.

### Hotline cards
White card with an emergency-red icon, name (600, 0.9375rem) over a mono number (1.375rem). The 911 card is solid flag red with white text. Unverified items carry a dashed-border muted note.

### Inputs / Fields
Search: white, 12px radius, gold-deep glass icon, borderless input, 44px navy submit. Inner-page inputs 10px radius. Placeholder #66708a.

### Footer
Navy with a 4px gold top rule; gold headings (1rem, sentence case), 82% white body, white links that turn gold on hover.

## Do's and Don'ts

### Do:
- **Do** open every page on the navy hero field (glow, 44px grid, gold sunburst) so the site reads as one front door.
- **Do** make gold (#fcd116) the one primary action per hero, with a white or ghost secondary.
- **Do** give every service category its fixed hue (blue certificates, red business, navy treasury, green social welfare, teal health) and keep it consistent between cards, tiles and stat icons.
- **Do** set phone numbers, times and statistics in IBM Plex Mono 600 and show their source in a muted line beneath.
- **Do** keep cards white on a 1px #d1d8e6 border at 12px radius with the rest shadow; lift only on hover.
- **Do** label unverified data with the dashed unverified note rather than hiding or guessing it.
- **Do** honour reduced motion and the 3px gold focus ring.

### Don't:
- **Don't** copy BetterAlcala's code, illustrations, logo or any other asset; the look is recreated in this project's own CSS and SVG.
- **Don't** use the official municipal seal or anything that implies this is the LGU's website.
- **Don't** reintroduce the rejected Wayfinding Bands signage (yellow sign bands, black ground, Atkinson type) or the island theme (illustrated hero, script welcome, red hotline bar).
- **Don't** use flag red outside emergency contexts, or gold as a light-section button ground.
- **Don't** uppercase card titles or bring back the template's eyebrow badges and section tags.
- **Don't** add a marquee or auto-scroll to the hotline bar.
- **Don't** hotlink or copy visitsibale.com imagery.

## Sunrise over Sibale (25 Nov 2026, supersedes the Alcala-style hero)

The maintainer asked for the site to stop looking copied from a template and to feel like Sibale, keeping the logo's colours.

- **Signature:** every hero and page header is a sunrise: navy sky lightening to the horizon, a warm glow, the logo's sun (slowly turning) setting behind a silhouette of the island, and three layers of sea that drift sideways. No grid paper.
- **Colours (from the logo):** navy `#00226e`, sun `#ffc61a`, sea `#1877d2` / `#2f9bea` / deep sea `#0b3f8f`, paper `#faf7f2`.
- **Type:** Outfit (rounded geometric, like the logo lettering) for headings and figures; Archivo for text.
- **Details:** a small wave mark under section headings; white service cards with a wave edge in their colour; pill buttons and search; the boat card styled as a ferry ticket; a strip of the 9 barangays under the hero instead of decorative tiles.
- **Map:** 3D terrain of the island (MapLibre, OpenFreeMap, AWS terrain tiles) with barangay pins; loads only when scrolled into view.
- **Motion:** sun rotation, drifting sea, one slow turn of the map. All stop with prefers-reduced-motion.

### Real island hero (25 Nov 2026, replaces the drawn sun, island and waves)

The maintainer called the drawn sun and mountains "AI slop". Heroes and page headers now use a render of
Sibale's real terrain and Sentinel-2 satellite imagery at dawn (`assets/images/banners/sibale-hero-*.webp`,
11-20 KB each), darkened on the text side. Credit is shown in the home hero. No AI-generated imagery of real
places. See tools/README.md to re-render; swap for licensed photographs when available.

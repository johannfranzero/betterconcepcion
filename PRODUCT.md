# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences weighted equally (confirmed by the maintainer):

- **Residents of Sibale (Maestro de Campo Island)**, about 3,400 people in 9 barangays. They need emergency
  hotlines, municipal service requirements, officials and boat information, often on a phone with weak
  or intermittent mobile signal.
- **Sibalenhons off-island**, including family members in Mindoro and Manila and OFWs. They follow
  officials, budget, ordinances and town news, and plan trips home.

Visitors and tourists are a secondary audience, served mainly by linking to the LGU's own visitsibale.com.

## Product Purpose

BetterConcepcion.org is an independent, volunteer-run civic portal for the Municipality of Concepcion,
Romblon, part of the BetterGov.PH BetterLGU initiative. It makes public services, officials, budgets,
ordinances and verified local data accessible in one place. Success means people quickly find a
hotline, a service requirement, a public record or a boat route, and trust what they see because
every fact carries its source.

## Positioning

The only place that gathers Concepcion's civic information, with sources, for an island municipality
that can only be reached by boat. Its honesty about what is verified and what is not is part of the product:
unverified items are labeled, never guessed.

## Operating Context

- Island reachable only by a 2.5–3 hour motorboat from Recodo Port, Pinamalayan; trips cancelled in bad weather.
- Mobile signal varies around the island; pages must be light and readable offline-ish (there is a service worker).
- Local language is Asi (Bantoanon); Tagalog/Filipino and English are understood.
- The LGU's Municipal Tourism Office runs visitsibale.com and the "Sibale Tourism" Facebook page; these are the
  main official sources.

## Capabilities and Constraints

- Static HTML/CSS/JS site (adapted from the MIT-licensed BetterSolano template), about 50 pages, English and
  Filipino via `assets/js/translations.js`; deploy to Vercel/Netlify/GitHub Pages.
- Home page jobs, all four confirmed as top priority: call a hotline, find a service, check transparency
  (budget, ordinances, officials), plan the boat trip.
- Data lives in `data/*.json`; research with sources in `research/concepcion-romblon-facts.md`.

## Brand Commitments

- Name: Better Concepcion / BetterConcepcion.org. Independent; never use the official municipal seal or imply
  it is the LGU's website.
- Logo: the maintainer supplied the official lockup on 25 Nov 2026 (sun, palm, church and waves emblem with "BetterConcepcion" and "CONCEPCION, ROMBLON"). Source file: assets/images/logo/better-concepcion-logo.png; the emblem alone is used for icons.
- Filipino first: Filipino (and where possible Asi) should feel as native as English, not an afterthought.
- An earlier "island theme" (illustrated hero, script welcome, red hotline bar) and a "Wayfinding Bands" airport-signage
  theme were both rejected by the maintainer.
- Look (maintainer, 25 Nov 2026, later the same day): keep the logo colours but do not look copied from a template; make it feel like Sibale (sea, island, sunrise). This replaces the earlier "design like Alcala" rule. Earlier note: "I want design like Alcala" — match the BetterAlcala (betteralcala.org) visual
  style: navy hero with flag-gold accents and sunburst, colourful service cards, warm paper ground. The BetterAlcala
  repository has no license, so its code, illustrations and logo are not reused; the look is recreated in this
  project's own CSS.

## Evidence on Hand

- Sourced data: PSA population (3,427 in 2024), 9 barangays, history, hotlines and office emails from
  visitsibale.com, Ordinance No. 2024-12, travel route and fares.
- No photographs of Sibale are licensed for use yet; do not hotlink or copy visitsibale.com imagery.
- Officials are from an unofficial 2025 count and must stay labeled as such.

## Product Principles

1. Emergency information first and reachable in one tap, on any page.
2. Every fact shows its source; unverified items are labeled, never invented.
3. Built for a phone on a weak signal: light, legible, works when connectivity drops.
4. Equal footing for residents and the diaspora: services and transparency side by side.
5. Filipino is a first-class language, not a translation.

## Accessibility & Inclusion

Large readable text and high contrast for older residents; full keyboard access; respect reduced motion;
bilingual labels.

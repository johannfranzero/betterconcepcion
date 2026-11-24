# BetterConcepcion.org

An independent, volunteer-run civic portal for the **Municipality of Concepcion, Romblon**
(Maestro de Campo / Sibale Island, MIMAROPA), part of the
[BetterGov.PH BetterLGU initiative](https://lgu.bettergov.ph/).

> **Not an official LGU website.** Information is compiled from public sources. Anything not yet
> confirmed is marked as unverified on the page. Always confirm with the Concepcion Municipal Hall.

## Status

Version 0.1.0, work in progress. Registered in the
[BetterLGU directory](https://github.com/jmacj/better-lgu-directory) as 🔵 Planned.

| Area | State |
| --- | --- |
| Population, barangays, land area | ✅ Sourced (PSA 2024 POPCEN, PSA 2020 via PhilAtlas) |
| Elected officials 2025–2028 | ⚠️ From an unofficial count; needs the Comelec proclamation or LGU confirmation |
| Emergency hotlines and office emails | ✅ From the LGU's Municipal Tourism Office ([visitsibale.com](https://www.visitsibale.com/contact)) |
| Travel info, visitor fee, Ordinance 2024-12 | ✅ From visitsibale.com |
| Service fees, processing times, office locations | ❌ Not yet verified. Every service page carries a notice |
| Budget, COA audit reports, other ordinances, resolutions | ❌ Not yet compiled |

The research notes, with a source URL for every fact, are in
[`research/concepcion-romblon-facts.md`](research/concepcion-romblon-facts.md).

## Where the data lives

| File | Used by |
| --- | --- |
| `data/demographics.json` | Population and barangay figures |
| `data/officials.json` | Mayor, Vice Mayor and Sangguniang Bayan |
| `data/services.json` | Service search on the home and services pages |
| `data/ordinances.json`, `data/resolutions.json` | Legislative pages (empty until compiled) |
| `data/news.json` | News page (empty until an official source is confirmed) |
| `assets/js/statistics-new.js` | Chart data on the statistics page |

Most page text is static HTML. The English and Filipino strings live in `assets/js/translations.js`.
When you change English text on a page, either update the matching `translations.js` key or remove
that element's `data-i18n` attribute. Otherwise the old text comes back on page load.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000. Extensionless links such as `/service-details/birth-certificate` need
clean-URL support, which Vercel (`vercel.json`), Netlify, GitHub Pages and Apache (`.htaccess`)
provide. On the plain Python server, open the `.html` file directly.

## Contributing

Corrections are the most useful contribution. Open an issue with:

1. what is wrong or missing
2. the correct information
3. **a source**: an LGU post, an official document, PSA, Comelec, COA or similar.

Emergency numbers are only published once they can be traced to the LGU or the agency itself. The current
numbers come from the Municipal Tourism Office's visitsibale.com.

## Credits and license

Built on the [BetterSolano](https://github.com/BetterSolano/bettersolano) template by Ramon Logan Jr.
and contributors, used under the MIT License. Code: MIT. Content: CC BY 4.0. See [LICENSE](LICENSE).

## Design

The theme lives in `assets/css/theme-sibale.css`, loaded after the template's styles on every page.
The home hero uses an illustration (`assets/images/hero/sibale-hero.svg`). To use a real photo, add it
(for example `assets/images/hero/sibale.jpg`, about 1920×900) and set this in `theme-sibale.css`:

```css
.sib-hero { --sib-hero-image: url('../images/hero/sibale.jpg'); }
```

Only use photos you took yourself or have permission to use. The logo is our own emblem, not the
municipal seal: an independent portal shouldn't carry the LGU's official seal.

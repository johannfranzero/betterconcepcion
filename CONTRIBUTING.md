# Contributing to BetterConcepcion.org

Thank you for helping make public information about Concepcion, Romblon accessible.

## The most useful contributions

1. **Corrections and sources.** Open an [issue](https://github.com/johannfranzero/betterconcepcion/issues) saying what is wrong, what is right, and the
   source (an LGU post or notice, PSA, Comelec, COA, DBM, DILG, or similar).
2. **Verified local hotlines.** Emergency numbers are published only if you can trace them to the LGU
   or the agency itself, for example an official post, signage or a printed notice.
3. **Documents.** Annual budgets, COA audit reports, ordinances and resolutions, with where you got them.

## Code changes

```bash
git clone https://github.com/johannfranzero/betterconcepcion.git
cd betterconcepcion
python -m http.server 8000
```

- Keep changes small and describe them in the pull request.
- When you change English text on a page, update the matching key in `assets/js/translations.js` or
  remove that element's `data-i18n` attribute. Otherwise the old text comes back on page load.
- Put data in `data/*.json` with a `_source` note where possible.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

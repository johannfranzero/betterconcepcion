# Register Concepcion, Romblon in the BetterLGU directory

Directory repo: https://github.com/jmacj/better-lgu-directory

## 1. The row to add

In `README.md`, inside the directory table, paste this line **directly above** the
`| Concepcion, Tarlac | ...` row (the table is A–Z, and Romblon sorts before Tarlac).

```
| Concepcion, Romblon | - | - | - | 🔵 Planned | [@johannfranzero](https://github.com/johannfranzero) |
```

The columns are LGU | Domain | Repository | Socials | Status | Maintainer/s. Domain, Repository and Socials stay `-` until
the site repo and Facebook page exist. You update them later in an "Update" PR.

## 2. Submit it from the browser (no tools needed)

1. Sign in to GitHub and open https://github.com/jmacj/better-lgu-directory/blob/main/README.md
2. Click the pencil icon (**Edit this file**). GitHub will offer to fork the repo for you, so accept.
3. Find the `| Concepcion, Tarlac |` line (Ctrl+F) and paste the row above it on its own line.
4. Click **Commit changes…** and choose **Create a new branch / propose changes**.
5. On the next screen click **Create pull request**, then use the title and description below.

Do not edit `CHANGELOG.md`. The maintainers handle it.

## 3. Pull request title

```
Add Concepcion, Romblon to directory
```

## 4. Pull request description

```
Registering intent to build an independent civic portal for the Municipality of
Concepcion, Romblon (MIMAROPA).

- LGU: Concepcion, Romblon
- Status: 🔵 Planned
- Maintainer: @johannfranzero
- Planned repo name: betterconcepcion
- Planned template: Better Solano Starter (React + TypeScript)

This is distinct from the existing "Concepcion, Tarlac" entry.
```

## 5. After it's merged

- Create the public `betterconcepcion` repo and start building (status → 🟡 Work in Progress).
- Once it's deployed, open a PR titled `Update Concepcion, Romblon — site launched`
  that fills in Domain/Repository/Socials and sets the status to 🟢 Active.
- Optional: add a maintainer profile from
  https://github.com/jmacj/better-lgu-directory/blob/main/maintainers/_template.md
  (PR title: `Add Maintainer Profile — @johannfranzero`).

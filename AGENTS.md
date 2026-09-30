# Repository Guidance

## Commands

- Use `npm run dev` for local development, `npm run check` for Astro/TypeScript diagnostics, and `npm run build` for the production verification.
- Run `npm run check` before `npm run build`; there is no separate test or lint suite.

## Structure

- Static, bilingual Astro landing page. Routes are `src/pages/index.astro` (Valencian, `/`) and `src/pages/es/index.astro` (Spanish, `/es/`); both are thin wrappers that pass a locale object into `src/components/Landing.astro`.
- All copy and data live in `src/data/site.ts`, keyed by `va` and `es`. Edit text there, never in the component, so both languages stay in sync. Adding a section means adding its key to both locales and its markup to `Landing.astro`.
- Content is researched and must stay factual: group/section info comes from the old Wix site, and scout movement/ASDE facts (ASDE founded 1912, 17 federated organisations, ~32.500 scouts, OMMS 54M in 223 countries) come from `scout.es`. Do not invent dates, founding years or statistics; if a figure cannot be verified, omit it.
- Sections in order: hero, `#qui-som`, `#mafeking` (history of the Mafeking name), `#branques`, `#activitats`, calendar, `#moviment` (ASDE/Scouts Valencians + scout method + commitments), `#galeria`, resources, `#documents`, `#faq`, `#contacte`. The FAQ uses native `<details>` (no JS).
- `src/components/Landing.astro` owns the full page markup and the small vanilla nav/reveal script; `src/styles/global.css` owns the Material-style red/white design system and all responsive behavior.
- Brand red is sampled from `src/images/logo mafeking.avif` (imported via `astro:assets`); section anchors (`#qui-som`, `#branques`, etc.) are shared by both locales.
- Images in `public/images/` are local copies of assets from the previous Wix site. Keep public URLs stable when replacing them.
- Scroll-reveal only hides content when JS is active (`html.js`); keep it that way so the page degrades to fully visible without JavaScript.

## Visual verification

- The Figma reference is the "Material Design 2 web starter kit" community file (used only for component patterns: app bar, cards, buttons, chips, FAB, elevation).
- Validate changes with Playwright against `npm run preview` on `http://localhost:4321`: check both `/` and `/es/`, desktop (1440x900) and mobile (390x844), console errors, horizontal overflow, broken images, and anchor targets.
- `astro preview` serves the built `dist/`, so rebuild before re-checking.

## Deployment

- Published to GitHub Pages at `https://xLu1s.github.io/web-mafeking/` from `github.com/xLu1s/web-mafeking`; every push to `main` rebuilds and deploys via `.github/workflows/deploy.yml`.
- Pages source must be set to **GitHub Actions** (not a branch). The workflow uses `withastro/action` with `node-version: 22`; Astro requires Node >= 22.12 (`package.json` `engines`).
- `astro.config.mjs` derives `site`/`base` from `GITHUB_REPOSITORY`, so the project subpath is handled automatically in CI while local dev keeps `base: '/'`.
- Because this is a *project* Pages site, any URL to a file in `public/` or any internal link must go through `import.meta.env.BASE_URL` (see the `asset()` helper in `Landing.astro`); hardcoded `/images/...` or `/es/` paths 404 on the subpath.

## OpenCode

- Project `opencode.json` enables Figma with `figma-developer-mcp --env .env --stdio`; `.env` must contain `FIGMA_API_KEY` and must remain ignored by Git.
- Playwright is configured globally. OpenCode must be restarted after MCP configuration changes because config is not hot-reloaded.

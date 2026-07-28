# Hylouis233.github.io

Static Astro academic site for Hong Liu.

## Development

```bash
npm install
npm run dev
```

## Build variants

The site builds two variants from one codebase, driven by `scripts/build.mjs` (which sets `SITE_VARIANT` and copies the repo-root `.nojekyll` into the output directory):

- `npm run build` — **github** variant (default). English-only, output to `dist/`, deployed to <https://hylouis233.github.io> via GitHub Actions (`.github/workflows/pages.yml`). No ICP filing line, no language toggle.
- `npm run build:top` — **top** variant. Chinese by default with an English version under `/en/` and a header language toggle, output to `dist-top/`, deployed to <https://introduction.hylouis.top>. The footer shows the ICP filing line (edit the text in `src/i18n.ts`, constant `icpText`).

Variant behaviour is centralized in `src/i18n.ts` (`siteVariant`, `defaultLang`, `showLangToggle`, `showIcp`, `t`, `localizedPath`); `src/layouts/BaseLayout.astro` consumes it for the header, nav, footer, and `<html lang>`.

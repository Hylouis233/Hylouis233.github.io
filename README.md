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

## Automated star refresh and VPS deployment

`.github/workflows/update-stars.yml` refreshes GitHub star counts every day and
deploys the `top` variant only when the counts change (or when a manual run sets
`force_deploy` to `true`). When stars change or a deployment is forced, it also
dispatches `pages.yml` explicitly so the commit made with `GITHUB_TOKEN` is
published to GitHub Pages. It requires these repository Actions secrets:

- `VPS_HOST`: a stable public hostname/IP reachable over SSH. A Tailscale IP is
  also supported, but then `TAILSCALE_AUTHKEY` is required.
- `VPS_USER`: the SSH user used for deployment.
- `VPS_SSH_KEY`: the complete, unencrypted private SSH key.
- `TAILSCALE_AUTHKEY`: required only when `VPS_HOST` is in `100.64.0.0/10`.

For a failed historical run, start a new `workflow_dispatch` run from `main`
after changing the workflow. Re-running the historical attempt uses that run's
original workflow revision and is not a valid test of a later fix.

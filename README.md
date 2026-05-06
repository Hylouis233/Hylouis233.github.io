# Hylouis233.github.io

Static Astro academic site for Hong Liu.

## Development

```bash
npm install
npm run dev
npm run build
```

## Monetization Layer

Ad and sponsor placements are centralized in `src/data/monetization.ts` and rendered through `src/components/AdSlot.astro`.

Current enabled placements:

- AADS adaptive banner, `Ad Unit #2436794`, excluded from `/support/`.
- Site-wide bottom support/sponsor block.
- Contact page sidebar collaboration block.
- Portfolio middle collaboration block.

Disabled placeholders are available for affiliate links, Baidu Union, and crypto-friendly ad networks. Do not enable third-party ad scripts until the site has been approved and `public/ads.txt` has the matching seller records.

Related docs:

- `docs/ad-network-setup.md`
- `docs/ad-placement-policy.md`

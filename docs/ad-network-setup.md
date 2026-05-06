# Ad Network Setup

This site currently uses a static, configuration-first advertising layer. No third-party network script is enabled until a network account, site review, and placement ID are ready.

## Current Status

- Manual sponsor placement: enabled.
- Affiliate placement: configured as a disabled placeholder.
- Baidu Union placement: configured as a disabled placeholder.
- Crypto-friendly network placement: configured as a disabled placeholder.
- `public/ads.txt`: published with no authorized sellers yet.

## Where To Configure

Edit `src/data/monetization.ts`.

Keep every ad, sponsor, affiliate, or network placement in `monetizationConfig.ads.creatives`. Pages should only call:

```astro
<AdSlot position="top" pageType="article" />
<AdSlot position="middle" pageType="landing" />
<AdSlot position="sidebar" pageType="docs" />
```

## Activation Order

1. Manual sponsor or reviewed affiliate link.
2. Baidu Union after the site has a stable domain and enough Chinese content.
3. A crypto-friendly network only for relevant pages, preferably with reviewed banner or native placements.
4. Avoid popunder, push notification, misleading download buttons, wallet impersonation, casino, and high-yield finance claims.

## Before Enabling A Network Slot

- Confirm the site has been accepted by the network.
- Replace publisher, slot, zone, and script placeholders.
- Add the exact authorized seller record to `public/ads.txt` if the network requires it.
- Keep `rel="sponsored nofollow noopener noreferrer"` on affiliate or sponsored links.
- Run `npm run build`.
- Check that ads do not cover navigation, support links, research records, payment buttons, or QR codes.

## Static Hosting Boundary

This repository does not store ad-network secrets or payment secrets. It only renders client-side placements. Any future server-side tracking, paid unlock flow, or conversion callback needs a separate backend such as Cloudflare Workers, Vercel Functions, Supabase, or a self-hosted service.

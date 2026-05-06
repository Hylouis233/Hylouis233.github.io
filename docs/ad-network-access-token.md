# Ad Network Access Token

Use access tokens only for local automation or CI secrets. Do not put tokens in frontend code, static config, GitHub Pages output, or committed files.

## AADS Token

If AADS provides an access token or API token, use the minimum permission set available. Prefer ad-unit read/write permissions only. Do not use a token that can withdraw funds, change payout addresses, or change account security settings.

## Local Setup

Run this from the repository root:

```powershell
.\scripts\set-aads-token.ps1
```

This writes `AADS_ACCESS_TOKEN` to the Windows user environment. Open a new terminal after running it.

To also create a local `.env.local` file for tools that load dotenv-style files:

```powershell
.\scripts\set-aads-token.ps1 -WriteLocalEnv
```

`.env.local` is ignored by git.

## Verify

```powershell
node .\scripts\check-aads-token.mjs
```

The script only prints a masked token prefix/suffix. It does not send the token anywhere.

## GitHub Actions

If automation later needs to run in GitHub Actions:

```powershell
gh secret set AADS_ACCESS_TOKEN -R Hylouis233/Hylouis233.github.io
```

Paste the token into the prompt. Do not pass it as a command-line argument.

## Current Limit

This repository already renders the approved AADS unit. AADS' public help center describes ad units as iframe-based website placements and states that AADS does not provide an ad-serving API or SDK. API-driven ad-unit management still depends on AADS exposing a separate documented publisher/account API for the token. Until that endpoint is confirmed, the token is stored safely but not used by the frontend.

References:

- https://help.aads.com/en/article/how-to-place-an-ad-unit-code-correctly-12n1ti5/
- https://help.aads.com/en/article/can-i-use-aads-ads-in-a-mobile-app-ios-or-android-w6ktkj/

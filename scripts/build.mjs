// Build one of the two site variants: `node scripts/build.mjs [github|top]`
// - github: English-only build for hylouis233.github.io -> dist/
// - top:    Chinese-default build for introduction.hylouis.top -> dist-top/
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const variant = process.argv[2] ?? 'github';
if (variant !== 'github' && variant !== 'top') {
  console.error(`Unknown variant "${variant}". Usage: node scripts/build.mjs [github|top]`);
  process.exit(1);
}

const outDir = variant === 'top' ? 'dist-top' : 'dist';
const astroCli = resolve(root, 'node_modules', 'astro', 'astro.js');

const result = spawnSync(process.execPath, [astroCli, 'build', '--outDir', outDir], {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, SITE_VARIANT: variant },
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

// GitHub Pages / static hosts: make sure .nojekyll ships with the build output.
const nojekyll = resolve(root, '.nojekyll');
if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, '');
}
copyFileSync(nojekyll, resolve(root, outDir, '.nojekyll'));
// When building the github variant, overwrite dist/index.html with a
// meta-refresh / canonical redirect to introduction.hylouis.top so the old
// hylouis233.github.io domain migrates visitors to the canonical homepage.
if (variant === 'github') {
  const target = 'https://introduction.hylouis.top/';
  const distIndex = resolve(root, outDir, 'index.html');
  const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Hong Liu | Academic Homepage</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="${target}" />
  <meta http-equiv="refresh" content="0;url=${target}" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      margin: 0; padding: 4rem 1.5rem; text-align: center; color: #1f2937; }
    a { color: #0f766e; text-decoration: none; font-weight: 600; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <p>This page has moved to <a href="${target}">introduction.hylouis.top</a>.</p>
  <p>If you are not redirected automatically, please follow the link above.</p>
  <script>window.location.replace(${JSON.stringify(target)});</script>
</body>
</html>
`;
  writeFileSync(distIndex, redirectHtml);
  console.log(`[build] github variant: dist/index.html -> ${target} (301 redirect)`);
}

console.log(`[build] variant=${variant} -> ${outDir}/ (.nojekyll copied)`);

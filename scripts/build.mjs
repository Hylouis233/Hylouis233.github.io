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
console.log(`[build] variant=${variant} -> ${outDir}/ (.nojekyll copied)`);

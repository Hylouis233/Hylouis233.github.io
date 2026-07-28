import { defineConfig } from 'astro/config';

const variant = process.env.SITE_VARIANT ?? 'github';

export default defineConfig({
  site: variant === 'top' ? 'https://introduction.hylouis.top' : 'https://hylouis233.github.io',
  base: '/',
  output: 'static'
});

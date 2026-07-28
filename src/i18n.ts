import type { LocalizedText } from './data/profile';

export type Lang = 'en' | 'zh';

export type SiteVariant = 'github' | 'top';

const rawVariant = import.meta.env.SITE_VARIANT ?? 'github';

/**
 * Build variant:
 * - `github` (default): English-only site for hylouis233.github.io. No ICP, no language toggle.
 * - `top`: Chinese-by-default site for introduction.hylouis.top, English under /en/, ICP in footer.
 */
export const siteVariant: SiteVariant = rawVariant === 'top' ? 'top' : 'github';

/** Default language for the current build variant. */
export const defaultLang: Lang = siteVariant === 'top' ? 'zh' : 'en';

/** Header language toggle is only shown on the `top` variant. */
export const showLangToggle = siteVariant === 'top';

/** ICP filing line is only shown on the `top` variant. */
export const showIcp = siteVariant === 'top';

/** ICP filing line shown in the footer of the `top` variant. Edit here if the filing changes. */
export const icpText = '闽ICP备2026016802号';

/** Pick the string for `lang` from a localized text record. */
export function t(text: LocalizedText, lang: Lang): string {
  return text[lang] ?? text.en;
}

/**
 * Map a site path to its equivalent for `lang`.
 * On the `top` variant the default language lives at the root and English under /en/;
 * on the `github` variant paths are returned unchanged.
 */
export function localizedPath(path: string, lang: Lang): string {
  if (siteVariant !== 'top') return path;
  // Strip an existing /en prefix to recover the default-language path.
  const base =
    path === '/en' || path === '/en/'
      ? '/'
      : path.startsWith('/en/')
        ? path.slice('/en'.length)
        : path;
  if (lang === defaultLang) return base;
  return base === '/' ? '/en/' : `/en${base}`;
}

export const LANGS = ['en', 'es', 'ca'] as const;
export type Lang = (typeof LANGS)[number];

/** A value that has a string (or string[]) variant per language. */
export type L<T> = Record<Lang, T>;

export const LANG_LABELS: Record<Lang, string> = {
  en: 'en',
  es: 'es',
  ca: 'ca',
};

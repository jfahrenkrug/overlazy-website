// This list must always mirror the languages Overlazy (the iOS app) ships.
// Source of truth: TinyHello/scripts/translations.json and
// Overlazy/Resources/Localizable.xcstrings. Update astro.config.mjs's
// `i18n.locales` alongside this file when the app's language set changes.
export const locales = ['en', 'de', 'es', 'pt-BR', 'fr', 'ja', 'ko'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  'pt-BR': 'Português (Brasil)',
  fr: 'Français',
  ja: '日本語',
  ko: '한국어',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

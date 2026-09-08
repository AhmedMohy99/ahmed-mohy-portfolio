import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

export type Locale = 'en' | 'ar';

export const LOCALES: Locale[] = ['en', 'ar'];
export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_COOKIE = 'ahmed-language';
export const LOCALE_STORAGE = 'ahmed-language';

export const dictionaries = { en, ar } as const;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'ar';
}

export function getLocaleFromValue(value: string | null | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function getLocaleFromBrowser(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  return getLocaleFromValue(window.localStorage.getItem(LOCALE_STORAGE));
}

export function persistLocale(locale: Locale) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LOCALE_STORAGE, locale);
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
  document.documentElement.lang = locale === 'ar' ? 'ar-EG' : 'en';
  document.documentElement.dir = getDirection(locale);
}

export function formatNumber(value: number, locale: Locale = DEFAULT_LOCALE) {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US').format(value);
}

export function formatDate(value: string | number | Date, locale: Locale = DEFAULT_LOCALE) {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

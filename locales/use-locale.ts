'use client';

import { useEffect, useState } from 'react';
import type { ContentLocale } from './content';

const STORAGE_KEY = 'ahmed-language';

export function useLocale(): ContentLocale {
  const [locale, setLocale] = useState<ContentLocale>('en');

  useEffect(() => {
    const read = () => setLocale(window.localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en');
    read();
    const onChange = (event: Event) => {
      const next = (event as CustomEvent<ContentLocale>).detail === 'ar' ? 'ar' : 'en';
      setLocale(next);
    };
    window.addEventListener('portfolio-language-change', onChange);
    return () => window.removeEventListener('portfolio-language-change', onChange);
  }, []);

  return locale;
}

export function t(locale: ContentLocale, value: string): string {
  if (locale === 'en') return value;
  return value;
}

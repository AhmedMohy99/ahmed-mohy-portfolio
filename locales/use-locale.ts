'use client';

import { useEffect, useState } from 'react';
import { content, type ContentLocale } from './content';

const STORAGE_KEY = 'ahmed-language';
const EVENT_NAME = 'portfolio-language-change';

export function useLocale(): ContentLocale {
  const [locale, setLocale] = useState<ContentLocale>('en');

  useEffect(() => {
    const read = () => setLocale(window.localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en');
    read();
    const onChange = (event: Event) => {
      const next = (event as CustomEvent<ContentLocale>).detail === 'ar' ? 'ar' : 'en';
      setLocale(next);
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  return locale;
}

export function translate(locale: ContentLocale, value: string): string {
  return content[locale][value] ?? value;
}

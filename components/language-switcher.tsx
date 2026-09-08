'use client';

import { Languages } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ContentLocale } from '@/locales/content';

const KEY = 'ahmed-language';

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<ContentLocale>('en');
  useEffect(() => {
    setLocale(window.localStorage.getItem(KEY) === 'ar' ? 'ar' : 'en');
  }, []);

  const change = () => {
    const next: ContentLocale = locale === 'ar' ? 'en' : 'ar';
    window.localStorage.setItem(KEY, next);
    document.cookie = `${KEY}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: next }));
    window.location.reload();
  };

  return (
    <button type="button" onClick={change} className="fixed bottom-4 left-4 z-[90] inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--white)]/95 px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur" aria-label="Switch language">
      <Languages size={14} />
      <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Languages, ArrowUpRight } from 'lucide-react';
import { dictionaries, getLocaleFromBrowser, persistLocale, type Locale } from '@/lib/i18n';

const navVisuals = [
  { key: 'home', href: '#top' },
  { key: 'work', href: '#work' },
  { key: 'services', href: '#services' },
  { key: 'contact', href: '#contact' },
] as const;

export function SiteNav() {
  const nav = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Locale>('en');
  const t = dictionaries[language].nav;
  const a = dictionaries[language].accessibility;

  useEffect(() => {
    const stored = getLocaleFromBrowser();
    setLanguage(stored);
    persistLocale(stored);

    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav.current) nav.current.style.transform = y > last && y > 80 && !menuOpen ? 'translateY(-110%)' : 'translateY(0)';
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const changeLanguage = () => {
    const next: Locale = language === 'ar' ? 'en' : 'ar';
    setLanguage(next);
    persistLocale(next);
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: next }));
    window.location.reload();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={nav} className="site-nav fixed left-0 right-0 top-0 z-50" aria-label={a.primaryNavigation}>
      <div className="container flex h-[72px] items-center justify-between gap-3 sm:h-[78px]">
        <a href="#top" onClick={closeMenu} className="display shrink-0 text-[13px] sm:text-base" aria-label={a.home}>
          AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label={a.mainMenu}>
          {navVisuals.map((item) => {
            const label = t[item.key as keyof typeof t] as string;
            return <a key={item.key} href={item.href} className="nav-link py-3" onClick={closeMenu}>{label}</a>;
          })}
        </nav>

        <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
          <button type="button" onClick={changeLanguage} className="accessibility-toggle" aria-label={t.switchLanguage} title={a.language}>
            <Languages size={13} /><span>{language === 'ar' ? t.english : t.arabic}</span>
          </button>

          <button type="button" aria-label={menuOpen ? a.closeMenu : a.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="menu-trigger rounded-full border border-[var(--line-strong)] bg-[var(--white)] p-2.5 md:hidden">
            {menuOpen ? <X size={18} /> : <span className="block w-[18px]" aria-hidden="true"><span className="mb-1 block h-px bg-current" /><span className="block h-px bg-current" /></span>}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto border-t border-[var(--line)] bg-[var(--white)] md:hidden">
          <div className="mx-auto w-full max-w-xl px-5 pb-8 pt-5">
            <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-4">
              <span className="label">{t.menu}</span>
              <span className="text-[10px] text-[var(--muted)]">{language === 'ar' ? 'التنقل' : 'Navigation'}</span>
            </div>

            <nav aria-label={a.mainMenu} className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {navVisuals.map((item, index) => {
                const label = t[item.key as keyof typeof t] as string;
                return (
                  <a key={item.key} href={item.href} onClick={closeMenu} className="mobile-nav-item group flex min-h-[64px] items-center gap-4 py-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] text-[9px] font-semibold tracking-[.08em] text-[var(--muted)]">{String(index + 1).padStart(2, '0')}</span>
                    <strong className="flex-1 text-[18px] font-semibold tracking-[-.025em] text-[var(--fg)]">{label}</strong>
                    <ArrowUpRight size={17} className="text-[var(--muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </nav>

            <a href="#contact" onClick={closeMenu} className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-5 text-[11px] font-semibold uppercase tracking-[.12em] text-white">
              {language === 'ar' ? 'ابدأ مشروعًا' : 'Start a project'} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { MousePointer2, X, Languages, CalendarDays, ArrowUpRight } from 'lucide-react';
import { dictionaries, getLocaleFromBrowser, persistLocale, type Locale } from '@/lib/i18n';

const navVisuals = [
  { key: 'home', href: '#top' },
  { key: 'work', href: '#work' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'aiSalesLab', href: '#ai-lab' },
  { key: 'contact', href: '#contact' },
] as const;

export function SiteNav() {
  const nav = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reduced3D, setReduced3D] = useState(false);
  const [language, setLanguage] = useState<Locale>('en');
  const t = dictionaries[language].nav;
  const a = dictionaries[language].accessibility;

  useEffect(() => {
    const stored = getLocaleFromBrowser();
    setLanguage(stored);
    persistLocale(stored);
    setReduced3D(window.localStorage.getItem('ahmed-reduced-3d') === 'true');

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

  const toggle3D = () => {
    const next = !reduced3D;
    setReduced3D(next);
    window.localStorage.setItem('ahmed-reduced-3d', String(next));
    window.dispatchEvent(new CustomEvent('portfolio-3d-toggle', { detail: next }));
  };

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

          <button type="button" onClick={toggle3D} className="accessibility-toggle hidden sm:inline-flex" aria-pressed={reduced3D}>
            <MousePointer2 size={13} /><span>{reduced3D ? t.threeDOff : t.threeDOn}</span>
          </button>

          <a href="#schedule-call" onClick={closeMenu} className="btn btn-primary hidden lg:inline-flex">
            <CalendarDays size={14} />{language === 'ar' ? 'رتّب مكالمة' : 'Arrange a call'}
          </a>

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

            <a href="#schedule-call" onClick={closeMenu} className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-5 text-[11px] font-semibold uppercase tracking-[.12em] text-white">
              <CalendarDays size={15} />{language === 'ar' ? 'رتّب مكالمة' : 'Arrange a call'}
            </a>

            <button type="button" className="mt-4 flex w-full items-center justify-between border-t border-[var(--line)] pt-4 text-left text-[11px] text-[var(--muted)]" onClick={toggle3D}>
              <span>{language === 'ar' ? 'تجربة 3D' : '3D experience'}</span>
              <span className="font-semibold text-[var(--fg)]">{reduced3D ? t.threeDOff : t.threeDOn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, MousePointer2, X, Languages, CalendarDays } from 'lucide-react';
import { dictionaries, getLocaleFromBrowser, persistLocale, type Locale } from '@/lib/i18n';

const navVisuals = [
  { key: 'home', href: '#top', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=78', alt: 'Minimal modern creative studio interior' },
  { key: 'work', href: '#work', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=78', alt: 'Modern digital design workspace' },
  { key: 'services', href: '#services', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=78', alt: 'Creative team working together' },
  { key: 'about', href: '#about', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=78', alt: 'Premium office interior' },
  { key: 'aiSalesLab', href: '#ai-lab', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=78', alt: 'Artificial intelligence interface' },
  { key: 'contact', href: '#contact', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=78', alt: 'Modern workspace with natural light' },
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
      if (nav.current) nav.current.style.transform = y > last && y > 80 ? 'translateY(-110%)' : 'translateY(0)';
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <div className="container flex h-[78px] items-center justify-between">
        <a href="#top" onClick={closeMenu} className="display text-base" aria-label={a.home}>AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label={a.mainMenu}>
          {navVisuals.map((item) => {
            const label = t[item.key as keyof typeof t] as string;
            return <a key={item.key} href={item.href} className="nav-link group relative py-3" onClick={closeMenu}>
              {label}
              <span className="pointer-events-none absolute left-1/2 top-full z-30 hidden w-44 -translate-x-1/2 pt-3 group-hover:block group-focus:block">
                <span className="block overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--white)] p-1 shadow-[0_20px_45px_rgba(30,25,20,.15)]"><img src={item.image} alt="" loading="lazy" className="h-24 w-full rounded-lg object-cover" /><span className="block px-2 py-2 text-[9px] uppercase tracking-[.14em] text-[var(--muted)]">{t.explore} {label}</span></span>
              </span>
            </a>;
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button type="button" onClick={changeLanguage} className="accessibility-toggle inline-flex" aria-label={t.switchLanguage} title={a.language}><Languages size={14} /><span>{language === 'ar' ? t.english : t.arabic}</span></button>
          <button type="button" onClick={toggle3D} className="accessibility-toggle hidden sm:inline-flex" aria-pressed={reduced3D}><MousePointer2 size={14} />{reduced3D ? t.threeDOff : t.threeDOn}</button>
          <a href="#schedule-call" className="btn btn-primary hidden lg:inline-flex"><CalendarDays size={14} />{language === 'ar' ? 'رتّب مكالمة' : 'Arrange a call'}</a>
          <button type="button" aria-label={menuOpen ? a.closeMenu : a.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="rounded-full border border-[var(--line-strong)] bg-[var(--white)] p-2 md:hidden">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {menuOpen && <div className="border-t border-[var(--line)] bg-[var(--white)] px-6 py-7 shadow-lg md:hidden"><div className="flex flex-col gap-2">{navVisuals.map((item) => { const label = t[item.key as keyof typeof t] as string; return <a key={item.key} href={item.href} onClick={closeMenu} className="mobile-nav-item flex items-center gap-4 rounded-2xl p-3"><img src={item.image} alt="" loading="lazy" className="h-14 w-20 rounded-xl object-cover" /><span><strong className="block text-base">{label}</strong><small className="text-xs text-[var(--muted)]">{t.explore} {label}</small></span></a>; })}<a href="#schedule-call" onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--fg)] px-4 py-3 text-sm text-white"><CalendarDays size={15} />{language === 'ar' ? 'رتّب مكالمة' : 'Arrange a call'}</a><button className="border-t border-[var(--line)] pt-4 text-left text-sm" onClick={() => { toggle3D(); closeMenu(); }}>{reduced3D ? t.threeDExperienceOff : t.threeDExperienceOn}</button></div></div>}
    </header>
  );
}

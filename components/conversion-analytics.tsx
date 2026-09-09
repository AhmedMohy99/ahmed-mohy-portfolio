'use client';

import { useEffect } from 'react';

const KEY = 'ahmed-conversion-events';

export function ConversionAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('a,button');
      if (!target) return;
      const label = (target.textContent || target.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 100);
      const href = target instanceof HTMLAnchorElement ? target.getAttribute('href') || '' : '';
      if (!/arrange|call|sales lab|live agent|start a project|contact|book|whatsapp|calendar/i.test(`${label} ${href}`)) return;
      const payload = { event: 'conversion_click', label, href, path: window.location.pathname, timestamp: new Date().toISOString() };
      try {
        const existing = JSON.parse(localStorage.getItem(KEY) || '[]') as unknown[];
        localStorage.setItem(KEY, JSON.stringify([...existing.slice(-49), payload]));
      } catch {}
      window.dispatchEvent(new CustomEvent('portfolio-conversion', { detail: payload }));
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}

'use client';

import { useEffect } from 'react';

const translations: Record<string, string> = {
  'Home': 'الرئيسية',
  'Work': 'الأعمال',
  'Services': 'الخدمات',
  'About': 'نبذة عني',
  'AI Sales Lab': 'مختبر مبيعات الذكاء الاصطناعي',
  'Contact': 'تواصل',
  'Explore Home': 'استكشف الرئيسية',
  'Explore Work': 'استكشف الأعمال',
  'Explore Services': 'استكشف الخدمات',
  'Explore About': 'استكشف نبذة عني',
  'Explore AI Sales Lab': 'استكشف مختبر المبيعات',
  'Explore Contact': 'استكشف التواصل',
  'Start a project': 'ابدأ مشروعًا',
  'Try the AI Sales Lab': 'جرّب مختبر مبيعات الذكاء الاصطناعي',
  'Scroll to explore': 'مرّر للاستكشاف',
  'Cairo, Egypt · Available for selected projects': 'القاهرة، مصر · متاح لمشاريع مختارة',
  'About · Ahmed Mohyeldin': 'نبذة · أحمد محي الدين',
  'Built to create.': 'صُمّم للإبداع.',
  'BUILT': 'مبني',
  'TO CREATE.': 'للإبداع.',
  'Focus': 'التركيز',
  'AI & automation': 'الذكاء الاصطناعي والأتمتة',
  'Premium web experiences': 'تجارب ويب متقدمة',
  '3D & interactive commerce': 'تجارة تفاعلية ثلاثية الأبعاد',
  'Shopify & e-commerce': 'Shopify والتجارة الإلكترونية',
  'UI/UX & product design': 'تصميم UI/UX والمنتجات',
  'Approach': 'المنهج',
  'Perspective': 'الرؤية',
  'Based in': 'الموقع',
  'Capabilities': 'القدرات',
  'Services': 'الخدمات',
  'AI & data': 'الذكاء الاصطناعي والبيانات',
  'I BUILD': 'أبني',
  'WITH AI.': 'بالذكاء الاصطناعي.',
  'Open AI Sales Lab': 'افتح مختبر مبيعات الذكاء الاصطناعي',
  '3D experience': 'تجربة ثلاثية الأبعاد',
  'Interactive commerce': 'تجارة تفاعلية',
  'THE DIGITAL': 'غرفة',
  'FITTING ROOM.': 'القياس الرقمية.',
  'How I work': 'كيف أعمل',
  'FROM IDEA': 'من الفكرة',
  'TO IMPACT.': 'إلى التأثير.',
  'Start a conversation': 'ابدأ محادثة',
  'LET’S BUILD': 'لنبنِ',
  "LET'S BUILD": 'لنبنِ',
  'SOMETHING.': 'شيئًا مميزًا.',
  'IT · AI · UI/UX · 3D · E-COMMERCE': 'تقنية · ذكاء اصطناعي · UI/UX · ثلاثي الأبعاد · تجارة إلكترونية',
  'IT · AI · UI/UX · 3D · E-commerce': 'تقنية · ذكاء اصطناعي · UI/UX · ثلاثي الأبعاد · تجارة إلكترونية',
  '©': '©',
  '3D on': 'ثلاثي الأبعاد مفعّل',
  '3D off': 'ثلاثي الأبعاد متوقف',
  'Off': 'متوقف',
  'On': 'مفعّل',
  '3D experience: Off': 'تجربة ثلاثية الأبعاد: متوقفة',
  '3D experience: On': 'تجربة ثلاثية الأبعاد: مفعّلة',
  'Close menu': 'إغلاق القائمة',
  'Open menu': 'فتح القائمة',
  'I BUILD DIGITAL': 'أبني تجارب رقمية',
  'EXPERIENCES': 'تغيّر',
  'THAT MOVE BUSINESS.': 'الأعمال إلى الأمام.',
  'AI Sales Lab': 'مختبر مبيعات الذكاء الاصطناعي',
};

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([en, ar]) => [ar, en]));

function translateText(value: string, arabic: boolean) {
  const trimmed = value.trim();
  if (!trimmed) return value;
  const source = arabic ? reverseTranslations : translations;
  const translated = source[trimmed];
  if (!translated) return value;
  return value.replace(trimmed, translated);
}

function translatePage(arabic: boolean) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) nodes.push(node as Text);
  nodes.forEach((text) => {
    const parent = text.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return;
    text.nodeValue = translateText(text.nodeValue || '', arabic);
  });
  document.documentElement.lang = arabic ? 'ar' : 'en';
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', arabic);
}

export function BilingualSite() {
  useEffect(() => {
    const saved = window.localStorage.getItem('ahmed-language');
    const arabic = saved === 'ar';
    document.documentElement.lang = arabic ? 'ar' : 'en';
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', arabic);

    const style = document.createElement('style');
    style.id = 'arabic-rtl-styles';
    style.textContent = `
      html[dir='rtl'] body { direction: rtl; text-align: right; }
      html[dir='rtl'] .site-nav .container, html[dir='rtl'] .site-nav nav { direction: rtl; }
      html[dir='rtl'] .hero-title, html[dir='rtl'] .section-title, html[dir='rtl'] .display { text-align: right; }
      html[dir='rtl'] .hero-copy, html[dir='rtl'] .service-card, html[dir='rtl'] .price-card, html[dir='rtl'] .contact-form { text-align: right; }
      html[dir='rtl'] .border-l { border-left: 0; border-right: 1px solid var(--line-strong); padding-left: 0; padding-right: 1.5rem; }
      html[dir='rtl'] .md\\:border-r { border-right: 0; border-left: 1px solid var(--line); }
      html[dir='rtl'] .md\\:last\\:border-r-0:last-child { border-left: 0; }
      html[dir='rtl'] .site-nav .group-hover\\:block { direction: rtl; }
      html[dir='rtl'] input, html[dir='rtl'] textarea, html[dir='rtl'] select { text-align: right; direction: rtl; }
      html[dir='rtl'] .btn, html[dir='rtl'] button { direction: rtl; }
      html[dir='rtl'] .floating-nav { direction: rtl; }
      html[dir='rtl'] .work-number { left: auto; right: 1rem; }
      html[dir='rtl'] footer { text-align: center; }
    `;
    document.head.appendChild(style);

    const observer = new MutationObserver((mutations) => {
      if (document.body.classList.contains('rtl') !== arabic) return;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((added) => {
          if (added.nodeType === Node.TEXT_NODE) {
            added.textContent = translateText(added.textContent || '', arabic);
          } else if (added.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(added, NodeFilter.SHOW_TEXT);
            const textNodes: Text[] = [];
            let current: Node | null;
            while ((current = walker.nextNode())) textNodes.push(current as Text);
            textNodes.forEach((text) => { text.nodeValue = translateText(text.nodeValue || '', arabic); });
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    if (arabic) translatePage(true);
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: arabic ? 'ar' : 'en' }));

    return () => { observer.disconnect(); style.remove(); };
  }, []);

  return null;
}

export function togglePortfolioLanguage() {
  const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
  window.localStorage.setItem('ahmed-language', next);
  window.location.reload();
}

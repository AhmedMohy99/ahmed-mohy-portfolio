'use client';

import { useEffect } from 'react';
import { translateContent, type ContentLocale } from '@/locales/content';
import { translateProjectContent } from '@/locales/project-content';
import { domTranslations } from '@/locales/dom-content';

const STORAGE_KEY = 'ahmed-language';
const EVENT_NAME = 'portfolio-language-change';

function getLocale(): ContentLocale {
  if (typeof window === 'undefined') return 'en';
  return window.localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en';
}

function translate(value: string, locale: ContentLocale) {
  if (locale !== 'ar') return value;
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  const trimmed = value.trim();
  if (!trimmed) return value;
  const extra = domTranslations[trimmed];
  if (extra) return `${leading}${extra}${trailing}`;
  const translated = translateProjectContent(translateContent(trimmed, locale));
  return `${leading}${translated}${trailing}`;
}

function translateAttributes(element: Element, locale: ContentLocale) {
  for (const name of ['aria-label', 'aria-description', 'title', 'placeholder', 'alt']) {
    const value = element.getAttribute(name);
    if (value) element.setAttribute(name, translate(value, locale));
  }
}

function translateElement(element: Element, locale: ContentLocale) {
  translateAttributes(element, locale);
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current: Node | null;
  while ((current = walker.nextNode())) {
    const parent = current.parentElement;
    if (parent && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) nodes.push(current as Text);
  }
  nodes.forEach((node) => {
    const translated = translate(node.nodeValue || '', locale);
    if (translated !== node.nodeValue) node.nodeValue = translated;
  });
}

function translateRoot(locale: ContentLocale) {
  document.documentElement.lang = locale === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', locale === 'ar');
  translateElement(document.body, locale);
}

export function BilingualSite() {
  useEffect(() => {
    const locale = getLocale();
    translateRoot(locale);
    const observer = new MutationObserver((mutations) => {
      if (getLocale() !== 'ar') return;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) node.textContent = translate(node.textContent || '', 'ar');
          else if (node.nodeType === Node.ELEMENT_NODE) translateElement(node as Element, 'ar');
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const onLanguageChange = (event: Event) => {
      const next = (event as CustomEvent<ContentLocale>).detail === 'ar' ? 'ar' : 'en';
      window.localStorage.setItem(STORAGE_KEY, next);
      translateRoot(next);
    };
    window.addEventListener(EVENT_NAME, onLanguageChange);
    return () => { observer.disconnect(); window.removeEventListener(EVENT_NAME, onLanguageChange); };
  }, []);
  return null;
}

export function togglePortfolioLanguage() {
  const next: ContentLocale = getLocale() === 'ar' ? 'en' : 'ar';
  window.localStorage.setItem(STORAGE_KEY, next);
  document.cookie = `${STORAGE_KEY}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: next }));
  window.location.reload();
}

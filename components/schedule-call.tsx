'use client';

import { ArrowUpRight, CalendarDays, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

type Lang = 'en' | 'ar';

const copy = {
  en: {
    eyebrow: 'NEXT STEP',
    title: <>LET&apos;S TALK<br /><span className="serif-italic">ABOUT YOUR PROJECT.</span></>,
    text: 'Choose the fastest way to start. Arrange a call, try the AI Sales Lab first, or talk directly to the live sales agent.',
    call: 'Arrange a call',
    lab: 'Try the AI Sales Lab',
    agent: 'Talk to the live agent',
  },
  ar: {
    eyebrow: 'الخطوة التالية',
    title: <>لِنَتَحَدَّث<br /><span className="serif-italic">عَنْ مَشْرُوعِكَ.</span></>,
    text: 'اختر أسرع طريقة للبدء. رتّب مكالمة أو جرّب مختبر مبيعات الذكاء الاصطناعي أو تحدث مباشرة مع وكيل المبيعات المباشر.',
    call: 'رتّب مكالمة',
    lab: 'جرّب مختبر مبيعات الذكاء الاصطناعي',
    agent: 'تحدث مع الوكيل المباشر',
  },
} as const;

export function ScheduleCall() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    setLang(window.localStorage.getItem('ahmed-language') === 'ar' ? 'ar' : 'en');
    const onLanguageChange = (event: Event) => {
      setLang((event as CustomEvent<Lang>).detail === 'ar' ? 'ar' : 'en');
    };
    window.addEventListener('portfolio-language-change', onLanguageChange);
    return () => window.removeEventListener('portfolio-language-change', onLanguageChange);
  }, []);

  const t = copy[lang];

  return (
    <section id="schedule-call" className="container py-24 md:py-32" aria-labelledby="schedule-call-title" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <div className="label mb-6">{t.eyebrow}</div>
            <h2 id="schedule-call-title" className="display section-title">{t.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">{t.text}</p>
          </div>
          <div className="grid gap-3">
            <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary justify-center"><CalendarDays size={16} /> {t.call} <ArrowUpRight size={15} /></a>
            <a href="#ai-lab" className="btn btn-secondary justify-center">{t.lab} <ArrowUpRight size={15} /></a>
            <a href="#live-sales-agent" className="btn btn-secondary justify-center"><MessageCircle size={16} /> {t.agent}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

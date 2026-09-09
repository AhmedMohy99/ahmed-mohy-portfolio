'use client';

import Script from 'next/script';
import { CalendarDays, MessageCircle, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const closeBotPixel = process.env.NEXT_PUBLIC_CLOSEBOT_PIXEL_SCRIPT?.trim();

type Lang = 'en' | 'ar';
const copy = {
  en: {
    eyebrow: 'LIVE AI SALES AGENT',
    title: <>TALK TO THE<br /><span className="serif-italic">REAL AGENT.</span></>,
    text: 'Start with the AI sales experience, then move to a human when the conversation needs a person. The production layer is designed for qualification, approved business knowledge, booking workflows and human handoff.',
    features: ['24/7 first response', 'Lead qualification', 'Appointment booking', 'Human handoff', 'CRM-ready context', 'Arabic + English ready'],
    call: 'Arrange a call',
    human: 'Talk to Ahmed',
    note: 'AI should use approved business information and hand sensitive or high-value conversations to a person.',
    aria: 'CloseBot AI sales agent',
  },
  ar: {
    eyebrow: 'وكيل مبيعات مباشر بالذكاء الاصطناعي',
    title: <>تَحَدَّث مَعَ<br /><span className="serif-italic">الوكيل الفعلي.</span></>,
    text: 'ابدأ بتجربة مبيعات الذكاء الاصطناعي ثم انتقل إلى شخص حقيقي عندما تحتاج المحادثة إلى تدخل بشري. صُممت التجربة للتأهيل والمعرفة المعتمدة ومسارات حجز المواعيد والتحويل إلى فريق بشري.',
    features: ['استجابة أولى على مدار الساعة', 'تأهيل العملاء المحتملين', 'حجز المواعيد', 'تحويل إلى شخص حقيقي', 'سياق جاهز لنظام CRM', 'جاهز بالعربية والإنجليزية'],
    call: 'رتّب مكالمة',
    human: 'تحدث مع أحمد',
    note: 'يجب أن يعتمد الذكاء الاصطناعي على معلومات العمل المعتمدة وأن يحوّل المحادثات الحساسة أو عالية القيمة إلى شخص حقيقي.',
    aria: 'وكيل مبيعات CloseBot بالذكاء الاصطناعي',
  },
} as const;

export function LiveSalesAgent() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    setLang(window.localStorage.getItem('ahmed-language') === 'ar' ? 'ar' : 'en');
    const onLanguageChange = (event: Event) => setLang((event as CustomEvent<Lang>).detail === 'ar' ? 'ar' : 'en');
    window.addEventListener('portfolio-language-change', onLanguageChange);
    return () => window.removeEventListener('portfolio-language-change', onLanguageChange);
  }, []);

  const t = copy[lang];

  return (
    <section id="live-sales-agent" className="section-dark border-y border-white/10 py-28 md:py-40" aria-labelledby="live-sales-title" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {closeBotPixel ? <Script id="closebot-sales-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: closeBotPixel }} /> : null}
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <div className="label mb-7">{t.eyebrow}</div>
            <h2 id="live-sales-title" className="display section-title">{t.title}</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">{t.text}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.features.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white/65">{item}</div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.booking} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-[#171614]"><CalendarDays size={15} /> {t.call}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 hover:border-white/30 hover:text-white"><MessageCircle size={15} /> {t.human}</a>
            </div>
            <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-white/40"><ShieldCheck size={15} className="mt-0.5 shrink-0" /> {t.note}</div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,.28)]">
            <div id="cb-widget-container" className="min-h-[520px] h-[520px] overflow-hidden rounded-2xl bg-[#11100f]" aria-label={t.aria} />
          </div>
        </div>
      </div>
    </section>
  );
}

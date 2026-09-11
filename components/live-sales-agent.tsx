'use client';

import Script from 'next/script';
import { Activity, ArrowUpRight, CalendarDays, CheckCircle2, Cpu, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const closeBotPixel = process.env.NEXT_PUBLIC_CLOSEBOT_PIXEL_SCRIPT?.trim();

type Lang = 'en' | 'ar';
const copy = {
  en: {
    eyebrow: 'LIVE AI SALES AGENT', title: <>TALK TO THE<br /><span className="serif-italic">REAL AGENT.</span></>,
    text: 'Start with the AI sales experience, then move to a human when the conversation needs a person. The production layer is designed for qualification, approved business knowledge, booking workflows and human handoff.',
    features: ['24/7 first response', 'Lead qualification', 'Appointment booking', 'Human handoff', 'CRM-ready context', 'Arabic + English ready'], call: 'Arrange a call', human: 'Talk to Ahmed',
    note: 'AI should use approved business information and hand sensitive or high-value conversations to a person.', aria: 'CloseBot AI sales agent', visualLabel: 'AI SALES SYSTEM', visualTitle: 'Intelligent customer journey', visualSub: 'Observe → qualify → recommend → hand off', status: 'System active', recommendation: 'Recommended next step', recommendationText: 'Qualify the lead before booking a human conversation.', metrics: ['Response', 'Qualification', 'Handoff'],
  },
  ar: {
    eyebrow: 'وكيل مبيعات مباشر بالذكاء الاصطناعي', title: <>تَحَدَّث مَعَ<br /><span className="serif-italic">الوكيل الفعلي.</span></>,
    text: 'ابدأ بتجربة مبيعات الذكاء الاصطناعي ثم انتقل إلى شخص حقيقي عندما تحتاج المحادثة إلى تدخل بشري. صُممت التجربة للتأهيل والمعرفة المعتمدة ومسارات حجز المواعيد والتحويل إلى فريق بشري.',
    features: ['استجابة أولى على مدار الساعة', 'تأهيل العملاء المحتملين', 'حجز المواعيد', 'تحويل إلى شخص حقيقي', 'سياق جاهز لنظام CRM', 'جاهز بالعربية والإنجليزية'], call: 'رتّب مكالمة', human: 'تحدث مع أحمد',
    note: 'يجب أن يعتمد الذكاء الاصطناعي على معلومات العمل المعتمدة وأن يحوّل المحادثات الحساسة أو عالية القيمة إلى شخص حقيقي.', aria: 'وكيل مبيعات CloseBot بالذكاء الاصطناعي', visualLabel: 'نظام مبيعات بالذكاء الاصطناعي', visualTitle: 'رحلة عميل ذكية', visualSub: 'مراقبة ← تأهيل ← توصية ← تحويل', status: 'النظام نشط', recommendation: 'الخطوة التالية المقترحة', recommendationText: 'تأهيل العميل المحتمل قبل حجز محادثة بشرية.', metrics: ['الاستجابة', 'التأهيل', 'التحويل'],
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
            <div className="label mb-7">{t.eyebrow}</div><h2 id="live-sales-title" className="display section-title">{t.title}</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">{t.text}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">{t.features.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white/65">{item}</div>)}</div>
            <div className="mt-8 flex flex-wrap gap-3"><a href={site.booking} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-[#171614]"><CalendarDays size={15} /> {t.call}</a><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 hover:border-white/30 hover:text-white"><MessageCircle size={15} /> {t.human}</a></div>
            <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-white/40"><ShieldCheck size={15} className="mt-0.5 shrink-0" /> {t.note}</div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0b0a] p-3 shadow-[0_30px_100px_rgba(0,0,0,.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,.10),transparent_27%),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 animate-pulse rounded-full bg-white/[.08] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 animate-pulse rounded-full bg-white/[.06] blur-3xl [animation-delay:1s]" />

            <div id="cb-widget-container" className="relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.08] via-white/[.025] to-transparent p-5 md:p-7" aria-label={t.aria}>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-pulse bg-white/30" />
              <div className="relative flex min-h-[470px] flex-col">
                <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[.06]"><Cpu size={17} className="text-white/75" /></div><div><div className="text-[9px] uppercase tracking-[.2em] text-white/35">{t.visualLabel}</div><div className="mt-1 text-sm font-medium text-white/80">{t.visualTitle}</div></div></div><div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[9px] uppercase tracking-[.12em] text-white/45"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/80" /> {t.status}</div></div>

                <div className="relative flex min-h-[275px] flex-1 items-center justify-center py-8">
                  <div className="absolute h-64 w-64 animate-spin rounded-full border border-white/10 [animation-duration:18s]" />
                  <div className="absolute h-44 w-44 animate-spin rounded-full border border-white/[.08] [animation-direction:reverse] [animation-duration:11s]" />
                  <div className="absolute h-72 w-72 animate-pulse rounded-full border border-white/[.04]" />
                  <div className="relative flex h-32 w-32 animate-pulse flex-col items-center justify-center rounded-full border border-white/20 bg-white/[.08] shadow-[0_0_90px_rgba(255,255,255,.10)] backdrop-blur-md"><Sparkles size={22} className="text-white/80" /><span className="mt-2 text-[9px] uppercase tracking-[.18em] text-white/45">AI CORE</span></div>
                  <div className="absolute left-[8%] top-[24%] flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[8px] tracking-[.14em] text-white/50 backdrop-blur-md"><Activity size={12} /> ANALYZE</div>
                  <div className="absolute right-[7%] top-[48%] flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[8px] tracking-[.14em] text-white/50 backdrop-blur-md"><Zap size={12} /> QUALIFY</div>
                  <div className="absolute bottom-[9%] left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[8px] tracking-[.14em] text-white/50 backdrop-blur-md"><ArrowUpRight size={12} /> HANDOFF</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-sm"><div className="flex items-center gap-2 text-[9px] uppercase tracking-[.18em] text-white/40"><CheckCircle2 size={13} /> {t.recommendation}</div><div className="mt-2 text-sm leading-6 text-white/75">{t.recommendationText}</div><div className="mt-4 grid grid-cols-3 gap-2">{t.metrics.map((metric, index) => <div key={metric} className="rounded-xl border border-white/[.07] bg-white/[.04] p-3 text-center transition-transform duration-300 hover:-translate-y-1"><div className="text-[8px] uppercase tracking-[.12em] text-white/30">{metric}</div><div className="mt-2 text-sm font-medium text-white/75">{['98%', '94%', '91%'][index]}</div></div>)}</div></div>
                <div className="mt-4 text-center text-[9px] uppercase tracking-[.18em] text-white/30">{t.visualSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Script from 'next/script';
import { Activity, ArrowUpRight, CalendarDays, CheckCircle2, Cpu, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

a const closeBotPixel = process.env.NEXT_PUBLIC_CLOSEBOT_PIXEL_SCRIPT?.trim();

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
    visualLabel: 'AI SALES SYSTEM',
    visualTitle: 'Intelligent customer journey',
    visualSub: 'Observe → qualify → recommend → hand off',
    status: 'System active',
    recommendation: 'Recommended next step',
    recommendationText: 'Qualify the lead before booking a human conversation.',
    metrics: ['Response', 'Qualification', 'Handoff'],
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
    visualLabel: 'نظام مبيعات بالذكاء الاصطناعي',
    visualTitle: 'رحلة عميل ذكية',
    visualSub: 'مراقبة ← تأهيل ← توصية ← تحويل',
    status: 'النظام نشط',
    recommendation: 'الخطوة التالية المقترحة',
    recommendationText: 'تأهيل العميل المحتمل قبل حجز محادثة بشرية.',
    metrics: ['الاستجابة', 'التأهيل', 'التحويل'],
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

          <div className="agent-showcase relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0c] p-3 shadow-[0_30px_100px_rgba(0,0,0,.35)]">
            <div className="agent-grid absolute inset-0 opacity-40" />
            <div className="agent-glow agent-glow-one absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/[.08] blur-3xl" />
            <div className="agent-glow agent-glow-two absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/[.05] blur-3xl" />

            <div id="cb-widget-container" className="relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.075] via-white/[.025] to-transparent p-5 md:p-7" aria-label={t.aria}>
              <div className="pointer-events-none absolute inset-0 agent-scan" />
              <div className="relative flex h-full min-h-[470px] flex-col">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[.06]"><Cpu size={17} className="text-white/75" /></div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[.2em] text-white/35">{t.visualLabel}</div>
                      <div className="mt-1 text-sm font-medium text-white/80">{t.visualTitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[9px] uppercase tracking-[.12em] text-white/45">
                    <span className="agent-status-dot h-1.5 w-1.5 rounded-full bg-white/70" /> {t.status}
                  </div>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-8">
                  <div className="agent-orbit agent-orbit-a absolute h-64 w-64 rounded-full border border-white/10" />
                  <div className="agent-orbit agent-orbit-b absolute h-44 w-44 rounded-full border border-white/[.08]" />
                  <div className="agent-core relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/15 bg-white/[.07] shadow-[0_0_80px_rgba(255,255,255,.08)] backdrop-blur-md">
                    <Sparkles size={22} className="text-white/75" />
                    <span className="mt-2 text-[9px] uppercase tracking-[.18em] text-white/40">AI CORE</span>
                  </div>
                  <div className="agent-node agent-node-a"><Activity size={13} /> <span>ANALYZE</span></div>
                  <div className="agent-node agent-node-b"><Zap size={13} /> <span>QUALIFY</span></div>
                  <div className="agent-node agent-node-c"><ArrowUpRight size={13} /> <span>HANDOFF</span></div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-[.18em] text-white/35"><CheckCircle2 size={13} /> {t.recommendation}</div>
                  <div className="mt-2 text-sm leading-6 text-white/70">{t.recommendationText}</div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {t.metrics.map((metric, index) => <div key={metric} className="rounded-xl border border-white/[.07] bg-white/[.03] p-3 text-center"><div className="text-[8px] uppercase tracking-[.12em] text-white/30">{metric}</div><div className="mt-2 text-sm font-medium text-white/70">{['98%', '94%', '91%'][index]}</div></div>)}
                  </div>
                </div>
                <div className="mt-4 text-center text-[9px] uppercase tracking-[.18em] text-white/25">{t.visualSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

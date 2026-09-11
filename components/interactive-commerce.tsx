'use client';

import { ArrowUpRight, Box, BrainCircuit, Gauge, Sparkles, Rotate3D, Workflow } from 'lucide-react';
import { useLocale } from '@/locales/use-locale';

const copy = {
  en: {
    eyebrow: 'Interactive digital experiences',
    title: <>DIGITAL EXPERIENCES<br /><span className="serif-italic">BUILT TO ENGAGE.</span></>,
    intro: 'Interactive interfaces that connect technology, design and business — from AI interactions and product experiences to 3D and modern web journeys.',
    cards: [
      { icon: Sparkles, title: 'AI-powered interactions', text: 'Conversational interfaces, assistants and intelligent workflows designed around real user and business needs.' },
      { icon: Box, title: 'Product & commerce experiences', text: 'Clear product journeys, e-commerce interfaces and visual storytelling that help people understand and act.' },
      { icon: Rotate3D, title: '3D & immersive web', text: 'Lightweight 3D interfaces and interactive browser experiences that add depth without getting in the way.' },
    ],
    signalsTitle: 'Engineering signals',
    signals: [
      { icon: Gauge, title: 'Performance-first', text: 'Fast loading, responsive rendering and motion that stays purposeful.' },
      { icon: Workflow, title: 'System thinking', text: 'Reusable components, scalable structure and clean product logic.' },
      { icon: BrainCircuit, title: 'Intelligent UX', text: 'AI and automation applied where they improve the actual journey.' },
    ],
    recommendationTitle: 'Digital recommendation',
    recommendation: 'Start with the highest-value user journey, then add the technology that makes it clearer, faster or more useful.',
    recommendationTags: ['UX audit', 'AI opportunity', 'Commerce path', '3D where useful'],
    note: 'Designed for ambitious brands, products and digital teams.',
    cta: 'Explore selected work',
  },
  ar: {
    eyebrow: 'تجارب رقمية تفاعلية',
    title: <>تجارب رقمية<br /><span className="serif-italic">مصممة للتفاعل.</span></>,
    intro: 'واجهات تفاعلية تربط بين التقنية والتصميم والأعمال، من تفاعلات الذكاء الاصطناعي وتجارب المنتجات إلى ثلاثي الأبعاد ورحلات الويب الحديثة.',
    cards: [
      { icon: Sparkles, title: 'تفاعلات مدعومة بالذكاء الاصطناعي', text: 'واجهات حوارية ومساعدات وسير عمل ذكية مصممة حول احتياجات المستخدم والأعمال الفعلية.' },
      { icon: Box, title: 'تجارب المنتجات والتجارة', text: 'رحلات واضحة للمنتج وواجهات تجارة إلكترونية وسرد بصري يساعد الناس على الفهم واتخاذ القرار.' },
      { icon: Rotate3D, title: 'الويب ثلاثي الأبعاد والتفاعلي', text: 'واجهات ثلاثية الأبعاد خفيفة وتجارب تفاعلية داخل المتصفح تضيف عمقاً دون تشتيت المستخدم.' },
    ],
    signalsTitle: 'مؤشرات هندسية',
    signals: [
      { icon: Gauge, title: 'الأداء أولاً', text: 'تحميل سريع وتصيير متجاوب وحركة بصرية لها هدف واضح.' },
      { icon: Workflow, title: 'تفكير بالنظام', text: 'مكونات قابلة لإعادة الاستخدام وبنية قابلة للتوسع ومنطق منتج واضح.' },
      { icon: BrainCircuit, title: 'تجربة ذكية', text: 'تطبيق الذكاء الاصطناعي والأتمتة عندما يضيفان قيمة حقيقية للرحلة.' },
    ],
    recommendationTitle: 'توصية رقمية',
    recommendation: 'ابدأ بأعلى رحلة مستخدم قيمة، ثم أضف التقنية التي تجعلها أوضح أو أسرع أو أكثر فائدة.',
    recommendationTags: ['مراجعة UX', 'فرصة للذكاء الاصطناعي', 'مسار التجارة', '3D عند الحاجة'],
    note: 'مصممة للعلامات التجارية والمنتجات والفرق الرقمية الطموحة.',
    cta: 'استكشف الأعمال المختارة',
  },
} as const;

export function InteractiveCommerce() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <section id="interactive-commerce" className="container py-28 md:py-44" aria-labelledby="interactive-commerce-title">
      <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--charcoal)] text-[var(--on-charcoal)] shadow-[0_30px_100px_rgba(20,18,15,.12)]">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="interactive-orbit interactive-orbit-one absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="interactive-orbit interactive-orbit-two absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="interactive-orbit interactive-orbit-three absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/[0.025] blur-3xl" />
          </div>
          <div className="relative grid gap-12 p-7 md:p-12 lg:grid-cols-[1.05fr_.95fr] lg:p-16">
            <div className="flex min-h-[420px] flex-col justify-between">
              <div>
                <div className="label text-white/55">{t.eyebrow}</div>
                <h2 id="interactive-commerce-title" className="display mt-6 text-[clamp(3.25rem,7vw,7.5rem)] leading-[.84] text-[var(--on-charcoal)]">{t.title}</h2>
                <p className="mt-8 max-w-xl text-base leading-7 text-white/65 md:text-lg">{t.intro}</p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#work" className="btn btn-secondary border-white/25 text-white hover:border-white hover:bg-white hover:text-[var(--charcoal)]">
                  {t.cta} <ArrowUpRight size={15} />
                </a>
                <span className="text-xs uppercase tracking-[.14em] text-white/40">{t.note}</span>
              </div>
            </div>

            <div className="grid gap-3 self-end">
              {t.cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="interactive-card group rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.075] md:p-6" style={{ animationDelay: `${index * 90}ms` }}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>
                      <div className="min-w-0">
                        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/35">0{index + 1}</div>
                        <h3 className="text-lg font-semibold tracking-tight text-white">{card.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/55">{card.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="engineering-panel mt-3 rounded-2xl border border-white/10 bg-black/10 p-5 md:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/40">{t.signalsTitle}</div>
                  <span className="engineering-pulse inline-flex items-center gap-2 text-[9px] uppercase tracking-[.16em] text-white/45">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" /> live system thinking
                  </span>
                </div>
                <div className="grid gap-3">
                  {t.signals.map((signal) => {
                    const Icon = signal.icon;
                    return (
                      <div key={signal.title} className="engineering-signal flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                        <Icon size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-white/55" />
                        <div>
                          <div className="text-sm font-medium text-white/80">{signal.title}</div>
                          <p className="mt-1 text-xs leading-5 text-white/40">{signal.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="recommendation-card mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/40">{t.recommendationTitle}</span>
                    <span className="recommendation-arrow text-white/35">↗</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">{t.recommendation}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.recommendationTags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[.12em] text-white/40">{tag}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

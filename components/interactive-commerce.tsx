'use client';

import { ArrowUpRight, Box, Sparkles, Rotate3D } from 'lucide-react';
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
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/[0.025] blur-3xl" />
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
                  <article key={card.title} className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.075] md:p-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

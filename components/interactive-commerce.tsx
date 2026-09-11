'use client';

import { ArrowUpRight, Box, ScanFace, Rotate3D } from 'lucide-react';
import { useLocale } from '@/locales/use-locale';

const copy = {
  en: {
    eyebrow: 'Interactive commerce',
    title: <>THE DIGITAL<br /><span className="serif-italic">FITTING ROOM.</span></>,
    intro: 'Product experiences designed to make online shopping feel more tangible — combining 3D, interaction and clear commerce UX.',
    cards: [
      { icon: Box, title: 'Product exploration', text: 'Interactive product views, richer detail and visual storytelling that help customers understand what they are buying.' },
      { icon: ScanFace, title: 'Virtual try-on concepts', text: 'Try-on interfaces and digital fitting-room concepts that connect product discovery with a more immersive experience.' },
      { icon: Rotate3D, title: '3D commerce', text: 'Lightweight 3D interfaces for product presentation, customization and interactive brand experiences in the browser.' },
    ],
    note: 'Built for fashion, beauty, luxury and product-led brands.',
    cta: 'Explore selected work',
  },
  ar: {
    eyebrow: 'التجارة التفاعلية',
    title: <>غرفة<br /><span className="serif-italic">القياس الرقمية.</span></>,
    intro: 'تجارب منتجات تجعل التسوق عبر الإنترنت أكثر واقعية، من خلال الجمع بين ثلاثي الأبعاد والتفاعل وتجربة تجارة إلكترونية واضحة.',
    cards: [
      { icon: Box, title: 'استكشاف المنتج', text: 'عرض تفاعلي للمنتج وتفاصيل أوضح وسرد بصري يساعد العميل على فهم ما يشتريه.' },
      { icon: ScanFace, title: 'مفاهيم القياس الافتراضي', text: 'واجهات ومفاهيم لغرف القياس الرقمية تربط اكتشاف المنتج بتجربة أكثر تفاعلاً.' },
      { icon: Rotate3D, title: 'تجارة ثلاثية الأبعاد', text: 'واجهات ثلاثية الأبعاد خفيفة لعرض المنتجات والتخصيص وبناء تجارب علامة تجارية تفاعلية داخل المتصفح.' },
    ],
    note: 'مناسبة للموضة والجمال والعلامات الفاخرة والمنتجات التي تعتمد على العرض البصري.',
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

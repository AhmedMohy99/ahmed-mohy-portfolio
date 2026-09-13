'use client';

import { ArrowUpRight, BarChart3, Gauge, Layers3, Search, ShoppingBag, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const copy = {
  en: {
    eyebrow: 'WEBSITE REDESIGN · UX · CRO · GROWTH',
    titleA: 'Website redesigns',
    titleB: 'that drive revenue growth.',
    intro: 'A redesign should do more than look newer. I use UX, conversion strategy, performance, SEO and sharper messaging to turn an existing website into a stronger business asset.',
    cta: 'Request a website review',
    benchmark: 'Inspired by proven agency patterns',
    benchmarkText: 'The direction combines strategic positioning, strong visual systems, conversion-focused UX and performance-minded development — patterns reflected across leading web design firms on Clutch.',
    cards: [
      ['01', 'Audit before redesign', 'Find friction in navigation, content hierarchy, mobile UX, performance and conversion paths before changing the visuals.', Search],
      ['02', 'Reposition the experience', 'Clarify the value proposition, page structure and brand story so visitors understand the offer faster.', Sparkles],
      ['03', 'Design for conversion', 'Strengthen calls to action, product discovery, forms, trust signals and checkout journeys without adding clutter.', ShoppingBag],
      ['04', 'Build for speed', 'Ship a responsive, accessible foundation with cleaner code, stronger technical SEO and a better experience across devices.', Gauge],
      ['05', 'Connect data to decisions', 'Use analytics and user behavior to identify what should be improved next instead of guessing.', BarChart3],
      ['06', 'Keep the system scalable', 'Create reusable components and content patterns that make future pages faster to launch and easier to manage.', Layers3],
    ] as const,
    outcomes: ['Clearer positioning', 'Lower friction', 'Stronger trust', 'Better mobile UX', 'SEO-ready foundation', 'Conversion-ready journeys'],
    references: [
      ['500 Designs', 'UI/UX · Custom web design', 'https://clutch.co/profile/500-designs'],
      ['Brand Vision', 'Brand strategy · Web · SEO', 'https://clutch.co/profile/brand-vision-1'],
      ['UPQODE', 'Web design · Development · CRO', 'https://clutch.co/profile/upqode'],
    ] as const,
  },
  ar: {
    eyebrow: 'إعادة تصميم المواقع · تجربة المستخدم · التحويل · النمو',
    titleA: 'إعادة تصميم المواقع',
    titleB: 'بطريقة تدعم نمو الإيرادات.',
    intro: 'إعادة التصميم ليست مجرد شكل أحدث. أستخدم تجربة المستخدم واستراتيجية التحويل والأداء وتهيئة محركات البحث ورسائل أوضح لتحويل الموقع الحالي إلى أصل رقمي أقوى للنشاط التجاري.',
    cta: 'اطلب مراجعة لموقعك',
    benchmark: 'مستوحى من أنماط وكالات رقمية قوية',
    benchmarkText: 'يجمع هذا الاتجاه بين التموضع الاستراتيجي، والهوية البصرية القوية، وتجربة المستخدم الموجهة للتحويل، والتطوير المهتم بالأداء — وهي أنماط ظاهرة لدى شركات تصميم الويب الرائدة على Clutch.',
    cards: [
      ['01', 'ابدأ بالتدقيق قبل إعادة التصميم', 'أحدد نقاط الاحتكاك في التنقل وترتيب المحتوى وتجربة الهاتف والأداء ومسارات التحويل قبل تغيير الشكل.', Search],
      ['02', 'أعد صياغة التجربة', 'أوضح القيمة التي يقدمها النشاط وهيكل الصفحات وقصة العلامة حتى يفهم الزائر العرض بشكل أسرع.', Sparkles],
      ['03', 'صمّم من أجل التحويل', 'أقوي أزرار الإجراءات واكتشاف المنتجات والنماذج وعناصر الثقة ومسارات الشراء بدون إضافة زحام بصري.', ShoppingBag],
      ['04', 'ابنِ من أجل السرعة', 'أطور أساسًا سريعًا ومتجاوبًا وسهل الوصول مع كود أنظف وتهيئة تقنية أفضل لمحركات البحث وتجربة أقوى على كل الأجهزة.', Gauge],
      ['05', 'اربط البيانات بالقرارات', 'أستخدم التحليلات وسلوك المستخدم لتحديد التحسين التالي بدل الاعتماد على التخمين.', BarChart3],
      ['06', 'اجعل النظام قابلًا للتوسع', 'أنشئ مكونات وأنماط محتوى قابلة لإعادة الاستخدام لتصبح إضافة الصفحات المستقبلية أسرع وأسهل في الإدارة.', Layers3],
    ] as const,
    outcomes: ['تموضع أوضح', 'احتكاك أقل', 'ثقة أقوى', 'تجربة هاتف أفضل', 'أساس جاهز للسيو', 'مسارات تحويل أقوى'],
    references: [
      ['500 Designs', 'تجربة المستخدم · تصميم مواقع مخصص', 'https://clutch.co/profile/500-designs'],
      ['Brand Vision', 'استراتيجية العلامة · الويب · SEO', 'https://clutch.co/profile/brand-vision-1'],
      ['UPQODE', 'تصميم الويب · التطوير · التحويل', 'https://clutch.co/profile/upqode'],
    ] as const,
  },
} as const;

export function RedesignGrowth() {
  const [locale, setLocale] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const readLocale = () => setLocale(window.localStorage.getItem('ahmed-language') === 'ar' ? 'ar' : 'en');
    readLocale();
    const onChange = (event: Event) => {
      const next = (event as CustomEvent<'en' | 'ar'>).detail;
      setLocale(next === 'ar' ? 'ar' : 'en');
    };
    window.addEventListener('portfolio-language-change', onChange);
    return () => window.removeEventListener('portfolio-language-change', onChange);
  }, []);

  const t = copy[locale];

  return (
    <section id="redesign-growth" className="border-y border-[var(--line)] bg-[var(--bg)]" dir={locale === 'ar' ? 'rtl' : 'ltr'} aria-labelledby="redesign-growth-title">
      <div className="container py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="label mb-7">{t.eyebrow}</div>
            <h2 id="redesign-growth-title" className="display section-title max-w-4xl">
              {t.titleA}<br />
              <span className="serif-italic">{t.titleB}</span>
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
            <a href="#contact" className="btn btn-primary mt-8 inline-flex">
              {t.cta} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-16 grid border-y border-[var(--line)] md:grid-cols-3">
          {t.cards.map(([number, title, text, Icon]) => (
            <article key={number} className="border-b border-[var(--line)] p-7 last:border-b-0 md:border-r md:p-9 md:last:border-r-0 md:nth-last-child(-n+3):border-b-0">
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm text-[var(--bronze)]">{number}</span>
                <Icon aria-hidden="true" size={19} className="text-[var(--bronze)]" />
              </div>
              <h3 className="display mt-8 text-2xl md:text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div>
            <div className="label">{t.benchmark}</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">{t.benchmarkText}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {t.outcomes.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-5 py-4 text-sm font-medium text-[var(--ink-soft)]">{item}</div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--line)] pt-8">
          <div className="mb-5 text-xs font-semibold tracking-[.18em] text-[var(--muted)]">CLUTCH REFERENCES</div>
          <div className="grid gap-3 md:grid-cols-3">
            {t.references.map(([name, service, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold tracking-tight">{name}</span>
                  <ArrowUpRight size={15} className="text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{service}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

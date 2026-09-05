import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Website Design & Development FAQ',
  description: 'Frequently asked questions about website design, website redesign, Shopify, AI web development, UI/UX and e-commerce services by Ahmed Mohy Eldin Abdrabbo in Egypt.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  ['Who is Ahmed Mohy Eldin Abdrabbo?', 'Ahmed Mohy Eldin Abdrabbo is a software engineer and website designer based in Cairo, Egypt, focused on premium websites, AI, UI/UX, e-commerce, Shopify and interactive 3D web experiences.'],
  ['Can you design a website from scratch?', 'Yes. A project can cover strategy, information architecture, UI/UX, responsive development, performance, SEO foundations, analytics and launch.'],
  ['Can you redesign an existing website?', 'Yes. Website redesign work can improve visual hierarchy, mobile UX, navigation, performance, conversion paths, accessibility and technical foundations while preserving useful existing content.'],
  ['Do you build Shopify stores?', 'Yes. Shopify work can include storefront UX, theme customization, product presentation, navigation, conversion-focused sections, shipping and store experience improvements.'],
  ['Can you build AI-powered websites?', 'Yes. AI web development can include assistants, RAG experiences, intelligent workflows, automation, data interfaces and AI features integrated into modern web applications.'],
  ['Do you work with businesses outside Egypt?', 'Yes. Projects can be delivered remotely for businesses in Egypt and internationally.'],
  ['What technologies do you use?', 'Typical technologies include Next.js, React, TypeScript, Python, Three.js, GSAP, Shopify, WordPress, WooCommerce, Blender and modern analytics tools.'],
];

export default function FAQPage() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return <main className="grain page-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Link className="back-link" href="/">← Home</Link>
    <p className="eyebrow">FAQ · WEBSITE DESIGN · EGYPT</p>
    <h1>Questions about websites, redesigns, AI and digital experiences.</h1>
    <p className="lead">A practical overview of how Ahmed Mohy Eldin Abdrabbo approaches website design, development, redesign and digital product work.</p>
    <section className="stack-list" aria-label="Frequently asked questions">
      {faqs.map(([question, answer], index) => <article key={question} className="border-b border-[var(--line)] py-8"><p className="eyebrow">0{index + 1}</p><h2 className="display text-2xl md:text-3xl">{question}</h2><p className="mt-4 max-w-3xl leading-relaxed text-[var(--ink-soft)]">{answer}</p></article>)}
    </section>
    <div className="mt-12 flex flex-wrap gap-3"><Link className="primary-button" href="/services/website-design">Website Design</Link><Link className="primary-button" href="/services/website-redesign">Website Redesign</Link><Link className="primary-button" href="/contact">Start a Project</Link></div>
  </main>;
}

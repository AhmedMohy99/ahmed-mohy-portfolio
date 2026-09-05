import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design & Digital Growth Insights',
  description: 'Practical insights from Ahmed Mohy Eldin Abdrabbo about website design, website redesign, Shopify, AI web development, UI/UX, performance and e-commerce.',
  alternates: { canonical: '/insights' },
};

const articles = [
  { slug: 'website-design-checklist', title: 'Website Design Checklist: What a Professional Website Should Get Right', text: 'A practical framework for structure, UX, mobile design, performance, SEO and conversion.', date: '2026-09-05' },
  { slug: 'website-redesign-guide', title: 'Website Redesign Guide: When Your Website Needs More Than a New Look', text: 'How to identify UX, content, performance and conversion problems before redesigning.', date: '2026-09-05' },
  { slug: 'shopify-store-ux', title: 'Shopify Store UX: The Foundations of a Better E-commerce Experience', text: 'Navigation, product presentation, mobile UX and checkout paths that make stores easier to use.', date: '2026-09-05' },
  { slug: 'ai-web-development', title: 'AI Web Development: Where AI Actually Adds Value to a Website', text: 'A practical look at assistants, automation, retrieval and intelligent product experiences.', date: '2026-09-05' },
];

export default function InsightsPage() {
  return <main className="grain page-shell">
    <Link className="back-link" href="/">← Home</Link>
    <p className="eyebrow">INSIGHTS · WEB DESIGN · AI · E-COMMERCE</p>
    <h1>Useful thinking about building better digital products.</h1>
    <p className="lead">Original, practical content about website design, redesign, performance, Shopify, AI and digital experiences — written to help businesses make better decisions.</p>
    <section className="simple-grid" aria-label="Insights">
      {articles.map((article, index) => <article key={article.slug} className="border border-[var(--line)] p-7 md:p-9"><p className="eyebrow">0{index + 1} · {article.date}</p><h2 className="display mt-4 text-3xl leading-tight">{article.title}</h2><p className="mt-5 leading-relaxed text-[var(--ink-soft)]">{article.text}</p><Link className="back-link mt-7 inline-flex" href={`/insights/${article.slug}`}>Read insight →</Link></article>)}
    </section>
  </main>;
}

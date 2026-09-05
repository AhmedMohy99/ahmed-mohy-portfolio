import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles = {
  'website-design-checklist': {
    title: 'Website Design Checklist: What a Professional Website Should Get Right',
    description: 'A practical website design checklist covering structure, UX, mobile design, performance, SEO and conversion.',
    sections: [
      ['Start with the user journey', 'A professional website should make the next action obvious. Navigation, page hierarchy, calls to action and content should work together instead of making visitors search for basic information.'],
      ['Design for mobile first', 'Responsive design is not simply shrinking desktop content. Typography, spacing, touch targets, menus, images and forms should be intentionally designed for smaller screens.'],
      ['Make performance part of design', 'Large images, unnecessary scripts and heavy animations can make a beautiful website frustrating. Modern image formats, sensible loading, efficient JavaScript and measured animation keep the experience fast.'],
      ['Build SEO into the foundation', 'Use descriptive page titles, useful content, canonical URLs, internal links, structured data where appropriate, a sitemap and crawlable navigation. SEO should support useful pages rather than keyword stuffing.'],
      ['End with a clear conversion path', 'Every commercial page should make it easy to contact the business, request a quote, buy, book or take the appropriate next step.'],
    ],
  },
  'website-redesign-guide': {
    title: 'Website Redesign Guide: When Your Website Needs More Than a New Look',
    description: 'How to identify UX, content, performance and conversion problems before redesigning an existing website.',
    sections: [
      ['Audit before changing the visual style', 'A redesign should start with evidence: broken journeys, confusing navigation, weak content hierarchy, slow pages, poor mobile behavior and unclear calls to action.'],
      ['Separate brand problems from UX problems', 'A new color palette cannot fix a confusing checkout or a buried contact path. Fix structure and usability alongside the visual system.'],
      ['Protect what already works', 'Keep valuable search traffic, useful URLs, strong content and successful conversion paths. Redirect or consolidate URLs when the information architecture changes.'],
      ['Rebuild for modern performance', 'Use optimized images, responsive layouts, accessible controls and efficient client-side behavior. A redesign is an opportunity to remove technical debt.'],
    ],
  },
  'shopify-store-ux': {
    title: 'Shopify Store UX: The Foundations of a Better E-commerce Experience',
    description: 'Navigation, product presentation, mobile UX and checkout paths that make Shopify stores easier to use.',
    sections: [
      ['Navigation should answer three questions', 'Customers should quickly understand what the store sells, where to find products and how to return to the main shopping journey.'],
      ['Product pages need decision-making information', 'Clear imagery, product details, variants, sizing, shipping information and a strong purchase action reduce uncertainty.'],
      ['Mobile shopping deserves special attention', 'Sticky actions, readable product information, simple variant selection and fast-loading imagery can make a major difference on mobile.'],
      ['Measure the journey', 'Use analytics to understand where visitors leave. Improve the highest-impact friction first instead of redesigning everything based only on personal preference.'],
    ],
  },
  'ai-web-development': {
    title: 'AI Web Development: Where AI Actually Adds Value to a Website',
    description: 'A practical look at AI assistants, retrieval, automation and intelligent product experiences.',
    sections: [
      ['Start with a real problem', 'AI is most useful when it reduces a repetitive task, improves discovery, summarizes information, personalizes a workflow or gives users a genuinely useful interface.'],
      ['Connect AI to reliable information', 'For knowledge-heavy experiences, retrieval can help an AI system use relevant business information rather than relying only on general model knowledge.'],
      ['Design the interaction, not just the model', 'An AI feature still needs clear states, useful feedback, error handling, loading behavior and a path for users to recover when the answer is incomplete.'],
      ['Keep humans in control', 'For important commercial decisions, AI should support people with transparent workflows and appropriate review rather than pretending to be infallible.'],
    ],
  },
} as const;

export function generateStaticParams() { return Object.keys(articles).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const article = articles[slug as keyof typeof articles]; if (!article) return {};
  return { title: article.title, description: article.description, alternates: { canonical: `/insights/${slug}` }, openGraph: { title: article.title, description: article.description, type: 'article' } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = articles[slug as keyof typeof articles]; if (!article) notFound();
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, author: { '@type': 'Person', name: 'Ahmed Mohy Eldin Abdrabbo', url: 'https://ahmedmohyeldinabdrabbo.com' }, publisher: { '@type': 'Person', name: 'Ahmed Mohy Eldin Abdrabbo' }, mainEntityOfPage: `https://ahmedmohyeldinabdrabbo.com/insights/${slug}` };
  return <main className="grain page-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Link className="back-link" href="/insights">← All insights</Link>
    <p className="eyebrow">AHMED MOHY ELDIN ABDRABBO · INSIGHT</p>
    <h1>{article.title}</h1>
    <p className="lead">{article.description}</p>
    <article className="stack-list mt-14">
      {article.sections.map(([heading, text], index) => <section key={heading} className="border-b border-[var(--line)] py-9"><p className="eyebrow">0{index + 1}</p><h2 className="display text-3xl md:text-4xl">{heading}</h2><p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">{text}</p></section>)}
    </article>
    <div className="mt-12 flex flex-wrap gap-3"><Link className="primary-button" href="/services/website-design">Website Design</Link><Link className="primary-button" href="/contact">Start a Project</Link></div>
  </main>;
}

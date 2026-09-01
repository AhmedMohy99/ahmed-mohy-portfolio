import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a software, AI, UI/UX, 3D, e-commerce or growth project with Ahmed Mohyeldin.',
};

export default function ContactPage() {
  return (
    <main className="grain page-shell">
      <a className="back-link" href="/">← Home</a>
      <p className="eyebrow">START A PROJECT</p>
      <h1>Have a brand, product or website that needs to move forward?</h1>
      <p className="lead">Send the idea, the current website, the business problem or the growth target. I can help with the build, redesign, product presentation, data, AI and digital growth.</p>
      <div className="contact-links">
        <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={site.aiPortfolio} target="_blank" rel="noreferrer">AI Portfolio ↗</a>
        <a href={site.linktree} target="_blank" rel="noreferrer">Linktree ↗</a>
      </div>
    </main>
  );
}

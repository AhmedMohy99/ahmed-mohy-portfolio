import { site } from '@/lib/site';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return <main className="page-shell"><a className="back-link" href="/">← Home</a><p className="eyebrow">START A PROJECT</p><h1>Have an idea? Let’s build it.</h1><p className="lead">Tell me what you are building, what needs to improve, or where your business needs to grow.</p><div className="contact-links"><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={site.aiPortfolio} target="_blank" rel="noreferrer">AI Portfolio ↗</a></div></main>;
}

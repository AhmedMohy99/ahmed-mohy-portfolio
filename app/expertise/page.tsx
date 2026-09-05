import type { Metadata } from 'next';
import { services } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Website Design, Development & AI Expertise',
  description: 'Website design, development, redesign, AI, UI/UX, 3D, Shopify, e-commerce and digital growth expertise by Ahmed Mohy Eldin Abdrabbo in Egypt.',
  alternates: { canonical: '/expertise' },
};

export default function ExpertisePage() {
  return (
    <main className="grain page-shell">
      <a className="back-link" href="/">← Home</a>
      <p className="eyebrow">EXPERTISE</p>
      <h1>One digital partner. Multiple disciplines.</h1>
      <p className="lead">I connect engineering, experience and growth so a brand can move from product idea to a polished digital presence and measurable commercial journey.</p>
      <div className="simple-grid">
        {services.map((service) => (
          <article key={service.number}>
            <p className="eyebrow">{service.number} / {service.label}</p>
            <h2 className="display">{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12"><a className="primary-button" href="/#contact">Start a project ↗</a></div>
    </main>
  );
}

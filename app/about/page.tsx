import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Ahmed Mohy Eldin Abdrabbo',
  description: 'Learn about Ahmed Mohy Eldin Abdrabbo, a website designer and software engineer in Egypt working across web development, AI, UI/UX, 3D and e-commerce.',
  alternates: { canonical: '/about' },
};

const stack = ['Next.js', 'React', 'TypeScript', 'Python', 'AI', 'Three.js', 'GSAP', 'Shopify', 'WordPress', 'WooCommerce', 'Blender', 'UI/UX', 'Analytics'];

export default function AboutPage() {
  return (
    <main className="grain page-shell">
      <a className="back-link" href="/">← Home</a>
      <p className="eyebrow">THE PERSON BEHIND THE BUILD</p>
      <h1>I build at the intersection of software, AI, experience and growth.</h1>
      <p className="lead">{site.description}</p>
      <div className="simple-grid">
        <article><p className="eyebrow">01 / BUILD</p><h2 className="display">Software</h2><p>Websites, web apps, APIs, e-commerce and automation.</p></article>
        <article><p className="eyebrow">02 / THINK</p><h2 className="display">AI & Data</h2><p>AI applications, RAG, assistants, analytics and intelligent workflows.</p></article>
        <article><p className="eyebrow">03 / EXPERIENCE</p><h2 className="display">UI/UX + 3D</h2><p>Premium interfaces, Three.js experiences and virtual try-on concepts.</p></article>
        <article><p className="eyebrow">04 / GROW</p><h2 className="display">Commerce</h2><p>Product presentation, targeting, conversion, data entry and e-commerce growth.</p></article>
      </div>
      <div className="stack-list"><p className="eyebrow">TOOLKIT</p><div className="tag-wrap">{stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>
    </main>
  );
}

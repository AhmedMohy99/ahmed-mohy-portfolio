import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Selected Work', description: 'Selected software, e-commerce, Shopify, UI/UX and digital growth work by Ahmed Mohyeldin.', alternates: { canonical: '/work' } };

export default function WorkPage() {
  return (
    <main className="grain min-h-screen">
      <header className="site-nav sticky top-0 z-40" aria-label="Work navigation"><div className="container flex h-20 items-center justify-between"><Link href="/" className="display text-base" aria-label="Ahmed Mohyeldin home">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></Link><div className="flex items-center gap-3"><Link href="/#about" className="hidden text-sm text-[var(--muted)] md:inline">About</Link><Link href="/#contact" className="btn btn-primary">Start a project <ArrowUpRight size={15} /></Link></div></div></header>
      <section className="container py-28 md:py-40"><div className="label">Selected work</div><h1 className="display mt-6 text-[clamp(4rem,11vw,11rem)] leading-[.8]">WORK<span className="serif-italic">.</span></h1><p className="mt-10 max-w-2xl text-xl leading-relaxed text-[var(--ink-soft)]">A selection of commercial builds, e-commerce experiences, UI/UX work and digital growth projects — documented as practical case studies.</p><div className="mt-8 flex flex-wrap gap-2">{['Software','AI','E-commerce','Shopify','UI/UX','3D','Growth'].map((item) => <span className="tag" key={item}>{item}</span>)}</div></section>
      <section className="container pb-32" aria-label="Project case studies"><div className="border-t border-[var(--line)]">{projects.map((project, i) => <Link key={project.slug} href={`/work/${project.slug}`} className="group grid items-start gap-6 border-b border-[var(--line)] px-2 py-9 transition hover:bg-[var(--panel)] md:grid-cols-[90px_1fr_32px] md:py-12"><span className="text-sm text-[var(--muted)]">{String(i + 1).padStart(2, '0')}</span><div><div className="text-sm text-[var(--bronze)]">{project.tag}</div><h2 className="display mt-3 text-3xl md:text-5xl transition-transform group-hover:translate-x-2">{project.name}</h2><p className="mt-4 max-w-2xl text-[var(--ink-soft)]">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((tech) => <span key={tech} className="tag">{tech}</span>)}</div></div><ArrowUpRight aria-hidden="true" className="text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={20} /></Link>)}</div></section>
      <footer className="border-t border-[var(--line)] py-8"><div className="container flex justify-between gap-4 text-sm text-[var(--muted)]"><span>© {new Date().getFullYear()} {site.name}</span><Link href="/#contact">Start a conversation</Link></div></footer>
    </main>
  );
}

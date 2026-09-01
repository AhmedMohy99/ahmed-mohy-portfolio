import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Selected software, e-commerce, Shopify, UI/UX and digital growth work by Ahmed Mohyeldin.',
};

export default function WorkPage() {
  return (
    <main className="grain min-h-screen">
      <header className="site-nav sticky top-0 z-40">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="display text-base">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></Link>
          <Link href="/#contact" className="btn btn-primary">Start a project <ArrowUpRight size={15} /></Link>
        </div>
      </header>
      <section className="container py-28 md:py-40">
        <div className="label">Selected work</div>
        <h1 className="display mt-6 text-[clamp(4rem,11vw,11rem)] leading-[.8]">WORK<span className="serif-italic">.</span></h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[var(--ink-soft)]">A selection of real commercial builds, e-commerce experiences, UI/UX work and digital growth projects.</p>
      </section>
      <section className="container pb-32">
        <div className="border-t border-[var(--line)]">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group grid items-start gap-6 border-b border-[var(--line)] px-2 py-9 transition hover:bg-[var(--panel)] md:grid-cols-[120px_1fr_32px] md:py-12">
              <span className="text-sm text-[var(--muted)]">{String(i + 1).padStart(2, '0')}</span>
              <div><div className="text-sm text-[var(--bronze)]">{project.tag}</div><h2 className="display mt-3 text-3xl md:text-5xl transition-transform group-hover:translate-x-2">{project.name}</h2><p className="mt-4 max-w-xl text-[var(--ink-soft)]">{project.description}</p></div>
              <ArrowUpRight className="text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

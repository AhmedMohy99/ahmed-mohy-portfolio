import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="grain min-h-screen">
      <header className="site-nav sticky top-0 z-40">
        <div className="container flex h-[76px] items-center justify-between"><a href="/" className="display text-base">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></a><a href="/work" className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)]">All work</a></div>
      </header>
      <section className="container py-24 md:py-36">
        <a href="/work" className="back-link"><ArrowLeft size={14} /> Back to work</a>
        <div className="label mt-10">Case study · {project.tag}</div>
        <h1 className="display mt-6 max-w-6xl text-[clamp(3.6rem,10vw,10rem)] leading-[.8]">{project.name}</h1>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--ink-soft)]">{project.description}</p>
        <div className="mt-8 text-sm text-[var(--muted)]">Role · {project.role}</div>
        <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary mt-10">Visit live project <ArrowUpRight size={15} /></a>
      </section>
      <section className="border-y border-[var(--line)] bg-[var(--panel)]"><div className="container grid md:grid-cols-2"><div className="border-b border-[var(--line)] p-8 md:border-b-0 md:border-r md:p-14"><div className="label">What I did</div><h2 className="display mt-8 text-5xl leading-[.86] md:text-7xl">BUILD WITH<br /><span className="serif-italic">PURPOSE.</span></h2><p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--ink-soft)]">{project.outcome}</p></div><div className="p-8 md:p-14"><div className="label">Services</div><div className="mt-8 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)]">{project.services.map((item) => <div key={item} className="bg-[var(--card)] p-5 text-sm text-[var(--ink-soft)]">{item}</div>)}</div></div></div></section>
      <section className="container py-28 md:py-40"><div className="label">Project details</div><div className="mt-10 grid gap-12 md:grid-cols-[.8fr_1.2fr]"><div><h2 className="display text-4xl md:text-6xl">FROM CHALLENGE<br /><span className="serif-italic">TO OUTCOME.</span></h2><div className="mt-10 flex flex-wrap gap-2">{project.technologies.map((item) => <span key={item} className="tag">{item}</span>)}</div></div><div className="space-y-10"><div><h3 className="display text-3xl">Challenge</h3><p className="mt-3 max-w-2xl leading-relaxed text-[var(--ink-soft)]">{project.challenge}</p></div><div><h3 className="display text-3xl">Approach</h3><ul className="mt-3 max-w-2xl space-y-3 text-[var(--ink-soft)]">{project.approach.map((item) => <li key={item}>— {item}</li>)}</ul></div></div></div></section>
      <section className="container pb-32 md:pb-48"><div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--charcoal)] p-8 text-[var(--on-charcoal)] md:p-14"><div className="label">Next</div><h2 className="display mt-8 text-5xl leading-[.84] md:text-8xl">LET&apos;S BUILD<br /><span className="serif-italic">THE NEXT ONE.</span></h2><a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-secondary mt-10 border-white/30 text-[var(--on-charcoal)] hover:border-white hover:bg-white hover:text-[var(--charcoal)]">Start a project <ArrowUpRight size={15} /></a></div></section>
    </main>
  );
}

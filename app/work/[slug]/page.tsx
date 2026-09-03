import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: `${project.name} Case Study`, description: project.description, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title: `${project.name} — Case Study`, description: project.description, type: 'article' } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const jsonLd = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.name, description: project.description, url: project.url, creator: { '@type': 'Person', name: site.name, url: site.url }, keywords: project.technologies.join(', ') };

  return (
    <main className="grain min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-nav sticky top-0 z-40"><div className="container flex h-[76px] items-center justify-between"><a href="/" className="display text-base" aria-label="Ahmed Mohyeldin home">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></a><a href="/work" className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)]">All work</a></div></header>
      <section className="container py-24 md:py-36"><a href="/work" className="back-link"><ArrowLeft size={14} /> Back to work</a><div className="label mt-10">Case study · {project.tag}</div><h1 className="display mt-6 max-w-6xl text-[clamp(3.6rem,10vw,10rem)] leading-[.8]">{project.name}</h1><p className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--ink-soft)]">{project.description}</p><div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)]"><span>Role · {project.role}</span><span>Category · {project.category.join(' · ')}</span></div><a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10">Visit live project <ArrowUpRight size={15} /></a></section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]"><div className="container grid md:grid-cols-2"><div className="border-b border-[var(--line)] p-8 md:border-b-0 md:border-r md:p-14"><div className="label">Outcome</div><h2 className="display mt-8 text-5xl leading-[.86] md:text-7xl">BUILD WITH<br /><span className="serif-italic">PURPOSE.</span></h2><p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--ink-soft)]">{project.outcome}</p></div><div className="p-8 md:p-14"><div className="label">Services & technology</div><div className="mt-8 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)]">{[...project.services, ...project.technologies].map((item, index) => <div key={`${item}-${index}`} className="bg-[var(--card,var(--panel))] p-5 text-sm text-[var(--ink-soft)]">{item}</div>)}</div></div></div></section>

      <section className="container py-28 md:py-40"><div className="label">Project details</div><div className="mt-10 grid gap-14 md:grid-cols-[.8fr_1.2fr]"><div><h2 className="display text-4xl md:text-6xl">FROM CHALLENGE<br /><span className="serif-italic">TO OUTCOME.</span></h2><div className="mt-10 flex flex-wrap gap-2">{project.technologies.map((item) => <span key={item} className="tag">{item}</span>)}</div></div><div className="space-y-12"><div><h3 className="display text-3xl">01 · Challenge</h3><p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">{project.challenge}</p></div><div><h3 className="display text-3xl">02 · Approach</h3><ol className="mt-5 space-y-5 text-[var(--ink-soft)]">{project.approach.map((item, index) => <li key={item} className="flex gap-4"><span className="text-[var(--bronze)]">0{index + 1}</span><span>{item}</span></li>)}</ol></div><div><h3 className="display text-3xl">03 · Result</h3><p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">{project.outcome}</p></div></div></div></section>

      <section className="container pb-32 md:pb-48"><div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--charcoal)] p-8 text-[var(--on-charcoal)] md:p-14"><div className="label">Next project</div><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><h2 className="display mt-8 text-5xl leading-[.84] md:text-8xl">{nextProject.name}<span className="serif-italic">.</span></h2><p className="mt-5 max-w-xl text-white/60">{nextProject.description}</p></div><a href={`/work/${nextProject.slug}`} className="btn btn-secondary border-white/30 text-[var(--on-charcoal)] hover:border-white hover:bg-white hover:text-[var(--charcoal)]">View case study <ArrowRight size={15}/></a></div><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-10 border-white/30 text-[var(--on-charcoal)] hover:border-white hover:bg-white hover:text-[var(--charcoal)]">Start a project <ArrowUpRight size={15} /></a></div></section>
    </main>
  );
}

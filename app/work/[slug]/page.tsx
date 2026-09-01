import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

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
      <header className="site-nav sticky top-0 z-40 border-b border-white/5 bg-[#080808]/80 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="/" className="display text-sm">AHMED MOHYELDIN<span className="text-zinc-500">.</span></a>
          <a href="/work" className="text-[10px] uppercase tracking-[.16em] text-zinc-400 hover:text-white">All work</a>
        </div>
      </header>

      <section className="container py-24 md:py-36">
        <a href="/work" className="back-link mb-0 inline-flex items-center gap-2"><ArrowLeft size={14} /> Back to work</a>
        <div className="eyebrow mt-16">CASE STUDY · {project.type}</div>
        <h1 className="display mt-6 max-w-6xl text-[clamp(3.6rem,10vw,10rem)] leading-[.8]">{project.name}</h1>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-zinc-400">{project.description}</p>
        <div className="mt-8 text-xs uppercase tracking-[.12em] text-zinc-600">Role · {project.role}</div>
        <a href={project.url} target="_blank" rel="noreferrer" className="primary-button mt-10">Visit live project <ArrowUpRight size={15} /></a>
      </section>

      <section className="border-y border-[#242421]">
        <div className="container grid md:grid-cols-2">
          <div className="border-b border-[#242421] p-8 md:border-b-0 md:border-r md:p-14"><div className="eyebrow">01 / WHAT I DID</div><h2 className="display mt-8 text-5xl leading-[.86] md:text-7xl">BUILD WITH<br /><span className="serif font-normal italic">PURPOSE.</span></h2><p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400">{project.outcome}</p></div>
          <div className="p-8 md:p-14"><div className="eyebrow">02 / SERVICES</div><div className="mt-8 grid grid-cols-2 gap-px border border-[#242421] bg-[#242421]">{project.services.map((item) => <div key={item} className="bg-[#080808] p-5 text-sm text-zinc-300">{item}</div>)}</div></div>
        </div>
      </section>

      <section className="container py-28 md:py-40">
        <div className="eyebrow">03 / PROJECT NOTE</div>
        <div className="mt-10 grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <h2 className="display text-4xl md:text-6xl">A LIVING<br /><span className="serif font-normal italic">DIGITAL ASSET.</span></h2>
          <div><p className="max-w-2xl text-lg leading-relaxed text-zinc-400">Every project in this portfolio represents real work shared by Ahmed. The case-study system is intentionally modular, so screenshots, videos, design process, technology details and verified commercial results can be added as they are documented.</p><a href={site.whatsapp} target="_blank" rel="noreferrer" className="secondary-button mt-8">Discuss a similar project ↗</a></div>
        </div>
      </section>

      <section className="container pb-32 md:pb-48"><div className="rounded-[2rem] border border-[#242421] bg-[#11110f] p-8 md:p-14"><div className="eyebrow">04 / NEXT</div><h2 className="display mt-8 text-5xl leading-[.84] md:text-8xl">LET&apos;S BUILD<br /><span className="serif font-normal italic">THE NEXT ONE.</span></h2><a href="/#contact" className="primary-button mt-10">Start a project ↗</a></div></section>
    </main>
  );
}

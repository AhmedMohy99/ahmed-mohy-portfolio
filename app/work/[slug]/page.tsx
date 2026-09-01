import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Ahmed Mohyeldin`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="grain min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#080808]/80 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <a href="/" className="display text-sm">AHMED MOHYELDIN<span className="text-zinc-500">.</span></a>
          <a href="/work" className="text-[10px] uppercase tracking-[.16em] text-zinc-400 hover:text-white">All Work</a>
        </div>
      </header>

      <section className="container py-28 md:py-40">
        <a href="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.15em] text-zinc-500 hover:text-white"><ArrowLeft size={14} /> Back to work</a>
        <div className="eyebrow mt-16">CASE STUDY · {project.type}</div>
        <h1 className="display mt-6 max-w-6xl text-[clamp(4rem,11vw,11rem)] leading-[.8]">{project.name}</h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-400">{project.description}</p>
        <a href={project.url} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f2efe8] px-6 py-3 text-xs font-semibold text-black">VISIT LIVE PROJECT <ArrowUpRight size={15} /></a>
      </section>

      <section className="border-y border-[#242421]">
        <div className="container grid md:grid-cols-2">
          <div className="border-b md:border-b-0 md:border-r border-[#242421] p-8 md:p-14"><div className="eyebrow">01 / APPROACH</div><h2 className="display mt-8 text-4xl md:text-6xl">BUILD WITH<br /><span className="serif font-normal italic">PURPOSE.</span></h2></div>
          <div className="p-8 md:p-14"><p className="text-lg leading-relaxed text-zinc-400">This project is presented as a living digital experience. The case-study format is ready for the real screenshots, videos, process notes, technologies and measurable results to be added without changing the visual system.</p></div>
        </div>
      </section>

      <section className="container py-28 md:py-40">
        <div className="eyebrow">02 / CAPABILITIES</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px border border-[#242421] bg-[#242421]">
          {['Strategy', 'UI / UX', 'Development', 'E-Commerce'].map((item) => <div key={item} className="bg-[#080808] p-7 md:p-10 text-sm text-zinc-300">{item}</div>)}
        </div>
      </section>

      <section className="container pb-32 md:pb-48">
        <div className="rounded-[2rem] border border-[#242421] p-8 md:p-14 bg-[#11110f]"><div className="eyebrow">03 / NEXT</div><h2 className="display mt-8 text-5xl md:text-8xl leading-[.85]">LET&apos;S BUILD<br /><span className="serif font-normal italic">THE NEXT ONE.</span></h2><a href="/#contact" className="mt-10 inline-flex rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[.15em] hover:bg-white hover:text-black transition">Start a project ↗</a></div>
      </section>
    </main>
  );
}

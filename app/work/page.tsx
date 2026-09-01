import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Selected Work — Ahmed Mohyeldin',
  description: 'Software, AI, 3D, e-commerce and digital experience projects by Ahmed Mohyeldin.',
};

export default function WorkPage() {
  return (
    <main className="grain min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#080808]/80 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between"><Link href="/" className="display text-sm">AHMED MOHYELDIN<span className="text-zinc-500">.</span></Link><Link href="/#contact" className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[.15em]">Start a project ↗</Link></div>
      </header>
      <section className="container py-28 md:py-40"><div className="eyebrow">SELECTED WORK</div><h1 className="display mt-6 text-[clamp(4rem,11vw,11rem)] leading-[.8]">WORK<span className="serif font-normal italic">.</span></h1><p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-400">A curated selection of commercial builds, AI systems, digital experiences and e-commerce work.</p></section>
      <section className="container pb-32"><div className="border-t border-[#242421]">{projects.map((project, i) => <Link key={project.slug} href={`/work/${project.slug}`} className="group grid md:grid-cols-[120px_1fr_32px] gap-6 items-start border-b border-[#242421] py-9 md:py-12 hover:bg-white/[.02] transition px-2"><span className="text-xs text-zinc-600">{String(i + 1).padStart(2, '0')}</span><div><div className="eyebrow">{project.type}</div><h2 className="display mt-3 text-3xl md:text-5xl group-hover:translate-x-2 transition-transform">{project.name}</h2><p className="mt-4 max-w-xl text-sm text-zinc-500">{project.description}</p></div><ArrowUpRight className="text-zinc-600 group-hover:text-white" size={20} /></Link>)}</div></section>
    </main>
  );
}

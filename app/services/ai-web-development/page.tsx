import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Website Development',
  description:
    'AI website development and intelligent web experiences by Ahmed Mohy Eldin Abdrabbo. Build AI assistants, automation, smart search and AI-powered digital products.',
  alternates: { canonical: '/services/ai-web-development' },
};

export default function AIWebDevelopmentPage() {
  return (
    <main className="grain min-h-screen">
      <header className="site-nav sticky top-0 z-40"><div className="container flex h-20 items-center justify-between"><Link href="/" className="display text-base">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></Link><Link href="/#contact" className="btn btn-primary">Build an AI experience <ArrowUpRight size={15}/></Link></div></header>
      <section className="container py-24 md:py-36"><p className="label">AI · Web development · Automation</p><h1 className="display mt-6 max-w-6xl text-[clamp(3.8rem,10vw,10rem)] leading-[.82]">WEB + AI<br/><span className="serif-italic">WORKING TOGETHER.</span></h1><p className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--ink-soft)]">I build AI-powered websites and digital products that turn intelligent models into useful user experiences — from assistants and smart search to automation and data-driven workflows.</p></section>
      <section className="border-y border-[var(--line)] bg-[var(--panel)]"><div className="container grid gap-px md:grid-cols-3">{[['01','AI assistants','Conversational interfaces connected to useful product or business data.'],['02','Automation','Workflows that reduce repetitive operations and connect systems.'],['03','Smart UX','Search, recommendations and intelligent interactions embedded into the website.']].map(([n,t,d])=><article key={n} className="bg-[var(--panel)] p-8 md:p-12"><span className="text-xs text-[var(--bronze)]">{n}</span><h2 className="display mt-16 text-4xl">{t}</h2><p className="mt-5 leading-relaxed text-[var(--ink-soft)]">{d}</p></article>)}</div></section>
      <section className="container py-24 md:py-36"><p className="label">Built responsibly</p><h2 className="display mt-6 max-w-5xl text-5xl md:text-8xl">USE AI WHERE<br/>IT CREATES <span className="serif-italic">VALUE.</span></h2><p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">The objective is not to add AI because it is fashionable. It is to make a real task faster, clearer, more useful or more scalable for the people using the product.</p></section>
    </main>
  );
}

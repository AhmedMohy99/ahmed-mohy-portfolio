import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Redesign & UX Improvement',
  description:
    'Website redesign and UX improvement by Ahmed Mohy Eldin Abdrabbo. Modernize outdated websites with better design, mobile experience, speed, accessibility and conversion-focused UX.',
  alternates: { canonical: '/services/website-redesign' },
};

export default function WebsiteRedesignPage() {
  return (
    <main className="grain min-h-screen">
      <header className="site-nav sticky top-0 z-40"><div className="container flex h-20 items-center justify-between"><Link href="/" className="display text-base">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></Link><Link href="/#contact" className="btn btn-primary">Redesign my website <ArrowUpRight size={15}/></Link></div></header>
      <section className="container py-24 md:py-36"><p className="label">Website redesign · UX · performance</p><h1 className="display mt-6 max-w-6xl text-[clamp(3.8rem,10vw,10rem)] leading-[.82]">TURN AN<br/><span className="serif-italic">OLD SITE</span><br/>INTO AN ASSET.</h1><p className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--ink-soft)]">A redesign is more than changing colors. I audit the existing experience, remove friction, improve information architecture, rebuild the interface and create a faster, clearer website.</p></section>
      <section className="border-y border-[var(--line)] bg-[var(--panel)]"><div className="container py-20 md:py-28"><p className="label">Redesign process</p><div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">{[['01','Audit','UX, content, mobile and technical review'],['02','Strategy','Structure, priorities and conversion paths'],['03','Design','Premium UI system and responsive layouts'],['04','Rebuild','Performance, SEO, accessibility and launch']].map(([n,t,d])=><article key={n} className="bg-[var(--panel)] p-7"><span className="text-xs text-[var(--bronze)]">{n}</span><h2 className="display mt-12 text-3xl">{t}</h2><p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">{d}</p></article>)}</div></div></section>
      <section className="container py-24 md:py-36"><div className="grid gap-12 md:grid-cols-2"><div><p className="label">Common problems I fix</p><h2 className="display mt-6 text-5xl md:text-7xl">LESS FRICTION.<br/><span className="serif-italic">MORE TRUST.</span></h2></div><ul className="space-y-5 text-lg text-[var(--ink-soft)]">{['Outdated visual design','Poor mobile experience','Confusing navigation','Slow page performance','Weak calls to action','Inconsistent branding','Missing technical SEO foundations','Hard-to-manage content'].map(x=><li key={x} className="border-b border-[var(--line)] pb-4">{x}</li>)}</ul></div></section>
      <section className="container pb-32"><div className="rounded-[1.75rem] bg-[var(--charcoal)] p-8 text-[var(--on-charcoal)] md:p-14"><p className="label">Have an existing website?</p><h2 className="display mt-7 text-5xl md:text-8xl">LET'S MAKE<br/><span className="serif-italic">IT BETTER.</span></h2><Link href="/#contact" className="btn btn-secondary mt-10 border-white/30 text-[var(--on-charcoal)]">Request a website review <ArrowUpRight size={15}/></Link></div></section>
    </main>
  );
}

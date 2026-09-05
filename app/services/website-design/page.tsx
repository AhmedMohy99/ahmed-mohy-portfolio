import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Website Design & Development',
  description:
    'Professional website design and development in Egypt by Ahmed Mohy Eldin Abdrabbo. Premium, responsive and high-performance websites for businesses, brands and personal portfolios.',
  alternates: { canonical: '/services/website-design' },
};

const services = ['Custom website design', 'Responsive UI/UX', 'Next.js & React development', 'Performance optimization', 'SEO-ready architecture', 'CMS and e-commerce integration'];

export default function WebsiteDesignPage() {
  return (
    <main className="grain min-h-screen">
      <header className="site-nav sticky top-0 z-40"><div className="container flex h-20 items-center justify-between"><Link href="/" className="display text-base">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></Link><Link href="/#contact" className="btn btn-primary">Start a project <ArrowUpRight size={15}/></Link></div></header>
      <section className="container py-24 md:py-36"><p className="label">Website design · Egypt</p><h1 className="display mt-6 max-w-6xl text-[clamp(3.8rem,10vw,10rem)] leading-[.82]">WEBSITES<br/><span className="serif-italic">BUILT TO MATTER.</span></h1><p className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--ink-soft)]">I design and develop premium websites that combine strong visual identity, clear UX, fast performance and a technical foundation built for long-term growth.</p><div className="mt-10 flex flex-wrap gap-3"><a href="/#contact" className="btn btn-primary">Discuss your website <ArrowUpRight size={15}/></a><Link href="/work" className="btn btn-secondary">View selected work</Link></div></section>
      <section className="border-y border-[var(--line)] bg-[var(--panel)]"><div className="container grid md:grid-cols-2"><div className="p-8 md:p-14"><p className="label">What I build</p><h2 className="display mt-7 text-5xl md:text-7xl">FROM IDEA<br/>TO <span className="serif-italic">LAUNCH.</span></h2></div><div className="grid grid-cols-1 divide-y divide-[var(--line)]">{services.map((item,i)=><div key={item} className="p-6 md:p-8"><span className="text-xs text-[var(--bronze)]">0{i+1}</span><span className="ml-4 text-[var(--ink-soft)]">{item}</span></div>)}</div></div></section>
      <section className="container py-24 md:py-36"><p className="label">Why work with me</p><div className="mt-10 grid gap-10 md:grid-cols-3"><article><h2 className="display text-3xl">Premium UX</h2><p className="mt-4 leading-relaxed text-[var(--ink-soft)]">Every page is designed around hierarchy, clarity, responsive behavior and a polished visual system.</p></article><article><h2 className="display text-3xl">Engineering</h2><p className="mt-4 leading-relaxed text-[var(--ink-soft)]">Modern React and Next.js architecture, accessible interfaces and performance-conscious implementation.</p></article><article><h2 className="display text-3xl">Growth-ready</h2><p className="mt-4 leading-relaxed text-[var(--ink-soft)]">Semantic content, technical SEO foundations, analytics and a structure that can grow with the business.</p></article></div></section>
      <section className="container pb-32"><div className="rounded-[1.75rem] bg-[var(--charcoal)] p-8 text-[var(--on-charcoal)] md:p-14"><p className="label">Ahmed Mohy Eldin Abdrabbo · Cairo, Egypt</p><h2 className="display mt-8 max-w-4xl text-5xl leading-[.88] md:text-8xl">NEED A BETTER<br/><span className="serif-italic">WEBSITE?</span></h2><a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-secondary mt-10 border-white/30 text-[var(--on-charcoal)]">Start a conversation <ArrowUpRight size={15}/></a></div></section>
    </main>
  );
}

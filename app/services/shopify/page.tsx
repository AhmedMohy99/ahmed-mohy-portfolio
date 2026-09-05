import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Shopify Website Design & Development',
  description:
    'Shopify website design, theme customization, UX improvements and e-commerce development in Egypt by Ahmed Mohy Eldin Abdrabbo.',
  alternates: { canonical: '/services/shopify' },
};

export default function ShopifyPage() {
  return (
    <main className="grain min-h-screen">
      <header className="site-nav sticky top-0 z-40"><div className="container flex h-20 items-center justify-between"><Link href="/" className="display text-base">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></Link><a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">Build my store <ArrowUpRight size={15}/></a></div></header>
      <section className="container py-24 md:py-36"><p className="label">Shopify · E-commerce · UX</p><h1 className="display mt-6 max-w-6xl text-[clamp(3.8rem,10vw,10rem)] leading-[.82]">SHOPIFY<br/><span className="serif-italic">THAT SELLS.</span></h1><p className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--ink-soft)]">Custom Shopify storefronts, theme improvements, navigation, product presentation, conversion-focused UX and technical refinements for growing brands.</p></section>
      <section className="border-y border-[var(--line)] bg-[var(--panel)]"><div className="container grid gap-px md:grid-cols-2"><div className="p-8 md:p-14"><p className="label">Shopify services</p><h2 className="display mt-7 text-5xl md:text-7xl">STORE<br/><span className="serif-italic">EXPERIENCE.</span></h2></div><div className="divide-y divide-[var(--line)]">{['Theme customization','Header & navigation UX','Product page optimization','Mobile-first storefront design','Shipping and promotion UX','Performance and technical cleanup','Analytics and conversion improvements','AI-powered store experiences'].map((x,i)=><div key={x} className="p-6 md:p-8"><span className="mr-4 text-xs text-[var(--bronze)]">0{i+1}</span>{x}</div>)}</div></div></section>
      <section className="container py-24 md:py-36"><p className="label">The goal</p><h2 className="display mt-6 max-w-5xl text-5xl md:text-8xl">MAKE IT EASY<br/>TO <span className="serif-italic">BUY.</span></h2><p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">A beautiful store still needs clear navigation, strong product information, fast loading, trustworthy interactions and a frictionless checkout journey.</p></section>
    </main>
  );
}

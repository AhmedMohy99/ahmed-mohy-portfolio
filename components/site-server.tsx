import { ArrowDown, ArrowUpRight, CalendarDays } from 'lucide-react';
import { Hero3D } from './hero';
import { SiteNav } from './site-nav';
import { WorkSection } from './work-section';
import { ContactForm } from './contact-form';
import { PortfolioChatbot } from './portfolio-chatbot';
import { FloatingNav } from './portfolio/floating-nav';
import { AISalesLab } from './ai-sales-lab';
import { LiveSalesAgent } from './live-sales-agent';
import { BilingualSite } from './bilingual-site';
import { ScheduleCall } from './schedule-call';
import { ConversionAnalytics } from './conversion-analytics';
import { InteractiveCommerce } from './interactive-commerce';
import { aiProjects, process, services } from '@/data/projects';
import { site } from '@/lib/site';

export default function SiteServer() {
  return <main className="grain" id="top">
    <BilingualSite />
    <ConversionAnalytics />
    <SiteNav />

    <section className="hero-wash relative min-h-screen overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-image absolute inset-x-0 top-0 h-[58vh] opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[var(--bg)]/65 to-[var(--bg)]" />
      </div>
      <div className="absolute inset-0 opacity-55"><Hero3D /></div>
      <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-12 pt-28 md:pb-16">
        <div className="max-w-6xl">
          <div className="label mb-6">IT · AI · WEB · COMMERCE · 3D</div>
          <h1 id="hero-title" className="display hero-title">I BUILD DIGITAL<br />EXPERIENCES<br /><span className="serif-italic">THAT MOVE BUSINESS.</span></h1>
          <p className="hero-copy mt-8 max-w-2xl">I&apos;m Ahmed Mohyeldin — I design and build AI, web and commerce experiences that make products easier to understand, easier to use and easier to buy.</p>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#ai-lab" className="btn btn-primary">Try the AI Sales Lab <ArrowUpRight size={15} /></a>
          <a href="#interactive-commerce" className="btn btn-secondary">Explore interactive commerce</a>
          <a href="#schedule-call" className="btn btn-secondary"><CalendarDays size={15} /> Arrange a call</a>
          <a href="#contact" className="btn btn-secondary">Start a project</a>
        </div>
        <div className="mt-14 flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
          <span>Cairo, Egypt · Available for selected projects</span>
          <a href="#work" className="hidden items-center gap-2 md:flex">Scroll to explore <ArrowDown size={14} /></a>
        </div>
      </div>
    </section>

    <section className="border-b border-[var(--line)] bg-[var(--panel)]" aria-label="Core capabilities">
      <div className="container grid gap-px bg-[var(--line)] md:grid-cols-4">
        {[
          ['01', 'AI systems', 'Assistants, automation and business workflows'],
          ['02', 'Digital commerce', 'Shopify, e-commerce UX and product journeys'],
          ['03', 'Web experiences', 'Fast, responsive interfaces built to last'],
          ['04', 'Interactive 3D', 'Product visualization and immersive browser experiences'],
        ].map(([number, title, text]) => (
          <div key={number} className="bg-[var(--panel)] p-6 md:p-8">
            <div className="text-xs font-semibold tracking-[.18em] text-[var(--bronze)]">{number}</div>
            <h2 className="mt-5 text-lg font-semibold tracking-tight">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="about" className="container py-28 md:py-40" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end">
        <div><div className="label mb-7">About · Ahmed Mohyeldin</div><h2 id="about-title" className="display section-title">BUILT<br /><span className="serif-italic">TO CREATE.</span></h2></div>
        <div className="grid gap-7 md:grid-cols-[1.35fr_.65fr]">
          <div>
            <p className="text-xl leading-relaxed text-[var(--ink-soft)]">I&apos;m an IT and digital solutions specialist focused on building digital products that feel as good as they perform. My work sits at the intersection of AI, web development, UI/UX, 3D and e-commerce.</p>
            <p className="mt-6 leading-relaxed text-[var(--ink-soft)]">The goal is practical: connect technology, product presentation and clear user journeys so a digital experience has a measurable reason to exist.</p>
          </div>
          <div className="border-l border-[var(--line-strong)] pl-6"><div className="label">Focus</div><ul className="mt-5 space-y-3 text-sm text-[var(--muted)]"><li>AI & automation</li><li>Premium web experiences</li><li>Interactive commerce</li><li>Shopify & e-commerce</li><li>UI/UX & product design</li></ul></div>
        </div>
      </div>
      <div className="mt-16 grid border-y border-[var(--line)] md:grid-cols-3">
        <div className="py-7 md:pr-8"><div className="label">Approach</div><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">Start with the user journey. Keep the interface clear. Make every interaction earn its place.</p></div>
        <div className="border-t border-[var(--line)] py-7 md:border-l md:border-t-0 md:px-8"><div className="label">Perspective</div><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">Technology is the foundation; design and commerce turn it into a useful business asset.</p></div>
        <div className="border-t border-[var(--line)] py-7 md:border-l md:border-t-0 md:pl-8"><div className="label">Based in</div><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">Cairo, Egypt · Working with ambitious brands and teams.</p></div>
      </div>
    </section>

    <section id="services" className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="services-title"><div className="container py-28 md:py-40"><div className="label mb-12">Capabilities</div><h2 id="services-title" className="sr-only">Services</h2><div className="hairline-grid grid md:grid-cols-2">{services.map((service) => <article key={service.id} className="service-card"><div className="text-sm text-[var(--bronze)]">{service.number}</div><h3 className="display mt-10 text-3xl md:text-5xl">{service.title}</h3><p className="mt-5 max-w-md leading-relaxed text-[var(--ink-soft)]">{service.text}</p></article>)}</div></div></section>

    <WorkSection />

    <section className="section-dark py-28 md:py-40" aria-labelledby="ai-title"><div className="container"><div className="label mb-7">AI & data</div><div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end"><div><h2 id="ai-title" className="display section-title">I BUILD<br /><span className="serif-italic">WITH AI.</span></h2></div><div><p className="max-w-xl text-lg leading-relaxed opacity-75">Conversational assistants, document intelligence, analytics, automation and lead-generation systems designed around practical business use.</p></div></div><div className="mt-16 grid border-t border-white/15 md:grid-cols-2">{aiProjects.map((p, i) => <div key={p.name} className="border-b border-white/15 p-7 md:p-10"><div className="text-sm opacity-50">{String(i + 1).padStart(2, '0')}</div><h3 className="display mt-8 text-3xl md:text-4xl">{p.name}</h3><p className="mt-3 text-sm opacity-65">{p.sub}</p></div>)}</div><a href="#ai-lab" className="btn btn-secondary mt-10 border-white/30 text-[var(--on-charcoal)] hover:border-white hover:bg-white hover:text-[var(--charcoal)]">Open AI Sales Lab <ArrowUpRight size={15} /></a></div></section>

    <AISalesLab />
    <LiveSalesAgent />
    <ScheduleCall />
    <InteractiveCommerce />

    <section className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="process-title"><div className="container py-28 md:py-40"><div className="label mb-7">How I work</div><h2 id="process-title" className="display section-title">FROM IDEA<br /><span className="serif-italic">TO IMPACT.</span></h2><div className="mt-16 grid border-t border-[var(--line)] md:grid-cols-4">{process.map((item) => <article key={item.step} className="border-b border-[var(--line)] p-7 md:border-b-0 md:border-r md:p-9 md:last:border-r-0"><div className="text-sm text-[var(--bronze)]">{item.step}</div><h3 className="display mt-8 text-2xl">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p></article>)}</div></div></section>

    <section id="contact" className="section-dark py-28 md:py-40" aria-labelledby="contact-title"><div className="container"><div className="grid gap-14 md:grid-cols-[1.1fr_.9fr] md:items-end"><div><div className="label mb-7">Start a conversation</div><h2 id="contact-title" className="display section-title">LET&apos;S BUILD<br /><span className="serif-italic">SOMETHING.</span></h2></div><ContactForm /></div></div></section>
    <footer className="border-t border-[var(--line)] bg-[var(--bg)]"><div className="container flex flex-col gap-4 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} {site.shortName}. All rights reserved.</span><span>AI · Web · Commerce · UI/UX · 3D</span></div></footer>
    <FloatingNav />
    <div className="fixed inset-x-3 bottom-3 z-[60] md:hidden"><a href="#schedule-call" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_50px_rgba(20,18,15,.28)]"><CalendarDays size={16} /> Arrange a call</a></div>
    <PortfolioChatbot />
  </main>;
}

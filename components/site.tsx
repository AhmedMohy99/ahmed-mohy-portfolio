'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Menu, MessageCircle, MousePointer2, X } from 'lucide-react';
import { Hero3D } from './hero';
import { aiProjects, process, projects, services } from '@/data/projects';
import { site } from '@/lib/site';

type Filter = 'ALL' | 'WEB' | 'E-COMMERCE' | 'SHOPIFY' | 'UI/UX' | 'GROWTH';
const filters: Filter[] = ['ALL', 'WEB', 'E-COMMERCE', 'SHOPIFY', 'UI/UX', 'GROWTH'];
const archivedSlugs = new Set(['laro-cosmetics', 'iris', 'zrex']);

const navVisuals = [
  { label: 'Home', href: '#top', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=78', alt: 'Minimal modern creative studio interior' },
  { label: 'Work', href: '#work', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=78', alt: 'Modern digital design workspace' },
  { label: 'Services', href: '#services', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=78', alt: 'Creative team working together' },
  { label: 'About', href: '#about', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=78', alt: 'Premium office interior' },
  { label: 'Contact', href: '#contact', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=78', alt: 'Modern workspace with natural light' },
];

function matchesFilter(categories: readonly string[], filter: Filter) {
  if (filter === 'ALL') return true;
  const target = filter === 'E-COMMERCE' ? 'ecommerce' : filter.toLowerCase().replace('/', '');
  return categories.some((item) => item.toLowerCase().replace('/', '') === target);
}

export default function Site() {
  const nav = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>('ALL');
  const [reduced3D, setReduced3D] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('ahmed-reduced-3d') === 'true';
    setReduced3D(saved);
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav.current) {
        nav.current.style.transform = y > last && y > 80 ? 'translateY(-110%)' : 'translateY(0)';
        nav.current.style.background = 'rgba(255,253,248,.96)';
      }
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle3D = () => {
    const next = !reduced3D;
    setReduced3D(next);
    window.localStorage.setItem('ahmed-reduced-3d', String(next));
  };

  const closeMenu = () => setMenuOpen(false);
  const filteredProjects = projects.filter((project) => matchesFilter(project.category, filter));
  const visibleProjects = filteredProjects.filter((project) => !archivedSlugs.has(project.slug));
  const archivedProjects = filteredProjects.filter((project) => archivedSlugs.has(project.slug));

  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSent(true);
    window.location.href = `mailto:?subject=Project%20Inquiry%20—%20Ahmed%20Mohyeldin&body=Hello%20Ahmed%2C%0A%0AMy%20email%20is%20${encodeURIComponent(email)}.%0A%0AI'd%20like%20to%20discuss%20a%20project.`;
  };

  const projectCard = (project: (typeof projects)[number], index: number, archived = false) => (
    <a key={project.slug} href={`/work/${project.slug}`} className={`project-row group grid gap-7 border-t border-[var(--line)] py-10 md:grid-cols-[minmax(260px,.42fr)_1fr_auto] md:items-center md:py-14 ${archived ? 'archived-project' : ''}`}>
      <div className="project-visual">
        <img src={project.image} alt={project.imageAlt} loading={index < 2 ? 'eager' : 'lazy'} />
        <span className="project-preview">View case study <ArrowUpRight size={12} /></span>
      </div>
      <div>
        <span className="text-sm text-[var(--bronze)]">{project.tag}</span>
        <h3 className="display mt-3 text-4xl md:text-6xl">{project.name}</h3>
        <p className="mt-5 max-w-2xl leading-relaxed text-[var(--ink-soft)]">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{project.services.slice(0, 4).map((item) => <span key={item} className="tag">{item}</span>)}</div>
      </div>
      <ArrowUpRight aria-hidden="true" className="text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  );

  return (
    <main className="grain" id="top">
      <header ref={nav} className="site-nav fixed left-0 right-0 top-0 z-50" aria-label="Primary navigation">
        <div className="container flex h-[78px] items-center justify-between">
          <a href="#top" onClick={closeMenu} className="display text-base" aria-label="Ahmed Mohyeldin home">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main menu">
            {navVisuals.map((item) => <a key={item.label} href={item.href} className="nav-link group relative py-3" onClick={closeMenu}>{item.label}<span className="pointer-events-none absolute left-1/2 top-full z-30 hidden w-44 -translate-x-1/2 pt-3 group-hover:block group-focus:block"><span className="block overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--white)] p-1 shadow-[0_20px_45px_rgba(30,25,20,.15)]"><img src={item.image} alt="" loading="lazy" className="h-24 w-full rounded-lg object-cover" /><span className="block px-2 py-2 text-[9px] uppercase tracking-[.14em] text-[var(--muted)]">Explore {item.label}</span></span></span></a>)}
          </nav>
          <div className="flex items-center gap-3"><button type="button" onClick={toggle3D} className="accessibility-toggle hidden sm:inline-flex" aria-pressed={reduced3D}><MousePointer2 size={14} />{reduced3D ? '3D off' : '3D on'}</button><a href="#contact" className="btn btn-primary hidden lg:inline-flex">Start a project <ArrowUpRight size={15} /></a><button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="rounded-full border border-[var(--line-strong)] bg-[var(--white)] p-2 md:hidden">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button></div>
        </div>
        {menuOpen && <div className="border-t border-[var(--line)] bg-[var(--white)] px-6 py-7 shadow-lg md:hidden"><div className="flex flex-col gap-2">{navVisuals.map((item) => <a key={item.label} href={item.href} onClick={closeMenu} className="mobile-nav-item flex items-center gap-4 rounded-2xl p-3"><img src={item.image} alt="" loading="lazy" className="h-14 w-20 rounded-xl object-cover" /><span><strong className="block text-base">{item.label}</strong><small className="text-xs text-[var(--muted)]">Explore {item.label}</small></span></a>)}<button className="mt-2 border-t border-[var(--line)] pt-4 text-left text-sm" onClick={() => { toggle3D(); closeMenu(); }}>3D experience: {reduced3D ? 'Off' : 'On'}</button></div></div>}
      </header>

      <section className="hero-wash relative min-h-screen overflow-hidden" aria-labelledby="hero-title">
        <div className="hero-image absolute inset-x-0 top-0 h-[58vh] opacity-80"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=82" alt="" fetchPriority="high" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[var(--bg)]/65 to-[var(--bg)]" /></div>
        <div className="absolute inset-0 opacity-55"><Hero3D disabled={reduced3D} /></div>
        <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-12 pt-28 md:pb-16"><div className="max-w-6xl"><div className="label mb-6">Software · AI · UI/UX · 3D · Growth</div><h1 id="hero-title" className="display hero-title">I BUILD DIGITAL<br />EXPERIENCES<br /><span className="serif-italic">THAT MOVE BUSINESS.</span></h1><p className="hero-copy mt-8 max-w-2xl">I&apos;m Ahmed Mohyeldin — a software engineer and digital growth partner helping brands turn products, ideas and data into premium experiences built to grow.</p></div><div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="btn btn-primary">Explore my work <ArrowUpRight size={15} /></a><a href="#contact" className="btn btn-secondary">Start a project</a></div><div className="mt-14 flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]"><span>Cairo, Egypt · Available for selected projects</span><a href="#work" className="hidden items-center gap-2 md:flex">Scroll to explore <ArrowDown size={14} /></a></div></div>
      </section>

      <section id="about" className="container py-28 md:py-40" aria-labelledby="about-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div><div className="label mb-7">About · Ahmed Mohyeldin</div><h2 id="about-title" className="display section-title">ENGINEERED<br /><span className="serif-italic">TO CREATE.</span></h2></div>
          <div className="grid gap-7 md:grid-cols-[1.35fr_.65fr]"><div><p className="text-xl leading-relaxed text-[var(--ink-soft)]">I&apos;m a software engineer focused on building digital products that feel as good as they perform. My work sits at the intersection of AI, web development, UI/UX, 3D and e-commerce.</p><p className="mt-6 leading-relaxed text-[var(--ink-soft)]">I don&apos;t just ship interfaces. I connect technology, product presentation, data and growth so the experience has a clear purpose — attract attention, make the product easier to understand, and move people toward action.</p></div><div className="border-l border-[var(--line-strong)] pl-6"><div className="label">Focus</div><ul className="mt-5 space-y-3 text-sm text-[var(--muted)]"><li>AI & automation</li><li>Premium web experiences</li><li>3D & interactive commerce</li><li>Shopify & e-commerce</li><li>UI/UX & product design</li></ul></div></div>
        </div>
        <div className="mt-16 grid border-y border-[var(--line)] md:grid-cols-3"><div className="py-7 md:pr-8"><div className="label">Approach</div><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">Build with intention. Keep the interface clear. Make every interaction earn its place.</p></div><div className="border-t border-[var(--line)] py-7 md:border-l md:border-t-0 md:px-8"><div className="label">Perspective</div><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">Engineering is the foundation; design, data and growth turn it into a business asset.</p></div><div className="border-t border-[var(--line)] py-7 md:border-l md:border-t-0 md:pl-8"><div className="label">Based in</div><p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">Cairo, Egypt · Working with ambitious brands and teams.</p></div></div>
      </section>

      <section id="services" className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="services-title"><div className="container py-28 md:py-40"><div className="label mb-12">Capabilities</div><h2 id="services-title" className="sr-only">Services</h2><div className="hairline-grid grid md:grid-cols-2">{services.map((service) => <article key={service.id} className="service-card"><div className="text-sm text-[var(--bronze)]">{service.number}</div><h3 className="display mt-10 text-3xl md:text-5xl">{service.title}</h3><p className="mt-5 max-w-md leading-relaxed text-[var(--ink-soft)]">{service.text}</p></article>)}</div></div></section>

      <section id="work" className="container py-28 md:py-44" aria-labelledby="work-title"><div className="label mb-5">Selected work</div><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><h2 id="work-title" className="display section-title">WORK<span className="serif-italic">.</span></h2><div className="flex max-w-xl flex-wrap gap-2" role="group" aria-label="Filter projects">{filters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`filter-pill ${filter === item ? 'active' : ''}`}>{item}</button>)}</div></div><div className="mt-14">{visibleProjects.map((project, index) => projectCard(project, index))}</div>{archivedProjects.length > 0 && <div className="mt-24 border-t border-[var(--line-strong)] pt-10 md:mt-32 md:pt-12" aria-labelledby="archived-title"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div className="label text-[var(--bronze)]">Archive · Previous client work</div><h3 id="archived-title" className="display mt-3 text-4xl md:text-5xl">ARCHIVED <span className="serif-italic">WORK.</span></h3></div><p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">Earlier projects, preserved as case studies and real homepage previews. They remain part of the work history, but sit outside the current selected work.</p></div><div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] px-5 md:px-8">{archivedProjects.map((project, index) => projectCard(project, index, true))}</div></div>}</section>

      <section className="section-dark py-28 md:py-40" aria-labelledby="ai-title"><div className="container"><div className="label mb-7">AI & data</div><div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end"><h2 id="ai-title" className="display section-title">I BUILD<br /><span className="serif-italic">WITH AI.</span></h2><p className="max-w-xl text-lg leading-relaxed opacity-75">Conversational assistants, document intelligence, analytics, automation and lead-generation systems designed around practical business use.</p></div><div className="mt-16 grid border-t border-white/15 md:grid-cols-2">{aiProjects.map((p, i) => <div key={p.name} className="border-b border-white/15 p-7 md:p-10"><div className="text-sm opacity-50">{String(i + 1).padStart(2, '0')}</div><h3 className="display mt-8 text-3xl md:text-4xl">{p.name}</h3><p className="mt-3 text-sm opacity-65">{p.sub}</p></div>)}</div><a href={site.aiPortfolio} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-10 border-white/30 text-[var(--on-charcoal)] hover:border-white hover:bg-white hover:text-[var(--charcoal)]">Explore AI Portfolio <ArrowUpRight size={15} /></a></div></section>

      <section className="container py-28 md:py-44" aria-labelledby="three-title"><div className="label mb-7">3D experience</div><div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--charcoal)]"><div className="absolute inset-0 opacity-90"><Hero3D disabled={reduced3D} /></div><div className="relative z-10 flex min-h-[560px] flex-col justify-end bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent p-8 md:p-14"><div className="label text-white/60">Interactive commerce</div><h2 id="three-title" className="display mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[.82] text-[var(--on-charcoal)]">THE DIGITAL<br /><span className="serif-italic">FITTING ROOM.</span></h2><p className="mt-7 max-w-lg leading-relaxed text-[var(--on-charcoal)]/70">Interactive product experiences, virtual try-on concepts and 3D interfaces that bring physical product exploration into the browser.</p></div></div></section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="process-title"><div className="container py-28 md:py-40"><div className="label mb-7">How I work</div><h2 id="process-title" className="display section-title">FROM IDEA<br /><span className="serif-italic">TO IMPACT.</span></h2><div className="mt-16 grid border-t border-[var(--line)] md:grid-cols-4">{process.map((item) => <article key={item.step} className="border-b border-[var(--line)] p-7 md:border-b-0 md:border-r md:p-9 md:last:border-r-0"><div className="text-sm text-[var(--bronze)]">{item.step}</div><h3 className="display mt-8 text-2xl">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p></article>)}</div></div></section>

      <section id="contact" className="section-dark py-28 md:py-40" aria-labelledby="contact-title"><div className="container"><div className="grid gap-14 md:grid-cols-[1.1fr_.9fr] md:items-end"><div><div className="label mb-7">Start a conversation</div><h2 id="contact-title" className="display section-title">LET&apos;S BUILD<br /><span className="serif-italic">SOMETHING.</span></h2></div><div><p className="max-w-xl leading-relaxed opacity-70">Have a product, store, AI idea or digital experience in mind? Tell me what you&apos;re building and I&apos;ll help turn it into a clear next step.</p><form onSubmit={handleInquiry} className="mt-8 flex flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="email">Your email</label><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email" className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-white outline-none placeholder:text-white/40 focus:border-white/50" /><button type="submit" className="btn btn-primary min-h-12">{sent ? <><Check size={15} /> Sent</> : <>Send inquiry <ArrowUpRight size={15} /></>}</button></form><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"><MessageCircle size={15} /> Prefer WhatsApp? Let&apos;s talk.</a></div></div></div></section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg)]"><div className="container flex flex-col gap-4 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} Ahmed Mohyeldin. All rights reserved.</span><span>Software · AI · UI/UX · 3D · Growth</span></div></footer>
    </main>
  );
}

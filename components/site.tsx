'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Menu, MessageCircle, MousePointer2, X } from 'lucide-react';
import { Hero3D } from './hero';
import { aiProjects, process, projects, services } from '@/data/projects';
import { site } from '@/lib/site';

type Filter = 'ALL' | 'WEB' | 'E-COMMERCE' | 'SHOPIFY' | 'UI/UX' | 'GROWTH';
const filters: Filter[] = ['ALL', 'WEB', 'E-COMMERCE', 'SHOPIFY', 'UI/UX', 'GROWTH'];
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
        nav.current.style.background = y > 40 ? 'rgba(250,246,239,.96)' : 'rgba(250,246,239,.76)';
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
  const visibleProjects = projects.filter((project) => matchesFilter(project.category, filter));
  const closeMenu = () => setMenuOpen(false);
  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    window.location.href = `mailto:?subject=Project%20Inquiry%20—%20Ahmed%20Mohyeldin&body=Hello%20Ahmed%2C%0A%0AMy%20email%20is%20${encodeURIComponent(email)}.%0A%0AI'd%20like%20to%20discuss%20a%20project.`;
  };

  return (
    <main className="grain" id="top">
      <header ref={nav} className="site-nav fixed left-0 right-0 top-0 z-50" aria-label="Primary navigation">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="#top" onClick={closeMenu} className="display text-base" aria-label="Ahmed Mohyeldin home">AHMED MOHYELDIN<span className="text-[var(--bronze)]">.</span></a>
          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main menu">
            <a href="#work" className="nav-link">Work</a><a href="#services" className="nav-link">Services</a><a href="#about" className="nav-link">About</a><a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" onClick={toggle3D} className="accessibility-toggle hidden sm:inline-flex" aria-pressed={reduced3D} title="Toggle 3D experience"><MousePointer2 size={14}/>{reduced3D ? '3D off' : '3D on'}</button>
            <a href="#contact" className="btn btn-primary hidden lg:inline-flex">Start a project <ArrowUpRight size={15} /></a>
            <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)} className="rounded-full border border-[var(--line-strong)] p-2 md:hidden">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {menuOpen && <div className="border-t border-[var(--line)] bg-[var(--ivory)] px-6 py-7 md:hidden"><div className="flex flex-col gap-5 text-lg"><a href="#work" onClick={closeMenu}>Work</a><a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About</a><button className="text-left" onClick={() => { toggle3D(); closeMenu(); }}>3D experience: {reduced3D ? 'Off' : 'On'}</button><a href="#contact" onClick={closeMenu}>Start a project</a></div></div>}
      </header>

      <section className="hero-wash relative min-h-screen overflow-hidden" aria-labelledby="hero-title">
        <div className="absolute inset-0 opacity-70"><Hero3D disabled={reduced3D} /></div>
        <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-12 pt-28 md:pb-16">
          <div className="max-w-6xl"><div className="label mb-6">Software · AI · UI/UX · 3D · Growth</div><h1 id="hero-title" className="display hero-title">I BUILD DIGITAL<br />EXPERIENCES<br /><span className="serif-italic">THAT MOVE BUSINESS.</span></h1><p className="hero-copy mt-8 max-w-2xl">I&apos;m Ahmed Mohyeldin — a software engineer and digital growth partner helping brands turn products, ideas and data into premium experiences built to grow.</p></div>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="btn btn-primary">Explore my work <ArrowUpRight size={15} /></a><a href="#contact" className="btn btn-secondary">Start a project</a></div>
          <div className="mt-14 flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]"><span>Cairo, Egypt · Available for selected projects</span><a href="#work" className="hidden items-center gap-2 md:flex">Scroll to explore <ArrowDown size={14}/></a></div>
        </div>
      </section>

      <section className="container py-28 md:py-40" aria-labelledby="role-title"><div className="label mb-7">A broader role</div><div className="grid gap-12 md:grid-cols-[1.2fr_.8fr] md:items-end"><h2 id="role-title" className="display section-title">MORE THAN A<br /><span className="serif-italic">DEVELOPER.</span></h2><div><p className="text-lg leading-relaxed text-[var(--ink-soft)]">Software engineering is the foundation. I work across AI, UI/UX, 3D, e-commerce, product presentation and marketing — connecting technology to the commercial goal.</p><p className="mt-7 text-sm text-[var(--muted)]">Build · Present · Target · Measure · Grow</p></div></div></section>

      <section id="services" className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="services-title"><div className="container py-28 md:py-40"><div className="label mb-12">Capabilities</div><h2 id="services-title" className="sr-only">Services</h2><div className="hairline-grid grid md:grid-cols-2">{services.map((service) => <article key={service.id} className="service-card"><div className="text-sm text-[var(--bronze)]">{service.number}</div><h3 className="display mt-10 text-3xl md:text-5xl">{service.title}</h3><p className="mt-5 max-w-md leading-relaxed text-[var(--ink-soft)]">{service.text}</p></article>)}</div></div></section>

      <section id="work" className="container py-28 md:py-44" aria-labelledby="work-title"><div className="label mb-5">Selected work</div><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><h2 id="work-title" className="display section-title">WORK<span className="serif-italic">.</span></h2><div className="flex max-w-xl flex-wrap gap-2" role="group" aria-label="Filter projects">{filters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`filter-pill ${filter === item ? 'active' : ''}`}>{item}</button>)}</div></div><div className="mt-14">{visibleProjects.map((project, index) => <a key={project.slug} href={`/work/${project.slug}`} className="project-row group grid gap-6 border-t border-[var(--line)] py-10 md:grid-cols-[70px_1fr_auto] md:items-start md:py-14"><span className="text-sm text-[var(--muted)]">{String(index + 1).padStart(2, '0')}</span><div><div className="text-sm text-[var(--bronze)]">{project.tag}</div><h3 className="display mt-3 text-4xl md:text-6xl">{project.name}</h3><p className="mt-5 max-w-2xl leading-relaxed text-[var(--ink-soft)]">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.services.slice(0, 4).map((item) => <span key={item} className="tag">{item}</span>)}</div></div><ArrowUpRight aria-hidden="true" className="text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></a>)}{visibleProjects.length === 0 && <p className="border-t border-[var(--line)] py-12 text-[var(--muted)]">More work in this category is being documented.</p>}</div></section>

      <section className="section-dark py-28 md:py-40" aria-labelledby="ai-title"><div className="container"><div className="label mb-7">AI & data</div><div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end"><h2 id="ai-title" className="display section-title">I BUILD<br /><span className="serif-italic">WITH AI.</span></h2><p className="max-w-xl text-lg leading-relaxed opacity-75">Conversational assistants, document intelligence, analytics, automation and lead-generation systems designed around practical business use.</p></div><div className="mt-16 grid border-t border-white/15 md:grid-cols-2">{aiProjects.map((project, index) => <div key={project.name} className="border-b border-white/15 p-7 md:p-10"><div className="text-sm opacity-50">{String(index + 1).padStart(2, '0')}</div><h3 className="display mt-8 text-3xl md:text-4xl">{project.name}</h3><p className="mt-3 text-sm opacity-65">{project.sub}</p></div>)}</div><a href={site.aiPortfolio} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-10 border-white/30 text-[var(--on-charcoal)] hover:border-white hover:bg-white hover:text-[var(--charcoal)]">Explore AI Portfolio <ArrowUpRight size={15} /></a></div></section>

      <section className="container py-28 md:py-44" aria-labelledby="three-title"><div className="label mb-7">3D experience</div><div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--charcoal)]"><div className="absolute inset-0 opacity-90"><Hero3D disabled={reduced3D} /></div><div className="relative z-10 flex min-h-[560px] flex-col justify-end bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent p-8 md:p-14"><div className="label text-white/60">Interactive commerce</div><h2 id="three-title" className="display mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[.82] text-[var(--on-charcoal)]">THE DIGITAL<br /><span className="serif-italic">FITTING ROOM.</span></h2><p className="mt-7 max-w-lg leading-relaxed text-[var(--on-charcoal)]/70">Interactive product experiences, virtual try-on concepts and 3D interfaces that bring physical product exploration into the browser.</p></div></div></section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="process-title"><div className="container py-28 md:py-40"><div className="label mb-7">How I work</div><h2 id="process-title" className="display section-title">FROM IDEA<br /><span className="serif-italic">TO IMPACT.</span></h2><div className="mt-16 grid border-t border-[var(--line)] md:grid-cols-4">{process.map((item) => <article key={item.step} className="border-b border-[var(--line)] p-7 md:border-b-0 md:border-r md:p-9 md:last:border-r-0"><div className="text-sm text-[var(--bronze)]">{item.step}</div><h3 className="display mt-12 text-3xl">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">{item.text}</p></article>)}</div></div></section>

      <section id="about" className="border-y border-[var(--line)]" aria-labelledby="about-title"><div className="container grid gap-16 py-28 md:grid-cols-2 md:py-40"><div><div className="label">About Ahmed</div><h2 id="about-title" className="display mt-8 text-[clamp(3.4rem,7vw,7rem)] leading-[.84]">THE ENGINEER<br /><span className="serif-italic">BEHIND THE EXPERIENCE.</span></h2></div><div className="self-end"><p className="text-xl leading-relaxed text-[var(--ink-soft)]">I&apos;m Ahmed Mohyeldin, a software engineer with an AI background who works across technology, digital experience and commercial growth. I can build the website, improve the UX, present the product, connect the data and help turn attention into sales.</p><div className="mt-10 flex flex-wrap gap-2">{['Next.js','React','TypeScript','Python','AI','Three.js','GSAP','Shopify','WordPress','WooCommerce','Blender','UI/UX','Marketing','Analytics'].map((item) => <span key={item} className="tag">{item}</span>)}</div></div></div></section>

      <section id="contact" className="container py-28 md:py-44" aria-labelledby="contact-title"><div className="label">Start a conversation</div><div className="grid gap-14 md:grid-cols-[1fr_auto] md:items-end"><div><h2 id="contact-title" className="display mt-8 text-[clamp(4rem,11vw,11rem)] leading-[.77]">LET&apos;S BUILD<br /><span className="serif-italic">SOMETHING.</span></h2><p className="mt-10 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">Have a brand, product, website, AI idea or existing website that needs to be transformed? Tell me what you want to build or improve.</p><form onSubmit={handleInquiry} className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row" aria-label="Project inquiry"><label htmlFor="email" className="sr-only">Your email</label><input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="luxury-input" /> <button className="btn btn-primary justify-center" type="submit">{sent ? <><Check size={15}/> Opened</> : <>Send inquiry <ArrowUpRight size={15}/></>}</button></form></div><div className="flex flex-col gap-3 md:min-w-52"><a className="btn btn-primary justify-center" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16}/> WhatsApp</a><a className="btn btn-secondary justify-center" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15}/></a><a className="btn btn-secondary justify-center" href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a><a className="btn btn-secondary justify-center" href={site.aiPortfolio} target="_blank" rel="noopener noreferrer">AI Portfolio <ArrowUpRight size={15}/></a></div></div></section>

      <footer className="border-t border-[var(--line)] py-8"><div className="container flex flex-col justify-between gap-4 text-sm text-[var(--muted)] md:flex-row"><span>© {new Date().getFullYear()} Ahmed Mohyeldin</span><div className="flex gap-5"><a href="#top" className="hover:text-[var(--ink)]">Back to top</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></footer>
    </main>
  );
}

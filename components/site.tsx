'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { Hero3D } from './hero';
import { aiProjects, projects, services } from '@/data/projects';
import { site } from '@/lib/site';

const filters = ['ALL', 'SOFTWARE', 'AI', 'WEB', '3D', 'E-COMMERCE', 'GROWTH'];

function matchesFilter(type: string, filter: string) {
  if (filter === 'ALL') return true;
  if (filter === 'AI') return false;
  if (filter === '3D') return type.includes('3D') || type.includes('EXPERIENCE');
  if (filter === 'E-COMMERCE') return type.includes('E-COMMERCE') || type.includes('SHOPIFY');
  if (filter === 'WEB') return type.includes('WEB') || type.includes('DIGITAL');
  if (filter === 'SOFTWARE') return type.includes('SOFTWARE') || type.includes('AUTOMATION');
  if (filter === 'GROWTH') return type.includes('GROWTH') || type.includes('MARKETING');
  return type.includes(filter);
}

export default function Site() {
  const nav = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav.current) {
        nav.current.style.transform = y > last && y > 80 ? 'translateY(-110%)' : 'translateY(0)';
        nav.current.style.background = y > 40 ? 'rgba(8,8,8,.86)' : 'rgba(8,8,8,.12)';
      }
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visibleProjects = projects.filter((project) => matchesFilter(project.type, filter));
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain" id="top">
      <header ref={nav} className="site-nav fixed left-0 right-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="#top" onClick={closeMenu} className="display text-sm tracking-[-.03em]">AHMED MOHYELDIN<span className="text-zinc-500">.</span></a>
          <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[.2em] text-zinc-400 md:flex">
            <a href="#work" className="nav-link">Work</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[.16em] transition hover:border-white hover:bg-white hover:text-black sm:inline-flex">Start a project ↗</a>
            <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="rounded-full border border-white/15 p-2 md:hidden">
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080808]/95 px-6 py-7 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5 text-xs uppercase tracking-[.18em]">
              <a href="#work" onClick={closeMenu}>Work</a>
              <a href="#services" onClick={closeMenu}>Services</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#contact" onClick={closeMenu}>Start a project ↗</a>
            </div>
          </div>
        )}
      </header>

      <section className="hero-section relative min-h-screen overflow-hidden">
        <Hero3D />
        <div className="hero-vignette absolute inset-0" />
        <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-12 pt-28 md:pb-16">
          <div className="max-w-6xl">
            <div className="eyebrow mb-5">SOFTWARE · AI · UI/UX · 3D · GROWTH</div>
            <h1 className="display hero-title">I BUILD DIGITAL<br /><span className="serif font-normal italic">EXPERIENCES</span><br />THAT MOVE BUSINESS.</h1>
            <p className="hero-copy mt-7 max-w-2xl">I&apos;m Ahmed Mohyeldin — a software engineer and digital builder helping brands turn products, ideas and data into premium experiences that are built to grow.</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="primary-button">Explore work <span>↘</span></a>
            <a href="#contact" className="secondary-button">Start a project <span>↗</span></a>
          </div>
          <div className="mt-14 hidden items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.18em] text-zinc-500 md:flex">
            <span>Egypt · Available for selected projects</span><span>Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      <section className="container py-28 md:py-44">
        <div className="eyebrow mb-7">01 / POSITIONING</div>
        <div className="grid gap-12 md:grid-cols-[1.25fr_.75fr] md:items-end">
          <h2 className="display section-title">MORE THAN A <span className="serif font-normal italic">DEVELOPER.</span></h2>
          <div><p className="text-lg leading-relaxed text-zinc-400">Software engineering is the foundation. I also work across AI, UI/UX, 3D, e-commerce, product presentation and marketing — so a brand can move from idea to launch without losing the connection between technology and business.</p><div className="mt-8 text-[10px] uppercase tracking-[.16em] text-zinc-600">Build · Present · Target · Measure · Grow</div></div>
        </div>
      </section>

      <section id="services" className="border-y border-[#242421] bg-[#0b0b0a]">
        <div className="container py-28 md:py-40">
          <div className="eyebrow mb-12">02 / SERVICES</div>
          <div className="grid md:grid-cols-2">
            {services.map((service) => (
              <article key={service.number} className="service-card group">
                <div className="text-xs text-zinc-600">{service.number}</div>
                <div className="mt-12 text-[10px] uppercase tracking-[.2em] text-zinc-500">{service.label}</div>
                <h3 className="display mt-3 text-4xl md:text-6xl">{service.title}</h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-500">{service.text}</p>
                <div className="mt-10 h-px w-10 bg-white/20 transition-all duration-500 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="container py-28 md:py-44">
        <div className="eyebrow mb-5">03 / SELECTED WORK</div>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display section-title">SELECTED <span className="serif font-normal italic">WORK.</span></h2>
          <div className="flex max-w-xl flex-wrap gap-2">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`filter-pill ${filter === item ? 'active' : ''}`}>{item}</button>)}
          </div>
        </div>

        <div className="mt-14">
          {visibleProjects.filter((project) => project.featured).map((project, index) => (
            <a key={project.slug} href={`/work/${project.slug}`} className="project-feature group block border-t border-[#242421] py-10 md:py-16">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <div className="eyebrow">0{index + 1} · {project.type}</div>
                  <h3 className="display mt-4 text-[clamp(2.6rem,7vw,7rem)] leading-none">{project.name}</h3>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{project.services.slice(0, 4).map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                </div>
                <ArrowUpRight className="mt-2 shrink-0 text-zinc-600 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
            </a>
          ))}
          <div className="grid border-t border-[#242421] md:grid-cols-2">
            {visibleProjects.filter((project) => !project.featured).map((project) => (
              <a key={project.slug} href={`/work/${project.slug}`} className="project-small group border-b border-r border-[#242421] p-7 md:p-10">
                <div className="eyebrow">{project.type}</div>
                <div className="mt-8 flex justify-between gap-4"><h3 className="display text-3xl">{project.name}</h3><ArrowUpRight className="text-zinc-600 transition group-hover:text-white" /></div>
                <p className="mt-4 text-sm text-zinc-600">{project.role}</p>
              </a>
            ))}
          </div>
          {visibleProjects.length === 0 && <p className="border-t border-[#242421] py-12 text-zinc-500">More work in this category is being documented.</p>}
        </div>
      </section>

      <section className="border-y border-[#242421] bg-[#11110f] py-28 md:py-40">
        <div className="container">
          <div className="eyebrow mb-7">04 / AI & DATA</div>
          <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <h2 className="display section-title">I DON&apos;T JUST USE AI.<br /><span className="serif font-normal italic">I BUILD WITH IT.</span></h2>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">From conversational assistants to document intelligence, analytics, automation and lead generation, I use AI where it can create a real business advantage.</p>
          </div>
          <div className="mt-16 grid border-t border-[#2b2b27] md:grid-cols-2">
            {aiProjects.map(([name, sub], index) => <div key={name} className="ai-card border-b border-r border-[#2b2b27] p-7 md:p-10"><div className="text-xs text-zinc-600">0{index + 1}</div><h3 className="display mt-9 text-3xl md:text-4xl">{name}</h3><p className="mt-3 text-sm text-zinc-500">{sub}</p></div>)}
          </div>
          <a href={site.aiPortfolio} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-zinc-400 hover:text-white">Explore AI Portfolio <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section className="container py-28 md:py-44">
        <div className="eyebrow mb-7">05 / 3D EXPERIENCE</div>
        <div className="experience-frame">
          <div className="absolute inset-0 opacity-90"><Hero3D /></div>
          <div className="relative z-10 flex min-h-[600px] flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-8 md:p-14">
            <div className="eyebrow">INTERACTIVE COMMERCE</div>
            <h2 className="display mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-[.8]">THE DIGITAL<br /><span className="serif font-normal italic">FITTING ROOM.</span></h2>
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-zinc-400">3D product experiences, virtual try-on concepts and interactive interfaces that bring physical product exploration into the browser.</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#242421]">
        <div className="container grid gap-16 py-28 md:grid-cols-2 md:py-40">
          <div><div className="eyebrow">06 / ABOUT</div><h2 className="display mt-8 text-[clamp(3.4rem,7vw,7rem)] leading-[.84]">THE ENGINEER<br /><span className="serif font-normal italic">BEHIND THE EXPERIENCE.</span></h2></div>
          <div className="self-end"><p className="text-xl leading-relaxed text-zinc-400">I&apos;m Ahmed Mohyeldin, a software engineer with an AI background who works across technology, digital experience and commercial growth. I can build the website, improve the UX, present the product, connect the data and help turn attention into sales.</p><div className="mt-10 flex flex-wrap gap-2">{['Next.js', 'React', 'TypeScript', 'Python', 'AI', 'Three.js', 'GSAP', 'Shopify', 'WordPress', 'WooCommerce', 'Blender', 'UI/UX', 'Marketing', 'Analytics'].map((item) => <span key={item} className="tag">{item}</span>)}</div></div>
        </div>
      </section>

      <section id="contact" className="container py-28 md:py-44">
        <div className="eyebrow">07 / CONTACT</div>
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div><h2 className="display mt-8 text-[clamp(4rem,11vw,11rem)] leading-[.77]">LET&apos;S BUILD<br /><span className="serif font-normal italic">SOMETHING.</span></h2><p className="mt-10 max-w-xl text-lg leading-relaxed text-zinc-500">Have a brand, product, website, AI idea or an existing website that needs to be transformed? Tell me what you want to build or improve.</p></div>
          <div className="flex flex-col gap-3 md:min-w-48">
            <a className="primary-button justify-center" href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            <a className="secondary-button justify-center" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="secondary-button justify-center" href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="secondary-button justify-center" href={site.aiPortfolio} target="_blank" rel="noreferrer">AI Portfolio ↗</a>
            <a className="secondary-button justify-center" href={site.linktree} target="_blank" rel="noreferrer">Linktree ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#242421] py-8"><div className="container flex flex-col justify-between gap-3 text-[10px] uppercase tracking-[.16em] text-zinc-600 md:flex-row"><span>© 2026 Ahmed Mohyeldin</span><span>SOFTWARE · AI · EXPERIENCE · GROWTH</span></div></footer>
    </main>
  );
}

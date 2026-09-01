'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, MessageCircle, Menu, X } from 'lucide-react';
import { Hero3D } from './hero';
import { projects, aiProjects } from '@/data/projects';

const filters = ['ALL', 'SOFTWARE', 'AI', 'WEB', '3D', 'E-COMMERCE', 'GROWTH'];

function matchesFilter(type: string, filter: string) {
  if (filter === 'ALL') return true;
  if (filter === 'AI') return type.includes('AI');
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
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav.current) {
        nav.current.style.transform = y > last && y > 80 ? 'translateY(-120%)' : 'translateY(0)';
        nav.current.style.background = y > 40 ? 'rgba(8,8,8,.76)' : 'transparent';
      }
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visibleProjects = projects.filter((p) => matchesFilter(p.type, filter));

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain" id="top">
      <header ref={nav} style={{ transition: 'transform .45s ease, background .35s ease' }} className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <a href="#top" onClick={closeMenu} className="display text-sm tracking-tight">AHMED MOHYELDIN<span className="text-zinc-500">.</span></a>
          <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-[.18em] text-zinc-400">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#expertise" className="hover:text-white transition">Expertise</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[.15em] hover:bg-white hover:text-black transition">Start a project ↗</a>
            <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)} className="md:hidden rounded-full border border-white/15 p-2">
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#080808]/95 px-7 py-7 backdrop-blur-xl">
            <div className="flex flex-col gap-5 text-sm uppercase tracking-[.16em]">
              <a href="#work" onClick={closeMenu}>Work</a>
              <a href="#expertise" onClick={closeMenu}>Expertise</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#contact" onClick={closeMenu}>Start a project ↗</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <Hero3D />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(8,8,8,.12)_35%,#080808_80%)]" />
        <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-14 pt-28">
          <div className="max-w-6xl">
            <div className="eyebrow mb-5">SOFTWARE · AI · EXPERIENCE · GROWTH</div>
            <h1 className="display text-[clamp(3.7rem,9.8vw,9.8rem)] leading-[.82] max-w-5xl">I BUILD DIGITAL<br /><span className="serif font-normal italic">EXPERIENCES</span><br />THAT MOVE BUSINESS.</h1>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-[#f2efe8] px-6 py-3 text-xs font-semibold text-black">EXPLORE WORK ↘</a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-xs">START A PROJECT ↗</a>
          </div>
        </div>
      </section>

      <section className="container py-32 md:py-48">
        <div className="eyebrow mb-7">01 / INTRO</div>
        <h2 className="display max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[.9]">MORE THAN A <span className="serif font-normal italic">DEVELOPER.</span></h2>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-400">I combine software engineering, artificial intelligence, design, e-commerce and growth to build digital products and experiences that don&apos;t just look good — they work.</p>
      </section>

      <section id="expertise" className="border-y border-[#242421]">
        <div className="container py-24">
          <div className="eyebrow mb-12">02 / EXPERTISE</div>
          <div className="grid md:grid-cols-2">
            {[
              ['01', 'BUILD', 'Software Engineering', 'Websites · Web Apps · E-Commerce · Shopify · WordPress · APIs · Automation'],
              ['02', 'THINK', 'AI & Data', 'AI Applications · RAG · Chatbots · Document Intelligence · Analytics · Automation'],
              ['03', 'EXPERIENCE', 'UI/UX · 3D', 'Product Experience · 3D Web · Virtual Try-On · Fitting Rooms · Motion'],
              ['04', 'GROW', 'Marketing & Commerce', 'Performance Marketing · Targeting · Conversion · Analytics · E-Commerce Growth'],
            ].map(([n, title, sub, desc]) => (
              <div key={n} className="border-b border-r border-[#242421] p-7 md:p-12 min-h-72 group hover:bg-white/[.025] transition-colors">
                <div className="text-xs text-zinc-600">{n}</div>
                <h3 className="display mt-12 text-4xl md:text-6xl group-hover:translate-x-2 transition-transform">{title}</h3>
                <div className="mt-3 text-sm text-zinc-300">{sub}</div>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="container py-32 md:py-48">
        <div className="eyebrow mb-5">03 / SELECTED WORK</div>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-6xl md:text-8xl">SELECTED <span className="serif font-normal italic">WORK.</span></h2>
          <div className="flex flex-wrap gap-2 max-w-xl">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-3 py-2 text-[10px] tracking-[.14em] transition ${filter === item ? 'border-white bg-white text-black' : 'border-white/10 text-zinc-500 hover:text-white'}`}>{item}</button>
            ))}
          </div>
        </div>

        <div className="mt-14">
          {visibleProjects.filter((p) => p.featured).map((p, i) => (
            <a key={p.slug} href={`/work/${p.slug}`} className="group block border-t border-[#242421] py-10 md:py-16">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <div className="eyebrow">0{i + 1} · {p.type}</div>
                  <h3 className="display mt-4 text-[clamp(2.5rem,7vw,7rem)] leading-none transition-transform duration-500 group-hover:translate-x-3">{p.name}</h3>
                  <p className="mt-6 max-w-xl text-zinc-500">{p.description}</p>
                </div>
                <ArrowUpRight className="mt-2 shrink-0 text-zinc-600 transition group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
          <div className="grid md:grid-cols-2 border-t border-[#242421]">
            {visibleProjects.filter((p) => !p.featured).map((p) => (
              <a key={p.slug} href={`/work/${p.slug}`} className="border-b border-r border-[#242421] p-7 md:p-10 group hover:bg-white/[.02] transition">
                <div className="eyebrow">{p.type}</div>
                <div className="mt-8 flex justify-between gap-4"><h3 className="display text-3xl">{p.name}</h3><ArrowUpRight className="text-zinc-600 group-hover:text-white" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] py-32 md:py-48">
        <div className="container">
          <div className="eyebrow mb-7">04 / INTELLIGENCE</div>
          <h2 className="display max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[.88]">I DON&apos;T JUST USE AI.<br /><span className="serif font-normal italic">I BUILD WITH IT.</span></h2>
          <div className="mt-16 grid md:grid-cols-2 border-t border-[#2b2b27]">
            {aiProjects.map(([name, sub], i) => (
              <div key={name} className="border-b border-r border-[#2b2b27] p-8 md:p-12 hover:bg-white/[.02] transition">
                <div className="text-xs text-zinc-600">0{i + 1}</div><h3 className="display mt-10 text-3xl md:text-5xl">{name}</h3><p className="mt-3 text-zinc-500">{sub}</p>
              </div>
            ))}
          </div>
          <a href="https://ai-chatbot-portfolio-ahmed-mohy.vercel.app/" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[.16em] text-zinc-400 hover:text-white">Explore AI Portfolio <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section className="container py-32 md:py-48">
        <div className="eyebrow mb-7">05 / 3D EXPERIENCE</div>
        <div className="rounded-[2rem] border border-[#242421] overflow-hidden bg-black min-h-[620px] relative">
          <div className="absolute inset-0 opacity-80"><Hero3D /></div>
          <div className="relative z-10 p-8 md:p-14 flex min-h-[620px] flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="eyebrow">INTERACTIVE COMMERCE</div>
            <h2 className="display mt-4 text-[clamp(3rem,8vw,8rem)] leading-[.82]">THE DIGITAL<br /><span className="serif font-normal italic">FITTING ROOM.</span></h2>
            <p className="mt-7 max-w-lg text-zinc-400">Interactive 3D fashion experiences designed to bring physical product exploration into the browser.</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#242421]">
        <div className="container grid md:grid-cols-2 gap-16 py-32 md:py-44">
          <div><div className="eyebrow">06 / ABOUT</div><h2 className="display mt-8 text-6xl md:text-8xl leading-[.88]">THE ENGINEER<br /><span className="serif font-normal italic">BEHIND THE EXPERIENCE.</span></h2></div>
          <div className="self-end"><p className="text-xl leading-relaxed text-zinc-400">I&apos;m Ahmed Mohyeldin, a software engineer and digital builder working across AI, web development, UI/UX, 3D, e-commerce and growth.</p><div className="mt-10 flex flex-wrap gap-3">{['Next.js', 'React', 'TypeScript', 'Python', 'AI', 'Three.js', 'GSAP', 'Shopify', 'WordPress', 'WooCommerce', 'Blender'].map((x) => <span key={x} className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">{x}</span>)}</div></div>
        </div>
      </section>

      <section id="contact" className="container py-32 md:py-48">
        <div className="eyebrow">07 / CONTACT</div>
        <h2 className="display mt-8 text-[clamp(4rem,11vw,11rem)] leading-[.78]">LET&apos;S BUILD<br /><span className="serif font-normal italic">SOMETHING.</span></h2>
        <p className="mt-10 max-w-xl text-lg text-zinc-500">Have a brand, product, website or AI idea? Let&apos;s turn it into something people can experience.</p>
        <div className="mt-12 flex flex-wrap gap-3">
          <a className="rounded-full bg-[#f2efe8] px-7 py-4 text-sm font-semibold text-black" href="https://api.whatsapp.com/send/?phone=201016286261&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer"><MessageCircle className="inline mr-2 h-4 w-4" />WhatsApp</a>
          <a className="rounded-full border border-white/15 px-7 py-4 text-sm" href="https://github.com/AhmedMohy99" target="_blank" rel="noreferrer"><Github className="inline mr-2 h-4 w-4" />GitHub</a>
          <a className="rounded-full border border-white/15 px-7 py-4 text-sm" href="https://www.linkedin.com/in/ahmed-mohy-83b447220/" target="_blank" rel="noreferrer"><Linkedin className="inline mr-2 h-4 w-4" />LinkedIn</a>
          <a className="rounded-full border border-white/15 px-7 py-4 text-sm" href="https://ai-chatbot-portfolio-ahmed-mohy.vercel.app/" target="_blank" rel="noreferrer">AI Portfolio ↗</a>
        </div>
      </section>

      <footer className="border-t border-[#242421] py-8"><div className="container flex flex-col md:flex-row justify-between gap-3 text-xs text-zinc-600"><span>© 2026 Ahmed Mohyeldin</span><span>SOFTWARE · AI · EXPERIENCE · GROWTH</span></div></footer>
    </main>
  );
}

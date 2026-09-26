import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SiteNav } from './site-nav';
import { WorkSection } from './work-section';
import { ContactForm } from './contact-form';
import { BilingualSite } from './bilingual-site';
import { ConversionAnalytics } from './conversion-analytics';
import { aiProjects, process, services } from '@/data/projects';
import { site } from '@/lib/site';

export default function SiteServer() {
  return (
    <main className="grain" id="top">
      <BilingualSite />
      <ConversionAnalytics />
      <SiteNav />

      <section className="hero-simple relative overflow-hidden" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container relative z-10 flex min-h-[88svh] flex-col justify-center pb-16 pt-32 md:min-h-[82vh] md:pb-20">
          <div className="max-w-4xl">
            <div className="label mb-5">IT · AI · WEB · E-COMMERCE</div>
            <h1 id="hero-title" className="display hero-title">DIGITAL SOLUTIONS<br /><span className="serif-italic">MADE SIMPLE.</span></h1>
            <p className="hero-copy mt-7 max-w-2xl">I&apos;m Ahmed Mohyeldin. I design and build clear websites, e-commerce experiences and AI solutions that help businesses present, sell and grow online.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">View my work <ArrowUpRight size={15} /></a>
              <a href="#contact" className="btn btn-secondary">Start a project <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ['01', 'Websites', 'Fast & clear'],
              ['02', 'E-commerce', 'Built to sell'],
              ['03', 'AI', 'Useful automation'],
              ['04', 'UI/UX', 'Easy to use'],
            ].map(([number, title, text]) => (
              <div key={number} className="quick-card">
                <span>{number}</span><strong>{title}</strong><small>{text}</small>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
            <span>Cairo, Egypt · Available for selected projects</span>
            <a href="#work" className="hidden items-center gap-2 md:flex">Scroll to explore <ArrowDown size={14} /></a>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="services-title">
        <div className="container py-20 md:py-28">
          <div className="mb-10 max-w-2xl">
            <div className="label mb-4">What I do</div>
            <h2 id="services-title" className="display section-title">ONE CLEAR GOAL:<br /><span className="serif-italic">MAKE DIGITAL EASIER.</span></h2>
          </div>
          <div className="hairline-grid grid md:grid-cols-2">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div className="text-sm font-semibold text-[var(--accent)]">{service.number}</div>
                <h3 className="display mt-7 text-3xl md:text-4xl">{service.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-[var(--ink-soft)]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WorkSection />

      <section className="border-b border-[var(--line)] bg-[var(--bg)]" aria-labelledby="ai-title">
        <div className="container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-start">
            <div>
              <div className="label mb-5">AI & automation</div>
              <h2 id="ai-title" className="display section-title">USE AI<br /><span className="serif-italic">WHERE IT HELPS.</span></h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">I build practical AI systems for customer conversations, documents, analytics and repetitive workflows — without making the experience complicated.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {aiProjects.map((p, i) => (
                  <div key={p.name} className="simple-list-card">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div><h3>{p.name}</h3><p>{p.sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]" aria-labelledby="process-title">
        <div className="container py-20 md:py-28">
          <div className="mb-10">
            <div className="label mb-4">Simple process</div>
            <h2 id="process-title" className="display section-title">FROM IDEA<br /><span className="serif-italic">TO LAUNCH.</span></h2>
          </div>
          <div className="grid border-t border-[var(--line)] md:grid-cols-3">
            {process.slice(0, 3).map((item) => (
              <article key={item.step} className="process-card">
                <div className="text-sm font-semibold text-[var(--accent)]">{item.step}</div>
                <h3 className="display mt-6 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-light" aria-labelledby="contact-title">
        <div className="container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_.9fr] md:items-end">
            <div>
              <div className="label mb-5">Start a project</div>
              <h2 id="contact-title" className="display section-title">HAVE A PROJECT<br /><span className="serif-italic">IN MIND?</span></h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">Tell me what you need. I&apos;ll help turn it into a clear digital plan.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="container flex flex-col gap-4 py-7 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.shortName}. All rights reserved.</span>
          <span>AI · Web · E-commerce · UI/UX</span>
        </div>
      </footer>
    </main>
  );
}

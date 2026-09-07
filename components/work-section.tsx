'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

type Filter = 'ALL' | 'WEB' | 'E-COMMERCE' | 'SHOPIFY' | 'UI/UX' | 'GROWTH';

const filters: Filter[] = ['ALL', 'WEB', 'E-COMMERCE', 'SHOPIFY', 'UI/UX', 'GROWTH'];

const archivedSlugs = new Set(['laro-cosmetics', 'iris', 'zrex']);

function matchesFilter(categories: readonly string[], filter: Filter) {
  if (filter === 'ALL') return true;

  const target = filter === 'E-COMMERCE' ? 'ecommerce' : filter.toLowerCase().replace('/', '');

  return categories.some((item) => item.toLowerCase().replace('/', '') === target);
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="project-visual relative overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel-2)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(155,128,85,.24),transparent_38%),linear-gradient(135deg,var(--charcoal),#34322d)] p-8 text-center text-[var(--on-charcoal)]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/55">Live site</span>
            <span className="display mt-4 text-4xl">{project.name}</span>
            <span className="mt-3 max-w-xs text-xs leading-relaxed text-white/60">
              The homepage preview is temporarily unavailable. Open the live website to view the current site.
            </span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
            onError={() => setFailed(true)}
          />
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pb-4 pt-10 text-white">
        <span className="text-xs font-medium uppercase tracking-[0.18em]">Live homepage preview</span>
        <span className="inline-flex items-center gap-1 text-xs opacity-90">
          Current site
          <ArrowUpRight size={12} />
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  archived = false,
}: {
  project: (typeof projects)[number];
  archived?: boolean;
}) {
  return (
    <article
      className={`project-row group grid gap-7 border-t border-[var(--line)] py-10 md:grid-cols-[minmax(360px,.72fr)_1fr_auto] md:items-center md:py-14 ${archived ? 'archived-project' : ''}`}
    >
      <ProjectPreview project={project} />

      <div>
        <span className="text-sm text-[var(--bronze)]">{project.tag}</span>
        <h3 className="display mt-3 text-4xl md:text-6xl">{project.name}</h3>
        <p className="mt-5 max-w-2xl leading-relaxed text-[var(--ink-soft)]">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.services.slice(0, 4).map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
          >
            Case study
            <ArrowUpRight size={14} />
          </a>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--white)] transition hover:opacity-85"
          >
            Open live site
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <ArrowUpRight
        aria-hidden="true"
        className="hidden text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:block"
      />
    </article>
  );
}

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>('ALL');

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project.category, filter)),
    [filter],
  );

  const visibleProjects = filteredProjects.filter((project) => !archivedSlugs.has(project.slug));
  const archivedProjects = filteredProjects.filter((project) => archivedSlugs.has(project.slug));

  return (
    <section id="work" className="container py-28 md:py-44" aria-labelledby="work-title">
      <div className="label mb-5">Selected work</div>

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="work-title" className="display section-title">
            WORK
            <span className="serif-italic">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--ink-soft)]">
            Real projects. Real interfaces. Built for real businesses.
          </p>
        </div>

        <div className="flex max-w-xl flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`filter-pill ${filter === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14">
        {visibleProjects.length ? (
          visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)
        ) : (
          <p className="border-t border-[var(--line)] py-12 text-[var(--muted)]">
            No projects match this filter yet.
          </p>
        )}
      </div>

      {archivedProjects.length > 0 && (
        <div className="mt-24 border-t border-[var(--line-strong)] pt-10 md:mt-32 md:pt-12" aria-labelledby="archived-title">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="label text-[var(--bronze)]">Archive · Previous client work</div>
              <h3 id="archived-title" className="display mt-3 text-4xl md:text-5xl">
                ARCHIVED <span className="serif-italic">WORK.</span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Earlier projects, preserved as case studies and live homepage previews. They remain part of the work history, but sit outside the current selected work.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] px-5 md:px-8">
            {archivedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} archived />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

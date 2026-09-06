'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

type Filter = 'ALL' | 'WEB' | 'E-COMMERCE' | 'SHOPIFY' | 'UI/UX' | 'GROWTH';
const filters: Filter[] = ['ALL', 'WEB', 'E-COMMERCE', 'SHOPIFY', 'UI/UX', 'GROWTH'];
const archivedSlugs = new Set(['laro-cosmetics', 'iris', 'zrex']);

function matchesFilter(categories: readonly string[], filter: Filter) {
  if (filter === 'ALL') return true;
  const target = filter === 'E-COMMERCE' ? 'ecommerce' : filter.toLowerCase().replace('/', '');
  return categories.some((item) => item.toLowerCase().replace('/', '') === target);
}

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>('ALL');
  const filteredProjects = useMemo(() => projects.filter((project) => matchesFilter(project.category, filter)), [filter]);
  const visibleProjects = filteredProjects.filter((project) => !archivedSlugs.has(project.slug));
  const archivedProjects = filteredProjects.filter((project) => archivedSlugs.has(project.slug));

  const card = (project: (typeof projects)[number], index: number, archived = false) => (
    <a key={project.slug} href={`/work/${project.slug}`} className={`project-row group grid gap-7 border-t border-[var(--line)] py-10 md:grid-cols-[minmax(260px,.42fr)_1fr_auto] md:items-center md:py-14 ${archived ? 'archived-project' : ''}`}>
      <div className="project-visual">
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 42vw" priority={!archived && index === 0} loading={!archived && index === 0 ? undefined : 'lazy'} />
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
    <section id="work" className="container py-28 md:py-44" aria-labelledby="work-title">
      <div className="label mb-5">Selected work</div>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h2 id="work-title" className="display section-title">WORK<span className="serif-italic">.</span></h2>
        <div className="flex max-w-xl flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`filter-pill ${filter === item ? 'active' : ''}`}>{item}</button>)}
        </div>
      </div>
      <div className="mt-14">{visibleProjects.length ? visibleProjects.map((project, index) => card(project, index)) : <p className="border-t border-[var(--line)] py-12 text-[var(--muted)]">No projects match this filter yet.</p>}</div>
      {archivedProjects.length > 0 && (
        <div className="mt-24 border-t border-[var(--line-strong)] pt-10 md:mt-32 md:pt-12" aria-labelledby="archived-title">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><div className="label text-[var(--bronze)]">Archive · Previous client work</div><h3 id="archived-title" className="display mt-3 text-4xl md:text-5xl">ARCHIVED <span className="serif-italic">WORK.</span></h3></div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">Earlier projects, preserved as case studies and homepage previews. They remain part of the work history, but sit outside the current selected work.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] px-5 md:px-8">{archivedProjects.map((project, index) => card(project, index, true))}</div>
        </div>
      )}
    </section>
  );
}

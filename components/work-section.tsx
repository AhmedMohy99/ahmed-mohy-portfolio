'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FilterBar, type PortfolioCategory } from './portfolio/filter-bar';
import { ProjectCard } from './portfolio/project-card';
import { projects } from '@/data/projects';

function matchesCategory(categories: readonly string[], filter: PortfolioCategory) {
  if (filter === 'all') return true;
  if (filter === 'ecommerce') return categories.includes('ecommerce') || categories.includes('shopify');
  if (filter === 'full-stack-ai') return categories.includes('web') || categories.includes('growth');
  if (filter === '3d-web') return categories.includes('uiux') || categories.includes('web');
  return true;
}

const projectPriority = ['sway-maverick', 'ucypta', 'royal-watch', 'laro-cosmetics', 'saffa-fashion'];

export function WorkSection() {
  const [filter, setFilter] = useState<PortfolioCategory>('all');

  const visibleProjects = useMemo(
    () =>
      projects
        .filter((project) => matchesCategory(project.category, filter))
        .sort((a, b) => {
          const aPriority = projectPriority.indexOf(a.slug);
          const bPriority = projectPriority.indexOf(b.slug);
          const aRank = aPriority === -1 ? 999 : aPriority;
          const bRank = bPriority === -1 ? 999 : bPriority;
          if (aRank !== bRank) return aRank - bRank;
          return Number(b.featured) - Number(a.featured);
        }),
    [filter],
  );

  return (
    <section id="work" className="bg-neutral-50 py-24 md:py-36" aria-labelledby="work-title">
      <div className="container">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Selected work · Live experiences</div>
            <h2 id="work-title" className="display text-5xl md:text-7xl">
              PROJECTS<span className="serif-italic">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
              Real products and digital experiences. Explore the actual live websites first, then open the case study for the thinking behind each build.
            </p>
          </div>
          <div className="lg:max-w-2xl">
            <FilterBar active={filter} onChange={setFilter} />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-neutral-200 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
          <span>{visibleProjects.length} live projects</span>
          <a href="#contact" className="inline-flex items-center gap-2 text-neutral-900 transition-colors hover:text-neutral-500">
            Have a project in mind <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {!visibleProjects.length && (
          <div className="rounded-[1.5rem] border border-dashed border-neutral-300 bg-white p-12 text-center text-sm text-neutral-500">
            No projects match this category yet.
          </div>
        )}
      </div>
    </section>
  );
}

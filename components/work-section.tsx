'use client';

import { useMemo, useState } from 'react';
import { FilterBar, type PortfolioCategory } from './portfolio/filter-bar';
import { ProjectCard } from './portfolio/project-card';
import { projects } from '@/data/projects';
import { useLocale, translate } from '@/locales/use-locale';

function matchesCategory(categories: readonly string[], filter: PortfolioCategory) {
  if (filter === 'all') return true;
  if (filter === 'ecommerce') return categories.includes('ecommerce') || categories.includes('shopify');
  if (filter === 'full-stack-ai') return categories.includes('web') || categories.includes('growth');
  if (filter === '3d-web') return categories.includes('uiux') || categories.includes('web');
  return true;
}

export function WorkSection() {
  const locale = useLocale();
  const [filter, setFilter] = useState<PortfolioCategory>('all');

  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesCategory(project.category, filter)),
    [filter],
  );

  return (
    <section id="work" className="bg-neutral-50 py-24 md:py-36" aria-labelledby="work-title">
      <div className="container">
        <div className="mb-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{translate(locale, 'Selected work')}</div>
            <h2 id="work-title" className="display text-5xl md:text-7xl">{translate(locale, 'PROJECTS')}<span className="serif-italic">.</span></h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">{locale === 'ar' ? 'مشاريع حقيقية وواجهات وأنظمة رقمية مبنية لأعمال حقيقية.' : 'Real projects, real interfaces and digital systems built for real businesses.'}</p>
          </div>
          <div className="lg:max-w-2xl">
            <FilterBar active={filter} onChange={setFilter} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>

        {!visibleProjects.length && (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center text-sm text-neutral-500">
            {locale === 'ar' ? 'لا توجد مشاريع تطابق هذه الفئة حاليًا.' : 'No projects match this category yet.'}
          </div>
        )}
      </div>
    </section>
  );
}

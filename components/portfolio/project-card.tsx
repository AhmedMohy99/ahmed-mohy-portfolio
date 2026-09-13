'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Radio } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLocale, translate } from '@/locales/use-locale';

type ProjectCardProps = {
  project: Project;
  archived?: boolean;
};

function ProjectPreview({ project }: { project: Project }) {
  const locale = useLocale();
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageFailed(false);
    setImageLoaded(false);
  }, [project.previewImage]);

  return (
    <div className="project-card-preview relative aspect-[16/10] overflow-hidden bg-neutral-100">
      {!imageFailed ? (
        <>
          {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-neutral-200" aria-hidden="true" />}
          <img
            src={project.previewImage}
            alt={translate(locale, project.imageAlt)}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 group-hover:scale-[1.02] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 px-6 text-center text-white">
          <div className="min-w-0">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">{translate(locale, 'Live preview')}</span>
            <span className="mt-3 block truncate text-2xl font-bold tracking-tight">{project.name}</span>
            <span className="mt-2 block truncate text-xs text-white/45">{project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
    </div>
  );
}

export function ProjectCard({ project, archived = false }: ProjectCardProps) {
  const locale = useLocale();
  const hostname = (() => {
    try { return new URL(project.liveUrl).hostname; } catch { return project.liveUrl; }
  })();

  return (
    <article className={`group overflow-hidden rounded-[1.5rem] border border-neutral-200/80 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl ${archived ? 'opacity-90' : ''}`}>
      <div className="relative">
        <div className="project-browser-bar absolute inset-x-0 top-0 z-20 flex h-9 items-center gap-2 border-b border-white/10 bg-neutral-950/95 px-3 text-[10px] text-white/55 backdrop-blur">
          <span className="h-2 w-2 shrink-0 rounded-full bg-white/35" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-white/25" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-white/15" />
          <span className="ml-2 min-w-0 truncate rounded-md bg-white/5 px-2 py-1 font-medium tracking-wide text-white/60">{hostname}</span>
        </div>

        <ProjectPreview project={project} />

        <div className="project-card-meta absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-2 p-3">
          <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-neutral-800 shadow-sm backdrop-blur">
            <Radio size={11} className="shrink-0 text-emerald-600" />
            <span className="truncate">{translate(locale, 'Live site')}</span>
          </span>
          <span className="max-w-[55%] truncate rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur">{project.tag}</span>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${translate(locale, 'Open live site')}: ${project.name}`}
          className="project-card-open absolute inset-x-0 bottom-0 z-30 flex justify-end p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
        >
          <span className="inline-flex h-10 items-center gap-2 rounded-full bg-white/95 px-4 text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur transition-transform group-hover:scale-[1.02]">
            {translate(locale, 'Open live site')} <ExternalLink size={14} />
          </span>
        </a>
      </div>

      <div className="project-card-content p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-neutral-900">{project.name}</h3>
            <p className="project-card-description mt-2 text-sm leading-6 text-neutral-500">{project.description}</p>
          </div>
          <span className="hidden shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700 sm:inline-flex">{translate(locale, 'Case study')}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700">{technology}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4">
          <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:underline">
            {translate(locale, 'View case study')} <ArrowUpRight size={15} />
          </Link>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900">
            {translate(locale, 'Live site')} <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

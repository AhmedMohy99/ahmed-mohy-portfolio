'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Radio } from 'lucide-react';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  archived?: boolean;
};

const PREVIEW_TIMEOUT_MS = 5000;

function ProjectPreview({ project }: { project: Project }) {
  const [showFallback, setShowFallback] = useState(false);
  const [fallbackImageFailed, setFallbackImageFailed] = useState(false);

  useEffect(() => {
    setShowFallback(false);
    setFallbackImageFailed(false);

    const timeout = window.setTimeout(() => {
      setShowFallback(true);
    }, PREVIEW_TIMEOUT_MS);

    return () => window.clearTimeout(timeout);
  }, [project.liveUrl]);

  const handleIframeLoad = () => {
    setShowFallback(false);
  };

  const handleIframeError = () => {
    setShowFallback(true);
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
      {!showFallback ? (
        <iframe
          src={project.liveUrl}
          title={`${project.name} live website preview`}
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0 bg-white"
        />
      ) : fallbackImageFailed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 px-6 text-center text-white">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">Live preview</span>
          <span className="mt-3 text-2xl font-bold tracking-tight">{project.name}</span>
          <p className="mt-2 max-w-xs text-xs leading-5 text-white/60">
            The homepage preview is unavailable. Open the live site to view the current project.
          </p>
        </div>
      ) : (
        <img
          src={project.previewImage}
          alt={project.imageAlt}
          loading="lazy"
          onError={() => setFallbackImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
    </div>
  );
}

export function ProjectCard({ project, archived = false }: ProjectCardProps) {
  return (
    <article className={`group overflow-hidden rounded-[1.5rem] border border-neutral-200/80 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl ${archived ? 'opacity-90' : ''}`}>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center gap-2 border-b border-white/10 bg-neutral-950/95 px-3 text-[10px] text-white/55 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-white/35" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-2 truncate rounded-md bg-white/5 px-2 py-1 font-medium tracking-wide text-white/60">{new URL(project.liveUrl).hostname}</span>
        </div>

        <ProjectPreview project={project} />

        <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between p-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-neutral-800 shadow-sm backdrop-blur">
            <Radio size={11} className="text-emerald-600" /> Live
          </span>
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur">{project.tag}</span>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live website`}
          className="absolute inset-x-0 bottom-0 z-30 flex justify-end p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
        >
          <span className="inline-flex h-10 items-center gap-2 rounded-full bg-white/95 px-4 text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur transition-transform group-hover:scale-[1.02]">
            Open live site <ExternalLink size={14} />
          </span>
        </a>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-900">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500">{project.description}</p>
          </div>
          <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700">Case study</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-700">{technology}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4">
          <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:underline">
            View case study <ArrowUpRight size={15} />
          </Link>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900">
            Live site <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

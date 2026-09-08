import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  archived?: boolean;
};

export function ProjectCard({ project, archived = false }: ProjectCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_8px_35px_rgba(20,20,20,.055)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_28px_80px_rgba(20,20,20,.13)] ${archived ? 'opacity-90' : ''}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e6df]">
        <div className="absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-1.5 border-b border-black/10 bg-white/90 px-3 backdrop-blur-xl">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e9e6df]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d6d1c7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#c4bfb5]" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-neutral-100 px-3 py-1 text-[9px] font-medium text-neutral-400">
            {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>

        <iframe
          src={project.url}
          title={`${project.name} live website preview`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-x-0 bottom-0 top-9 h-[calc(100%-2.25rem)] w-full border-0 bg-white origin-top-left scale-[1.015] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between p-3">
          <span className="rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-800 shadow-sm backdrop-blur">
            {project.tag}
          </span>
          {project.featured && (
            <span className="rounded-full bg-neutral-950 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
              Featured
            </span>
          )}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-neutral-950 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          aria-label={`Open ${project.name} live website`}
        >
          Open live site <ExternalLink size={13} />
        </a>

        <div className="absolute bottom-4 left-4 z-30 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
          Live experience
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {project.role}
            </div>
            <h3 className="text-[1.65rem] font-semibold tracking-[-0.04em] text-neutral-950">{project.name}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">{project.description}</p>
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            aria-label={`View ${project.name} case study`}
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-semibold text-neutral-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-5">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors hover:text-neutral-500"
          >
            View case study <ArrowUpRight size={15} />
          </Link>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            {project.services.slice(0, 2).join(' · ')}
          </span>
        </div>
      </div>
    </article>
  );
}

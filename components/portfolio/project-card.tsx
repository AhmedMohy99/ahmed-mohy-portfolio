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
      className={`group overflow-hidden rounded-[1.5rem] border border-neutral-200/80 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_24px_70px_rgba(20,20,20,.12)] ${archived ? 'opacity-90' : ''}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <iframe
          src={project.url}
          title={`${project.name} live website preview`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="pointer-events-none absolute inset-0 h-full w-full origin-top-left scale-[1.01] border-0 bg-white transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-800 shadow-sm backdrop-blur">
            {project.tag}
          </span>
          {project.featured && (
            <span className="rounded-full bg-neutral-950 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
              Featured
            </span>
          )}
        </div>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-neutral-950 shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          aria-label={`Open ${project.name} live website`}
        >
          Live site <ExternalLink size={13} />
        </Link>
        <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
          Live preview
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {project.role}
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-neutral-950">{project.name}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">{project.description}</p>
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition-all hover:-translate-y-0.5 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
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

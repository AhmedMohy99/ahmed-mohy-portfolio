import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Radio } from 'lucide-react';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  archived?: boolean;
};

export function ProjectCard({ project, archived = false }: ProjectCardProps) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl ${archived ? 'opacity-90' : ''}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <iframe
          src={project.url}
          title={`${project.name} live website`}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full origin-top-left scale-[0.72] border-0"
          style={{ width: '138.9%', height: '138.9%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-neutral-800 shadow-sm backdrop-blur">
            <Radio size={11} className="text-emerald-600" /> Live
          </span>
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur">
            {project.tag}
          </span>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live website`}
          className="absolute inset-0 flex items-end justify-end p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-inset"
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
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900">
            Live site <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

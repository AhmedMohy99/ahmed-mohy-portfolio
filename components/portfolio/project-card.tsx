import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  archived?: boolean;
};

export function ProjectCard({ project, archived = false }: ProjectCardProps) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl ${archived ? 'opacity-90' : ''}`}>
      <Link href={`/work/${project.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2">
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            loading="lazy"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur">
              {project.tag}
            </span>
            {project.featured && (
              <span className="rounded-full bg-neutral-900 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">Featured</span>
            )}
          </div>
          <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-900 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>

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

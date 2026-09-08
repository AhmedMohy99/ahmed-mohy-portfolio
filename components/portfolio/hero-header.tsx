'use client';

import { CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export function HeroHeader() {
  return (
    <section className="border-b border-neutral-200/80 bg-neutral-50">
      <div className="container py-10 md:py-14">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-2xl font-bold text-white shadow-lg ring-4 ring-white">
              AM
              <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-4 border-white bg-emerald-500" aria-label="Available" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-semibold text-white">
                  <Sparkles size={12} /> Digital Solutions
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-neutral-600 ring-1 ring-neutral-200">
                  <CheckCircle2 size={12} /> Available
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">Ahmed Mohyeldin</h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                IT & digital solutions specialist building AI, web, e-commerce, UI/UX and interactive 3D experiences.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-neutral-600">
                <MapPin size={14} /> Cairo, Egypt <span className="text-neutral-300">•</span> Available for projects
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
            {['AI', 'Web', 'E-commerce', 'UI/UX', '3D'].map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-neutral-600 ring-1 ring-neutral-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

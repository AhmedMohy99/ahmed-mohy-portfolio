import { ArrowUpRight, CalendarDays, MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

export function ScheduleCall() {
  return (
    <section id="schedule-call" className="container py-24 md:py-32" aria-labelledby="schedule-call-title">
      <div className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-7 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <div className="label mb-6">NEXT STEP</div>
            <h2 id="schedule-call-title" className="display section-title">LET&apos;S TALK<br /><span className="serif-italic">ABOUT YOUR PROJECT.</span></h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">Choose the fastest way to start. Arrange a call, try the AI Sales Lab first, or talk directly to the live sales agent.</p>
          </div>
          <div className="grid gap-3">
            <a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary justify-center"><CalendarDays size={16} /> Arrange a call <ArrowUpRight size={15} /></a>
            <a href="#ai-lab" className="btn btn-secondary justify-center">Try the AI Sales Lab <ArrowUpRight size={15} /></a>
            <a href="#live-sales-agent" className="btn btn-secondary justify-center">Talk to the live agent <MessageCircle size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

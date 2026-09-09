'use client';

import Script from 'next/script';
import { CalendarDays, MessageCircle, ShieldCheck } from 'lucide-react';
import { site } from '@/lib/site';

const closeBotPixel = process.env.NEXT_PUBLIC_CLOSEBOT_PIXEL_SCRIPT?.trim();

export function LiveSalesAgent() {
  return (
    <section id="live-sales-agent" className="section-dark border-y border-white/10 py-28 md:py-40" aria-labelledby="live-sales-title">
      {closeBotPixel ? (
        <Script
          id="closebot-sales-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: closeBotPixel }}
        />
      ) : null}
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <div className="label mb-7">LIVE AI SALES AGENT</div>
            <h2 id="live-sales-title" className="display section-title">TALK TO THE<br /><span className="serif-italic">REAL AGENT.</span></h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Start with the AI sales experience, then move to a human when the conversation needs a person. The production layer is designed for qualification, approved business knowledge, booking workflows and human handoff.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['24/7 first response', 'Lead qualification', 'Appointment booking', 'Human handoff', 'CRM-ready context', 'Arabic + English ready'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white/65">{item}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.booking} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-[#171614]"><CalendarDays size={15} /> Arrange a call</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 hover:border-white/30 hover:text-white"><MessageCircle size={15} /> Talk to Ahmed</a>
            </div>
            <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-white/40"><ShieldCheck size={15} className="mt-0.5 shrink-0" />AI should use approved business information and hand sensitive or high-value conversations to a person.</div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,.28)]">
            <div id="cb-widget-container" className="min-h-[520px] h-[520px] overflow-hidden rounded-2xl bg-[#11100f]" aria-label="CloseBot AI sales agent" />
          </div>
        </div>
      </div>
    </section>
  );
}

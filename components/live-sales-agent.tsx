'use client';

import Script from 'next/script';

const closeBotPixel = process.env.NEXT_PUBLIC_CLOSEBOT_PIXEL_SCRIPT?.trim();

export function LiveSalesAgent() {
  return (
    <section id="live-sales-agent" className="section-dark border-y border-white/10 py-28 md:py-40" aria-labelledby="live-sales-title">
      {closeBotPixel ? (
        <Script id="closebot-sales-pixel" strategy="afterInteractive">
          {closeBotPixel}
        </Script>
      ) : null}
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <div className="label mb-7">LIVE AI SALES AGENT</div>
            <h2 id="live-sales-title" className="display section-title">TALK TO THE<br /><span className="serif-italic">REAL AGENT.</span></h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              This production conversation layer is powered by CloseBot and connected to the HubSpot CRM workflow. The agent can qualify enquiries, answer approved business questions, move qualified prospects toward booking and hand important conversations to a human.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['24/7 first response', 'Lead qualification', 'Appointment booking', 'Human handoff', 'HubSpot CRM context', 'Arabic + English ready'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white/65">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,.28)]">
            <div id="cb-widget-container" className="min-h-[520px] h-[520px] overflow-hidden rounded-2xl bg-[#11100f]" aria-label="CloseBot AI sales agent" />
          </div>
        </div>
      </div>
    </section>
  );
}

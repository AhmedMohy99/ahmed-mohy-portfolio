'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Bot, CalendarDays, CheckCircle2, ChevronRight, Globe2, MessageCircle, Phone, RefreshCw, Sparkles, TrendingUp, UserRound } from 'lucide-react';

type Scenario = 'real-estate' | 'ecommerce' | 'fitness' | 'hospitality';
type Tab = 'agent' | 'dashboard' | 'roi';

const scenarios: Record<Scenario, { label: string; icon: string; intro: string; questions: string[]; reply: string }> = {
  'real-estate': { label: 'Real Estate', icon: '🏠', intro: 'I can help qualify property enquiries, match requirements and prepare a viewing request.', questions: ['I need a 3-bedroom apartment', 'Can I book a viewing?', 'What is the buyer budget?'], reply: 'Great. I can collect area, budget and preferred move-in date, then prepare the lead for a property specialist.' },
  ecommerce: { label: 'E-commerce', icon: '🛍️', intro: 'I can answer product questions, recommend products and move high-intent shoppers toward checkout.', questions: ['Help me choose a product', 'Do you deliver?', 'I need help with an order'], reply: 'Absolutely. Tell me what you are looking for and I can narrow the options, answer common questions and capture the request if a human needs to step in.' },
  fitness: { label: 'Fitness', icon: '🏋️', intro: 'I can qualify membership enquiries, explain plans and help arrange an assessment or trial.', questions: ['I want a trial session', 'What memberships do you have?', 'Can I book an assessment?'], reply: 'I can collect your goal and preferred schedule, then prepare an appointment request for the team.' },
  hospitality: { label: 'Hospitality', icon: '🏨', intro: 'I can answer guest questions, recommend options and help prepare a booking enquiry.', questions: ['What rooms are available?', 'I need a family stay', 'What time is check-in?'], reply: 'I can collect dates, guest count and preferences, then hand a qualified booking request to the team.' },
};

const pipeline = [['New', 48], ['Qualified', 27], ['Interested', 14], ['Meeting', 8], ['Won', 4]] as const;

export function AISalesLab() {
  const [tab, setTab] = useState<Tab>('agent');
  const [scenario, setScenario] = useState<Scenario>('real-estate');
  const [messages, setMessages] = useState<string[]>([]);
  const [roiLeads, setRoiLeads] = useState(500);
  const [roiValue, setRoiValue] = useState(2000);
  const [roiConversion, setRoiConversion] = useState(5);
  const active = scenarios[scenario];
  const estimatedCurrentRevenue = useMemo(() => Math.round(roiLeads * (roiConversion / 100) * roiValue), [roiLeads, roiConversion, roiValue]);
  const illustrativeLift = Math.round(estimatedCurrentRevenue * 1.2);
  const askDemo = (question: string) => setMessages((current) => [...current, `You: ${question}`, `AI: ${active.reply}`].slice(-6));

  return (
    <section id="ai-lab" className="section-dark py-28 md:py-40" aria-labelledby="ai-lab-title">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="label mb-7">Interactive AI sales lab</div>
            <h2 id="ai-lab-title" className="display section-title">DON&apos;T JUST READ<br /><span className="serif-italic">THE DEMO.</span></h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">Experience the kind of AI system I can build for a business: engage visitors, qualify intent, capture lead context, recommend the next step and hand high-value conversations to people.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/65"><div className="flex items-center gap-2 text-white"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Demo mode</div><p className="mt-1">Illustrative UI — connect your real data and tools for production use.</p></div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#171614] shadow-[0_30px_100px_rgba(0,0,0,.3)]">
          <div className="flex flex-wrap border-b border-white/10">
            {([['agent', 'AI Agent'], ['dashboard', 'Sales Dashboard'], ['roi', 'ROI Estimator']] as const).map(([value, label]) => <button key={value} type="button" onClick={() => setTab(value)} className={`px-5 py-4 text-sm transition ${tab === value ? 'bg-white text-[#171614]' : 'text-white/55 hover:text-white'}`}>{label}</button>)}
          </div>

          {tab === 'agent' && <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="label text-white/45">Choose an industry</div>
              <div className="mt-5 grid gap-2">{(Object.entries(scenarios) as [Scenario, typeof scenarios[Scenario]][]).map(([key, item]) => <button key={key} type="button" onClick={() => { setScenario(key); setMessages([]); }} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm ${scenario === key ? 'border-white/40 bg-white/10 text-white' : 'border-white/10 text-white/60 hover:border-white/25'}`}><span className="flex items-center gap-3"><span>{item.icon}</span>{item.label}</span><ChevronRight size={15} /></button>)}</div>
              <div className="mt-8 border-t border-white/10 pt-6"><div className="label text-white/45">What the agent can do</div><ul className="mt-4 space-y-3 text-sm text-white/65">{['Answer approved business knowledge', 'Ask qualification questions', 'Capture lead details', 'Recommend a next step', 'Escalate to a human'].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />{item}</li>)}</ul></div>
            </div>
            <div className="flex min-h-[520px] flex-col">
              <div className="border-b border-white/10 p-6"><div className="flex items-center justify-between"><div><div className="text-sm font-medium text-white">{active.icon} {active.label} AI Agent</div><div className="mt-1 text-xs text-white/45">Online · English + Arabic ready</div></div><Bot size={20} className="text-white/50" /></div></div>
              <div className="flex-1 space-y-4 overflow-auto p-6"><div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white/8 px-4 py-3 text-sm leading-relaxed text-white/75">{active.intro}</div>{messages.map((message, index) => <div key={`${message}-${index}`} className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.startsWith('You:') ? 'ml-auto bg-white text-[#171614]' : 'bg-white/8 text-white/70'}`}>{message.replace(/^You: |^AI: /, '')}</div>)}{messages.length === 0 && <div className="pt-2 text-xs text-white/35">Try a question:</div>}<div className="grid gap-2 sm:grid-cols-3">{active.questions.map((question) => <button key={question} type="button" onClick={() => askDemo(question)} className="rounded-xl border border-white/10 px-3 py-3 text-left text-xs text-white/60 transition hover:border-white/25 hover:text-white">{question}</button>)}</div></div>
              <div className="border-t border-white/10 p-4"><div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/35"><MessageCircle size={15} /> Demo input — use a suggested question above</div></div>
            </div>
          </div>}

          {tab === 'dashboard' && <div className="p-6 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[['Conversations', '48', '+18%'], ['Qualified leads', '27', '+24%'], ['Appointments', '8', '+12%'], ['Hot leads', '5', '+31%']].map(([label, value, trend]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="text-xs uppercase tracking-[.14em] text-white/35">{label}</div><div className="mt-3 text-3xl font-medium text-white">{value}</div><div className="mt-2 flex items-center gap-1 text-xs text-emerald-400"><TrendingUp size={13} /> {trend} demo trend</div></div>)}</div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
              <div className="rounded-2xl border border-white/10 p-5 md:p-6"><div className="flex items-center justify-between"><div><div className="text-sm text-white">Lead pipeline</div><div className="mt-1 text-xs text-white/35">Illustrative activity</div></div><RefreshCw size={16} className="text-white/35" /></div><div className="mt-7 space-y-4">{pipeline.map(([label, value]) => <div key={label}><div className="mb-2 flex justify-between text-xs text-white/55"><span>{label}</span><span>{value}</span></div><div className="h-2 overflow-hidden rounded-full bg-white/8"><div className="h-full rounded-full bg-white/70" style={{ width: `${Math.max(12, value / 48 * 100)}%` }} /></div></div>)}</div></div>
              <div className="rounded-2xl border border-white/10 p-5 md:p-6"><div className="text-sm text-white">Latest qualified lead</div><div className="mt-6 rounded-xl bg-white/5 p-4"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><UserRound size={17} /></span><div><div className="text-sm text-white">Demo Prospect</div><div className="text-xs text-white/35">High intent · Score 92/100</div></div></div><div className="mt-5 grid grid-cols-2 gap-3 text-xs"><div className="rounded-lg border border-white/10 p-3"><span className="text-white/35">Need</span><div className="mt-1 text-white/70">Business automation</div></div><div className="rounded-lg border border-white/10 p-3"><span className="text-white/35">Next step</span><div className="mt-1 text-white/70">Discovery call</div></div></div><button type="button" onClick={() => setTab('roi')} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs text-[#171614]">Explore business impact <ArrowRight size={13} /></button></div></div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-xs text-white/55"><Globe2 size={16} /> Omnichannel-ready</div><div className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-xs text-white/55"><CalendarDays size={16} /> Booking workflow</div><div className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-xs text-white/55"><Phone size={16} /> Human handoff</div></div>
          </div>}

          {tab === 'roi' && <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8"><div className="text-sm text-white">Estimate your opportunity</div><p className="mt-2 text-sm leading-relaxed text-white/45">This calculator is illustrative. It does not promise a particular revenue increase.</p><div className="mt-7 space-y-6">
              <label className="block"><span className="flex justify-between text-xs text-white/55"><span>Monthly leads</span><strong className="text-white">{roiLeads}</strong></span><input type="range" min="50" max="2000" step="50" value={roiLeads} onChange={(e) => setRoiLeads(Number(e.target.value))} className="mt-3 w-full accent-white" /></label>
              <label className="block"><span className="flex justify-between text-xs text-white/55"><span>Average customer value</span><strong className="text-white">EGP {roiValue.toLocaleString()}</strong></span><input type="range" min="250" max="20000" step="250" value={roiValue} onChange={(e) => setRoiValue(Number(e.target.value))} className="mt-3 w-full accent-white" /></label>
              <label className="block"><span className="flex justify-between text-xs text-white/55"><span>Current conversion</span><strong className="text-white">{roiConversion}%</strong></span><input type="range" min="1" max="25" step="1" value={roiConversion} onChange={(e) => setRoiConversion(Number(e.target.value))} className="mt-3 w-full accent-white" /></label>
            </div></div>
            <div className="p-6 md:p-8"><div className="label text-white/40">Illustrative model</div><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="text-xs text-white/35">Current estimated revenue</div><div className="mt-3 text-3xl text-white">EGP {estimatedCurrentRevenue.toLocaleString()}</div><div className="mt-2 text-xs text-white/40">Based on the inputs above</div></div><div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5"><div className="text-xs text-emerald-300/70">Illustrative +20% scenario</div><div className="mt-3 text-3xl text-white">EGP {illustrativeLift.toLocaleString()}</div><div className="mt-2 text-xs text-emerald-200/50">Not a guaranteed result</div></div></div><div className="mt-6 rounded-2xl border border-white/10 p-6"><div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10"><Sparkles size={17} /></span><div><div className="text-sm text-white">Where automation can help</div><p className="mt-2 text-sm leading-relaxed text-white/50">Faster response, consistent qualification, follow-up reminders, appointment routing and clean handoff data can reduce missed opportunities.</p></div></div></div><a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-[#171614]">Discuss your workflow <ArrowRight size={15} /></a></div>
          </div>}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">{[['01', 'Connect', 'Website, WhatsApp, social, email, calendar or CRM — depending on the business workflow.'], ['02', 'Train', 'Approved products, services, FAQs, qualification rules, tone and escalation rules.'], ['03', 'Convert', 'Capture intent, qualify the lead, schedule the next step and hand context to the team.']].map(([number, title, text]) => <article key={number} className="rounded-2xl border border-white/10 bg-white/[.03] p-6"><div className="text-xs text-white/35">{number}</div><h3 className="mt-6 text-xl text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{text}</p></article>)}</div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[.03] p-6 md:p-8"><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><div className="label text-white/40">Human + AI</div><h3 className="mt-3 text-2xl text-white">AI handles the repetitive work. People handle the important decisions.</h3><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45">High-intent conversations can be routed to a human with the conversation summary, lead score and requested next step already prepared.</p></div><a href="#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white transition hover:border-white">Build this for a business <ArrowRight size={15} /></a></div></div>
      </div>
    </section>
  );
}

'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Bot, CalendarDays, CheckCircle2, MessageCircle, RefreshCw, Send, X } from 'lucide-react';
import { site } from '@/lib/site';

type Lang = 'en' | 'ar';
type Message = { role: 'user' | 'assistant'; text: string };
const MAX_HISTORY = 8;

const copy = {
  en: {
    title: 'Ahmed AI Assistant',
    subtitle: 'Ask about projects, services or starting a project.',
    welcome: "Hi 👋 I'm Ahmed's portfolio assistant. How can I help?",
    placeholder: 'Ask me anything…',
    send: 'Send', language: 'العربية', restart: 'New chat', call: 'Arrange a call', live: 'Talk to live agent',
    close: 'Close assistant', online: 'Online · Ready to help', popular: 'Popular questions',
  },
  ar: {
    title: 'مساعد أحمد الذكي',
    subtitle: 'اسأل عن المشاريع أو الخدمات أو بدء مشروع جديد.',
    welcome: 'مرحباً 👋 أنا مساعد أحمد. كيف يمكنني مساعدتك؟',
    placeholder: 'اكتب سؤالك…',
    send: 'إرسال', language: 'EN', restart: 'محادثة جديدة', call: 'رتّب مكالمة', live: 'تحدث مع الوكيل المباشر',
    close: 'إغلاق المساعد', online: 'متصل · جاهز للمساعدة', popular: 'أسئلة شائعة',
  },
} as const;

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = copy[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem('ahmed-language') || window.localStorage.getItem('portfolio-chat-lang');
    if (saved === 'ar') setLang('ar');
  }, []);

  useEffect(() => { if (open) window.setTimeout(() => inputRef.current?.focus(), 120); }, [open]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [messages, loading]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    const previousOverflow = document.body.style.overflow;
    if (window.matchMedia('(max-width: 700px)').matches) document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  const switchLanguage = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    setLang(next);
    window.localStorage.setItem('portfolio-chat-lang', next);
    window.localStorage.setItem('ahmed-language', next);
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: next }));
  };

  const restartChat = () => { setMessages([]); setInput(''); setLoading(false); };

  const ask = async (text: string) => {
    const value = text.trim();
    if (!value || loading) return;
    setInput('');
    const history = messages.slice(-MAX_HISTORY).map((item) => ({ role: item.role, content: item.text }));
    setMessages((current) => [...current, { role: 'user', text: value }]);
    setLoading(true);
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: value, lang, messages: history }) });
      if (!response.ok) throw new Error('Chat request failed');
      const data = await response.json();
      setMessages((current) => [...current, { role: 'assistant', text: data.reply || t.welcome }]);
    } catch {
      setMessages((current) => [...current, { role: 'assistant', text: lang === 'ar' ? 'حدث خطأ مؤقتاً. حاول مرة أخرى.' : 'Something went wrong. Please try again.' }]);
    } finally { setLoading(false); }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); ask(input); };
  const panelHeight = 'h-[min(690px,calc(100svh-24px))] sm:h-[min(690px,calc(100vh-48px))]';

  return <>
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] right-4 z-[70] inline-flex min-h-12 items-center gap-3 rounded-full border border-[var(--line-strong)] bg-[var(--fg)] px-5 py-3 text-sm text-white shadow-[0_18px_50px_rgba(20,18,15,.22)] transition-transform hover:-translate-y-1 focus-visible:-translate-y-0.5 sm:bottom-6 sm:right-6"
      aria-label="Open Ahmed AI Assistant"
    >
      <Bot size={17} /><span className="hidden sm:inline">Ask Ahmed AI</span><MessageCircle size={15} className="sm:hidden" />
    </button>

    {open && <div
      className="fixed inset-0 z-[90] flex items-end justify-end bg-black/12 p-0 backdrop-blur-[1px] sm:p-6"
      onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
    >
      <section
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        aria-label={t.title}
        className={`flex w-full max-w-[460px] flex-col overflow-hidden border border-[var(--line-strong)] bg-[var(--white)] shadow-[0_30px_100px_rgba(20,18,15,.3)] sm:rounded-[1.5rem] ${panelHeight} rounded-t-[1.5rem] sm:rounded-b-[1.5rem]`}
      >
        <header className="shrink-0 border-b border-white/10 bg-[var(--fg)] px-4 py-4 text-white sm:px-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><Bot size={19} /></span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2"><h2 className="truncate font-medium">{t.title}</h2><span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-medium text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />{t.online}</span></div>
                <p className="mt-1 line-clamp-2 text-xs text-white/60">{t.subtitle}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button type="button" onClick={switchLanguage} className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/15 px-3 text-[11px] transition hover:bg-white/10">{t.language}</button>
              <button type="button" onClick={restartChat} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10" aria-label={t.restart} title={t.restart}><RefreshCw size={15} /></button>
              <button type="button" onClick={() => setOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" aria-label={t.close} title={t.close}><X size={18} /></button>
            </div>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5" aria-live="polite">
          {messages.length === 0 ? <div className="flex min-h-full flex-col justify-center py-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5"><p className="text-sm leading-relaxed text-[var(--ink-soft)]">{t.welcome}</p></div>
            <div className="mt-4"><div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]"><CheckCircle2 size={13} className="text-[var(--bronze)]" />{t.popular}</div><div className="grid gap-2">{t.starters.map((starter) => <button key={starter} type="button" onClick={() => ask(starter)} className="w-full rounded-xl border border-[var(--line)] bg-[var(--white)] px-4 py-3 text-start text-sm leading-6 transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-[var(--panel)]">{starter}</button>)}</div></div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2"><a href={site.booking} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--fg)] px-4 py-3 text-sm text-white transition hover:-translate-y-0.5"><CalendarDays size={15} />{t.call}</a><a href="#live-sales-agent" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--white)] px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-[var(--panel)]"><MessageCircle size={15} />{t.live}</a></div>
          </div> : <div className="space-y-4 pb-2">
            {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${message.role === 'user' ? 'rounded-br-md bg-[var(--fg)] text-white' : 'rounded-bl-md border border-[var(--line)] bg-[var(--panel)] text-[var(--ink-soft)]'}`}>{message.text}</div></div>)}
            {loading && <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--muted)]"><span className="flex gap-1"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" /><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:120ms]" /><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-current [animation-delay:240ms]" /></span>{lang === 'ar' ? 'يكتب الآن…' : 'Thinking…'}</div>}
            <div ref={endRef} />
          </div>}
        </div>

        <div className="shrink-0 border-t border-[var(--line)] bg-[var(--white)] p-3 sm:p-4">
          <div className="mb-3 flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button type="button" onClick={restartChat} className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-[var(--line)] px-3 text-xs text-[var(--muted)] hover:bg-[var(--panel)]"><RefreshCw size={12} />{t.restart}</button>
            <a href={site.booking} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-[var(--line)] px-3 text-xs text-[var(--muted)] hover:bg-[var(--panel)]"><CalendarDays size={12} />{t.call}</a>
            <a href="#live-sales-agent" onClick={() => setOpen(false)} className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-[var(--line)] px-3 text-xs text-[var(--muted)] hover:bg-[var(--panel)]"><MessageCircle size={12} />{t.live}</a>
          </div>
          <form onSubmit={submit} className="w-full">
            <div className="flex w-full items-center gap-2 rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] p-1.5 transition focus-within:border-[var(--bronze)] focus-within:ring-4 focus-within:ring-[rgba(155,128,85,.1)]">
              <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} placeholder={t.placeholder} className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm outline-none" maxLength={2000} autoComplete="off" aria-label={t.placeholder} />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="!m-0 !inline-flex !h-10 !w-10 !min-h-10 !shrink-0 !flex-none items-center justify-center rounded-xl bg-[var(--fg)] p-0 text-white transition hover:bg-[#302f2a] disabled:pointer-events-none disabled:opacity-35"
                style={{ flex: '0 0 40px', width: 40, minWidth: 40, maxWidth: 40, height: 40, padding: 0 }}
                aria-label={t.send}
              >
                <Send size={15} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>}
  </>;
}

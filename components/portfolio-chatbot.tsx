'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type Lang = 'en' | 'ar';
type Message = { role: 'user' | 'assistant'; text: string };
const MAX_HISTORY = 8;

const copy = {
  en: { title: 'Ahmed AI Assistant', subtitle: 'Ask about projects, services or starting a project.', welcome: "Hi 👋 I'm Ahmed's portfolio assistant. How can I help?", placeholder: 'Ask me anything…', send: 'Send', language: 'العربية', starters: ['What services do you offer?', 'Tell me about your AI work', 'How can I contact Ahmed?'] },
  ar: { title: 'مساعد أحمد الذكي', subtitle: 'اسأل عن المشاريع أو الخدمات أو بدء مشروع جديد.', welcome: 'مرحباً 👋 أنا مساعد أحمد. كيف يمكنني مساعدتك؟', placeholder: 'اكتب سؤالك…', send: 'إرسال', language: 'EN', starters: ['ما الخدمات التي تقدمها؟', 'حدثني عن أعمال الذكاء الاصطناعي', 'كيف أتواصل مع أحمد؟'] },
} as const;

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  useEffect(() => { if (window.localStorage.getItem('portfolio-chat-lang') === 'ar') setLang('ar'); }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);
  const switchLanguage = () => { const next = lang === 'en' ? 'ar' : 'en'; setLang(next); window.localStorage.setItem('portfolio-chat-lang', next); };

  const ask = async (text: string) => {
    const value = text.trim();
    if (!value || loading) return;
    setInput('');
    const history = messages.slice(-MAX_HISTORY).map((item) => ({ role: item.role, content: item.text }));
    setMessages((current) => [...current, { role: 'user', text: value }]);
    setLoading(true);
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: value, lang, messages: history }) });
      const data = await response.json();
      setMessages((current) => [...current, { role: 'assistant', text: data.reply || t.welcome }]);
    } catch {
      setMessages((current) => [...current, { role: 'assistant', text: lang === 'ar' ? 'حدث خطأ مؤقتاً. حاول مرة أخرى.' : 'Something went wrong. Please try again.' }]);
    } finally { setLoading(false); }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); ask(input); };

  return <>
    <button type="button" onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-[70] flex items-center gap-3 rounded-full border border-[var(--line-strong)] bg-[var(--fg)] px-5 py-3 text-sm text-white shadow-[0_18px_50px_rgba(20,18,15,.22)] transition-transform hover:-translate-y-1" aria-label="Open Ahmed AI Assistant"><Bot size={17} /><span className="hidden sm:inline">Ask Ahmed AI</span><MessageCircle size={15} className="sm:hidden" /></button>
    {open && <div className="fixed inset-0 z-[80] flex items-end justify-end bg-black/20 p-4 backdrop-blur-[2px] sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section dir={lang === 'ar' ? 'rtl' : 'ltr'} aria-label={t.title} className="flex h-[min(680px,calc(100vh-2rem))] w-full max-w-[430px] flex-col overflow-hidden rounded-[1.5rem] border border-[var(--line-strong)] bg-[var(--white)] shadow-[0_30px_90px_rgba(20,18,15,.28)]">
        <header className="border-b border-[var(--line)] bg-[var(--fg)] p-5 text-white"><div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Bot size={19} /></span><div><h2 className="font-medium">{t.title}</h2><p className="mt-1 text-xs text-white/65">{t.subtitle}</p></div></div><div className="flex items-center gap-2"><button type="button" onClick={switchLanguage} className="rounded-full border border-white/20 px-3 py-1.5 text-[11px]">{t.language}</button><button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-white/10" aria-label="Close"><X size={18} /></button></div></div></header>
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">{messages.length === 0 ? <div className="flex min-h-full flex-col justify-center"><div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5"><p className="text-sm leading-relaxed text-[var(--ink-soft)]">{t.welcome}</p></div><div className="mt-4 grid gap-2">{t.starters.map((starter) => <button key={starter} type="button" onClick={() => ask(starter)} className="rounded-xl border border-[var(--line)] px-4 py-3 text-left text-sm transition-colors hover:bg-[var(--panel)]">{starter}</button>)}</div></div> : <div className="space-y-4">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[86%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.role === 'user' ? 'bg-[var(--fg)] text-white' : 'border border-[var(--line)] bg-[var(--panel)] text-[var(--ink-soft)]'}`}>{message.text}</div></div>)}{loading && <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--muted)]">{lang === 'ar' ? 'يكتب الآن…' : 'Thinking…'}</div>}<div ref={endRef} /></div>}</div>
        <form onSubmit={submit} className="border-t border-[var(--line)] p-3"><div className="flex items-center gap-2 rounded-xl border border-[var(--line-strong)] bg-[var(--panel)] p-1.5"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder={t.placeholder} className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none" maxLength={2000} autoComplete="off" /><button type="submit" disabled={!input.trim() || loading} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--fg)] text-white disabled:opacity-40" aria-label={t.send}><Send size={15} /></button></div></form>
      </section>
    </div>}
  </>;
}

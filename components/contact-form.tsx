'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    const subject = encodeURIComponent('Project Inquiry — Ahmed Mohy');
    const body = encodeURIComponent(`Hello Ahmed,\n\nMy email is ${email.trim()}.\n\nI would like to discuss a project.`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  return (
    <div>
      <p className="max-w-xl leading-relaxed opacity-70">Have a product, store, AI idea or digital experience in mind? Share your email and your mail app will open a ready-to-send inquiry.</p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row" aria-label="Project inquiry">
        <label className="sr-only" htmlFor="email">Your email</label>
        <input id="email" name="email" type="email" required autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setOpened(false); }} placeholder="Your email" className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-white outline-none placeholder:text-white/40 focus:border-white/50" />
        <button type="submit" className="btn btn-primary min-h-12" aria-label="Open project inquiry email">{opened ? <><Check size={15} /> Email opened</> : <>Email me <ArrowUpRight size={15} /></>}</button>
      </form>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"><MessageCircle size={15} /> Prefer WhatsApp? Let&apos;s talk.</a>
    </div>
  );
}

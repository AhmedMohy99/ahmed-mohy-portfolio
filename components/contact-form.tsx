'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=Project%20Inquiry%20—%20Ahmed%20Mohyeldin&body=Hello%20Ahmed%2C%0A%0AMy%20email%20is%20${encodeURIComponent(email)}.%0A%0AI'd%20like%20to%20discuss%20a%20project.`;
  };

  return (
    <div>
      <p className="max-w-xl leading-relaxed opacity-70">Have a product, store, AI idea or digital experience in mind? Tell me what you&apos;re building and I&apos;ll help turn it into a clear next step.</p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row" aria-label="Project inquiry">
        <label className="sr-only" htmlFor="email">Your email</label>
        <input id="email" name="email" type="email" required autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setSent(false); }} placeholder="Your email" className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-white outline-none placeholder:text-white/40 focus:border-white/50" />
        <button type="submit" className="btn btn-primary min-h-12" aria-label="Send project inquiry">{sent ? <><Check size={15} /> Sent</> : <>Send inquiry <ArrowUpRight size={15} /></>}</button>
      </form>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"><MessageCircle size={15} /> Prefer WhatsApp? Let&apos;s talk.</a>
    </div>
  );
}

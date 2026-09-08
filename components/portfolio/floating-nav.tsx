import { Globe2, MessageCircle, Send } from 'lucide-react';
import { site } from '@/lib/site';

export function FloatingNav() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/90 px-2 py-2 shadow-[0_18px_60px_rgba(0,0,0,.16)] backdrop-blur-xl">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-950"
          aria-label="WhatsApp"
        >
          <MessageCircle size={16} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        <a
          href="https://ai-chatbot-portfolio-ahmed-mohy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-950"
          aria-label="AI portfolio website"
        >
          <Globe2 size={16} />
          <span className="hidden sm:inline">AI Website</span>
        </a>
        <a
          href="#contact"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-neutral-950 px-4 text-xs font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
          aria-label="Project inquiry"
        >
          <Send size={15} />
          <span>Project inquiry</span>
        </a>
      </div>
    </nav>
  );
}

import { Globe2, MessageCircle, Send } from 'lucide-react';
import { site } from '@/lib/site';

const aiWebsite = 'https://ai-chatbot-portfolio-ahmed-mohy.vercel.app/';

export function FloatingNav() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-neutral-200/90 bg-white/90 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,.16)] backdrop-blur-xl">
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-950" aria-label="WhatsApp">
          <MessageCircle size={16} strokeWidth={1.8} /> <span>WhatsApp</span>
        </a>
        <a href={aiWebsite} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-950" aria-label="AI website">
          <Globe2 size={16} strokeWidth={1.8} /> <span>Website</span>
        </a>
        <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-semibold text-neutral-800 transition-all hover:border-neutral-900 hover:bg-neutral-50 hover:text-neutral-950" aria-label="Project inquiry">
          <Send size={15} strokeWidth={1.8} /> <span>Inquire</span>
        </a>
      </div>
    </nav>
  );
}

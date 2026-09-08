import { Globe2, MessageCircle, Send } from 'lucide-react';
import { site } from '@/lib/site';

const aiWebsite = 'https://ai-chatbot-portfolio-ahmed-mohy.vercel.app/';

const actionClass = 'inline-flex h-10 items-center gap-2 rounded-full px-3.5 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:px-4';

export function FloatingNav() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-[60] flex justify-center px-3 sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:px-4">
      <div className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-neutral-200/90 bg-white/90 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,.16)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={actionClass} aria-label="WhatsApp">
          <MessageCircle size={16} strokeWidth={1.8} /> <span>WhatsApp</span>
        </a>
        <a href={aiWebsite} target="_blank" rel="noopener noreferrer" className={actionClass} aria-label="AI website">
          <Globe2 size={16} strokeWidth={1.8} /> <span>Website</span>
        </a>
        <a href="#contact" className={`${actionClass} border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900 hover:bg-neutral-50`} aria-label="Project inquiry">
          <Send size={15} strokeWidth={1.8} /> <span>Inquire</span>
        </a>
      </div>
    </nav>
  );
}

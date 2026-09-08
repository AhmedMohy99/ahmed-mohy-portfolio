import { Globe2, Mail } from 'lucide-react';
import { site } from '@/lib/site';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.9 11.9 0 0 0 5.64 1.43h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.24-6.15-3.44-8.41ZM12.09 21.74h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.76.98 1-3.66-.23-.38a9.84 9.84 0 0 1-1.51-5.22C2.2 6.45 6.63 2.02 12.08 2.02a9.82 9.82 0 0 1 6.99 2.9 9.84 9.84 0 0 1 2.89 7c0 5.44-4.43 9.87-9.87 9.87Zm5.41-7.39c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.65-.94-2.26-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

export function FloatingNav() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 sm:bottom-5 sm:px-4">
      <div className="flex max-w-full items-center gap-1 rounded-full border border-neutral-200/80 bg-white/90 p-1.5 shadow-[0_18px_70px_rgba(20,20,20,.18)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/75">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-11 items-center gap-2 rounded-full px-3.5 text-xs font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:px-4"
          aria-label="Contact Ahmed on WhatsApp"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://ai-chatbot-portfolio-ahmed-mohy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-11 items-center gap-2 rounded-full px-3.5 text-xs font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:px-4"
          aria-label="Open Ahmed Mohy's AI website"
        >
          <Globe2 size={16} strokeWidth={1.8} />
          <span>AI Website</span>
        </a>

        <a
          href="#contact"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-neutral-950 px-4 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_12px_30px_rgba(0,0,0,.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 sm:px-5"
          aria-label="Send a project inquiry"
        >
          <Mail size={15} strokeWidth={1.9} />
          <span>Project inquiry</span>
        </a>
      </div>
    </nav>
  );
}

import { Github, Mail, MessageCircle } from 'lucide-react';

export function FloatingNav() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-2 shadow-2xl backdrop-blur-md">
        <a href="https://github.com/AhmedMohy99" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900" aria-label="GitHub">
          <Github size={16} /> <span className="hidden sm:inline">GitHub</span>
        </a>
        <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900" aria-label="Email and contact">
          <Mail size={16} /> <span className="hidden sm:inline">Email</span>
        </a>
        <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-full bg-neutral-900 px-4 text-xs font-semibold text-white transition-colors hover:bg-neutral-800" aria-label="Project inquiry">
          <MessageCircle size={16} /> <span>Project inquiry</span>
        </a>
      </div>
    </nav>
  );
}

'use client';

export type PortfolioCategory = 'all' | 'full-stack-ai' | 'ecommerce' | '3d-web';

type FilterBarProps = {
  active: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
};

const filters: Array<{ id: PortfolioCategory; label: string; shortLabel: string }> = [
  { id: 'all', label: 'All work', shortLabel: 'All' },
  { id: 'full-stack-ai', label: 'Web & AI', shortLabel: 'Web + AI' },
  { id: 'ecommerce', label: 'E-commerce', shortLabel: 'Commerce' },
  { id: '3d-web', label: '3D & Interactive', shortLabel: '3D' },
];

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div
      className="flex w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Filter projects"
    >
      {filters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/25 focus-visible:ring-offset-2 ${
              isActive
                ? 'border-neutral-950 bg-neutral-950 text-white shadow-[0_8px_22px_rgba(20,20,20,.15)]'
                : 'border-neutral-200 bg-white/80 text-neutral-600 hover:-translate-y-0.5 hover:border-neutral-400 hover:text-neutral-950'
            }`}
          >
            <span className="sm:hidden">{filter.shortLabel}</span>
            <span className="hidden sm:inline">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}

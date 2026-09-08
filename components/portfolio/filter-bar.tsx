'use client';

export type PortfolioCategory = 'all' | 'full-stack-ai' | 'ecommerce' | '3d-web';

type FilterBarProps = {
  active: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
};

const filters: Array<{ id: PortfolioCategory; label: string; shortLabel: string }> = [
  { id: 'all', label: 'All work', shortLabel: 'All' },
  { id: 'full-stack-ai', label: 'Full-Stack & AI', shortLabel: 'AI & Web' },
  { id: 'ecommerce', label: 'E-commerce', shortLabel: 'Commerce' },
  { id: '3d-web', label: '3D & Web Graphics', shortLabel: '3D & Web' },
];

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter projects">
      {filters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 ${
              isActive
                ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-950'
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

'use client';

import { useLocale, translate } from '@/locales/use-locale';

export type PortfolioCategory = 'all' | 'full-stack-ai' | 'ecommerce' | '3d-web';

type FilterBarProps = {
  active: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
};

const filters: Array<{ id: PortfolioCategory; label: string }> = [
  { id: 'all', label: 'All work' },
  { id: 'full-stack-ai', label: 'Full-Stack & AI' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: '3d-web', label: '3D & Web Graphics' },
];

export function FilterBar({ active, onChange }: FilterBarProps) {
  const locale = useLocale();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label={translate(locale, 'Filter projects')}>
      {filters.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 ${
              isActive
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
            }`}
          >
            {translate(locale, filter.label)}
          </button>
        );
      })}
    </div>
  );
}

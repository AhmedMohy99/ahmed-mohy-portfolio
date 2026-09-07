import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

const insights = [
  'website-design-checklist',
  'website-redesign-guide',
  'shopify-store-ux',
  'ai-web-development',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/work',
    '/about',
    '/expertise',
    '/contact',
    '/faq',
    '/insights',
    '/services/website-design',
    '/services/website-redesign',
    '/services/shopify',
    '/services/ai-web-development',
  ];

  const projectRoutes = projects.map(
    (project) => `/work/${project.slug}`,
  );

  const insightRoutes = insights.map(
    (slug) => `/insights/${slug}`,
  );

  const routes = [
    ...staticRoutes,
    ...projectRoutes,
    ...insightRoutes,
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
    priority:
      path === ''
        ? 1
        : path.startsWith('/services/')
          ? 0.9
          : path === '/faq' || path === '/insights'
            ? 0.8
            : 0.7,
  }));
}

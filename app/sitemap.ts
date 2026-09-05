import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/work',
    '/about',
    '/expertise',
    '/contact',
    '/services/website-design',
    '/services/website-redesign',
    '/services/shopify',
    '/services/ai-web-development',
  ];

  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/services/') ? 0.9 : 0.7,
  }));
}

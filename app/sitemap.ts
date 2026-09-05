import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';

const insights = ['website-design-checklist','website-redesign-guide','shopify-store-ux','ai-web-development'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/work', '/about', '/expertise', '/contact', '/faq', '/insights', '/services/website-design', '/services/website-redesign', '/services/shopify', '/services/ai-web-development'];
  const projectRoutes = projects.map((p) => `/work/${p.slug}`);
  const insightRoutes = insights.map((slug) => `/insights/${slug}`);
  return [...staticRoutes, ...projectRoutes, ...insightRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/services/') ? 0.9 : path === '/faq' || path === '/insights' ? 0.8 : 0.7,
  }));
}

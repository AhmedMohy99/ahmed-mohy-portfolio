import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const base = 'https://ahmed-mohy-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/work', '/about', '/expertise', '/contact'];
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}

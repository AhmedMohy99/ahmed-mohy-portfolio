import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { site } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{const staticRoutes=['','/work','/about','/expertise','/contact'];const projectRoutes=projects.map(p=>`/work/${p.slug}`);return[...staticRoutes,...projectRoutes].map(path=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===''?'weekly':'monthly',priority:path===''?1:.7}));}

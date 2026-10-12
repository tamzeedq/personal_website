import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/data/projects'

// Required so the route is emitted as a plain file under `output: 'export'`.
export const dynamic = 'force-static'

const SITE = 'https://tamzeedq.com'

// lastModified is omitted on purpose: a build-time date would change on every
// deploy even when content hasn't, which gives crawlers a misleading signal.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/` },
    ...PROJECTS.map((p) => ({ url: `${SITE}/work/${p.slug}` })),
  ]
}
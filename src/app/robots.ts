import type { MetadataRoute } from 'next'

// Required so the route is emitted as a plain file under `output: 'export'`.
export const dynamic = 'force-static'

// This site owns the domain root, so robots.txt also points crawlers at the
// separate photography project's sitemap under /photography/.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: [
      'https://tamzeedq.com/sitemap.xml',
      'https://tamzeedq.com/photography/sitemap-index.xml',
    ],
  }
}
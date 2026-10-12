/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export to out/, served as a static-assets-only Cloudflare
  // Worker (see wrangler.jsonc). trailingSlash stays at its default (false),
  // so routes are emitted as e.g. out/work/<slug>.html.
  output: 'export',
}

module.exports = nextConfig

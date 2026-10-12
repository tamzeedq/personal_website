## Portfolio Website

This is my personal portfolio website, built with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/) and hosted on [Cloudflare](https://www.cloudflare.com/). It's live at https://tamzeedq.com. On the website you can find a summary of my projects, my resume, and links to my socials and email.

## Getting Started

Clone the repo and once in the project directory run the following to install the necessary packages:

```
npm install
```

You can then run the following to get started:

```
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To build the production site, run:

```
npm run build
```

The site is a static export, so the build writes plain HTML, CSS, JS and assets to `out/`.

To serve `out/` exactly as Cloudflare will, run `npm run preview` (wrangler needs Node 22). Let Workers Builds produce production builds: Next.js on Windows misnames some prefetch files in `out/`, so don't upload a Windows-built `out/` by hand.

## Editing content

All content is static and lives in two data files:

- `src/data/projects.ts`: projects, case-study prose, metrics, links and screenshots (each project gets a `/work/[slug]` page).
- `src/data/experience.ts`: jobs and timeline positions.

Missing images render as labelled placeholders.

`robots.txt` and `sitemap.xml` are generated at build time from `src/app/robots.ts` and `src/app/sitemap.ts`. The sitemap picks up every project in `src/data/projects.ts` automatically.

## Hosting

The site is a static export served by a Cloudflare Worker with static assets, on the route `tamzeedq.com/*`. Workers Builds deploys it automatically from the `master` branch, building with Node 22.

This site owns the root-level files for the whole domain (`robots.txt`, `sitemap.xml`, favicons). `robots.txt` also lists the photography site's sitemap.

`/photography` is a separate project (the `tq-photos` Worker) and must not be served by this site. Don't add a `photography` route or folder here.

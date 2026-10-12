## Portfolio Website

This is my personal portfolio website created with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/) and is hosted using [Netlify](https://www.netlify.com/). You can view the website now at https://tamzeedq.netlify.app/. On the website you can find a summary of my projects, my resume, and links to my socials and email.

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

## Editing content

All content is static and lives in two data files:

- `src/data/projects.ts`: projects, case-study prose, metrics, links and screenshots (each project gets a `/work/[slug]` page).
- `src/data/experience.ts`: jobs and timeline positions.

Missing images render as labelled placeholders.





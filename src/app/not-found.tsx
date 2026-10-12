import type { Metadata } from 'next'
import Link from 'next/link'
import SectionBar from '@/components/SectionBar'
import NotFoundTitle from '@/components/NotFoundTitle'
import { PROJECTS, projectNum, projectTag } from '@/data/projects'
import { Big_Shoulders_Display, Hanken_Grotesk, DM_Mono } from 'next/font/google'

// Next 13.4 renders the root not-found in a bare error shell without the root
// layout, so the layout's font variables are missing there. Load the same fonts
// (same files, no extra preload) and scope their variables to this page.
// In newer Next the page sits inside the layout and these resolve identically.
const display = Big_Shoulders_Display({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-display',
  preload: false,
})
const sans = Hanken_Grotesk({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
  preload: false,
})
const mono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  preload: false,
})

const TITLE = 'Not found — Tamzeed Quazi'

// Applied by newer Next versions. Next 13.4 ignores metadata on not-found,
// so <NotFoundTitle> sets document.title on the client as a fallback.
export const metadata: Metadata = {
  title: TITLE,
  robots: { index: false },
}

const pill = 'inline-flex items-center rounded-full px-[16px] py-[11px] font-mono text-[13px] font-medium'

export default function NotFound() {
  return (
    <section
      className={`${display.variable} ${sans.variable} ${mono.variable} bg-bg px-page-x pt-[16px] font-sans text-ink`}
    >
      <NotFoundTitle title={TITLE} />

      {/* Top bar, mirrors the case-study header */}
      <div className="flex items-center justify-between gap-[12px] border-b border-line pb-[14px] font-mono text-[12px] font-medium text-muted-2">
        <span className="py-[8px] text-accent">err/ page not found</span>
        <span className="whitespace-nowrap">404</span>
      </div>

      {/* Wordmark + message */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-x-[60px] gap-y-[28px] py-[clamp(36px,7vw,72px)]">
        <h1 className="m-0 whitespace-nowrap font-display text-[clamp(46px,14vw,190px)] font-black uppercase leading-[.8]">
          Lost <span className="text-accent">404.</span>
        </h1>
        <div className="flex flex-col gap-[20px]">
          <p className="m-0 text-[clamp(18px,1.8vw,22px)] leading-[1.45] [text-wrap:pretty]">
            This page doesn&apos;t exist, or it moved. The work is still here.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <Link href="/" className={`${pill} bg-ink text-bg hover:text-bg`}>
              ← back home
            </Link>
            <Link href="/#work" className={`${pill} border border-ink text-ink hover:text-ink`}>
              all work →
            </Link>
          </div>
        </div>
      </div>

      {/* A few places to land instead */}
      <div className="pb-[60px] pt-[clamp(24px,5vw,48px)]">
        <SectionBar label="or try one of these" desktopHint="click to open" mobileHint="tap to open" />
        <ul className="m-0 list-none p-0">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-[12px] py-[6px] text-ink hover:text-ink md:grid-cols-[52px_minmax(0,1fr)_150px]"
              >
                <span className="font-mono text-[12px] text-muted-2">{projectNum(i)}</span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap font-display text-[clamp(30px,5vw,56px)] font-bold uppercase leading-[1.02] transition-colors duration-200 group-hover:text-accent">
                  {p.short}
                </span>
                <span className="text-right font-mono text-[12px] text-muted-2">
                  <span className="hidden md:inline">{projectTag(p)}</span>
                  <span className="md:hidden">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

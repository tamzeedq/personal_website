'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent } from 'react'
import { scrollBehavior, scrollToId } from './scroll'

const RESUME = '/docs/Tamzeed_Quazi_Resume_2026.pdf'

export default function Header() {
  const pathname = usePathname()
  const onHome = pathname === '/'

  // On the home page, jump in place with a smooth scroll (instant under
  // reduced motion); elsewhere let the
  // link route to /#id (sections carry scroll-margin for the header offset).
  const sectionClick = (id: string) => (e: MouseEvent) => {
    if (onHome && scrollToId(id)) {
      e.preventDefault()
      history.replaceState(null, '', `#${id}`)
    }
  }

  const homeClick = (e: MouseEvent) => {
    if (onHome) {
      e.preventDefault()
      history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, behavior: scrollBehavior() })
    }
  }

  const navLink = 'whitespace-nowrap py-[6px] text-muted-2 hover:text-ink'
  // Section numbers only from md up: with them, the four links overflow a 375px phone and wrap.
  const num = (n: string) => <span className="hidden md:inline">{n} </span>

  return (
    <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-x-5 gap-y-3 bg-[rgba(239,237,232,.88)] px-[18px] pb-2 pt-3 font-mono text-[12px] text-muted-2 backdrop-blur-[10px] md:px-page-x md:py-5">
      <Link href="/" onClick={homeClick} className="font-medium text-ink">
        TQ — portfolio
      </Link>
      <nav className="order-3 flex basis-full justify-between gap-[22px] md:order-0 md:basis-auto md:justify-center">
        <Link href="/#projects" onClick={sectionClick('projects')} className={navLink}>
          {num('01')}projects
        </Link>
        <Link href="/#experience" onClick={sectionClick('experience')} className={navLink}>
          {num('02')}experience
        </Link>
        <a href={RESUME} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap py-[6px]">
          resume ↗
        </a>
        {/* Separate site on the same domain: plain anchor for a full page load. */}
        <a href="/photography/" className="whitespace-nowrap py-[6px]">
          photos ↗
        </a>
      </nav>
      <a href="mailto:tamzeed.q@gmail.com" className="py-[6px] text-accent">
        contact ↗
      </a>
    </header>
  )
}

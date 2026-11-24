'use client'

/* eslint-disable @next/next/no-img-element */

import type { MouseEvent } from 'react'
import { RESUME } from '@/components/Header'
import { scrollToId } from '@/components/scroll'

/**
 * Full-screen photo cover. The name sits in dark ink on the light sky; the
 * intro and buttons sit in white on the dark lower half of the photo. The
 * global sticky header stays hidden until this section scrolls away (Header
 * watches #hero), so the page opens on the photo alone.
 */
export default function Hero() {
  const jump = (id: string) => (e: MouseEvent) => {
    if (scrollToId(id)) {
      e.preventDefault()
      history.replaceState(null, '', `#${id}`)
    }
  }

  const ghostBtn =
    'flex min-h-[46px] items-center justify-center rounded-full border border-white bg-[rgba(20,20,18,.35)] px-[18px] text-white hover:text-white hover:bg-[rgba(20,20,18,.55)]'

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[600px] flex-col justify-between overflow-hidden bg-[#2b2d30]"
    >
      <img
        src="/images/tamzeed/hero_waterfront.jpg"
        alt="Tamzeed standing at a wooden railing by the water, with mountains and a cloudy sky behind"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[48%_center] md:object-[center_25%]"
      />

      <div className="relative px-[18px] pt-4 text-ink md:px-page-x md:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 font-mono text-[12px] md:text-[13px]">
          {/* Monogram only: the full name is the h1 right below. */}
          <span aria-hidden="true" className="font-medium">
            tq
          </span>
          <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="#experience" onClick={jump('experience')}>
              <span className="hidden md:inline">01 </span>experience
            </a>
            <a href="#projects" onClick={jump('projects')}>
              <span className="hidden md:inline">02 </span>projects
            </a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer">
              resume ↗
            </a>
            <a href="/photography/">photos ↗</a>
            <a href="mailto:tamzeed.q@gmail.com">contact ↗</a>
          </nav>
        </div>

        <h1 className="mt-6 flex flex-col font-display text-[23vw] font-black uppercase leading-[.8] md:mt-9 md:block md:whitespace-nowrap md:text-[14.6vw] md:tracking-[-0.005em]">
          <span>Tamzeed</span> <span>
            Quazi<span className="text-accent">.</span>
          </span>
        </h1>
        <div className="flex justify-between gap-4 pt-3 font-mono text-[12px] md:pt-[14px] md:text-[13px]">
          <span>software engineer</span>
          <span>vancouver, canada</span>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 px-[18px] pb-7 text-white md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-6 md:px-page-x md:pb-8">
        <p className="m-0 max-w-[420px] text-[16px] leading-[1.45] [text-shadow:0_1px_12px_rgba(0,0,0,.55)] md:text-[clamp(17px,1.5vw,20px)]">
          Welcome to my page! Have a look around and see what I've been up to.
        </p>
        <div className="grid grid-cols-2 gap-2 font-mono text-[13px] font-medium md:flex md:flex-wrap md:items-center md:gap-[10px]">
          <a href="#experience" onClick={jump('experience')} className={ghostBtn}>
            experience
          </a>
          <a href="#projects" onClick={jump('projects')} className={ghostBtn}>
            projects
          </a>
          <a
            href="#experience"
            onClick={jump('experience')}
            className="col-span-2 flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-[18px] text-ink hover:text-ink"
          >
            scroll
            <span aria-hidden="true" className="inline-block motion-safe:animate-nudge">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

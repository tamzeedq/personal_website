'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import ImageSlot from '@/components/ImageSlot'
import type { Project } from '@/data/projects'
import { scrollBehavior } from '@/components/scroll'

const CHAPTERS = ['Overview', 'Problem', 'Approach', 'Outcome'] as const
/** px below the viewport top where a chapter counts as "current". */
const ANCHOR = 140
/** How long a TOC click suppresses the scroll listener (smooth scroll in flight). */
const CLICK_LOCK_MS = 900
/**
 * Under reduced motion the jump is instant: lock just long enough to swallow its
 * single scroll event (which could otherwise snap to the last chapter at page
 * bottom), so the tracker resumes right away when the user scrolls.
 */
const INSTANT_LOCK_MS = 100

const labelCls = 'font-mono text-[12px] font-medium text-accent'
const bodyCls = 'm-0 max-w-[720px] text-[clamp(17px,1.6vw,19px)] leading-[1.6] text-ink-2'

type Props = { project: Project; stack: string }

export default function CaseBody({ project, stack }: Props) {
  const { slug, name, role, year, links, media, caseStudy } = project
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const lockUntil = useRef(0)

  // New case study (route param change keeps this component mounted): start at chapter 0.
  useEffect(() => {
    setActive(0)
    lockUntil.current = 0
  }, [slug])

  useEffect(() => {
    const onScroll = () => {
      if (Date.now() < lockUntil.current) return
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let ch = 0
      if (atBottom) ch = CHAPTERS.length - 1
      else
        refs.current.forEach((el, i) => {
          if (el && el.getBoundingClientRect().top <= ANCHOR) ch = i
        })
      setActive((prev) => (prev === ch ? prev : ch))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const jump = useCallback((i: number) => {
    const el = refs.current[i]
    if (!el) return
    const behavior = scrollBehavior()
    lockUntil.current = Date.now() + (behavior === 'smooth' ? CLICK_LOCK_MS : INSTANT_LOCK_MS)
    setActive(i)
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - ANCHOR + 20,
      behavior,
    })
  }, [])

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    refs.current[i] = el
  }

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-x-[60px] gap-y-[40px] pb-[40px] pt-[clamp(40px,7vw,70px)] md:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
      <aside className="static flex flex-col gap-[28px] md:sticky md:top-[96px]">
        <nav className="hidden flex-col gap-[2px] border-l border-line md:flex">
          {CHAPTERS.map((t, i) => {
            const on = active === i
            return (
              <button
                key={t}
                type="button"
                onClick={() => jump(i)}
                className={`-ml-px flex cursor-pointer items-baseline gap-[12px] border-0 border-l-2 bg-transparent py-[8px] pl-[14px] pr-0 text-left font-display text-[26px] font-bold uppercase transition-[color,border-color] duration-200 ${
                  on ? 'border-accent text-accent' : 'border-transparent text-muted-3'
                }`}
              >
                <span className="font-mono text-[11px] font-normal normal-case">0{i + 1}</span>
                {t}
              </button>
            )
          })}
        </nav>
        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-[20px] gap-y-[14px] border-t border-line pt-[18px] font-mono text-[12px] leading-[1.6] md:grid-cols-[minmax(0,1fr)]">
          <div>
            <div className="text-muted-2">role</div>
            <div>{role}</div>
          </div>
          <div>
            <div className="text-muted-2">year</div>
            <div>{year}</div>
          </div>
          <div>
            <div className="text-muted-2">stack</div>
            <div>{stack}</div>
          </div>
          {(links.code || links.demo) && (
            <div className="flex flex-wrap items-start gap-[8px]">
              {links.code && (
                <a
                  href={links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-[14px] py-[10px] text-bg"
                >
                  source ↗
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink px-[14px] py-[10px]"
                >
                  demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </aside>

      <div className="flex flex-col gap-[clamp(56px,8vw,80px)]">
        <div ref={setRef(0)} className="flex flex-col gap-[18px]">
          <span className={labelCls}>01/ Overview</span>
          <p className="m-0 text-[clamp(22px,2.2vw,30px)] leading-[1.35] [text-wrap:pretty]">
            {caseStudy.overview}
          </p>
        </div>

        <div ref={setRef(1)} className="flex flex-col gap-[18px]">
          <span className={labelCls}>02/ Problem</span>
          <p className={bodyCls}>{caseStudy.problem}</p>
        </div>

        <div ref={setRef(2)} className="flex flex-col gap-[18px]">
          <span className={labelCls}>03/ Approach</span>
          <p className={bodyCls}>{caseStudy.approach}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[12px]">
            <div className="aspect-[4/3]">
              <ImageSlot
                src={media.a1}
                alt={`${name} architecture diagram`}
                label="Architecture diagram"
                radius={10}
              />
            </div>
            <div className="aspect-[4/3]">
              <ImageSlot
                src={media.a2}
                alt={`${name} key screen or code`}
                label="Key screen or code"
                radius={10}
              />
            </div>
          </div>
        </div>

        <div ref={setRef(3)} className="flex flex-col gap-[22px]">
          <span className={labelCls}>04/ Outcome</span>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-[12px]">
            {caseStudy.metrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col gap-[8px] rounded-[14px] bg-ink p-[22px] text-dark-1"
              >
                <span className="font-display text-[clamp(38px,4vw,56px)] font-black leading-none">
                  {m.value}
                </span>
                <span className="font-mono text-[12px] text-dark-4">{m.label}</span>
              </div>
            ))}
          </div>
          <p className={bodyCls}>{caseStudy.outcome}</p>
        </div>
      </div>
    </div>
  )
}

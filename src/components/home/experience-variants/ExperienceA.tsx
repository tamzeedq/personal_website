'use client'

/**
 * Variant A, "extended span": the timeline starts at Sep 2021 so the whole
 * degree fits on the same axis as the jobs. Education is its own layer under
 * the job lanes, drawn as an outlined, hatched bar, so the co-ops and
 * internships visibly sit inside it.
 */

import { useState } from 'react'
import ImageSlot from '@/components/ImageSlot'
import SectionBar from '@/components/SectionBar'
import { useCanHover } from '@/components/useCanHover'
import { EDUCATION, EXPERIENCE, TIMELINE_SPAN, type Job } from '@/data/experience'

/*
  Local axis constants. The shared TIMELINE_* values describe the job-only axis
  (Jan 2023 = 0) that Experience.tsx still uses, so this variant extends them
  here instead of changing experience.ts: the axis starts at the education
  start (Sep 2021) and keeps the shared end (Mar 2027).
*/
const AXIS_START = Math.min(EDUCATION.start, ...EXPERIENCE.map((x) => x.start)) // -16, Sep 2021
const AXIS_END = TIMELINE_SPAN // 51, Mar 2027
const AXIS_SPAN = AXIS_END - AXIS_START // 67 months
/** Gridlines at each January inside the axis: 2022 (-12) … 2027 (48). */
const AXIS_YEARS = Array.from({ length: 6 }, (_, i) => ({ label: String(2022 + i), month: -12 + i * 12 }))

const pct = (months: number) => `${(months / AXIS_SPAN) * 100}%`

/** Lane tops (px) inside the 184px desktop timeline. */
const JOB_ROW_TOP = [34, 84] as const
const EDU_TOP = 140

type Selection = number | 'edu'

/*
  Hatched "outline" style for the education layer. The stripe colour comes
  from existing tokens: bar-idle when idle, accent at low opacity when active.
*/
const hatch = (active: boolean) => ({
  backgroundImage: `repeating-linear-gradient(135deg, ${
    active ? 'color-mix(in oklab, var(--color-accent) 18%, transparent)' : 'var(--color-bar-idle)'
  } 0 2px, transparent 2px 8px)`,
})

export default function ExperienceA({ id = 'experience' }: { id?: string }) {
  const [selected, setSelected] = useState<Selection>(0)
  const canHover = useCanHover()
  const job: Job = selected === 'edu' ? EDUCATION : EXPERIENCE[selected]
  const eduActive = selected === 'edu'

  /** Click and focus activate everywhere; hover only where the pointer can hover. */
  const handlers = (sel: Selection) => ({
    onMouseEnter: canHover ? () => setSelected(sel) : undefined,
    onFocus: () => setSelected(sel),
    onClick: () => setSelected(sel),
  })

  const pillColors = (i: number) => (i === selected ? 'bg-accent text-white' : 'bg-bar-idle text-ink')
  const eduColors = eduActive ? 'border-accent text-accent' : 'border-muted-3 text-ink'

  return (
    <div id={id} className="flex flex-col gap-6 px-page-x pb-[50px]" style={{ paddingTop: 'clamp(40px,6vw,60px)' }}>
      <SectionBar label="02/ Experience" hoverHint="hover a bar" touchHint="tap a role" />

      {/* Desktop timeline: jobs in two lanes, the degree as a layer underneath on the same axis. */}
      <div className="relative hidden h-[184px] md:block">
        {AXIS_YEARS.map((y) => (
          <div
            key={y.label}
            className="absolute bottom-0 top-0 border-l border-dashed border-grid-dash pl-2 font-mono text-[12px] font-normal text-muted-2"
            style={{ left: pct(y.month - AXIS_START) }}
          >
            {y.label}
          </div>
        ))}

        {EXPERIENCE.map((x, i) => {
          // An ongoing role runs to the axis end. Anchor it to the right edge so
          // that, when min-w-max makes the pill wider than its months, it grows
          // left (into empty time) instead of overflowing the section.
          const ongoing = x.end >= AXIS_END
          return (
            <button
              key={`${x.co}-${x.start}`}
              type="button"
              aria-pressed={i === selected}
              {...handlers(i)}
              className={`absolute box-border flex h-[34px] min-w-max cursor-pointer items-center whitespace-nowrap rounded-full border-0 px-[14px] font-display text-[18px] font-bold uppercase transition-[background,color] duration-200 motion-reduce:transition-none ${pillColors(i)}`}
              style={{
                ...(ongoing ? { right: 0 } : { left: pct(x.start - AXIS_START) }),
                width: pct(x.end - x.start),
                top: JOB_ROW_TOP[x.row],
              }}
            >
              {x.co}
            </button>
          )
        })}

        <button
          type="button"
          aria-pressed={eduActive}
          {...handlers('edu')}
          className={`absolute box-border flex h-[34px] cursor-pointer items-center justify-between gap-4 whitespace-nowrap rounded-full border-[1.5px] border-dashed bg-bg px-[14px] transition-[background,color,border-color] duration-200 motion-reduce:transition-none ${eduColors}`}
          style={{
            left: pct(EDUCATION.start - AXIS_START),
            width: pct(EDUCATION.end - EDUCATION.start),
            top: EDU_TOP,
            ...hatch(eduActive),
          }}
        >
          <span className="flex items-baseline gap-3">
            <span className="font-display text-[18px] font-bold uppercase">{EDUCATION.co}</span>
            <span className={`font-mono text-[11px] font-normal ${eduActive ? '' : 'text-muted-2'}`}>BSc · CS + Stats</span>
          </span>
          <span className={`font-mono text-[11px] font-normal ${eduActive ? '' : 'text-muted-2'}`}>{EDUCATION.dates}</span>
        </button>
      </div>

      {/* Mobile stack: work, then the degree as its own group. */}
      <div className="flex flex-col gap-2 md:hidden">
        <span className="font-mono text-[12px] font-medium text-muted-2">Work</span>
        {EXPERIENCE.map((x, i) => (
          <button
            key={`${x.co}-${x.start}`}
            type="button"
            aria-pressed={i === selected}
            {...handlers(i)}
            className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border-0 px-[18px] text-left transition-[background,color] duration-200 motion-reduce:transition-none ${pillColors(i)}`}
          >
            <span className="font-display text-[22px] font-bold uppercase">{x.co}</span>
            <span className="font-mono text-[11px] font-normal">{x.dates}</span>
          </button>
        ))}
        <span className="mt-3 font-mono text-[12px] font-medium text-muted-2">School</span>
        <button
          type="button"
          aria-pressed={eduActive}
          {...handlers('edu')}
          className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border-[1.5px] border-dashed bg-bg px-[18px] text-left transition-[background,color,border-color] duration-200 motion-reduce:transition-none ${eduColors}`}
          style={hatch(eduActive)}
        >
          <span className="font-display text-[22px] font-bold uppercase">{EDUCATION.co}</span>
          <span className="font-mono text-[11px] font-normal">{EDUCATION.dates}</span>
        </button>
      </div>

      {/* Detail panel */}
      <div
        aria-live="polite"
        className="grid gap-x-10 gap-y-6 rounded-[16px] bg-ink text-dark-1"
        style={{
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
          padding: 'clamp(20px,3vw,30px)',
        }}
      >
        <div className="flex flex-col gap-[10px]">
          <span className="font-mono text-[12px] font-normal text-accent-on-dark">
            {job.dates} · {job.where}
          </span>
          <span
            className="font-display font-black uppercase leading-[.9] wrap-anywhere"
            style={{ fontSize: 'clamp(40px,4vw,64px)' }}
          >
            {job.co}
          </span>
          <span className="text-[16px] text-dark-3">{job.role}</span>
        </div>
        <ul className="m-0 flex list-none flex-col gap-[10px] p-0">
          {job.points.map((pt) => (
            <li key={pt} className="grid grid-cols-[22px_minmax(0,1fr)] text-[17px] leading-normal text-dark-2">
              <span aria-hidden="true" className="text-accent-on-dark">
                →
              </span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <div className="h-[180px]">
          <ImageSlot
            key={selected}
            src={job.media}
            alt={`${job.co} — ${job.mediaLabel}`}
            label={job.mediaLabel}
            radius={10}
          />
        </div>
      </div>
    </div>
  )
}

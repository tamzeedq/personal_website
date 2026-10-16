'use client'

/**
 * Labelled-lane timeline: a single, double-height "work" lane (job rows 0
 * and 1 share it, no rule between them) above a "school" lane. The axis runs
 * Jan 2023 → TIMELINE_SPAN, so the degree is clipped at the left edge with a
 * "← 2021" cue and drawn as a dashed, hatched bar.
 */

import { useState, type CSSProperties } from 'react'
import ImageSlot from '@/components/ImageSlot'
import SectionBar from '@/components/SectionBar'
import { useCanHover } from '@/components/useCanHover'
import { EDUCATION, EXPERIENCE, TIMELINE_SPAN, TIMELINE_YEARS, type Job } from '@/data/experience'

/** Gutter width for the lane labels (keeps pills clear at 760px). */
const GUTTER = 60
/** Height of the year-label strip above the lanes. */
const HEADER_H = 28
/** One normal lane. Pills are 34px, centred in it. */
const LANE_H = 50
/** The work lane holds two job rows, so it is two lanes tall. */
const WORK_H = LANE_H * 2
/** Pill tops inside the work lane: each row centred in its half. */
const ROW_TOP = [(LANE_H - 34) / 2, LANE_H + (LANE_H - 34) / 2] as const

/** Selection: an index into EXPERIENCE, or EDU for the education pill. */
const EDU = -1

/*
  Months are counted from Jan 2023 = 0, so the axis runs 0 → TIMELINE_SPAN
  (Mar 2027) and the January of year Y sits at (Y - 2023) * 12.
*/
const pct = (months: number) => `${(months / TIMELINE_SPAN) * 100}%`
const eduClipped = EDUCATION.start < 0
const eduLeft = Math.max(EDUCATION.start, 0)
const eduStartYear = EDUCATION.dates.match(/\d{4}/)?.[0] ?? ''

/**
 * Education styling shared by the desktop bar and the mobile pill: diagonal
 * hatching (bar-idle stripes idle, a light accent tint active), plus the class
 * for the small mono annotations (degree, dates, "← 2021").
 */
function eduLook(active: boolean) {
  return {
    className: `border-[1.5px] border-dashed bg-bg ${active ? 'border-accent text-accent' : 'border-muted-3 text-ink'}`,
    style: {
      backgroundImage: `repeating-linear-gradient(135deg, ${
        active ? 'color-mix(in oklab, var(--color-accent) 18%, transparent)' : 'var(--color-bar-idle)'
      } 0 2px, transparent 2px 8px)`,
    } satisfies CSSProperties,
    note: active ? '' : 'text-muted-2',
  }
}

const EDU_TRANSITION = 'transition-[background,color,border-color] duration-200 motion-reduce:transition-none'

export default function Experience({ id = 'experience' }: { id?: string }) {
  const [active, setActive] = useState(0)
  const canHover = useCanHover()
  const job: Job = active === EDU ? EDUCATION : EXPERIENCE[active]
  const eduActive = active === EDU
  const look = eduLook(eduActive)

  // Hover only selects on hover-capable devices; click and focus work everywhere.
  const handlers = (i: number) => ({
    onMouseEnter: canHover ? () => setActive(i) : undefined,
    onFocus: () => setActive(i),
    onClick: () => setActive(i),
  })

  const jobColors = (i: number) => (i === active ? 'bg-accent text-white' : 'bg-bar-idle text-ink')

  const laneLabel = (isActive: boolean) =>
    `flex shrink-0 border-r border-line pr-2 font-mono text-[11px] font-normal transition-colors duration-200 motion-reduce:transition-none ${
      isActive ? 'text-accent' : 'text-muted-2'
    }`

  return (
    <div id={id} className="flex flex-col gap-6 px-page-x pb-[50px]" style={{ paddingTop: 'clamp(40px,6vw,60px)' }}>
      <SectionBar label="02/ Experience" hoverHint="hover a bar" touchHint="tap a role" />

      {/* Desktop: a double-height work lane and a school lane */}
      <div className="relative hidden md:block" style={{ height: HEADER_H + WORK_H + LANE_H + 2 }}>
        {/* Year gridlines across every lane, shifted right by the gutter. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0" style={{ left: GUTTER }}>
          {TIMELINE_YEARS.map((y, i) => (
            <div
              key={y}
              className="absolute bottom-0 top-0 border-l border-dashed border-grid-dash pl-2 font-mono text-[12px] font-normal leading-[28px] text-muted-2"
              style={{ left: pct(i * 12) }}
            >
              {y}
            </div>
          ))}
        </div>

        <div className="flex" style={{ height: HEADER_H }}>
          <div className="shrink-0 border-r border-line" style={{ width: GUTTER }} />
        </div>

        {/*
          Work lane. The label is top-aligned: it sits on the first row's
          centre line (the same 50px box as the school label), so both labels
          share one rhythm and "work" reads as the track header rather than
          floating in the empty gap between the two rows.
        */}
        <div className="flex border-t border-line" style={{ height: WORK_H }}>
          <span className={`${laneLabel(!eduActive)} items-start`} style={{ width: GUTTER, lineHeight: `${LANE_H}px` }}>
            work
          </span>
          <div className="relative flex-1">
            {EXPERIENCE.map((x, i) => {
              /*
                min-w-max can make a short role's pill wider than its months.
                Where that extra width goes:
                - ends at the axis end (ongoing): right: 0, grows leftward;
                - starts at the axis start: left: 0, grows rightward;
                - otherwise: centred on its date range, so the overflow splits
                  both ways and a short role keeps a clear gap to its
                  neighbours.
              */
              const placement: CSSProperties =
                x.end >= TIMELINE_SPAN ? { right: 0 } : x.start <= 0 ? { left: 0 } : { left: pct((x.start + x.end) / 2) }
              const centred = x.end < TIMELINE_SPAN && x.start > 0
              return (
                <button
                  key={`${x.co}-${x.start}`}
                  type="button"
                  aria-pressed={i === active}
                  {...handlers(i)}
                  className={`absolute box-border flex h-[34px] min-w-max cursor-pointer items-center whitespace-nowrap rounded-full border-0 px-[14px] font-display text-[18px] font-bold uppercase transition-[background,color] duration-200 motion-reduce:transition-none ${
                    centred ? '-translate-x-1/2' : ''
                  } ${jobColors(i)}`}
                  style={{ ...placement, width: pct(x.end - x.start), top: ROW_TOP[x.row] }}
                >
                  {x.co}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex border-t border-line" style={{ height: LANE_H }}>
          <span className={`${laneLabel(eduActive)} items-center`} style={{ width: GUTTER }}>
            school
          </span>
          <div className="relative flex-1">
            <button
              type="button"
              aria-pressed={eduActive}
              aria-label={`${EDUCATION.co}, ${EDUCATION.dates}`}
              {...handlers(EDU)}
              className={`absolute top-1/2 box-border flex h-[34px] min-w-max -translate-y-1/2 cursor-pointer items-center justify-between gap-4 whitespace-nowrap rounded-r-full pr-[14px] text-left ${EDU_TRANSITION} ${
                eduClipped ? 'rounded-l-none border-l-0 pl-[10px]' : 'rounded-l-full pl-[14px]'
              } ${look.className}`}
              style={{ left: pct(eduLeft), width: pct(EDUCATION.end - eduLeft), ...look.style }}
            >
              <span className="flex items-baseline gap-3">
                {eduClipped && (
                  <span aria-hidden="true" className={`font-mono text-[11px] font-normal ${look.note}`}>
                    ← {eduStartYear}
                  </span>
                )}
                <span className="font-display text-[18px] font-bold uppercase">{EDUCATION.co}</span>
                <span aria-hidden="true" className={`font-mono text-[11px] font-normal ${look.note}`}>
                  BSc CS + Stats
                </span>
              </span>
              {!eduClipped && (
                <span aria-hidden="true" className={`font-mono text-[11px] font-normal ${look.note}`}>
                  {EDUCATION.dates}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: the same lanes, as labelled groups */}
      <div className="flex flex-col gap-5 md:hidden">
        <div className="flex flex-col gap-2">
          <span
            className={`border-b border-line pb-[6px] font-mono text-[11px] font-normal transition-colors duration-200 motion-reduce:transition-none ${
              eduActive ? 'text-muted-2' : 'text-accent'
            }`}
          >
            work
          </span>
          {EXPERIENCE.map((x, i) => (
            <button
              key={`${x.co}-${x.start}`}
              type="button"
              aria-pressed={i === active}
              {...handlers(i)}
              className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border-0 px-[18px] text-left transition-[background,color] duration-200 motion-reduce:transition-none ${jobColors(i)}`}
            >
              <span className="font-display text-[22px] font-bold uppercase">{x.co}</span>
              <span className="font-mono text-[11px] font-normal">{x.dates}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span
            className={`border-b border-line pb-[6px] font-mono text-[11px] font-normal transition-colors duration-200 motion-reduce:transition-none ${
              eduActive ? 'text-accent' : 'text-muted-2'
            }`}
          >
            school
          </span>
          <button
            type="button"
            aria-pressed={eduActive}
            {...handlers(EDU)}
            className={`box-border flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full px-[18px] text-left ${EDU_TRANSITION} ${look.className}`}
            style={look.style}
          >
            <span className="font-display text-[22px] font-bold uppercase">{EDUCATION.co}</span>
            <span className={`font-mono text-[11px] font-normal ${look.note}`}>{EDUCATION.dates}</span>
          </button>
        </div>
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
          <ImageSlot key={active} src={job.media} alt={`${job.co} — ${job.mediaLabel}`} label={job.mediaLabel} radius={10} />
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import ImageSlot from '@/components/ImageSlot'
import SectionBar from '@/components/SectionBar'
import { useCanHover } from '@/components/useCanHover'
import { EDUCATION, EXPERIENCE, TIMELINE_SPAN, TIMELINE_YEARS, type Job } from '@/data/experience'

/**
 * Variant C, "labelled lanes": the timeline reads like a Gantt chart or a
 * sequencer track list. A narrow gutter names each lane ("work ·1",
 * "work ·2", "school"), thin rules separate the lanes, and the year
 * gridlines run through all of them. Education gets its own lane.
 */

/** Gutter width for the lane labels. Kept compact so pills don't collide at 760px. */
const GUTTER = 60
/** Height of the year-label strip above the lanes. */
const HEADER_H = 28
/** Height of each lane. Pills are 34px, centred. */
const LANE_H = 50

/** Selection: an index into EXPERIENCE, or EDU for the education pill. */
const EDU = -1

const pct = (months: number) => `${(months / TIMELINE_SPAN) * 100}%`

/** First month of the axis; education starts before it and is clipped here. */
const AXIS_START = 0
const eduStartYear = EDUCATION.dates.match(/\d{4}/)?.[0] ?? ''
const eduClipped = EDUCATION.start < AXIS_START
const eduLeft = Math.max(EDUCATION.start, AXIS_START)

const LANES: { label: string; row: Job['row'] }[] = [
  { label: 'work ·1', row: 0 },
  { label: 'work ·2', row: 1 },
]

export default function ExperienceC({ id = 'experience' }: { id?: string }) {
  const [active, setActive] = useState(0)
  const canHover = useCanHover()
  const job = active === EDU ? EDUCATION : EXPERIENCE[active]

  // Hover only selects on hover-capable devices; click and focus work everywhere.
  const handlers = (i: number) => ({
    onMouseEnter: canHover ? () => setActive(i) : undefined,
    onFocus: () => setActive(i),
    onClick: () => setActive(i),
  })

  const jobColors = (i: number) => (i === active ? 'bg-accent text-white' : 'bg-bar-idle text-ink')
  // Education is outlined when idle; same accent fill as jobs when active.
  const eduColors = active === EDU ? 'border-accent bg-accent text-white' : 'border-ink/35 bg-transparent text-ink'

  const laneLabel = (isActive: boolean) =>
    `flex shrink-0 items-center border-r border-line pr-2 font-mono text-[11px] font-normal transition-colors duration-200 motion-reduce:transition-none ${
      isActive ? 'text-accent' : 'text-muted-2'
    }`

  return (
    <div id={id} className="flex flex-col gap-6 px-page-x pb-[50px]" style={{ paddingTop: 'clamp(40px,6vw,60px)' }}>
      <SectionBar label="02/ Experience" hoverHint="hover a bar" touchHint="tap a role" />

      {/* Desktop: labelled lanes */}
      <div className="relative hidden md:block" style={{ height: HEADER_H + LANE_H * 3 }}>
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

        {LANES.map((lane) => {
          const laneActive = active !== EDU && EXPERIENCE[active].row === lane.row
          return (
            <div key={lane.label} className="flex border-t border-line" style={{ height: LANE_H }}>
              <span className={laneLabel(laneActive)} style={{ width: GUTTER }}>
                {lane.label}
              </span>
              <div className="relative flex-1">
                {EXPERIENCE.map((x, i) => {
                  if (x.row !== lane.row) return null
                  // Ongoing roles are anchored to the right edge so min-w-max grows leftward,
                  // never past the end of the axis (the gutter narrows the track).
                  const ongoing = x.end >= TIMELINE_SPAN
                  return (
                    <button
                      key={`${x.co}-${x.start}`}
                      type="button"
                      aria-pressed={i === active}
                      {...handlers(i)}
                      className={`absolute top-1/2 box-border flex h-[34px] min-w-max -translate-y-1/2 cursor-pointer items-center whitespace-nowrap rounded-full border-0 px-[14px] font-display text-[18px] font-bold uppercase transition-[background,color] duration-200 motion-reduce:transition-none ${jobColors(i)}`}
                      style={
                        ongoing
                          ? { right: 0, width: pct(x.end - x.start) }
                          : { left: pct(x.start), width: pct(x.end - x.start) }
                      }
                    >
                      {x.co}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div className="flex border-t border-line" style={{ height: LANE_H }}>
          <span className={laneLabel(active === EDU)} style={{ width: GUTTER }}>
            school
          </span>
          <div className="relative flex-1">
            <button
              type="button"
              aria-pressed={active === EDU}
              aria-label={`${EDUCATION.co}, ${EDUCATION.dates}`}
              {...handlers(EDU)}
              className={`absolute top-1/2 box-border flex h-[34px] min-w-max -translate-y-1/2 cursor-pointer items-center gap-3 whitespace-nowrap rounded-r-full border border-solid pr-[14px] text-left transition-[background,color,border-color] duration-200 motion-reduce:transition-none ${
                eduClipped ? 'rounded-l-none border-l-0 pl-[10px]' : 'rounded-l-full pl-[14px]'
              } ${eduColors}`}
              style={{ left: pct(eduLeft), width: pct(EDUCATION.end - eduLeft) }}
            >
              {eduClipped && (
                <span aria-hidden="true" className="font-mono text-[11px] font-normal">
                  ← {eduStartYear}
                </span>
              )}
              <span className="font-display text-[18px] font-bold uppercase">{EDUCATION.co}</span>
              <span aria-hidden="true" className="font-mono text-[11px] font-normal opacity-75">
                BSc CS + Stats
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: the same lanes, as labelled groups */}
      <div className="flex flex-col gap-5 md:hidden">
        <div className="flex flex-col gap-2">
          <span className="border-b border-line pb-[6px] font-mono text-[11px] font-normal text-muted-2">work</span>
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
          <span className="border-b border-line pb-[6px] font-mono text-[11px] font-normal text-muted-2">school</span>
          <button
            type="button"
            aria-pressed={active === EDU}
            {...handlers(EDU)}
            className={`box-border flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border border-solid px-[18px] text-left transition-[background,color,border-color] duration-200 motion-reduce:transition-none ${eduColors}`}
          >
            <span className="font-display text-[22px] font-bold uppercase">{EDUCATION.co}</span>
            <span className="font-mono text-[11px] font-normal">{EDUCATION.dates}</span>
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

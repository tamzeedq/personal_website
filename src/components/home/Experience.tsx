'use client'

/**
 * Labelled-lane timeline: a single, double-height "work" lane (job rows 0
 * and 1 share it, no rule between them) above a "school" lane. The axis runs
 * Jan 2023 → TIMELINE_SPAN, so the degree is clipped at the left edge with a
 * "← 2021" cue and drawn as a dashed, hatched bar.
 */

import { useState, type CSSProperties } from 'react'
import CompanyMark, { monogram } from '@/components/CompanyMark'
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

/**
 * Where company / school marks appear (mock; the live page uses 'none'):
 * - 'panel': beside the big name in the detail panel;
 * - 'bars': also a small mark inside every timeline bar.
 */
export type LogoMode = 'none' | 'panel' | 'bars'

/** Mark inside a 34px desktop pill; (34 - 22) / 2 = 6px inset keeps it concentric with the pill's end. */
const BAR_MARK = 22
/** Mark inside a 48px mobile pill, inset (48 - 28) / 2 = 10px. */
const MOBILE_MARK = 28
/**
 * Panel mark: ~0.86 of the name's clamp(40px,4vw,64px), so it is about one
 * line of the 0.9-leading heading tall and scales with it.
 */
const PANEL_MARK = 'clamp(34px,3.45vw,55px)'

/**
 * Small decorative mark inside a bar. Always the white tile (tone="dark"),
 * so monograms match the white logo tiles on both the idle and accent pills.
 * pointer-events-none keeps the whole pill one hit target.
 */
function BarMark({ job, size }: { job: Job; size: number }) {
  return <CompanyMark src={job.logo} name={job.co} size={size} tone="dark" className="pointer-events-none self-center" />
}

/**
 * Mark for the hatched school bar. Without a logo it is an outlined monogram in
 * the bar's own line language: a solid 1.5px border in the bar's current colour
 * (muted idle, accent active) on a page-coloured fill that masks the hatching.
 * Same 22% corners as the tiles.
 */
function SchoolMark({ job, size, active }: { job: Job; size: number; active: boolean }) {
  if (job.logo) return <BarMark job={job} size={size} />
  const text = monogram(job.co)
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none flex shrink-0 select-none items-center justify-center self-center border-[1.5px] bg-bg font-display font-black uppercase leading-none ${EDU_TRANSITION} ${
        active ? 'border-current' : 'border-muted-3'
      }`}
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.22), fontSize: size * (text.length >= 3 ? 0.45 : 0.52) }}
    >
      {text}
    </span>
  )
}

/** Name in a mobile pill, with the mark before it in 'bars' mode (the 'none' markup is unchanged). */
function MobileName({ job, withMark, school }: { job: Job; withMark: boolean; school?: { active: boolean } }) {
  const name = <span className="font-display text-[22px] font-bold uppercase">{job.co}</span>
  if (!withMark) return name
  return (
    <span className="flex items-center gap-[10px]">
      {school ? <SchoolMark job={job} size={MOBILE_MARK} active={school.active} /> : <BarMark job={job} size={MOBILE_MARK} />}
      {name}
    </span>
  )
}

/** The big company name in the detail panel. */
function PanelName({ job, className = '' }: { job: Job; className?: string }) {
  return (
    <span
      className={`${className} font-display font-black uppercase leading-[.9] wrap-anywhere`}
      style={{ fontSize: 'clamp(40px,4vw,64px)' }}
    >
      {job.co}
    </span>
  )
}

export default function Experience({ id = 'experience', logos = 'none' }: { id?: string; logos?: LogoMode }) {
  const inPanel = logos !== 'none'
  const inBars = logos === 'bars'
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
                  className={`absolute box-border flex h-[34px] min-w-max cursor-pointer items-center whitespace-nowrap rounded-full border-0 font-display text-[18px] font-bold uppercase transition-[background,color] duration-200 motion-reduce:transition-none ${
                    inBars ? 'gap-2 pl-[6px] pr-[14px]' : 'px-[14px]'
                  } ${centred ? '-translate-x-1/2' : ''} ${jobColors(i)}`}
                  style={{ ...placement, width: pct(x.end - x.start), top: ROW_TOP[x.row] }}
                >
                  {inBars && <BarMark job={x} size={BAR_MARK} />}
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
                {inBars && <SchoolMark job={EDUCATION} size={BAR_MARK} active={eduActive} />}
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
              className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border-0 pr-[18px] text-left transition-[background,color] duration-200 motion-reduce:transition-none ${
                inBars ? 'pl-[10px]' : 'pl-[18px]'
              } ${jobColors(i)}`}
            >
              <MobileName job={x} withMark={inBars} />
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
            className={`box-border flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full pr-[18px] text-left ${EDU_TRANSITION} ${
              inBars ? 'pl-[10px]' : 'pl-[18px]'
            } ${look.className}`}
            style={look.style}
          >
            <MobileName job={EDUCATION} withMark={inBars} school={{ active: eduActive }} />
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
          {inPanel ? (
            // Mark top-aligned with the first line, so a wrapped name hangs beside it.
            <span className="flex items-start gap-[clamp(12px,1.1vw,18px)]">
              <CompanyMark key={job.co} src={job.logo} name={job.co} size={55} fluid={PANEL_MARK} tone="dark" />
              <PanelName job={job} className="min-w-0" />
            </span>
          ) : (
            <PanelName job={job} />
          )}
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

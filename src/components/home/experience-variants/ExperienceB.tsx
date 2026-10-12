'use client'

import { useState, type MouseEvent } from 'react'
import ImageSlot from '@/components/ImageSlot'
import SectionBar from '@/components/SectionBar'
import { useCanHover } from '@/components/useCanHover'
import { EDUCATION, EXPERIENCE, TIMELINE_SPAN, TIMELINE_YEARS } from '@/data/experience'

/**
 * Variant B, "background layer": education is a wide, low-contrast hatched band
 * drawn BEHIND both job rows. It runs from the left edge (school began in 2021,
 * before the axis starts, so the edge fades out) to May 2026, where it ends in a
 * hard edge just past the 2026 gridline. The job pills sit on top and stay the
 * primary targets; the band is selectable through its empty area and its label.
 */

/** Index into EXPERIENCE, or 'edu' for the education band. */
type Selection = number | 'edu'

const pct = (months: number) => `${(months / TIMELINE_SPAN) * 100}%`

/** Vertical layout of the desktop timeline (px). Rows match Experience.tsx. */
const ROW_TOP = [34, 84] as const
const BAND_TOP = 26
const BAND_BOTTOM = 156 // leaves a strip under row 1 (ends at 118) for the label
const TIMELINE_HEIGHT = 164

/** Marks job pills so the band can tell when the pointer arrives from one. */
const PILL_ATTR = 'data-job-pill'

export default function ExperienceB({ id = 'experience' }: { id?: string }) {
  const [selected, setSelected] = useState<Selection>(0)
  const canHover = useCanHover()
  const eduActive = selected === 'edu'
  const job = eduActive ? EDUCATION : EXPERIENCE[selected]

  const hoverSelect = (s: Selection) => () => {
    if (canHover) setSelected(s)
  }

  /*
   * The band sits under the pills, so moving from one pill to the next crosses
   * it. Entering the band straight from a pill keeps the job selected (as the
   * gaps behave in the original timeline); entering it from outside the
   * timeline, or hovering its label, selects education.
   */
  const onBandEnter = (e: MouseEvent<HTMLButtonElement>) => {
    if (!canHover) return
    const from = e.relatedTarget
    if (from instanceof Element && from.closest(`[${PILL_ATTR}]`)) return
    setSelected('edu')
  }

  const pillColors = (i: number) => (i === selected ? 'bg-accent text-white' : 'bg-bar-idle text-ink')

  const hatch = (color: string) =>
    `repeating-linear-gradient(135deg, ${color} 0 1px, transparent 1px 7px)`

  return (
    <div id={id} className="flex flex-col gap-6 px-page-x pb-[50px]" style={{ paddingTop: 'clamp(40px,6vw,60px)' }}>
      <SectionBar label="02/ Experience" hoverHint="hover a bar" touchHint="tap a role" />

      {/* Desktop timeline */}
      <div className="relative hidden md:block" style={{ height: TIMELINE_HEIGHT }}>
        {/* Education band: the background layer. */}
        <button
          type="button"
          aria-pressed={eduActive}
          aria-label={`${EDUCATION.co}, ${EDUCATION.role}, ${EDUCATION.dates}`}
          onMouseEnter={onBandEnter}
          onFocus={() => setSelected('edu')}
          onClick={() => setSelected('edu')}
          className="group absolute left-0 z-0 m-0 block cursor-pointer border-0 bg-transparent p-0 text-left"
          style={{ top: BAND_TOP, height: BAND_BOTTOM - BAND_TOP, width: pct(EDUCATION.end) }}
        >
          {/* Fill + hatch. Masked so the left edge fades out: it continues before 2023. */}
          <span
            aria-hidden="true"
            className={`absolute inset-0 rounded-r-[14px] border-r-2 transition-[background-color,border-color] duration-200 motion-reduce:transition-none ${
              eduActive ? 'border-accent bg-accent/10' : 'border-muted-3 bg-bar-idle/45 group-hover:bg-bar-idle/70'
            }`}
            style={{
              backgroundImage: hatch(
                eduActive
                  ? 'color-mix(in oklab, var(--color-accent) 28%, transparent)'
                  : 'color-mix(in oklab, var(--color-grid-dash) 90%, transparent)',
              ),
              maskImage: 'linear-gradient(to right, transparent, #000 72px)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, #000 72px)',
            }}
          />
          {/* Label strip under row 1. Not masked, so it stays crisp at the left edge. */}
          <span
            onMouseEnter={hoverSelect('edu')}
            className={`absolute bottom-[9px] left-2 whitespace-nowrap font-mono text-[11px] font-medium transition-colors duration-200 motion-reduce:transition-none ${
              eduActive ? 'text-accent' : 'text-muted-2'
            }`}
          >
            ← 2021 · {EDUCATION.co} — BSc CS + Stats
          </span>
          <span
            aria-hidden="true"
            className={`absolute bottom-[9px] right-[10px] whitespace-nowrap font-mono text-[11px] font-normal transition-colors duration-200 motion-reduce:transition-none ${
              eduActive ? 'text-accent' : 'text-muted-2'
            }`}
          >
            May 2026
          </span>
        </button>

        {/* Year gridlines: drawn over the band's fill but never intercept the pointer. */}
        {TIMELINE_YEARS.map((y, i) => (
          <div
            key={y}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 top-0 z-[1] border-l border-dashed border-grid-dash pl-2 font-mono text-[12px] font-normal text-muted-2"
            style={{ left: pct(i * 12) }}
          >
            {y}
          </div>
        ))}

        {/* Job pills: the top layer. */}
        {EXPERIENCE.map((x, i) => (
          <button
            key={`${x.co}-${x.start}`}
            {...{ [PILL_ATTR]: '' }}
            type="button"
            aria-pressed={i === selected}
            onMouseEnter={hoverSelect(i)}
            onFocus={() => setSelected(i)}
            onClick={() => setSelected(i)}
            className={`absolute z-10 box-border flex h-[34px] min-w-max cursor-pointer items-center whitespace-nowrap rounded-full border-0 px-[14px] font-display text-[18px] font-bold uppercase transition-[background] duration-200 ${pillColors(i)}`}
            style={{ left: pct(x.start), width: pct(x.end - x.start), top: ROW_TOP[x.row] }}
          >
            {x.co}
          </button>
        ))}
      </div>

      {/* Mobile stack: jobs, then a "school" group with a hatched pill echoing the band. */}
      <div className="flex flex-col gap-2 md:hidden">
        {EXPERIENCE.map((x, i) => (
          <button
            key={`${x.co}-${x.start}`}
            type="button"
            aria-pressed={i === selected}
            onMouseEnter={hoverSelect(i)}
            onClick={() => setSelected(i)}
            className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border-0 px-[18px] text-left transition-[background] duration-200 ${pillColors(i)}`}
          >
            <span className="font-display text-[22px] font-bold uppercase">{x.co}</span>
            <span className="font-mono text-[11px] font-normal">{x.dates}</span>
          </button>
        ))}
        <div className="mt-2 flex items-center gap-3 font-mono text-[11px] font-medium text-muted-2">
          <span>school</span>
          <span aria-hidden="true" className="h-px flex-1 border-t border-dashed border-grid-dash" />
        </div>
        <button
          type="button"
          aria-pressed={eduActive}
          onMouseEnter={hoverSelect('edu')}
          onClick={() => setSelected('edu')}
          className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border-0 px-[18px] text-left transition-[background-color,color] duration-200 motion-reduce:transition-none ${
            eduActive ? 'bg-accent text-white' : 'bg-bar-idle/45 text-ink'
          }`}
          style={
            eduActive ? undefined : { backgroundImage: hatch('color-mix(in oklab, var(--color-grid-dash) 90%, transparent)') }
          }
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
            key={eduActive ? 'edu' : `${job.co}-${job.start}`}
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

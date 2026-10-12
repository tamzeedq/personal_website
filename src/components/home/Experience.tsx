'use client'

import { useState } from 'react'
import ImageSlot from '@/components/ImageSlot'
import SectionBar from '@/components/SectionBar'
import { EXPERIENCE, TIMELINE_SPAN, TIMELINE_YEARS } from '@/data/experience'

const pct = (months: number) => `${(months / TIMELINE_SPAN) * 100}%`

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0)
  const job = EXPERIENCE[activeJob]

  const pillColors = (i: number) => (i === activeJob ? 'bg-accent text-white' : 'bg-bar-idle text-ink')

  return (
    <div
      id="experience"
      className="flex flex-col gap-6 px-page-x pb-[50px]"
      style={{ paddingTop: 'clamp(40px,6vw,60px)' }}
    >
      <SectionBar label="02/ Experience" hoverHint="hover a bar" touchHint="tap a role" />

      {/* Desktop timeline */}
      <div className="relative hidden h-[150px] md:block">
        {TIMELINE_YEARS.map((y, i) => (
          <div
            key={y}
            className="absolute bottom-0 top-0 border-l border-dashed border-grid-dash pl-2 font-mono text-[12px] font-normal text-muted-2"
            style={{ left: pct(i * 12) }}
          >
            {y}
          </div>
        ))}
        {EXPERIENCE.map((x, i) => (
          <button
            key={x.co}
            type="button"
            aria-pressed={i === activeJob}
            onMouseEnter={() => setActiveJob(i)}
            onFocus={() => setActiveJob(i)}
            onClick={() => setActiveJob(i)}
            className={`absolute box-border flex h-[34px] min-w-max cursor-pointer items-center whitespace-nowrap rounded-full border-0 px-[14px] font-display text-[18px] font-bold uppercase transition-[background] duration-200 ${pillColors(i)}`}
            style={{ left: pct(x.start), width: pct(x.end - x.start), top: 34 + x.row * 50 }}
          >
            {x.co}
          </button>
        ))}
      </div>

      {/* Mobile stack */}
      <div className="flex flex-col gap-2 md:hidden">
        {EXPERIENCE.map((x, i) => (
          <button
            key={x.co}
            type="button"
            aria-pressed={i === activeJob}
            onMouseEnter={() => setActiveJob(i)}
            onClick={() => setActiveJob(i)}
            className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border-0 px-[18px] text-left transition-[background] duration-200 ${pillColors(i)}`}
          >
            <span className="font-display text-[22px] font-bold uppercase">{x.co}</span>
            <span className="font-mono text-[11px] font-normal">{x.dates}</span>
          </button>
        ))}
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
          <ImageSlot key={activeJob} src={job.media} alt={`${job.co} — ${job.mediaLabel}`} label={job.mediaLabel} radius={10} />
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Experience from '@/components/home/Experience'
import ExperienceA from '@/components/home/experience-variants/ExperienceA'
import ExperienceB from '@/components/home/experience-variants/ExperienceB'
import ExperienceC from '@/components/home/experience-variants/ExperienceC'

// Temporary comparison page for the education-timeline experiment.
// Remove it (and the unused variants) once a version is chosen.
export const metadata: Metadata = {
  title: 'Education timeline lab — Tamzeed Quazi',
  robots: { index: false },
}

const VARIANTS = [
  { key: 'current', label: 'Current (no education)', note: 'What is live today.', Component: Experience },
  { key: 'a', label: 'A — extended span', note: 'Axis starts Sep 2021; UBC is a full-length hatched layer under the jobs.', Component: ExperienceA },
  { key: 'b', label: 'B — background layer', note: 'Jobs unchanged; UBC is a faint band behind them that fades off the left edge.', Component: ExperienceB },
  { key: 'c', label: 'C — labelled lanes', note: 'A gutter with "work" and "school" lane labels; UBC gets its own lane.', Component: ExperienceC },
]

export default function EducationLab() {
  return (
    <section className="pb-10">
      {VARIANTS.map(({ key, label, note, Component }) => (
        <div key={key} className="border-b-4 border-ink">
          <div className="flex flex-wrap items-baseline justify-between gap-2 bg-ink px-page-x py-3 font-mono text-[12px] text-bg">
            <span className="font-medium">{label}</span>
            <span className="text-dark-4">{note}</span>
          </div>
          <Component {...(key === 'current' ? {} : { id: `experience-${key}` })} />
        </div>
      ))}
    </section>
  )
}

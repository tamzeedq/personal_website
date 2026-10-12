import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Experience from '@/components/home/Experience'
import ExperienceA from '@/components/home/experience-variants/ExperienceA'
import ExperienceC from '@/components/home/experience-variants/ExperienceC'
import ExperienceLanes from '@/components/home/experience-variants/ExperienceLanes'

// Temporary comparison page for the education-timeline experiment.
// Remove it (and the unused variants) once a version is chosen.
export const metadata: Metadata = {
  title: 'Education timeline lab — Tamzeed Quazi',
  robots: { index: false },
}

const VARIANTS: { key: string; label: string; note: string; node: ReactNode }[] = [
  {
    key: 'd',
    label: 'D — single work lane, outlined, ← 2021',
    note: 'C’s lanes with one tall work lane; 2023 axis; UBC outlined and cut off at 2021.',
    node: <ExperienceLanes id="experience-d" axis="2023" edu="outline" />,
  },
  {
    key: 'e',
    label: 'E — single work lane, hatched, full degree',
    note: 'Lanes on A’s axis from Sep 2021; full-length hatched UBC bar.',
    node: <ExperienceLanes id="experience-e" axis="degree" edu="hatched" />,
  },
  {
    key: 'f',
    label: 'F — single work lane, hatched, ← 2021',
    note: 'Lanes on the 2023 axis; hatched UBC bar cut off at 2021.',
    node: <ExperienceLanes id="experience-f" axis="2023" edu="hatched" />,
  },
  { key: 'a', label: 'Reference: A — extended span', note: 'Previous round.', node: <ExperienceA id="experience-a" /> },
  { key: 'c', label: 'Reference: C — labelled lanes', note: 'Previous round.', node: <ExperienceC id="experience-c" /> },
  { key: 'current', label: 'Reference: current (no education)', note: 'What is live today.', node: <Experience /> },
]

export default function EducationLab() {
  return (
    <section className="pb-10">
      {VARIANTS.map(({ key, label, note, node }) => (
        <div key={key} className="border-b-4 border-ink">
          <div className="flex flex-wrap items-baseline justify-between gap-2 bg-ink px-page-x py-3 font-mono text-[12px] text-bg">
            <span className="font-medium">{label}</span>
            <span className="text-dark-4">{note}</span>
          </div>
          {node}
        </div>
      ))}
    </section>
  )
}

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Experience from '@/components/home/Experience'

// Temporary comparison page for experience-timeline experiments.
// Remove it once the experiments are done.
export const metadata: Metadata = {
  title: 'Education timeline lab — Tamzeed Quazi',
  robots: { index: false },
}

const VARIANTS: { key: string; label: string; note: string; node: ReactNode }[] = [
  {
    key: 'g',
    label: 'G — logos in panel',
    note: 'Logo or monogram beside the big name in the detail panel; timeline bars unchanged.',
    node: <Experience id="experience-g" logos="panel" />,
  },
  {
    key: 'h',
    label: 'H — logos in bars + panel',
    note: 'G, plus a small mark at the start of every timeline bar and mobile pill.',
    node: <Experience id="experience-h" logos="bars" />,
  },
  {
    key: 'f',
    label: 'F — chosen (no logos)',
    note: 'Single work lane on the 2023 axis; hatched UBC bar cut off at 2021.',
    node: <Experience id="experience-f" />,
  },
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

import type { Metadata } from 'next'
import CompanyMark from '@/components/CompanyMark'
import { EDUCATION, EXPERIENCE, type Job } from '@/data/experience'

// Temporary review page for the company logo tiles. Remove once logos are wired into Experience.
export const metadata: Metadata = {
  title: 'Logo lab — Tamzeed Quazi',
  robots: { index: false },
}

const ENTRIES: Job[] = [...EXPERIENCE, EDUCATION]

function Grid({ tone }: { tone: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div className={`px-page-x py-8 ${dark ? 'bg-ink text-dark-1' : 'bg-bg text-ink'}`}>
      <p className={`mb-6 font-mono text-[12px] font-medium ${dark ? 'text-dark-4' : 'text-muted-2'}`}>
        {dark ? 'Dark panel (#141412)' : 'Light page (#efede8)'}
      </p>
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
        {ENTRIES.map((job) => (
          <div key={`${job.co}-${job.role}`} className="flex items-center gap-5">
            <CompanyMark src={job.logo} name={job.co} size={56} tone={tone} />
            <CompanyMark src={job.logo} name={job.co} size={22} tone={tone} />
            <div className="min-w-0">
              <div className="font-display text-[22px] font-black uppercase leading-none">{job.co}</div>
              <div className={`mt-1 font-mono text-[12px] ${dark ? 'text-dark-3' : 'text-muted'}`}>
                {job.role} · {job.logo ?? 'monogram'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LogoLab() {
  return (
    <section className="pb-10">
      <Grid tone="light" />
      <Grid tone="dark" />
    </section>
  )
}

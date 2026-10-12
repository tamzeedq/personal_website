import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ImageSlot from '@/components/ImageSlot'
import CaseBody from '@/components/case/CaseBody'
import { PROJECTS, getProject, projectNum, stackStr } from '@/data/projects'

type Params = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const found = getProject(params.slug)
  if (!found) return {}
  return {
    title: `${found.project.name} — Tamzeed Quazi`,
    description: found.project.description,
  }
}

export default function CaseStudyPage({ params }: Params) {
  const found = getProject(params.slug)
  if (!found) notFound()

  const { project: cur, index } = found
  const n = PROJECTS.length
  const neighbours = [
    { label: '← prev', i: (index - 1 + n) % n },
    { label: 'next →', i: (index + 1) % n },
  ]

  return (
    <section className="px-page-x pt-[16px]">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-[12px] border-b border-line pb-[14px] font-mono text-[12px] font-medium text-muted-2">
        <Link href="/#work" className="py-[8px] text-ink hover:text-accent">
          ← all work
        </Link>
        <span className="whitespace-nowrap">
          {projectNum(index)} / {String(n).padStart(2, '0')}
        </span>
      </div>

      {/* Title block */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-x-[60px] gap-y-[24px] py-[clamp(28px,5vw,40px)]">
        <div className="flex flex-col gap-[16px]">
          <span className="font-mono text-[13px] font-medium text-accent">{cur.category}</span>
          <h1 className="m-0 font-display text-[clamp(60px,11vw,170px)] font-black uppercase leading-[.82] [overflow-wrap:anywhere] [text-wrap:balance]">
            {cur.name}
          </h1>
        </div>
        <p className="m-0 text-[clamp(18px,1.8vw,22px)] leading-[1.45] [text-wrap:pretty]">
          {cur.description}
        </p>
      </div>

      {/* Hero media */}
      <div className="aspect-[4/3] md:aspect-[16/8]">
        <ImageSlot
          src={cur.media.hero}
          alt={`${cur.name} screenshot`}
          label="Hero video or screenshot"
          radius={14}
        />
      </div>

      <CaseBody project={cur} stack={stackStr(cur)} />

      {/* Prev / next */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[12px] border-t border-line pb-[60px] pt-[30px]">
        {neighbours.map(({ label, i }) => {
          const p = PROJECTS[i]
          return (
            <Link
              key={label}
              href={`/work/${p.slug}`}
              className="grid cursor-pointer grid-cols-[clamp(88px,22vw,150px)_minmax(0,1fr)] items-center gap-[16px] rounded-[16px] bg-card p-[10px] text-ink transition-transform duration-[250ms] hover:-translate-y-[4px] hover:text-ink motion-reduce:hover:translate-y-0"
            >
              <div className="pointer-events-none h-[clamp(70px,16vw,100px)]">
                <ImageSlot src={p.media.hero} alt={p.name} label={p.short} radius={10} />
              </div>
              <div className="flex min-w-0 flex-col gap-[6px]">
                <span className="font-mono text-[12px] text-muted-2">
                  {label} · {projectNum(i)}
                </span>
                <span className="font-display text-[clamp(26px,3vw,40px)] font-bold uppercase leading-none">
                  {p.short}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

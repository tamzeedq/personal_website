'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ImageSlot from '@/components/ImageSlot'
import SectionBar from '@/components/SectionBar'
import { PROJECTS, projectNum, projectTag, stackStr } from '@/data/projects'

const MOBILE_QUERY = '(max-width: 759.98px)'

/** True below the 760px breakpoint. Defaults to desktop during SSR. */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return isMobile
}

export default function WorkIndex() {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [openRow, setOpenRow] = useState(0)

  return (
    <div id="work" className="px-page-x pb-[40px] pt-[clamp(56px,9vw,90px)]">
      <SectionBar label="01/ Work" desktopHint="hover a row · click to open" mobileHint="tap a row" />

      {PROJECTS.map((p, i) => {
        const isOpen = openRow === i
        const codeHref = p.links.code ?? p.links.demo
        return (
          <div
            key={p.slug}
            className="border-b border-line"
            onMouseEnter={() => {
              if (!isMobile) setOpenRow(i)
            }}
          >
            <div
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => {
                if (isMobile) setOpenRow(isOpen ? -1 : i)
                else router.push(`/work/${p.slug}`)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  e.currentTarget.click()
                }
              }}
              className="grid cursor-pointer grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-[12px] py-[6px] md:grid-cols-[52px_minmax(0,1fr)_minmax(0,260px)_150px]"
            >
              <span className="font-mono text-[12px] font-normal text-muted-2">{projectNum(i)}</span>
              <span
                className={`overflow-hidden text-ellipsis whitespace-nowrap font-display text-[clamp(34px,6vw,72px)] font-bold uppercase leading-[1.02] transition-colors duration-200 ${
                  isOpen ? 'text-accent' : 'text-ink'
                }`}
              >
                {p.short}
              </span>
              <span className="hidden text-[14px] text-muted md:block">{stackStr(p)}</span>
              <span className="text-right font-mono text-[12px] font-normal text-muted-2">
                <span className="hidden md:inline">{projectTag(p)}</span>
                <span className="md:hidden">{isOpen ? '−' : '+'}</span>
              </span>
            </div>

            {isOpen && (
              <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[12px] pb-[24px] pt-[6px] md:grid-cols-[52px_repeat(3,minmax(0,1fr))]">
                <span className="hidden md:block" />
                <div className="h-[130px] md:h-[190px]">
                  <ImageSlot src={p.media.hero} alt={`${p.name} hero shot`} label="Hero shot" radius={8} />
                </div>
                <div className="h-[130px] md:h-[190px]">
                  <ImageSlot src={p.media.s2} alt={`${p.name} second shot`} label="Second shot" radius={8} />
                </div>
                <div className="col-span-2 flex flex-col justify-between gap-[16px] pl-0 md:col-auto md:pl-[14px]">
                  <span className="text-[17px] leading-[1.5] [text-wrap:pretty]">{p.description}</span>
                  <span className="flex flex-wrap gap-[10px] font-mono text-[13px] font-medium">
                    <Link
                      href={`/work/${p.slug}`}
                      className="cursor-pointer rounded-full border-0 bg-ink px-[16px] py-[11px] font-mono text-[13px] font-medium text-bg"
                    >
                      case study →
                    </Link>
                    {codeHref && (
                      <a
                        href={codeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-ink px-[16px] py-[11px] text-ink"
                      >
                        code ↗
                      </a>
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

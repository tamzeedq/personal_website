import { TICKER } from '@/data/projects'

const ITEMS = [...TICKER, ...TICKER]

export default function Marquee() {
  return (
    <div className="mx-[-30px] mb-0 mt-[clamp(36px,6vw,56px)] rotate-[1.2deg] overflow-hidden bg-ink py-3 text-bg">
      <div className="flex w-max animate-marquee font-display text-[clamp(22px,3vw,30px)] font-bold uppercase leading-normal">
        {ITEMS.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= TICKER.length ? true : undefined}
            className="flex items-center gap-9 px-[18px]"
          >
            {t}
            <span className="text-[16px] text-accent">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}

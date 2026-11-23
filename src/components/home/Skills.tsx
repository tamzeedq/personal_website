import { PROJECTS, SKILL_GROUPS } from '@/data/projects'

/** Copies of each lane's words in the track. The track scrolls by half, so half must outrun the widest lane. */
const COPIES = 6

/** Soft fade at both ends of a lane. */
const FADE = 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)'

/** A skill is "used" when some project's stack names it (e.g. "AWS" matches "AWS EC2"). */
const usedInProject = (skill: string) =>
  PROJECTS.some((p) => p.stack.some((s) => s === skill || s.startsWith(`${skill} `)))

/**
 * Dark "toolkit" card: one drifting lane of big type per skill group,
 * alternating direction, paused on hover. Skills not yet in a project are
 * dimmed. The moving lanes are decorative; screen readers get a plain list.
 */
export default function Skills() {
  return (
    <section
      aria-labelledby="toolkit-title"
      className="group mt-[clamp(40px,6vw,64px)] overflow-hidden rounded-[16px] bg-ink pb-10 pt-9 text-dark-1"
    >
      <div className="flex justify-between gap-3 px-6 pb-5 font-mono text-[12px] text-dark-3 md:px-11">
        <h2 id="toolkit-title" className="m-0 text-[12px] font-normal">
          Toolkit
        </h2>
        <span className="hidden [@media(hover:hover)_and_(pointer:fine)]:inline">hover to pause</span>
      </div>

      <ul className="sr-only">
        {SKILL_GROUPS.flatMap((g) => g.items).map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="flex flex-col gap-[6px]">
        {SKILL_GROUPS.map((g, i) => (
          <div key={g.label} className="flex items-start gap-4 pl-6 md:pl-11">
            <span className="w-[76px] shrink-0 pt-[10px] font-mono text-[12px] font-medium text-accent-on-dark md:w-[92px] md:text-[13px]">
              {g.label}
            </span>
            <div className="min-w-0 flex-1 overflow-hidden" style={{ maskImage: FADE, WebkitMaskImage: FADE }}>
              <div
                className="flex w-max animate-drift font-display text-[clamp(34px,4.6vw,68px)] font-extrabold uppercase leading-[1.08] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
                style={{ animationDuration: g.duration, animationDirection: i % 2 ? 'reverse' : 'normal' }}
              >
                {Array.from({ length: COPIES }, (_, c) =>
                  g.items.map((s) => (
                    <span key={`${c}-${s}`} className={`whitespace-nowrap pr-[18px] ${usedInProject(s) ? '' : 'text-dark-4'}`}>
                      {s}
                      <span className="pl-[18px] text-muted">/</span>
                    </span>
                  )),
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

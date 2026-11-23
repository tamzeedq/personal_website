/* eslint-disable @next/next/no-img-element */

/** Same treatment as inline links in case studies (CaseBody), on the dark card. */
const linkCls =
  'text-dark-1 underline decoration-[0.06em] underline-offset-[0.18em] transition-colors duration-200 hover:text-accent-on-dark'

const FACTS = [
  { k: 'based', v: 'Vancouver, Canada' },
  { k: 'now', v: 'Mastercard · fraud detection' },
  { k: 'studied', v: 'UBC · CS + Statistics' },
  { k: 'elsewhere', v: 'hiking · travel · photos' },
]

/** Dark intro card between the toolkit and the sections. Unnumbered, so the nav's section numbers stay put. */
export default function About() {
  return (
    <section aria-labelledby="about-title" className="mt-10 overflow-hidden rounded-[16px] bg-ink text-dark-1">
      <div className="flex flex-wrap items-end justify-between gap-4 px-6 pt-9 md:px-11">
        <h2
          id="about-title"
          className="m-0 font-display text-[clamp(64px,9vw,140px)] font-black uppercase leading-[.8]"
        >
          <span aria-hidden="true" className="text-accent">
            .
          </span>
          About me
        </h2>
        <span className="pb-2 font-mono text-[12px] text-dark-3">00 / intro</span>
      </div>

      <div className="flex flex-wrap gap-x-11 gap-y-9 px-6 pb-11 pt-9 md:px-11">
        <img
          src="/images/tamzeed/about_hike.jpg"
          alt="Tamzeed taking a photo on a forest hiking trail"
          loading="lazy"
          className="aspect-4/5 min-w-0 max-w-[420px] flex-[1_1_300px] rounded-[8px] bg-photo-bg object-cover object-[55%_40%]"
        />
        <div className="flex min-w-0 flex-[999_1_440px] flex-col justify-between gap-7">
          <div className="flex flex-col gap-5">
            <p className="m-0 font-display text-[clamp(28px,3vw,44px)] font-extrabold uppercase leading-[1.02]">
              Recent UBC grad, now a software engineer at Mastercard working on fraud detection services.
            </p>
            <p className="m-0 max-w-[620px] text-[17px] leading-[1.6] text-dark-2 text-pretty">
              In my free time I keep building things, like the projects below. Away from the screen I love hiking,
              travelling and exploring new places, and I take a lot of pictures along the way. You can see them on my{' '}
              <a href="/photography/" className={linkCls}>
                photography site
              </a>
              .
            </p>
          </div>
          <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-6 gap-y-3 border-t border-ink-2 pt-4 font-mono text-[12px]">
            {FACTS.map((f) => (
              <div key={f.k} className="flex flex-col gap-1">
                <dt className="text-dark-4">{f.k}</dt>
                <dd className="m-0">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

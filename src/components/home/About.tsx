/** Same treatment as inline links in case studies (CaseBody). */
const linkCls =
  'underline decoration-[0.06em] underline-offset-[0.18em] transition-colors duration-200 hover:text-accent'

/** Short intro between the marquee and the projects. Unnumbered, so the nav's section numbers stay put. */
export default function About() {
  return (
    <div className="flex flex-col gap-[14px] px-page-x pt-[clamp(48px,7vw,72px)]">
      <span className="font-mono text-[12px] font-medium text-muted-2">About</span>
      <p className="m-0 text-[clamp(20px,2vw,26px)] leading-[1.4] text-pretty">
        I recently graduated from the University of British Columbia in Computer Science and Statistics, and I&apos;m now a software engineer at
        Mastercard working on fraud detection services. In my free time I keep building things, like the projects below. Away from the
        screen I love hiking, travelling and exploring new places, and I take a lot of pictures along the way. You can
        see them on my{' '}
        <a href="/photography/" className={linkCls}>
          photography site
        </a>
        .
      </p>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-end justify-between gap-5 border-t border-line px-page-x pb-9 pt-10">
      <div className="flex flex-col gap-4">
        <a
          href="mailto:tamzeed.q@gmail.com"
          className="font-display text-[clamp(64px,12vw,150px)] font-black uppercase leading-[.8]"
        >
          Say hi ↗
        </a>
        <p className="m-0 max-w-[46ch] text-[15px] leading-normal text-muted text-pretty">
          Feel free to reach out. I&apos;m always looking forward to new opportunities and to talking about ideas.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-[22px] gap-y-3 font-mono text-[12px] text-muted-2">
        <a href="mailto:tamzeed.q@gmail.com">tamzeed.q@gmail.com</a>
        <a href="https://github.com/tamzeedq" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://www.linkedin.com/in/tamzeedquazi/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </div>
    </footer>
  )
}

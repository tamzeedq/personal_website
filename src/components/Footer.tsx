export default function Footer() {
  return (
    <footer className="flex flex-wrap items-end justify-between gap-5 border-t border-line px-page-x pb-9 pt-10">
      <a
        href="mailto:tamzeed.q@gmail.com"
        className="font-display text-[clamp(64px,12vw,150px)] font-black uppercase leading-[.8]"
      >
        Say hi ↗
      </a>
      <div className="flex flex-wrap gap-x-[22px] gap-y-3 font-mono text-[12px] text-muted-2">
        <a href="mailto:tamzeed.q@gmail.com">tamzeed.q@gmail.com</a>
        <a href="https://github.com/tamzeedq" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://www.linkedin.com/in/tamzeedquazi/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="/photography/">photography</a>
      </div>
    </footer>
  )
}

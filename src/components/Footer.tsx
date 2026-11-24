const pill = 'rounded-full px-[18px] py-3'

export default function Footer() {
  return (
    <footer className="bg-ink text-dark-1">
      <div className="mx-auto flex w-[calc(100%-36px)] flex-col gap-9 pb-8 pt-11 md:w-[85%]">
        <div className="flex justify-between gap-3 border-b border-ink-2 pb-[14px] font-mono text-[12px] font-medium text-dark-4">
          <span>Contact</span>
          {/* Bare "#" scrolls to the top natively, on every page. */}
          <a href="#" className="hover:text-dark-1">
            back to top ↑
          </a>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-7">
          <div className="flex flex-col gap-[18px]">
            <a
              href="mailto:tamzeed.q@gmail.com"
              className="font-display text-[clamp(72px,14vw,200px)] font-black uppercase leading-[.8] hover:text-dark-1"
            >
              Say hi<span className="text-accent"> ↗</span>
            </a>
            <p className="m-0 max-w-[46ch] text-[16px] leading-normal text-dark-3 text-pretty">
              Feel free to reach out. I&apos;m always looking forward to new opportunities and talking about ideas.
            </p>
          </div>
          <div className="flex flex-wrap gap-[10px] font-mono text-[13px] font-medium">
            <a href="mailto:tamzeed.q@gmail.com" className={`${pill} bg-dark-1 text-ink hover:text-ink`}>
              tamzeed.q@gmail.com
            </a>
            <a
              href="https://github.com/tamzeedq"
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} border border-dark-1 hover:text-accent-on-dark`}
            >
              github ↗
            </a>
            <a
              href="https://www.linkedin.com/in/tamzeedquazi/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} border border-dark-1 hover:text-accent-on-dark`}
            >
              linkedin ↗
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-ink-2 pt-4 font-mono text-[12px] text-muted-2">
          <span>© {new Date().getFullYear()} Tamzeed Quazi</span>
          <span>Vancouver, Canada</span>
        </div>
      </div>
    </footer>
  )
}

/** "01/ Work ............ hint" bar used at the top of each home section. */
export default function SectionBar({
  label,
  desktopHint,
  mobileHint,
}: {
  label: string
  desktopHint: string
  mobileHint: string
}) {
  return (
    <div className="flex justify-between gap-3 border-b border-line pb-[14px] font-mono text-[12px] font-medium text-muted-2">
      <span>{label}</span>
      <span className="hidden md:inline">{desktopHint}</span>
      <span className="md:hidden">{mobileHint}</span>
    </div>
  )
}

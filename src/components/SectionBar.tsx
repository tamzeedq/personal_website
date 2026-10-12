/**
 * "01/ Work ............ hint" bar used at the top of each home section.
 * The hint follows hover capability, not width, via a CSS media query
 * (same query as useCanHover), so it is right on first paint with no hydration flash.
 */
export default function SectionBar({
  label,
  hoverHint,
  touchHint,
}: {
  label: string
  /** Shown when the primary pointer can hover (mouse / trackpad). */
  hoverHint: string
  /** Shown on touch-first devices (phones, tablets). */
  touchHint: string
}) {
  return (
    <div className="flex justify-between gap-3 border-b border-line pb-[14px] font-mono text-[12px] font-medium text-muted-2">
      <span>{label}</span>
      <span className="hidden [@media(hover:hover)_and_(pointer:fine)]:inline">{hoverHint}</span>
      <span className="[@media(hover:hover)_and_(pointer:fine)]:hidden">{touchHint}</span>
    </div>
  )
}

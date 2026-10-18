/* eslint-disable @next/next/no-img-element */

type Props = {
  /** Image path. When missing, a labelled placeholder is shown instead. */
  src?: string
  alt?: string
  /** Placeholder label, e.g. "Hero shot". */
  label: string
  /** Corner radius in px. */
  radius: number
  /** CSS object-position for the crop, e.g. "center 80%". Defaults to centred. */
  position?: string
  className?: string
}

/**
 * Fills its parent (give the parent a height or aspect-ratio).
 * Stands in for the prototype's <image-slot> element.
 */
export default function ImageSlot({ src, alt, label, radius, position, className = '' }: Props) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-photo-bg ${className}`}
      style={{ borderRadius: radius }}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          className="block h-full w-full object-cover"
          style={position ? { objectPosition: position } : undefined}
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-3 text-center font-mono text-[12px] text-muted-2">
          {label}
        </div>
      )}
    </div>
  )
}

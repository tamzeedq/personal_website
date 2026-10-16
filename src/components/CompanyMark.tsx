/* eslint-disable @next/next/no-img-element */

type Props = {
  /** Square logo tile under /public. When missing, a typeset monogram is shown instead. */
  src?: string
  /** Company or school name. Only used to build the monogram; the mark itself is decorative. */
  name: string
  /** Edge length in px. */
  size: number
  /**
   * Background the mark sits on. Only affects the monogram: ink tile on the light page,
   * white tile (matching the logo tiles) on the dark detail panel.
   */
  tone?: 'light' | 'dark'
  className?: string
}

/** Corner radius as a fraction of size. Matches the baked-in corners of the *-tile.png files. */
const RADIUS = 0.22

/**
 * Short form for the monogram: a leading acronym ("UBC Civil Eng" -> "UBC"),
 * otherwise up to three initials ("Tetra Tech" -> "TT", "Mastercard" -> "M").
 */
export function monogram(name: string): string {
  const words = name.trim().split(/\s+/)
  if (/^[A-Z0-9&]{2,4}$/.test(words[0])) return words[0]
  return words
    .slice(0, 3)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

/**
 * Small square company / school mark shown beside the name, so it is always decorative (alt="").
 * Tiles are white rounded squares (or a brand's own full-bleed square), which read on both
 * the light page and the dark panel.
 */
export default function CompanyMark({ src, name, size, tone = 'light', className = '' }: Props) {
  const radius = Math.round(size * RADIUS)

  if (src) {
    // Tiles ship as name-tile.png (128px) plus name-tile@2x.png (256px).
    const srcSet = src.endsWith('-tile.png') ? `${src} 128w, ${src.replace(/\.png$/, '@2x.png')} 256w` : undefined
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? `${size}px` : undefined}
        alt=""
        width={size}
        height={size}
        className={`block shrink-0 ${className}`}
        style={{ width: size, height: size, borderRadius: radius }}
        loading="lazy"
      />
    )
  }

  const text = monogram(name)
  // Big Shoulders is condensed, so three letters still fit at ~half the tile. Small marks get
  // relatively larger letters so they stay legible at ~22px.
  const fontSize = size * (text.length >= 3 ? (size < 32 ? 0.5 : 0.44) : 0.52)

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 select-none items-center justify-center font-display font-black uppercase leading-none ${
        tone === 'dark' ? 'bg-card text-ink' : 'bg-ink text-bg'
      } ${className}`}
      style={{ width: size, height: size, borderRadius: radius, fontSize, letterSpacing: '0.01em' }}
    >
      {text}
    </span>
  )
}

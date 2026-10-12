'use client'

import { useEffect, useState } from 'react'

/**
 * Matches devices whose primary input can hover precisely (a mouse or trackpad).
 * Keep in sync with the `[@media(hover:hover)_and_(pointer:fine)]` Tailwind variant
 * used for CSS-only switches such as the SectionBar hints.
 */
export const CAN_HOVER_QUERY = '(hover: hover) and (pointer: fine)'

/**
 * True when the primary pointer can hover. Interaction modes should follow this,
 * not screen width: an iPad is wide but cannot hover.
 * Defaults to true during SSR and the first client render, so hydration matches.
 */
export function useCanHover() {
  const [canHover, setCanHover] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia(CAN_HOVER_QUERY)
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return canHover
}

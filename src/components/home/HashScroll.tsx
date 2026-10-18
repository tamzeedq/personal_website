'use client'

import { useEffect } from 'react'
import { scrollToId } from '../scroll'

/** Old section ids that now live under a new name (the "work" section became "projects"). */
const LEGACY_IDS: Record<string, string> = { work: 'projects' }

/**
 * Arriving at /#projects or /#experience from another page: smooth-scroll to the
 * section (instant under reduced motion). A legacy /#work link is treated as
 * /#projects, and the URL hash is rewritten so the old id doesn't linger.
 */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const id = LEGACY_IDS[hash] ?? hash
    if (id !== hash) {
      history.replaceState(history.state, '', `${window.location.pathname}${window.location.search}#${id}`)
    }
    const t = setTimeout(() => scrollToId(id), 30)
    return () => clearTimeout(t)
  }, [])
  return null
}

'use client'

import { useEffect } from 'react'
import { scrollToId } from '../scroll'

/** Arriving at /#work or /#experience from another page: smooth-scroll to the section (instant under reduced motion). */
export default function HashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const t = setTimeout(() => scrollToId(id), 30)
    return () => clearTimeout(t)
  }, [])
  return null
}

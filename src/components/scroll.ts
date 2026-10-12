/** Offset for the sticky header when jumping to a home-page section. */
export const HEADER_OFFSET = 70

/** 'smooth', or instant ('auto') when the user prefers reduced motion. */
export function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

export function scrollToId(id: string, behavior: ScrollBehavior = scrollBehavior()) {
  const el = document.getElementById(id)
  if (!el) return false
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior })
  return true
}

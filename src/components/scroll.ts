/** Offset for the sticky header when jumping to a home-page section. */
export const HEADER_OFFSET = 70

export function scrollToId(id: string, behavior: ScrollBehavior = 'smooth') {
  const el = document.getElementById(id)
  if (!el) return false
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior })
  return true
}

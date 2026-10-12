'use client'

import { useEffect } from 'react'

/** Sets the tab title on the 404 page. Next 13.4 ignores `metadata` exported from not-found. */
export default function NotFoundTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title
  }, [title])
  return null
}

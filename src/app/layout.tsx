'use client'

import '../styles/globals.css'
import { initSmoothScroll } from '@/utils/lenis'
import { useEffect } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSmoothScroll()
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

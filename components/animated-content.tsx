"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function AnimatedContent({ children }: { children: React.ReactNode }) {
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, { opacity: 0, y: 20, duration: 1 })
      gsap.from('.hero-title', { opacity: 0, y: 20, duration: 1, delay: 0.2 })
      gsap.from('.hero-description', { opacity: 0, y: 20, duration: 1, delay: 0.4 })
      gsap.from('.hero-buttons', { opacity: 0, y: 20, duration: 1, delay: 0.6 })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  return <div ref={contentRef}>{children}</div>
}


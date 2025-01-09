"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AnimatedFeatureContent({ children }: { children: React.ReactNode }) {
  const featureRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(featureRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top bottom-=100",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      })
    }, featureRef)

    return () => ctx.revert()
  }, [])

  return <div ref={featureRef}>{children}</div>
}


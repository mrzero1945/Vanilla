"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button asChild size="lg" className="shadow-lg">
        <Link href="/contact">Request a Quote</Link>
      </Button>
    </div>
  )
}


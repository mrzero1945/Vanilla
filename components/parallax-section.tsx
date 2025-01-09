"use client"
import dynamic from 'next/dynamic'

const ParallaxContent = dynamic(() => import('./parallax-content').then((mod) => mod.ParallaxContent), { ssr: false })

interface ParallaxSectionProps {
  backgroundImage: string
  title: string
  description: string
}

export function ParallaxSection({ backgroundImage, title, description }: ParallaxSectionProps) {
  return (
    <ParallaxContent backgroundImage={backgroundImage}>
      <div className="relative z-20 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </ParallaxContent>
  )
}


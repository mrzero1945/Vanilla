"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'

const AnimatedFeatureContent = dynamic(() => import('./animated-feature-content').then((mod) => mod.AnimatedFeatureContent), { ssr: false })

interface AnimatedFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}

export function AnimatedFeature({ icon, title, description, image }: AnimatedFeatureProps) {
  return (
    <AnimatedFeatureContent>
      <div className="bg-background/60 backdrop-blur p-6 rounded-lg shadow-lg w-full h-full">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className=""
          />
        </div>
      </div>
    </AnimatedFeatureContent>
  )
}


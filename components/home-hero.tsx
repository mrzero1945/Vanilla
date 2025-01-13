"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import Plantation from "@/resources/vanilla-flower.jpg"
const AnimatedContent = dynamic(() => import('./animated-content').then((mod) => mod.AnimatedContent), { ssr: false })

export function HomeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={Plantation.src}
        alt="Vanilla plantation"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <AnimatedContent>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Experience the Finest Indonesian Vanilla
          </h1>
          <p className="hero-description text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Sustainably sourced, expertly crafted, globally delivered
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </AnimatedContent>
    </section>
  )
}


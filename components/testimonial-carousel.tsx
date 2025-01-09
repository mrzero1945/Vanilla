"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

const AnimatedTestimonial = dynamic(() => import('./animated-testimonial').then((mod) => mod.AnimatedTestimonial), { ssr: false })

const testimonials = [
  {
    id: 1,
    text: "Nature Exquisite's vanilla beans have elevated our products to new heights. The quality and flavor are unmatched.",
    author: "Jane Doe",
    company: "Gourmet Delights Co."
  },
  {
    id: 2,
    text: "Working with Nature Exquisite has been a game-changer for our supply chain. Their commitment to sustainability aligns perfectly with our values.",
    author: "John Smith",
    company: "EcoFriendly Foods"
  },
  {
    id: 3,
    text: "The consistency and richness of Nature Exquisite's vanilla extract have made it an essential ingredient in our premium ice cream line.",
    author: "Emily Johnson",
    company: "Creamy Dreams Ice Cream"
  }
]

export function TestimonialCarousel() {
  return (
    <section className="py-16 bg-muted">
      <div className="container relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <AnimatedTestimonial testimonials={testimonials} />
      </div>
    </section>
  )
}


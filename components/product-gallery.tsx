"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import VanillaBeans from "@/resources/vanilla-beans.jpg"
import VanillaExtractImg from "@/resources/vanilla-extract-3.webp"
import VanillaProcessedImg from "@/resources/processed-vanilla.webp"
import VanillaPlantImg from "@/resources/vanila.jpg"

const images = [
  {
    src: VanillaBeans.src,
    alt: "Natural vanilla beans",
    label: "Natural"
  },
  {
    src: VanillaExtractImg.src,
    alt: "Premium vanilla extract",
    label: "Premium"
  },
  {
    src: VanillaProcessedImg.src,
    alt: "Quality processed vanilla",
    label: "Quality"
  },
  {
    src: VanillaPlantImg.src,
    alt: "Vanilla plants",
    label: "Sustainable"
  }
]

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 bg-muted">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Premium Vanilla</h2>
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="w-full"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-primary">
                {images[currentIndex].label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  </section>
  
  )
}


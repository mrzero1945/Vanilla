"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
}

interface AnimatedTestimonialProps {
  testimonials: Testimonial[];
}

export function AnimatedTestimonial({ testimonials }: AnimatedTestimonialProps) {
  const [current, setCurrent] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [current]);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <div className="relative h-64">
        <div
          ref={testimonialRef}
          key={current} // Tambahkan key untuk memastikan pembaruan yang konsisten
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <p className="text-xl mb-4 max-w-2xl">&ldquo;{testimonials[current].text}&rdquo;</p>
          <p className="font-semibold">{testimonials[current].author}</p>
          <p className="text-sm text-muted-foreground">{testimonials[current].company}</p>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <Button variant="outline" size="icon" onClick={prev}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={next}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Globe2, Leaf, ShieldCheck } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ProductGallery } from "@/components/product-gallery"
import { AnimatedFeature } from "@/components/animated-feature"
import { ParallaxSection } from "@/components/parallax-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FeaturedProducts } from "@/components/featured-products"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { HomeHero } from "@/components/home-hero"
import GlobalExportImg from "@/resources/vanilla-3.jpg"
import PremiumImg from "@/resources/vanilla-beans.webp"
import CertImg from "@/resources/certificate-global-export.png"
import SusImg from "@/resources/sus-prac.jpg"
import VanillaBeansImg from "@/resources/vanilla-beans.webp"
import VanillaExtractImg from "@/resources/vanilla-extract.webp"
import VanillaPowderImg from "@/resources/vanilla-powder.jpg"
import VanillaPlant from "@/resources/vanilla-flower.jpg"
import CtaBg from "@/resources/vanila.jpg"
import { metadata } from './page.metadata'

export { metadata }

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            "name": "Nature Exquisite Nusantara",
            "url": "https://www.natureexquisite.com",
            "logo": "https://www.natureexquisite.com/logo.png",
            "description": "Premium Indonesian vanilla products, sourced sustainably and delivered with excellence.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Indonesia"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-811-666-8220",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/NatureExquisiteNusantara",
              "https://www.instagram.com/Exquisitenusantara",
              "https://www.linkedin.com/company/pt-nature-exquiste-nusantara"
            ]
          })
        }}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <HomeHero />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Product Gallery */}
        <ProductGallery />

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Nature Exquisite?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex">
              <AnimatedFeature
                icon={<Globe2 className="h-12 w-12" />}
                title="Global Export"
                description="Serving customers worldwide with reliable shipping solutions and premium products."
                image={GlobalExportImg.src}
              />
              <AnimatedFeature
                icon={<Leaf className="h-12 w-12" />}
                title="Sustainable Sourcing"
                description="Environmentally conscious farming practices ensuring long-term sustainability."
                image={SusImg.src}
              />
              <AnimatedFeature
                icon={<Award className="h-12 w-12" />}
                title="Premium Quality"
                description="Highest grade vanilla beans and extracts meeting international standards."
                image={PremiumImg.src}
              />
              <AnimatedFeature
                icon={<ShieldCheck className="h-12 w-12" />}
                title="Certified Products"
                description="Meeting rigorous international quality and safety standards. Adhering to strict global quality"
                image={CertImg.src}
              />
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <ParallaxSection
          backgroundImage={VanillaPlant.src}
          title="From Farm to Table"
          description="Experience the journey of our premium vanilla, from sustainable farms in Indonesia to your products worldwide."
        />

        {/* Products Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our sustainably sourced Indonesian vanilla and other agricultural products
                tailored for global industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="Vanilla Beans"
                description="Grade A vanilla beans, carefully cured and processed for maximum flavor"
                image={VanillaBeansImg.src}
                href="/products/vanilla-beans"
              />
              <ProductCard
                title="Vanilla Extract"
                description="Pure vanilla extract made from premium Indonesian vanilla beans"
                image={VanillaExtractImg.src}
                href="/products/vanilla-extract"
              />
              <ProductCard
                title="Vanilla Powder"
                description="Fine vanilla powder perfect for baking and food manufacturing"
                image={VanillaPowderImg.src}
                href="/products/vanilla-powder"
              />
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialCarousel />

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <Image
            src={CtaBg.src}
            alt="Vanilla plantation"
            fill
            className="object-cover opacity-20"
          />
          <div className="container text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Premium Indonesian Vanilla?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Connect with us to discuss your requirements and get a customized quote for your business needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}


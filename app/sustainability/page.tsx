import Image from "next/image"
import { Leaf, Recycle, Sun, Droplets } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Plant from "@/resources/plant-2.jpg"
import Plant2 from "@/resources/vanila.jpg"


export default function SustainabilityPage() {
  return (
    <div className="flex flex-col">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <Image
            src={Plant.src}
            alt="Sustainable farming practices"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative container py-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment to Sustainability</h1>
          <p className="text-xl max-w-2xl">
            At Nature Exquisite Nusantara, we believe in nurturing both our products and the environment.
            Discover how we're making a positive impact on our planet and communities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sustainable Practices</h2>
              <p className="mb-4">
                Our commitment to sustainability goes beyond just producing high-quality vanilla. 
                We implement eco-friendly practices throughout our entire supply chain, from farming 
                to packaging and distribution.
              </p>
              <p>
                By working closely with local farmers and implementing innovative techniques, 
                we ensure that our operations have a positive impact on both the environment 
                and the communities we work with.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={Plant2.src}
                alt="Eco-friendly farming practices"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Sustainability Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6">
                <Leaf className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Organic Farming</h3>
                <p className="text-muted-foreground">
                  We promote organic farming methods that avoid harmful pesticides and fertilizers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Recycle className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Waste Reduction</h3>
                <p className="text-muted-foreground">
                  Our packaging is made from recycled materials, and we have a comprehensive recycling program.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Sun className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
                <p className="text-muted-foreground">
                  We're transitioning to solar power in our processing facilities to reduce our carbon footprint.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Droplets className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
                <p className="text-muted-foreground">
                  We implement water-saving techniques in our farming and processing operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


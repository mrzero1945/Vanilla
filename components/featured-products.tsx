import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import VanillaPlanifoliaImg from "@/resources/raw-beans.jpg"
import VanillaTahitensisImg from "@/resources/vanilla-pods.jpg"
import VanillaExtractImg from "@/resources/extract-vanilla.png"


const featuredProducts = [
  {
    id: "vanilla-planifolia",
    name: "Vanilla Planifolia (Grade A)",
    description: "Our finest grade A vanilla beans, carefully cured for maximum flavor.",
    image: VanillaPlanifoliaImg.src,
    badge: "Best Seller",
  },
  {
    id: "vanilla-tahitensis",
    name: "Vanilla Tahitensis (Grade A)",
    description: "Unique flavor profile with floral and fruity notes.",
    image: VanillaTahitensisImg.src,
    badge: "Premium",
  },
  {
    id: "vanilla-extract",
    name: "Pure Vanilla Extract",
    description: "Concentrated vanilla flavor for various culinary applications.",
    image: VanillaExtractImg.src,
    badge: "Popular",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {product.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <Link href={`/products/${product.id}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or API
const products = [
  {
    id: "vanilla-beans",
    name: "Premium Vanilla Beans",
    description: "Our finest grade A vanilla beans",
    image: "/images/vanilla-beans.jpg",
  },
  {
    id: "vanilla-extract",
    name: "Pure Vanilla Extract",
    description: "Made from premium Indonesian vanilla beans",
    image: "/images/vanilla-extract.jpg",
  },
  {
    id: "vanilla-powder",
    name: "Vanilla Powder",
    description: "Fine vanilla powder for baking",
    image: "/images/vanilla-powder.jpg",
  },
]

interface RelatedProductsProps {
  currentProductId: string
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const relatedProducts = products.filter(product => product.id !== currentProductId).slice(0, 3)

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
              </Link>
              <Button className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


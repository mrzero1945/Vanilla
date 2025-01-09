"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProductViewProps {
  product: {
    name: string
    description: string
    longDescription: string
    image: string
    gallery: string[]
    variants: { name: string }[]
    specifications: { name: string; value: string }[]
  }
}

export function ProductView({ product }: ProductViewProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [selectedImage, setSelectedImage] = useState(product.image)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="relative aspect-square mb-4">
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.gallery.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square"
            >
              <Image
                src={img}
                alt={`${product.name} ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-muted-foreground mb-6">{product.description}</p>
        <div className="mb-6">
          <label htmlFor="variant" className="block text-sm font-medium mb-2">
            Variant
          </label>
          <Select
            onValueChange={(value) =>
              setSelectedVariant(product.variants.find((v) => v.name === value)!)
            }
          >
            <SelectTrigger id="variant">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {product.variants.map((variant) => (
                <SelectItem key={variant.name} value={variant.name}>
                  {variant.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button size="lg" className="w-full mb-6">Contact for Pricing</Button>
        <Tabs defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <p>{product.longDescription}</p>
          </TabsContent>
          <TabsContent value="specifications">
            <ul>
              {product.specifications.map((spec) => (
                <li key={spec.name} className="flex justify-between py-2 border-b">
                  <span className="font-medium">{spec.name}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


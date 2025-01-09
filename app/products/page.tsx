"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Ship, Tag, ShoppingCart, Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import VanillaPlanifolia from "@/resources/raw-beans.jpg"
import VanillaTahitensis from "@/resources/vanilla-pods.jpg"
import VanillaPaste from "@/resources/vanilla-paste.webp"
import VanillaExtract from "@/resources/vanilla-extract.webp"
import CoffeeBeans from "@/resources/Coffee_Beans.webp"
import CocoaBeans from "@/resources/cocoa_beans.webp"

const products = [
  {
    id: "vanilla-planifolia",
    name: "Vanilla Planifolia (Grade A)",
    hsCode: "09051000",
    description: "Renowned for the most well-known variety of vanilla, prized for its rich, creamy flavor and high vanillin content. Our Grade A vanilla beans are harvested at peak ripeness and undergo a careful curing process to enhance their aromatic qualities.",
    image: VanillaPlanifolia.src,
    category: "Vanilla Beans",
    variants: [
      { code: "VPL-20+", length: "20cm+", moisture: "25-30%" },
      { code: "VPL-19", length: "19cm", moisture: "25-30%" },
      { code: "VPL-18", length: "18cm", moisture: "25-30%" },
      { code: "VPL-17", length: "17cm", moisture: "25-30%" },
      { code: "VPL-16", length: "16cm", moisture: "25-30%" },
    ],
    specifications: [
      { name: "Origin", value: "Indonesia (Bali, Java, Papua)" },
      { name: "Color", value: "Dark brown, with visible oil droplets" },
      { name: "Weight/pod", value: "3-5 grams" },
      { name: "Packaging", value: "Vacuum-sealed packs" },
    ],
    uses: [
      "Perfect for use in gourmet culinary applications",
      "Baking and ice cream making",
      "Flavoring beverages",
      "Fragrance and cosmetic industries",
    ],
  },
  {
    id: "vanilla-tahitensis",
    name: "Vanilla Tahitensis (Grade A)",
    hsCode: "09051000",
    description: "Renowned for most unique flavor profile, known for its floral, fruity notes and lighter, more aromatic essence. This variety is considered one of the most fragrant types of vanilla, making it ideal for fine culinary and perfumery uses.",
    image: VanillaTahitensis.src,
    category: "Vanilla Beans",
    variants: [
      { code: "VTH-17", length: "17cm", moisture: "25-35%" },
      { code: "VTH-16", length: "16cm", moisture: "25-30%" },
      { code: "VTH-15", length: "15cm", moisture: "25-30%" },
      { code: "VTH-14", length: "14cm", moisture: "25-30%" },
    ],
    specifications: [
      { name: "Origin", value: "Indonesia (Bali, Java, Papua)" },
      { name: "Color", value: "Dark brown, with visible oil droplets" },
      { name: "Weight/pod", value: "3-5 grams" },
      { name: "Packaging", value: "Vacuum-sealed packs" },
    ],
    uses: [
      "High-end desserts",
      "Perfumes and personal care products",
      "Premium vanilla extracts and pastes",
      "Artisanal confectionery",
    ],
  },
  {
    id: "vanilla-paste",
    name: "Vanilla Paste",
    description: "Our Vanilla Paste is a concentrated form of vanilla extract mixed with real vanilla seeds. The paste is available in varying strengths to suit different culinary needs, offering both intense flavor and a visually appealing presence with its natural specks of vanilla.",
    image: VanillaPaste.src,
    category: "Vanilla Derivatives",
    variants: [
      { name: "Single Pod Intensity", description: "A mild, yet aromatic flavor, perfect for applications where a subtle vanilla presence is desired." },
      { name: "Double Pod Intensity", description: "A richer flavor, ideal for applications requiring a more pronounced vanilla taste without overpowering other ingredients." },
      { name: "Triple Pod Intensity", description: "The most robust and concentrated vanilla paste, offering an intense and deep vanilla flavor for high-end gourmet creations." },
    ],
    specifications: [
      { name: "Product Type", value: "Vanilla Paste" },
      { name: "Concentration", value: "High-concentrated vanilla extract mixed with vanilla seeds" },
      { name: "Color", value: "Dark brown with visible vanilla seeds" },
      { name: "Consistency", value: "Thick, gel-like" },
      { name: "Volume", value: "50 ml, 100 ml" },
      { name: "Origin", value: "Indonesia (Bali, Java, Papua)" },
      { name: "Packaging", value: "Glass jars or tubes with sealed caps" },
    ],
    uses: [
      "Premium desserts and pastries",
      "Ice creams and frozen desserts",
      "Gourmet sauces",
      "Luxury beverages",
    ],
  },
  {
    id: "vanilla-extract",
    name: "Vanilla Extract",
    description: "Our pure Vanilla Extract is made from premium-grade vanilla beans, providing a concentrated form of vanilla flavor that is ideal for culinary applications. Perfect for creating rich, aromatic flavor profiles in various products.",
    image: VanillaExtract.src,
    category: "Vanilla Derivatives",
    variants: [
      { name: "Classic (1 Pod)", description: "A standard vanilla extract with a balanced flavor, perfect for everyday use in baking, cooking, and flavoring beverages." },
      { name: "Premium (2 Pods)", description: "A richer extract with a more intense vanilla profile, ideal for gourmet chefs and artisanal producers." },
      { name: "Ultra-Premium (3 Pods)", description: "The highest quality, most concentrated extract, delivering a robust and luxurious vanilla flavor for top-tier culinary creations." },
    ],
    specifications: [
      { name: "Product Type", value: "Vanilla Extract" },
      { name: "Concentration", value: "35-40% Alcohol (USP Grade)" },
      { name: "Flavor Profile", value: "Rich, smooth, with a deep vanilla flavor" },
      { name: "Color", value: "Dark amber" },
      { name: "Volume", value: "50 ml, 100 ml, 500 ml, 1 liter" },
      { name: "Origin", value: "Indonesia (Bali, Java, Papua)" },
      { name: "Packaging", value: "Glass bottles, plastic containers (food-grade safe)" },
    ],
    uses: [
      "Baking and pastry",
      "Beverages and cocktails",
      "Confectionery",
      "Personal care products",
    ],
  },
  {
    id: "cocoa-beans",
    name: "Premium Cocoa Beans",
    hsCode: "18010000",
    description: "High-quality cocoa beans sourced from sustainable farms in Indonesia, perfect for premium chocolate production and confectionery applications.",
    image: CocoaBeans.src,
    category: "Cocoa",
    variants: [
      { name: "Criollo", description: "Rare and prized for its fine, complex flavor" },
      { name: "Forastero", description: "Robust and full-bodied, ideal for most chocolate products" },
      { name: "Trinitario", description: "A hybrid variety offering a balance of flavor and productivity" },
    ],
    specifications: [
      { name: "Origin", value: "Indonesia (Sulawesi, Papua, Bali)" },
      { name: "Fermentation", value: "5-7 days" },
      { name: "Moisture Content", value: "6.5-7.5%" },
      { name: "Bean Count", value: "85-100 beans/100g" },
      { name: "Packaging", value: "60kg jute bags or custom packaging" },
    ],
    uses: [
      "Premium chocolate production",
      "Confectionery and baking",
      "Cocoa powder production",
      "Cosmetics and personal care products",
    ],
  },
  {
    id: "coffee-beans",
    name: "Specialty Coffee Beans",
    hsCode: "09011100",
    description: "Expertly cultivated and processed coffee beans from Indonesia's finest growing regions, offering unique flavor profiles and exceptional quality.",
    image: CoffeeBeans.src,
    category: "Coffee",
    variants: [
      { name: "Sumatra Mandheling", description: "Full-bodied with earthy, herbal notes" },
      { name: "Java Arabica", description: "Smooth with a sweet overall impression" },
      { name: "Sulawesi Toraja", description: "Well-balanced with notes of dark chocolate and spice" },
      { name: "Bali Kintamani", description: "Bright acidity with citrus and floral notes" },
    ],
    specifications: [
      { name: "Origin", value: "Indonesia (Sumatra, Java, Sulawesi, Bali)" },
      { name: "Process", value: "Washed, Natural, or Honey (varies by origin)" },
      { name: "Altitude", value: "1,200-2,000 meters above sea level" },
      { name: "Grading", value: "Specialty Grade (80+ points)" },
      { name: "Packaging", value: "60kg GrainPro bags or custom packaging" },
    ],
    uses: [
      "Specialty coffee roasting",
      "Espresso blends",
      "Single-origin offerings",
      "Cold brew and iced coffee applications",
    ],
  },
]

const services = [
  {
    title: "Bulk Order",
    icon: <Ship className="h-8 w-8" />,
    description: "Available for large quantity orders",
  },
  {
    title: "White Label",
    icon: <Tag className="h-8 w-8" />,
    description: "Custom packaging solutions",
  },
  {
    title: "Retail",
    icon: <ShoppingCart className="h-8 w-8" />,
    description: "Standard retail packaging",
  },
  {
    title: "Free Sample",
    icon: <Gift className="h-8 w-8" />,
    description: "Request product samples",
  },
]

export default function ProductsPage() {
  const [category, setCategory] = useState("all")

  const filteredProducts = products.filter(
    product => category === "all" || product.category.toLowerCase() === category.toLowerCase()
  )

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Discover our premium Indonesian vanilla products, crafted with excellence
              and sourced sustainably from local farmers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="vanilla beans">Vanilla Beans</SelectItem>
                <SelectItem value="vanilla derivatives">Vanilla Derivatives</SelectItem>
                <SelectItem value="cocoa">Cocoa</SelectItem>
                <SelectItem value="coffee">Coffee</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-[400px] md:h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                        {product.hsCode && (
                          <p className="text-sm text-muted-foreground mb-2">
                            HS Code: {product.hsCode}
                          </p>
                        )}
                        <p className="text-muted-foreground">
                          {product.description}
                        </p>
                      </div>

                      <Tabs defaultValue="variants" className="mb-6">
                        <TabsList>
                          <TabsTrigger value="variants">Variants</TabsTrigger>
                          <TabsTrigger value="specifications">Specifications</TabsTrigger>
                          <TabsTrigger value="uses">Uses</TabsTrigger>
                        </TabsList>
                        <TabsContent value="variants">
                          <ul className="space-y-2">
                            {product.variants.map((variant, index) => (
                              <li key={index} className="border-b pb-2">
                                {'code' in variant ? (
                                  <div>
                                    <span className="font-semibold">{variant.code}</span>
                                    <span className="text-muted-foreground"> - {variant.length}, {variant.moisture} moisture</span>
                                  </div>
                                ) : (
                                  <div>
                                    <span className="font-semibold">{variant.name}</span>
                                    <p className="text-sm text-muted-foreground">{variant.description}</p>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="specifications">
                          <ul className="space-y-2">
                            {product.specifications.map((spec, index) => (
                              <li key={index} className="flex justify-between border-b pb-2">
                                <span className="font-semibold">{spec.name}</span>
                                <span className="text-muted-foreground">{spec.value}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="uses">
                          <ul className="list-disc list-inside space-y-2">
                            {product.uses.map((use, index) => (
                              <li key={index} className="text-muted-foreground">
                                {use}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>

                      <div className="flex gap-4">
                        <Button asChild>
                          <Link href={`/products/${product.id}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/contact">Request Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Custom Requirements?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer flexible solutions for your business needs, including bulk orders,
            custom packaging, and specific product specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Sales Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact?type=sample">Request Sample</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


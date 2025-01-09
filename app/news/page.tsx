import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Metadata } from 'next'
import Vanilla from "@/resources/vanilla-1.jpg"
import Vanilla2 from "@/resources/vanilla-2.jpg"
import Vanilla3 from "@/resources/vanilla-3.jpg"
import Vanilla4 from "@/resources/vanila.jpg"
import Vanilla5 from "@/resources/vanilla-seeds.webp"

export const metadata: Metadata = {
  title: 'Nature Exquisite News - Latest Updates on Vanilla Industry and Sustainability',
  description: 'Stay informed with the latest news and updates from Nature Exquisite on vanilla production, sustainable farming, and industry trends.',
  openGraph: {
    title: 'Nature Exquisite News',
    description: 'Latest updates on vanilla industry and sustainability',
    images: [{ url: '/images/news-og-image.jpg' }],
  },
}

// This would typically come from a CMS or API
const newsItems = [
  {
    id: 1,
    title: "Nature Exquisite Expands Sustainable Farming Program",
    excerpt: "Our company has partnered with 500 new farmers to expand our sustainable vanilla cultivation practices.",
    date: "2023-09-25",
    image: Vanilla.src,
    slug: "nature-exquisite-expands-sustainable-farming"
  },
  {
    id: 2,
    title: "New Vanilla Processing Facility Opens in Indonesia",
    excerpt: "We've opened a state-of-the-art processing facility to enhance our production capabilities and maintain the highest quality standards.",
    date: "2023-08-12",
    image: Vanilla2.src,
    slug: "new-vanilla-processing-facility-indonesia"
  },
  {
    id: 3,
    title: "Nature Exquisite Achieves Carbon Neutral Certification",
    excerpt: "We're proud to announce that our operations have been certified as carbon neutral, marking a significant milestone in our sustainability journey.",
    date: "2023-07-03",
    image: Vanilla3.src,
    slug: "nature-exquisite-achieves-carbon-neutral-certification"
  },
  {
    id: 4,
    title: "Introducing Our New Organic Vanilla Product Line",
    excerpt: "Nature Exquisite launches a new range of certified organic vanilla products to meet growing consumer demand for organic options.",
    date: "2023-06-18",
    image: Vanilla4.src,
    slug: "introducing-new-organic-vanilla-product-line"
  },
  {
    id: 5,
    title: "Nature Exquisite Wins Sustainability Award",
    excerpt: "Our commitment to sustainable practices has been recognized with a prestigious industry award for environmental stewardship.",
    date: "2023-05-30",
    image: Vanilla5.src,
    slug: "nature-exquisite-wins-sustainability-award"
  }
]

export default function NewsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col">
            <Link href={`/news/${item.slug}`}>
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-muted-foreground">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4">
                <time dateTime={item.date} className="text-sm text-muted-foreground">
                  {formatDate(item.date)}
                </time>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}


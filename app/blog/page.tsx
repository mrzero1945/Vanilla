import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nature Exquisite Blog - Latest Insights on Vanilla and Sustainable Farming',
  description: 'Explore our blog for the latest news, insights, and trends in vanilla cultivation, sustainable farming, and the spice industry.',
  openGraph: {
    title: 'Nature Exquisite Blog',
    description: 'Latest insights on vanilla cultivation and sustainable farming',
    images: [{ url: '/images/blog-og-image.jpg' }],
  },
}

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Art of Vanilla Cultivation",
    excerpt: "Discover the intricate process of growing and harvesting the world's favorite flavor.",
    date: "2023-05-15",
    author: "John Doe",
    image: "/images/vanilla-cultivation.jpg",
    slug: "art-of-vanilla-cultivation",
    category: "Farming"
  },
  {
    id: 2,
    title: "Sustainability in Spice Farming",
    excerpt: "How we're working to make spice production more environmentally friendly.",
    date: "2023-06-22",
    author: "Jane Smith",
    image: "/images/sustainable-farming.jpg",
    slug: "sustainability-in-spice-farming",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "From Bean to Extract: The Vanilla Journey",
    excerpt: "Follow the fascinating journey of vanilla from plant to final product.",
    date: "2023-07-10",
    author: "Mark Johnson",
    image: "/images/vanilla-journey.jpg",
    slug: "vanilla-bean-to-extract",
    category: "Production"
  },
  {
    id: 4,
    title: "Global Vanilla Market Trends 2023",
    excerpt: "An in-depth look at the current state and future projections of the global vanilla market.",
    date: "2023-08-05",
    author: "Emily Chen",
    image: "/images/vanilla-market-trends.jpg",
    slug: "global-vanilla-market-trends-2023",
    category: "Market Analysis"
  },
  {
    id: 5,
    title: "Innovative Uses of Vanilla in Modern Cuisine",
    excerpt: "Explore how chefs around the world are pushing the boundaries with vanilla.",
    date: "2023-09-18",
    author: "Chef Alex Rodriguez",
    image: "/images/vanilla-cuisine-innovation.jpg",
    slug: "innovative-uses-vanilla-modern-cuisine",
    category: "Culinary"
  }
]

export default function BlogPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 flex-grow">
                <div className="text-sm text-muted-foreground mb-2">{post.category}</div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.author}</span>
                <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/news">View Latest News</Link>
        </Button>
      </div>
    </div>
  )
}


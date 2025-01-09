import Image from "next/image"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { Metadata } from 'next'

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Art of Vanilla Cultivation",
    content: "Vanilla cultivation is a meticulous and time-consuming process that requires patience, skill, and dedication. The vanilla orchid, native to Mexico, is now grown in various tropical regions around the world, with Madagascar, Indonesia, and Tahiti being major producers. The process begins with the planting of vanilla vines, which can take up to three years to mature and produce flowers. Once the plants flower, they must be hand-pollinated within 12 hours of blooming, a delicate task traditionally done by skilled workers. After pollination, it takes about nine months for the vanilla pods to develop and ripen. The harvesting process is equally crucial, with farmers carefully picking each pod at the perfect stage of ripeness. But the journey doesn't end there. The freshly harvested green vanilla pods undergo an extensive curing process that can last several months. This involves sweating, drying, and conditioning the pods to develop their characteristic flavor and aroma. The result of this labor-intensive process is the familiar dark brown, aromatic vanilla pods we know and love. At Nature Exquisite, we work closely with our farming partners to ensure that each step of this intricate process is carried out with the utmost care and attention to detail, resulting in the highest quality vanilla products for our customers.",
    date: "2023-05-15",
    author: "John Doe",
    image: "/images/vanilla-cultivation.jpg",
    slug: "art-of-vanilla-cultivation",
    category: "Farming"
  },
  // ... other blog posts
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Nature Exquisite Blog`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      images: [{ url: post.image }],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-muted-foreground mb-8">
        <span>{post.author}</span>
        <span className="mx-2">•</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="mx-2">•</span>
        <span>{post.category}</span>
      </div>
      <div className="relative h-[400px] mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}


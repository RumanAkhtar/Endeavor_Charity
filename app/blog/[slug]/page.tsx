import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Mock data for a single blog post
const blogPost = {
  title: "The Universe is all of time and space and its contents",
  date: "April 28, 2022",
  author: "John Doe",
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h2>The Vastness of Space</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
  `,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScKDVQF0vyvRNYu12isGXS2K6EIGE0v89sg&s",
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-8 md:py-16">
      <Link href="/blog" className="inline-flex items-center mb-8 text-[#26d6a5] hover:underline">
        <ArrowLeft size={20} className="mr-2" />
        Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{blogPost.title}</h1>
        <div className="flex items-center mb-6 text-gray-600">
          <span>{blogPost.date}</span>
          <span className="mx-2">•</span>
          <span>By {blogPost.author}</span>
        </div>

        <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg md:h-96">
          <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
        </div>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
      </article>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import Pagination from "@/components/ui/pagination"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Universe is all of time and space and its contents.",
    date: "April 28, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScKDVQF0vyvRNYu12isGXS2K6EIGE0v89sg&s",
    slug: "universe-time-space",
  },
  {
    id: 2,
    title: "Pellentesque mollis eros quis massa interdum porta",
    date: "April 28, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHOPisBcThea4JtxCxb0q6GpaD4KHiieO_g&s",
    slug: "pellentesque-mollis",
  },
  {
    id: 3,
    title: "The Universe is all of time and space and its contents.",
    date: "April 26, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://www.shutterstock.com/image-photo/high-five-team-food-charity-600nw-2469643817.jpg",
    slug: "universe-time-space-2",
  },
  {
    id: 4,
    title: "Voices of Generosity: Interviews with Charity",
    date: "April 26, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Ronsvaq96jdlcZ3O2gTlhx9cVMmQuju-nA&s",
    slug: "voices-of-generosity",
  },
  {
    id: 5,
    title: "Building a Better World: Charity Projects",
    date: "April 24, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://www.bonterratech.com/wp-content/uploads/2024/10/bonterra_6-steps-to-successful-fundraising-event-management_feature_0.jpg-1.webp",
    slug: "building-better-world",
  },
  {
    id: 6,
    title: "Navigating the Charity Landscape Tips",
    date: "April 24, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUajYCCSsaww0C6Qv1-8NBYPqKzr2VSDySQIJV2tkTBM4QyUpjkSQh0h7TlcB7ERxpU9c&usqp=CAU",
    slug: "navigating-charity-landscape",
  },
  {
    id: 7,
    title: "The Ripple Effect How Small Acts of Charity",
    date: "April 20, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0neWi0Xr75mSwGTM5rzJ-Ij_EeKlkrSZbQA&s",
    slug: "ripple-effect",
  },
  {
    id: 8,
    title: "Compassion in Action Everyday Heroes",
    date: "April 20, 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing, consectetur adipiscing.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog%20%282%29-3U2MYG0PNj9VUeadMgtn0DXLjss1UK.png",
    slug: "compassion-in-action",
  },
]

const POSTS_PER_PAGE = 6

export default function BlogPage({ params }: { params: { page?: string } }) {
  const currentPage = params.page ? Number.parseInt(params.page) : 1
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  return (
    <>
      {/* Banner */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://blog.miappi.com/hubfs/Imported_Blog_Media/End_Polio.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Blog & News</h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {currentPosts.map((post, index) => (
              <div
                key={post.id}
                className="flex flex-col md:flex-row gap-6 animate-slide-up opacity-0"
                style={{ animationFillMode: "forwards", animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-2 text-sm text-gray-500">{post.date}</div>
                  <h2 className="mb-3 text-xl font-bold">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#26d6a5]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-[#26d6a5] hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
        </div>
      </section>
    </>
  )
}


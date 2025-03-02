import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  image: string
  featured?: boolean
}

const TestimonialCard = ({ quote, name, role, image, featured = false }: TestimonialCardProps) => {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-md card-hover ${featured ? "border-l-4 border-[#26d6a5]" : ""}`}>
      <div className="mb-4 text-[#26d6a5]">
        <Quote size={24} />
      </div>
      <p className="mb-6 italic text-gray-700">{quote}</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard


import Image from "next/image"
import { Heart } from "lucide-react"

interface DonorSpotlightProps {
  name: string
  image: string
  amount: string
  cause: string
  message: string
}

const DonorSpotlight = ({ name, image, amount, cause, message }: DonorSpotlightProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md card-hover">
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <Heart size={14} className="mr-1 text-[#ff5a75]" />
            <span>
              Donated {amount} to {cause}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-700">{message}</p>
    </div>
  )
}

export default DonorSpotlight


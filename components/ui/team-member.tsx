import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}

const TeamMember = ({ name, role, image, bio, socialLinks }: TeamMemberProps) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md card-hover">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-3 text-sm font-medium text-[#26d6a5]">{role}</p>
        <p className="mb-4 text-sm text-gray-600">{bio}</p>

        {socialLinks && (
          <div className="flex space-x-3">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-[#26d6a5] hover:text-white"
                aria-label={`${name}'s Facebook`}
              >
                <Facebook size={16} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-[#26d6a5] hover:text-white"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter size={16} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-[#26d6a5] hover:text-white"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={16} />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-[#26d6a5] hover:text-white"
                aria-label={`${name}'s Instagram`}
              >
                <Instagram size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamMember


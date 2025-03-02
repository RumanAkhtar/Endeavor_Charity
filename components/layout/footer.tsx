import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer>
      {/* Volunteer CTA */}
      <div
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/group-volunteers-gathered-park-helping-environment_53876-139005.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Join Us in Making a Difference</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Your support helps us provide food, shelter, and education to those in need. Become a volunteer or donate today to change lives.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="px-6 py-3 font-medium text-white bg-[#ff5a75] rounded-lg hover:bg-opacity-90 transition-all"
            >
              DONATE NOW
            </Link>
            <Link
              href="/"
              className="px-6 py-3 font-medium text-white bg-[#26d6a5] rounded-lg hover:bg-opacity-90 transition-all"
            >
              BECOME A VOLUNTEER
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 bg-white">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - About Us */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div>
                <div className="text-xl font-bold text-[#26d6a5]">ENDEAVOR</div>
                <div className="text-xs text-gray-500">CHARITY FOUNDATION</div>
              </div>
            </Link>
            <p className="mb-4 text-sm text-gray-600">
              We are committed to providing essential resources, education, and opportunities to underserved communities worldwide.
            </p>
            <p className="text-sm text-gray-600">
              Join us in our mission to create a world where every person has access to basic needs and a brighter future.
            </p>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p className="mb-2 text-sm text-gray-600">Endeavor Charity Foundation</p>
            <p className="mb-2 text-sm text-gray-600">142 Cornell Building, New York, NY - 34567</p>
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2 text-[#26d6a5]" />
              <span className="text-sm text-gray-600">+1 (888) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-[#26d6a5]" />
              <span className="text-sm text-gray-600">support@endeavor.org</span>
            </div>
          </div>

          {/* Column 3 - Our Initiatives */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Initiatives</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Food & Nutrition Programs</li>
              <li>• Education & Scholarships</li>
              <li>• Disaster Relief Efforts</li>
              <li>• Homeless Shelter Support</li>
              <li>• Environmental Sustainability</li>
            </ul>
          </div>

          {/* Column 4 - Get Involved */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Get Involved</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Volunteer Opportunities</li>
              <li>• Sponsor a Child</li>
              <li>• Corporate Partnerships</li>
              <li>• Monthly Giving Program</li>
              <li>• Fundraising & Events</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="py-6 bg-gray-50">
        <div className="container flex flex-col items-center justify-between space-y-4 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Endeavor Charity Foundation. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-[#26d6a5]" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#26d6a5]" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#26d6a5]" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#26d6a5]" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#26d6a5]" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

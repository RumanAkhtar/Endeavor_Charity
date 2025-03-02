"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X, Mail, Phone } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}
    >
      {/* Main Navigation */}
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div>
             <div className="text-xl font-bold text-[#26d6a5]">ENDEAVOR</div>
              <div className="text-xs text-gray-500">CHARITY FOUNDATION</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "HOME" },
              { href: "/causes", label: "CAUSES" },
              { href: "/events", label: "EVENTS" },
              { href: "/blog", label: "BLOG" },
              { href: "/about", label: "ABOUT" },
              { href: "/contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 transition-colors relative group ${
                  isActive(href) ? "text-[#26d6a5]" : "hover:text-[#26d6a5]"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#26d6a5] transition-all duration-300 ${
                    isActive(href) ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center">
              <div className="p-2 mr-2 bg-gray-100 rounded-full">
                <Mail size={20} className="text-[#26d6a5]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">EMAIL US AT</div>
                <div className="text-sm font-medium">INFO@ENDEAVOR.COM</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 mr-2 bg-gray-100 rounded-full">
                <Phone size={20} className="text-[#26d6a5]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">CALL US NOW</div>
                <div className="text-sm font-medium">703 (123) 4567</div>
              </div>
            </div>
            <Link
              href="/"
              className="px-4 py-2 text-[#ff5a75] border border-[#ff5a75] rounded hover:bg-[#ff5a75] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
            >
              DONATE NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="p-2 md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="flex flex-col mt-4 md:hidden animate-slide-up">
            {[
              { href: "/", label: "HOME" },
              { href: "/causes", label: "CAUSES" },
              { href: "/events", label: "EVENTS" },
              { href: "/blog", label: "BLOG" },
              { href: "/about", label: "ABOUT" },
              { href: "/contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 transition-colors ${
                  isActive(href) ? "bg-gray-100 text-[#26d6a5]" : "hover:bg-gray-100"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/"
              className="px-4 py-2 mt-2 text-center text-white bg-[#ff5a75] rounded transition-all duration-300 hover:bg-opacity-90 hover:shadow-md"
            >
              DONATE NOW
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

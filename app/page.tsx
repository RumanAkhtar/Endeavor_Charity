"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Package } from "lucide-react"
import TestimonialCard from "@/components/ui/testimonial-card"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="relative w-20 h-20 animate-pulse-slow">
          <Image src="/placeholder.svg?height=80&width=80" alt="Loading" fill className="object-contain" />
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/11/57/63/86/240_F_1157638630_oyRofmikIvuFxKRbXDfEoqfYScgcflFJ.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container relative z-10 flex flex-col items-start justify-center h-full text-white">
          <h1
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl max-w-2xl animate-slide-up opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            Help us to educate needy children
          </h1>
          <p
            className="mb-6 max-w-xl animate-slide-up [animation-delay:0.2s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
            consectetur adipiscing.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-slide-up [animation-delay:0.4s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            <div className="flex items-center">
              <span className="mr-2 font-bold text-[#26d6a5]">$65,360</span>
              <span className="text-sm">Raised</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 font-bold">$124,500</span>
              <span className="text-sm">Goal</span>
            </div>
          </div>
          <div
            className="w-full max-w-md h-2 mt-2 mb-6 bg-white bg-opacity-30 rounded-full animate-slide-up [animation-delay:0.5s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          >
            <div className="h-full bg-[#26d6a5] rounded-full" style={{ width: "52%" }}></div>
          </div>
          <Link
            href="/"
            className="px-6 py-3 font-medium text-white bg-[#ff5a75] rounded hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md animate-slide-up [animation-delay:0.6s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
          >
            DONATE NOW
          </Link>
        </div>
      </section>

      {/* How Can You Help Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-2 text-center animate-slide-up opacity-0" style={{ animationFillMode: "forwards" }}>
            How can you help us?
          </h2>
          <p
            className="max-w-2xl mx-auto mb-12 text-center text-gray-600 animate-slide-up [animation-delay:0.2s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
            consectetur adipiscing. Nam malesu dolor.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div
              className="p-6 text-center bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.3s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-[#26d6a5] rounded-full animate-pulse-slow">
                <Heart size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Give Donation</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
                consectetur adipiscing.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 text-center bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.5s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-[#26d6a5] rounded-full animate-pulse-slow">
                <Users size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Become Volunteer</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
                consectetur adipiscing.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-6 text-center bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.7s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-[#26d6a5] rounded-full animate-pulse-slow">
                <Package size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Provide Food Supply</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
                consectetur adipiscing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-2 text-center animate-slide-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Causes where need your help
          </h2>
          <p
            className="max-w-2xl mx-auto mb-12 text-center text-gray-600 animate-slide-up [animation-delay:0.2s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
            consectetur adipiscing.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Cause Card 1 */}
            <div
              className="overflow-hidden bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.3s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg"
                  alt="Medical Relief"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Give medical relief help to African children</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur
                  adipiscing.
                </p>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">$65,360</span>
                  <span className="text-sm text-gray-600">$124,500</span>
                </div>
                <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
                  <div className="h-full bg-[#26d6a5] rounded-full" style={{ width: "52%" }}></div>
                </div>
                <Link href="/causes/medical-relief" className="text-[#26d6a5] hover:underline transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Cause Card 2 */}
            <div
              className="overflow-hidden bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.5s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://shop.unicef.org.au/cdn/shop/products/In-Memory-Clean-Water-Pack-UN0389282_1200x.jpg?v=1662354240"
                  alt="Clean Water"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Give small bunch of coins to help buy of clean water</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur
                  adipiscing.
                </p>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">$65,360</span>
                  <span className="text-sm text-gray-600">$124,500</span>
                </div>
                <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
                  <div className="h-full bg-[#26d6a5] rounded-full" style={{ width: "52%" }}></div>
                </div>
                <Link href="/causes/clean-water" className="text-[#26d6a5] hover:underline transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Cause Card 3 */}
            <div
              className="overflow-hidden bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.7s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://media.istockphoto.com/id/648418766/photo/school-children-writing-on-slate.jpg?s=612x612&w=0&k=20&c=nInoLR8mWZ3XjhiOKijJvN5CrC9-nzhQDw3P4Ivp5bM="
                  alt="Education"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Send your children to school to become creative</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur
                  adipiscing.
                </p>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">$65,360</span>
                  <span className="text-sm text-gray-600">$124,500</span>
                </div>
                <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
                  <div className="h-full bg-[#26d6a5] rounded-full" style={{ width: "52%" }}></div>
                </div>
                <Link href="/causes/education" className="text-[#26d6a5] hover:underline transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div
              className="flex space-x-2 animate-fade-in [animation-delay:0.8s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
            >
              <span className="flex items-center justify-center w-8 h-8 text-white bg-[#26d6a5] rounded-full">1</span>
              <span className="flex items-center justify-center w-8 h-8 text-gray-600 bg-white rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors cursor-pointer">
                2
              </span>
              <span className="flex items-center justify-center w-8 h-8 text-gray-600 bg-white rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors cursor-pointer">
                3
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-2 text-center animate-slide-up opacity-0" style={{ animationFillMode: "forwards" }}>
            What Our Supporters Say
          </h2>
          <p
            className="max-w-2xl mx-auto mb-12 text-center text-gray-600 animate-slide-up [animation-delay:0.2s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            Hear from the people who have supported our causes and witnessed the impact firsthand.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="animate-slide-up [animation-delay:0.3s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              <TestimonialCard
                quote="I've been supporting Endeavor for over 5 years now, and I'm continually impressed by their transparency and the tangible impact they make in communities."
                name="Emily Parker"
                role="Regular Donor"
                image="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2584"
              />
            </div>
            <div
              className="animate-slide-up [animation-delay:0.5s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
            >
              <TestimonialCard
                quote="Volunteering with Endeavor changed my perspective on what effective charity work looks like. They truly empower communities rather than creating dependency."
                name="Marcus Johnson"
                role="Volunteer"
                image="https://media.licdn.com/dms/image/v2/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=uHzeaBv3V2z6Tp6wvhzGABlTs9HR-SP-tEX1UbYNn4Q"
                featured={true}
              />
            </div>
            <div
              className="animate-slide-up [animation-delay:0.7s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              <TestimonialCard
                quote="As a corporate partner, we've seen firsthand how efficiently Endeavor uses resources to maximize impact. Their approach is both innovative and effective."
                name="Sophia Rodriguez"
                role="Corporate Partner"
                image="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-2 text-center animate-slide-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Upcoming Events Near You
          </h2>
          <p
            className="max-w-2xl mx-auto mb-12 text-center text-gray-600 animate-slide-up [animation-delay:0.2s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            Join us at one of our upcoming events to learn more about our work and how you can get involved.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event Card 1 */}
            <div
              className="overflow-hidden bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.3s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://static01.nyt.com/images/2018/04/18/arts/18STREET-INYT1/18STREET-INYT1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                  alt="Event 1"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">APR</div>
                  <div className="text-xl font-bold">28</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Art Auction Fund Raising Event for Children</h3>
                <p className="mb-4 text-sm text-gray-600">New York, USA • From 9:00 AM to 6:00 PM</p>
                <Link href="/events/art-auction" className="text-[#26d6a5] hover:underline transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Event Card 2 */}
            <div
              className="overflow-hidden bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.5s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://www.narayanseva.org/wp-content/uploads/2024/03/food-7-March-2024.jpg"
                  alt="Event 2"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">APR</div>
                  <div className="text-xl font-bold">30</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Food Donation for Hunger Relief Program</h3>
                <p className="mb-4 text-sm text-gray-600">Chicago, USA • From 10:00 AM to 4:00 PM</p>
                <Link href="/events/food-donation" className="text-[#26d6a5] hover:underline transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Event Card 3 */}
            <div
              className="overflow-hidden bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.7s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*GhCZeYfFE7WpvnjH"
                  alt="Event 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">MAY</div>
                  <div className="text-xl font-bold">05</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Learn How Small Things Make a Difference</h3>
                <p className="mb-4 text-sm text-gray-600">Austin, USA • From 1:00 PM to 5:00 PM</p>
                <Link href="/events/small-things" className="text-[#26d6a5] hover:underline transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container relative z-10">
          <div
            className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg animate-slide-up opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <h3 className="mb-4 text-xl font-bold text-center">Child needs to go immediate medical surgery. Help.</h3>
            <p className="mb-6 text-sm text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
              consectetur adipiscing.
            </p>
            <Link
              href="/"
              className="block w-full py-3 text-center text-white transition-all duration-300 bg-[#26d6a5] rounded hover:bg-opacity-90 hover:shadow-md transform hover:-translate-y-1"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="animate-slide-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <h3 className="mb-4 text-2xl font-bold">Stay informed about new and upcoming causes</h3>
              <p className="mb-6 text-gray-600">
                Subscribe to our newsletter to get the latest updates on our causes, events, and more. We promise not to
                spam you.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5] transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5] transition-all"
                    placeholder="Your Email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-white transition-all duration-300 bg-[#ff5a75] rounded-md hover:bg-opacity-90 hover:shadow-md transform hover:-translate-y-1"
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>
            <div
              className="animate-slide-up [animation-delay:0.3s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              <h4 className="mb-4 text-lg font-semibold">LATEST NEWS & ARTICLES</h4>
              <div className="space-y-4">
                <div className="flex gap-4 p-3 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:shadow-sm">
                  <div className="relative w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="https://media.istockphoto.com/id/2150778542/photo/user-customer-review-evaluates-satisfaction-with-a-product-or-service-customers-give-a-rating.jpg?s=612x612&w=0&k=20&c=z7TjkYCQnPvCQcZFRkiucsAsIbxqFHpmq0FbtK1r18c="
                      alt="News 1"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium hover:text-[#26d6a5] transition-colors">
                      The importance of gift of time and space to people.
                    </h5>
                    <p className="text-xs text-gray-600">April 28, 2022</p>
                  </div>
                </div>
                <div className="flex gap-4 p-3 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:shadow-sm">
                  <div className="relative w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQMXvd2Y6ptsmbEN3e7jzwFHMffpjWcF_rQ&s"
                      alt="News 2"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium hover:text-[#26d6a5] transition-colors">
                      Professional media is not a magic bullet for charity success.
                    </h5>
                    <p className="text-xs text-gray-600">April 26, 2022</p>
                  </div>
                </div>
                <div className="flex gap-4 p-3 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:shadow-sm">
                  <div className="relative w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src="https://media.istockphoto.com/id/1776879677/photo/close-up-young-man-hand-hold-smartphone-and-use-application-of-e-commerce-to-working-about.jpg?s=612x612&w=0&k=20&c=EMgXZ6cXxDFHYWtlEbZMRFo7qft1TZRfJDANYEwTmXg="
                      alt="News 3"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium hover:text-[#26d6a5] transition-colors">
                      Fundraising events are increasingly being overshadowed.
                    </h5>
                    <p className="text-xs text-gray-600">April 24, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-2 text-center animate-slide-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Check what our Customers are Saying
          </h2>
          <p
            className="max-w-2xl mx-auto mb-12 text-center text-gray-600 animate-slide-up [animation-delay:0.2s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
            consectetur adipiscing.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Testimonial 1 */}
            <div
              className="p-6 bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.3s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                  <Image src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Testimonial 1" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">John Doe</h4>
                  <p className="text-sm text-gray-600">Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur
                adipiscing, consectetur adipiscing. Nam malesu dolor."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div
              className="p-6 bg-white rounded-lg shadow-md card-hover animate-slide-up [animation-delay:0.5s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                  <Image src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Testimonial 2" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Donor</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur
                adipiscing, consectetur adipiscing. Nam malesu dolor."
              </p>
            </div>
          </div>

          

          <div
            className="flex justify-center mt-8 animate-fade-in [animation-delay:0.7s] opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
          >
            <div className="flex space-x-2">
              <span className="flex items-center justify-center w-3 h-3 bg-[#26d6a5] rounded-full"></span>
              <span className="flex items-center justify-center w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#26d6a5] transition-colors"></span>
              <span className="flex items-center justify-center w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#26d6a5] transition-colors"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export default function CauseDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative w-full mb-6 overflow-hidden rounded-lg" style={{ height: "400px" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/causes%20details-Qk0WD75GF5uX47GO9SWUvG7SPXL6Uv.png"
                alt="Auctioning Masterpieces"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="mb-6 text-3xl font-bold">Auctioning Masterpieces to Support Arts Education in Schools</h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <span className="mr-2 font-bold text-[#26d6a5]">$65,360</span>
                <span className="text-sm">Raised</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-bold">$124,500</span>
                <span className="text-sm">Goal</span>
              </div>
            </div>

            <div className="w-full h-2 mb-6 bg-gray-200 rounded-full">
              <div className="h-full bg-[#26d6a5] rounded-full" style={{ width: "52%" }}></div>
            </div>

            <div className="p-4 mb-6 text-sm bg-gray-100 rounded-lg">
              <p className="font-medium">
                Notice: Your check is validated. We&apos;ll let you know once your donations are processed.
              </p>
            </div>

            <div className="p-6 mb-8 bg-gray-50 rounded-lg">
              <p className="mb-4 text-sm">Recommended custom donation amount for this form is $100-$5000</p>

              <div className="mb-4">
                <label htmlFor="amount" className="block mb-2 text-sm font-medium">
                  Custom amount
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                  <input
                    type="text"
                    id="amount"
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                    placeholder="100.00"
                    defaultValue="2,000.00"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Select Payment Method</label>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      className="w-4 h-4 text-[#26d6a5] border-gray-300 focus:ring-[#26d6a5]"
                      defaultChecked
                    />
                    <label htmlFor="card" className="ml-2 text-sm">
                      Card Donation
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="offline"
                      name="payment"
                      className="w-4 h-4 text-[#26d6a5] border-gray-300 focus:ring-[#26d6a5]"
                    />
                    <label htmlFor="offline" className="ml-2 text-sm">
                      Offline Donation
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 text-sm font-medium">Personal Info</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block mb-1 text-sm">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1 text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-sm">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="createAccount"
                    className="w-4 h-4 text-[#26d6a5] border-gray-300 rounded focus:ring-[#26d6a5]"
                  />
                  <label htmlFor="createAccount" className="ml-2 text-sm">
                    Create an account
                  </label>
                </div>
                <div className="mt-2 text-sm text-right">
                  <span>Already have an account? </span>
                  <Link href="/login" className="text-[#26d6a5] hover:underline">
                    Login
                  </Link>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-1 text-sm">Donation Total:</label>
                <div className="p-2 text-lg font-bold bg-gray-100 rounded">$2,000.00</div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 text-white bg-[#26d6a5] rounded hover:bg-opacity-90 transition-colors"
              >
                Donate Now
              </button>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
                <p className="mb-4 text-gray-700">
                  Donec hendrerit, leo quis pharetra placerat, quam neque auctor ligula, vitae hendrerit augue mattus
                  nec sem. Pellentesque mollis ex eros, quis dignissim nulla fermentum in. Donec ipsum quis ante
                  ullamcorper vehicula. Suspendisse non tempus mi.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold">Impact of the cause</h2>
                <p className="mb-4 text-gray-700">
                  Mauris suscipit nunc libero, eget dignissim augue. Vim volutpatum felis fusce sollicitudin porta
                  euismod non porta. Donec ipsum quis ante ullamcorper vehicula. Donec ipsum quis ante ullamcorper
                  vehicula. Donec ipsum quis ante ullamcorper vehicula. Vivamus mattus amet et posuere ullamcorper.
                  Suspendisse feugiat magna, posuere viverra lorem ante et tellus. Nulla dignissim ultricies porttitor.
                  Aliquam id quam tempus, placerat tortor vitae, tristique augue. Integer vitae.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold">How your donations work</h2>
                <p className="mb-4 text-gray-700">
                  Phasellus nec tortor vitae risque augue ornare a vitae dui. Nunc facilisis ut odio eu elementum. Sed
                  blandit mauris vitae at tortor facilisis, quis efficitur est. Mauris id amet massa vel ante fugiat
                  tristique. Vivamus mauris, ante at tortor facilisis, ligula mattus elementum, sit amet sagittis augue
                  nulla eget ipsum. Fusce at tellus tempus, euismod mauris, quis nulla tempus, sit amet consequat urna.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold">Transparency and accountability</h2>
                <p className="mb-4 text-gray-700">
                  Nam ullamcorper, ipsum id dignissim tempor, quam neque auctor ligula, vitae hendrerit augue mattus nec
                  sem. In mattis est lectus. Donec tempus massa ut sem mattis viverra. Nullam sollicitudin ipsum ac vel
                  vehicula interdum ac in odio. Sed et vivam semper, semper neque tempus, vivamus nulla pede. Phasellus
                  hendrerit.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold">Thank you</h2>
                <p className="mb-4 text-gray-700">
                  In efficitur faucibus porttitor. In turpis ante, efficitur ut nulla quis, finibus convallis ex. In
                  mattus lectus quis finibus hendrerit. Donec massa felis, efficitur ut convallis nec, venenatis at
                  tortor. Phasellus ut bibendum lacus, quis blandit purus. Ut eget semper eros, non condimentum magna.
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                  placeholder="Search..."
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/causes/category/all" className="text-gray-700 hover:text-[#26d6a5]">
                    All
                  </Link>
                </li>
                <li>
                  <Link href="/causes/category/development" className="text-gray-700 hover:text-[#26d6a5]">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/causes/category/education" className="text-gray-700 hover:text-[#26d6a5]">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/causes/category/environment" className="text-gray-700 hover:text-[#26d6a5]">
                    Environment
                  </Link>
                </li>
                <li>
                  <Link href="/causes/category/healthcare" className="text-gray-700 hover:text-[#26d6a5]">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/causes/category/programs" className="text-gray-700 hover:text-[#26d6a5]">
                    Programs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recent Causes */}
            <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Recent Causes</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="relative w-20 h-16 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=80"
                      alt="Cause 1"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Medical Relief for Children</h4>
                    <Link href="/causes/medical-relief" className="text-xs text-[#26d6a5] hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-20 h-16 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=80"
                      alt="Cause 2"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Clean Water Initiative</h4>
                    <Link href="/causes/clean-water" className="text-xs text-[#26d6a5] hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-20 h-16 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=80"
                      alt="Cause 3"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Education for All</h4>
                    <Link href="/causes/education" className="text-xs text-[#26d6a5] hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/causes/tag/charity"
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors"
                >
                  Charity
                </Link>
                <Link
                  href="/causes/tag/donation"
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors"
                >
                  Donation
                </Link>
                <Link
                  href="/causes/tag/education"
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors"
                >
                  Education
                </Link>
                <Link
                  href="/causes/tag/children"
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors"
                >
                  Children
                </Link>
                <Link
                  href="/causes/tag/health"
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors"
                >
                  Health
                </Link>
                <Link
                  href="/causes/tag/water"
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-[#26d6a5] hover:text-white transition-colors"
                >
                  Water
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer CTA */}
      <section
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/close-up-people-volunteer-teamwork-putting-finger-star-shapehands-togetherstack-handsunity-teamwork-world-environment-day_640221-299.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="mb-4">Become a new Volunteer</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor at amet, consectetur adipiscing,
            consectetur adipiscing. Nam malesu dolor.
          </p>
          <Link
            href="/volunteer"
            className="inline-block px-6 py-3 font-medium text-white bg-[#ff5a75] rounded hover:bg-opacity-90 transition-colors"
          >
            JOIN US NOW
          </Link>
        </div>
      </section>
    </>
  )
}


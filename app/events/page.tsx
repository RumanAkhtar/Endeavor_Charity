import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.letsroam.com/explorer/wp-content/uploads/sites/10/2021/09/Charity-Event-Ideas.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Events</h1>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event Card 1 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://muradauctions.com/wp-content/uploads/2016/08/IMG_2232-1024x768.jpg" alt="Event 1" fill className="object-cover" />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">APR</div>
                  <div className="text-xl font-bold">28</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Art Auction Fund Raising Event for Children</h3>
                <p className="mb-4 text-sm text-gray-600">New York, USA • From 9:00 AM to 6:00 PM</p>
                <Link href="/events/art-auction" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://b.zmtcdn.com/data/o2_assets/30ac0d6f1126244e2a3889c875c2b0711663835191.jpeg" alt="Event 2" fill className="object-cover" />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">APR</div>
                  <div className="text-xl font-bold">30</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Food Donation for Hunger Relief Program</h3>
                <p className="mb-4 text-sm text-gray-600">Chicago, USA • From 10:00 AM to 4:00 PM</p>
                <Link href="/events/food-donation" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://cdn6.dissolve.com/p/D538_833_054/D538_833_054_1200.jpg" alt="Event 3" fill className="object-cover" />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">MAY</div>
                  <div className="text-xl font-bold">05</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Learn How Small Things Make a Difference</h3>
                <p className="mb-4 text-sm text-gray-600">Austin, USA • From 1:00 PM to 5:00 PM</p>
                <Link href="/events/small-things" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Event Card 4 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhqMA7lcrRzMYKVmlG8VRYu491yDOhS2OSw&s" alt="Event 4" fill className="object-cover" />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">MAY</div>
                  <div className="text-xl font-bold">12</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Charity Run for Clean Water Initiative</h3>
                <p className="mb-4 text-sm text-gray-600">Boston, USA • From 7:00 AM to 11:00 AM</p>
                <Link href="/events/charity-run" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Event Card 5 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://wishesandblessings.net/blog/wp-content/uploads/2020/01/WhatsApp-Image-2020-01-21-at-15.29.14.jpeg" alt="Event 5" fill className="object-cover" />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">MAY</div>
                  <div className="text-xl font-bold">18</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Educational Workshop for Underprivileged Children</h3>
                <p className="mb-4 text-sm text-gray-600">San Francisco, USA • From 10:00 AM to 3:00 PM</p>
                <Link href="/events/educational-workshop" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Event Card 6 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://media.istockphoto.com/id/863105740/photo/childrens-sports-team-charity-drive-for-donations-local-disaster-relief.jpg?s=612x612&w=0&k=20&c=FyCwE77TifwASnpyRS00B0xnS0fkiLVFSq-wZOWBe8I=" alt="Event 6" fill className="object-cover" />
                <div className="absolute top-0 right-0 p-2 text-white bg-[#26d6a5]">
                  <div className="text-xs">MAY</div>
                  <div className="text-xl font-bold">25</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Fundraising Gala for Medical Relief</h3>
                <p className="mb-4 text-sm text-gray-600">Los Angeles, USA • From 7:00 PM to 11:00 PM</p>
                <Link href="/events/fundraising-gala" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <span className="flex items-center justify-center w-8 h-8 text-white bg-[#26d6a5] rounded-full">1</span>
              <span className="flex items-center justify-center w-8 h-8 text-gray-600 bg-white rounded-full">2</span>
              <span className="flex items-center justify-center w-8 h-8 text-gray-600 bg-white rounded-full">3</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


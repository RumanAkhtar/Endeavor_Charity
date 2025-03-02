import Image from "next/image"
import Link from "next/link"

export default function CausesPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://charity.org/wp-content/uploads/2023/07/Amref-Health-Africa-02-23-1-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Causes</h1>
        </div>
      </section>

      {/* Causes Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Cause Card 1 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://www.volunteerforever.com/wp-content/uploads/2019/08/rsz_examination-min.jpg"
                  alt="Medical Relief"
                  fill
                  className="object-cover"
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
                <Link href="/causes/medical-relief" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Cause Card 2 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://www.shutterstock.com/image-photo/abuja-nigeria-august-02-2021-600nw-2018049746.jpg" alt="Clean Water" fill className="object-cover" />
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
                <Link href="/causes/clean-water" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Cause Card 3 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_1uDKy6AT_NPSxzeXppvCZCLHic2NOf80A&s" alt="Education" fill className="object-cover" />
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
                <Link href="/causes/education" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Cause Card 4 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://media.istockphoto.com/id/483294349/photo/cheerful-indian-children-playing-in-maharashtra.jpg?s=612x612&w=0&k=20&c=8IFXQxAKxK-3GXLpjwn9F02jmFEqSOnG2EAM3FWyemQ=" alt="Healthcare" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">
                  Auctioning Masterpieces to Support Arts Education in Schools
                </h3>
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
                <Link href="/causes/arts-education" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Cause Card 5 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWJkYh50EpDmzXPJFUaYiRQSy98bTPbfmyA&s" alt="Food" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Provide Food and Shelter for Homeless Children</h3>
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
                <Link href="/causes/food-shelter" className="text-[#26d6a5] hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* Cause Card 6 */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="relative h-48">
                <Image src="https://www.csrmandate.org/wp-content/uploads/2019/09/rbs1-1.jpg" alt="Environment" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Environmental Conservation and Sustainability</h3>
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
                <Link href="/causes/environment" className="text-[#26d6a5] hover:underline">
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


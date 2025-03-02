import Image from "next/image"
import Link from "next/link"
import TeamMember from "@/components/ui/team-member"
import AnimatedCounter from "@/components/ui/animated-counter"
import { CheckCircle, Award, Heart, Users } from "lucide-react"
import DonorSpotlight from "@/components/ui/donor-spotlight" // Import DonorSpotlight component

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/children-exploring-together-nature_23-2149002852.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white md:text-5xl">About Us</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div
              className="animate-slide-up [animation-delay:0.2s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
              <p className="mb-4 text-gray-700">
                At Endeavor Charity Foundation, our mission is to create lasting change in communities around the world
                by addressing critical needs in education, healthcare, and sustainable development.
              </p>
              <p className="mb-6 text-gray-700">
                We believe in empowering individuals and communities to build a better future through targeted programs,
                partnerships, and sustainable solutions that address the root causes of poverty and inequality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-2 text-[#26d6a5]" size={20} />
                  <span>Providing access to quality education for underprivileged children</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-2 text-[#26d6a5]" size={20} />
                  <span>Delivering essential healthcare services to remote communities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-2 text-[#26d6a5]" size={20} />
                  <span>Supporting sustainable development initiatives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mt-1 mr-2 text-[#26d6a5]" size={20} />
                  <span>Building partnerships with local organizations for lasting impact</span>
                </li>
              </ul>
            </div>
            <div
              className="relative animate-slide-up [animation-delay:0.4s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1705624584572-e817ec92f9e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Children smiling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-xl font-bold">Our Vision</h3>
                <p className="text-gray-700">
                  A world where every individual has the opportunity to thrive, regardless of their circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 text-white bg-[#26d6a5]">
        <div className="container">
          <h2 className="mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                <Heart className="text-[#26d6a5]" size={32} />
              </div>
              <AnimatedCounter end={15000} suffix="+" />
              <p className="mt-2 text-lg">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                <Users className="text-[#26d6a5]" size={32} />
              </div>
              <AnimatedCounter end={500} suffix="+" />
              <p className="mt-2 text-lg">Volunteers Worldwide</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                <Award className="text-[#26d6a5]" size={32} />
              </div>
              <AnimatedCounter end={25} suffix="+" />
              <p className="mt-2 text-lg">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                <CheckCircle className="text-[#26d6a5]" size={32} />
              </div>
              <AnimatedCounter end={120} suffix="+" />
              <p className="mt-2 text-lg">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-2 text-center">Meet Our Team</h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Our dedicated team of professionals works tirelessly to create positive change in communities around the
            world.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="animate-slide-up [animation-delay:0.2s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              <TeamMember
                name="Sarah Johnson"
                role="Executive Director"
                image="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                bio="Sarah has over 15 years of experience in nonprofit management and is passionate about creating sustainable change."
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  linkedin: "#",
                }}
              />
            </div>
            <div
              className="animate-slide-up [animation-delay:0.4s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
            >
              <TeamMember
                name="Michael Chen"
                role="Program Director"
                image="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                bio="Michael oversees our educational programs and has a background in international development."
                socialLinks={{
                  twitter: "#",
                  linkedin: "#",
                }}
              />
            </div>
            <div
              className="animate-slide-up [animation-delay:0.6s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
            >
              <TeamMember
                name="Amara Okafor"
                role="Healthcare Coordinator"
                image="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                bio="Amara is a medical professional who leads our healthcare initiatives in underserved communities."
                socialLinks={{
                  facebook: "#",
                  linkedin: "#",
                  instagram: "#",
                }}
              />
            </div>
            <div
              className="animate-slide-up [animation-delay:0.8s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
            >
              <TeamMember
                name="David Rodriguez"
                role="Volunteer Coordinator"
                image="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                bio="David manages our global network of volunteers and ensures they have meaningful experiences."
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                }}
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-block px-6 py-3 text-white transition-all duration-300 rounded-md bg-[#26d6a5] hover:bg-opacity-90 hover:shadow-md transform hover:-translate-y-1"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div
              className="animate-slide-up [animation-delay:0.2s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Endeavor Charity Foundation was founded in 1998 by a group of passionate individuals who believed in the
                power of collective action to address global challenges.
              </p>
              <p className="mb-4 text-gray-700">
                What began as a small initiative to provide educational resources to children in underserved communities
                has grown into a global organization with programs in education, healthcare, and sustainable
                development.
              </p>
              <p className="mb-4 text-gray-700">
                Over the years, we have expanded our reach and impact, working with local partners to implement
                sustainable solutions that address the root causes of poverty and inequality.
              </p>
              <p className="text-gray-700">
                Today, Endeavor Charity Foundation continues to be guided by our founding principles of compassion,
                integrity, and innovation as we work towards creating a more equitable world.
              </p>
            </div>
            <div
              className="relative animate-slide-up [animation-delay:0.4s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://nationaltoday.com/wp-content/uploads/2021/04/Environmental-Education-1-1200x834.jpg"
                    alt="Our early days"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://www.neefusa.org/sites/default/files/styles/image_for_basic_page_846x477_/public/2024-08/WEB24_wd_plan%20EE%20activity%20public%20lands_1920x1080.png.webp?itok=oLXLdTmT"
                    alt="Community outreach"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/05/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-16.jpg"
                    alt="Educational programs"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrhv_876_-T7cD67axVqWmr4CUVMO_LQgii5YkOTWjDTx9Hdc-tbbzrns2jUtyQ6rUBs&usqp=CAU"
                    alt="Healthcare initiatives"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute p-4 -bottom-6 -right-6 bg-[#26d6a5] rounded-lg shadow-lg animate-float">
                <p className="text-white">25+ years of making a difference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Spotlights */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-2 text-center">Donor Spotlights</h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Meet some of the generous individuals who make our work possible through their support.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              className="animate-slide-up [animation-delay:0.2s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              <DonorSpotlight
                name="James Wilson"
                image="https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612&w=0&k=20&c=eF_0QCtw-Y8Q2c4_xQe6KTkcSPiGCT6qBf6nuavE2Dg="
                amount="$10,000"
                cause="Education Programs"
                message="I believe education is the key to breaking the cycle of poverty. I'm proud to support Endeavor's work in providing quality education to children around the world."
              />
            </div>
            <div
              className="animate-slide-up [animation-delay:0.4s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
            >
              <DonorSpotlight
                name="Elena Gomez"
                image="https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg"
                amount="$15,000"
                cause="Healthcare Initiatives"
                message="After seeing the impact of Endeavor's healthcare programs firsthand, I knew I wanted to be part of this important work. Every child deserves access to basic healthcare."
              />
            </div>
            <div
              className="animate-slide-up [animation-delay:0.6s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
            >
              <DonorSpotlight
                name="Robert Chang"
                image="https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg"
                amount="$25,000"
                cause="Clean Water Projects"
                message="Water is life. I'm honored to support Endeavor's clean water initiatives that are transforming communities and saving lives every day."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


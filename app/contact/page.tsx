import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/asian-girl-holding-plant-soil_1150-18579.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="animate-slide-up opacity-0" style={{ animationFillMode: "forwards" }}>
              <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
              <p className="mb-8 text-gray-600">
                We'd love to hear from you. Whether you have a question about our causes, events, or how you can support
                us, our team is ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-[#26d6a5]" />
                  <span>info@endeavor.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-[#26d6a5]" />
                  <span>703 (123) 4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#26d6a5]" />
                  <span>123 Charity Street, New York, NY 10001</span>
                </div>
              </div>
            </div>
            <div
              className="animate-slide-up [animation-delay:0.2s] opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              <form className="p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#26d6a5]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white transition-all duration-300 rounded-md bg-[#26d6a5] hover:bg-opacity-90 hover:shadow-md transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

       
    </>
  )
}


"use client"

import { useState } from "react"
import { Phone, Mail } from "lucide-react"
import Header from "../layouts/header"
import Footer from "../layouts/footer"
import Breadcrumb from "../layouts/breadcrumb"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Contact us", path: "/contact" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="contact" />

      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="mb-8">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold mb-4">Call To Us</h2>
              <p className="text-gray-600 mb-2">We are here to help you out</p>
              <p className="mb-2">
                Phone:{" "}
                <a href="tel:+1(979)255-2014" className="text-gray-800 hover:text-red-600">
                  +1 (979) 255-2014
                </a>
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold mb-4">Write To US</h2>
              <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mb-2">
                Email:{" "}
                <a href="mailto:order@railroadcotton.com" className="text-gray-800 hover:text-red-600">
                  order@railroadcotton.com
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Get in touch with us</h1>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="md:col-span-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone *"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded px-4 py-2 h-40"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

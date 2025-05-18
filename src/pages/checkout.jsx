"use client"

import { useState } from "react"
import Header from "../layouts/header"
import Footer from "../layouts/footer"
import Breadcrumb from "../layouts/breadcrumb"

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    email: "",
    saveInfo: false,
    paymentMethod: "cash", // Default to cash on delivery
  })

  const cartItems = [
    { id: 1, name: "Shabby Fabric 1", price: 650, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Shabby Fabric 1", price: 650, image: "/placeholder.svg?height=80&width=80" },
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Order placed:", formData)
    // Here you would typically process the order and redirect
    window.location.href = "/order-summary"
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
  const salesTax = 20
  const shipping = "Free"
  const couponDiscount = 10
  const total = subtotal + salesTax - couponDiscount

  const breadcrumbItems = [
    { label: "View Cart", path: "/cart" },
    { label: "CheckOut", path: "/checkout" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-6">Billing Details</h1>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm mb-1">
                    First Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Street Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Apartment, floor, etc. (optional)</label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Town/City<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="townCity"
                    value={formData.townCity}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Phone Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Email Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 border-gray-300 rounded"
                  />
                  <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
                    Save this information for faster check-out next time
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4">Cart Total</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <h3 className="ml-2 text-sm">{item.name}</h3>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal (1 item)</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales Tax:</span>
                    <span>${salesTax}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coupon Discount:</span>
                    <span>-${couponDiscount}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === "bank"}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 border-gray-300"
                  />
                  <label htmlFor="bank" className="ml-2 text-sm text-gray-700">
                    Bank
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 border-gray-300"
                  />
                  <label htmlFor="cash" className="ml-2 text-sm text-gray-700">
                    Cash on delivery
                  </label>
                </div>

                <div className="flex justify-center mt-4">
                  <img src="/placeholder.svg?height=30&width=120" alt="Payment methods" className="h-8" />
                </div>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-red-600 text-white w-full py-3 rounded text-center block hover:bg-red-700 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

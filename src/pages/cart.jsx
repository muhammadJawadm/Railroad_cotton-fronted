"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../layouts/header"
import Footer from "../layouts/footer"
import Breadcrumb from "../layouts/breadcrumb"

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Larkspur Shadow Play", price: 650, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Larkspur Shadow Play", price: 650, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Larkspur Shadow Play", price: 650, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
  ])

  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const salesTax = 20
  const shipping = "Free"
  const couponDiscount = 10
  const total = subtotal + salesTax - couponDiscount

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Cart", path: "/cart" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="cart" />

      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-gray-600 mb-6">{cartItems.length} items in your cart</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <h2 className="font-medium">Product</h2>
                </div>
                <div className="col-span-2 text-center">
                  <h2 className="font-medium">Price</h2>
                </div>
                <div className="col-span-2 text-center">
                  <h2 className="font-medium">Quantity</h2>
                </div>
                <div className="col-span-2 text-right">
                  <h2 className="font-medium">Subtotal</h2>
                </div>
              </div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-gray-200 py-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6">
                    <div className="flex items-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4">
                        <h3 className="font-medium">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <p>${item.price}</p>
                  </div>
                  <div className="col-span-2 text-center">
                    <div className="flex items-center justify-center">
                      <button
                        className="border border-gray-300 px-2 py-1 rounded-l"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="border-t border-b border-gray-300 px-3 py-1">{item.quantity}</span>
                      <button
                        className="border border-gray-300 px-2 py-1 rounded-r"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-red-600">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4">Cart Total</h2>

              <div className="space-y-3 mb-6">
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
                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-300 rounded-l px-4 py-2 flex-1"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-r">Apply</button>
              </div>

              <Link
                to="/checkout"
                className="bg-red-600 text-white w-full py-3 rounded text-center block hover:bg-red-700 transition"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

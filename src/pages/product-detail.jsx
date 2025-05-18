"use client"

import { useState } from "react"
import {
  Heart,
  ShoppingCart,
  User,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [selectedSize, setSelectedSize] = useState("106 cm (42)")

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const sizeOptions = [
    { size: "106 cm (42)" },
    { size: "121 cm (48)" },
    { size: "139 cm (55)" },
    { size: "164 cm (65)" },
    { size: "196 cm (77)" },
    { size: "210 cm (83)" },
  ]

  const relatedProducts = [
    {
      id: 1,
      name: "Larkspur Shadow Play",
      price: 11.99,
      description: "Lorem ipsum dolor sit amet, consectetur",
      rating: 5,
      reviewCount: 100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s",
    },
    {
      id: 2,
      name: "Larkspur Shadow Play",
      price: 11.99,
      description: "Lorem ipsum dolor sit amet, consectetur",
      rating: 5,
      reviewCount: 100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s",
    },
    {
      id: 3,
      name: "Larkspur Shadow Play",
      price: 11.99,
      description: "Lorem ipsum dolor sit amet, consectetur",
      rating: 5,
      reviewCount: 100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s",
    },
  ]

  const reviewers = [
    {
      id: 1,
      name: "Anonymous",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Tom DeLonge",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Anonymous",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/placeholder.svg?height=80&width=80" alt="Railroad Cotton Exchange Logo" className="h-16" />
              <div className="ml-2">
                <h1 className="text-xl font-bold uppercase">RAILROAD COTTON</h1>
                <h2 className="text-lg uppercase">EXCHANGE</h2>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-800 font-medium">
                Shop
              </a>
              <a href="#" className="text-gray-800 font-medium">
                Contact us
              </a>
              <a href="#" className="text-gray-800 font-medium">
                About us
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="#" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-800" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
                <span className="text-xs block mt-1">Cart</span>
              </a>
              <a href="#" className="flex flex-col items-center">
                <User className="h-6 w-6 text-gray-800" />
                <span className="text-xs block mt-1">My Account</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">
            Products
          </a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-gray-700">
            Shabby Fabric type
          </a>
          <span className="mx-2">/</span>
          <span className="text-red-600">Product Detail</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s"
              alt="Special Imported Irani Fabric"
              className="w-full rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">SPECIAL IMPORTED IRANI FABRIC</h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-5 w-5 text-red-600 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">(100)</span>
            </div>

            {/* Product Details */}
            <ul className="space-y-2 mb-6">
              <li className="flex">
                <span className="text-red-600 font-medium mr-2">•</span>
                <span className="text-red-600 font-medium">Material:</span>
                <span className="ml-1">Durable, eco-friendly, and soft fabric with a vintage feel.</span>
              </li>
              <li className="flex">
                <span className="text-red-600 font-medium mr-2">•</span>
                <span className="text-red-600 font-medium">Design:</span>
                <span className="ml-1">Shabby chic pattern ideal for rustic or bohemian-themed projects.</span>
              </li>
              <li className="flex">
                <span className="text-red-600 font-medium mr-2">•</span>
                <span className="text-red-600 font-medium">Size:</span>
                <span className="ml-1">Available in multiple dimensions to suit various needs.</span>
              </li>
              <li className="flex">
                <span className="text-red-600 font-medium mr-2">•</span>
                <span className="text-red-600 font-medium">Uses:</span>
                <span className="ml-1">Great for quilting, sewing, home decor, or arts and crafts.</span>
              </li>
              <li className="flex">
                <span className="text-red-600 font-medium mr-2">•</span>
                <span className="text-red-600 font-medium">Care:</span>
                <span className="ml-1">Machine washable and easy to maintain for long-lasting beauty.</span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 mb-4">USD(incl. of all taxes)</p>

            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">$600.72</span>
              <span className="ml-2 text-gray-500 line-through">$800.00</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center mb-6">
              <div className="border border-gray-300 rounded flex items-center">
                <button className="px-3 py-1 text-gray-600" onClick={decrementQuantity}>
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button className="px-3 py-1 text-gray-600" onClick={incrementQuantity}>
                  +
                </button>
              </div>
              <button className="ml-4 bg-red-600 text-white px-6 py-2 rounded">Buy Now</button>
              <button className="ml-4 border border-red-600 text-red-600 px-6 py-2 rounded">Add to Cart</button>
            </div>

            {/* Size Options */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {sizeOptions.map((option) => (
                <button
                  key={option.size}
                  className={`border rounded py-2 px-4 text-sm ${
                    selectedSize === option.size ? "border-red-600 bg-red-50" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(option.size)}
                >
                  {option.size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-300">
            <div className="flex">
              <button
                className={`py-2 px-4 font-medium ${
                  activeTab === "description" ? "border-b-2 border-red-600 text-red-600" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-2 px-4 font-medium ${
                  activeTab === "reviews" ? "border-b-2 border-red-600 text-red-600" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>
          </div>

          <div className="py-6">
            {activeTab === "description" ? (
              <div className="text-center max-w-3xl mx-auto">
                <p className="mb-4">
                  Upgrade your crafting and decorating projects with this high-quality shabby fabric cloth. Featuring a
                  rustic, textured design, this versatile fabric is perfect for creating charming DIY crafts,
                  upholstery, curtains, or table runners
                </p>
                <p className="mb-4">
                  Transform your creative ideas into reality with this shabby fabric cloth, combining functionality and
                  style for endless possibilities. Perfect for personal or professional use, it's a must-have for every
                  crafter's collection! Add it to your cart now and start creating timeless designs!
                </p>
                <p>
                  <a href="#" className="text-gray-600">
                    More ...
                  </a>
                </p>
              </div>
            ) : (
              <div className="text-center max-w-3xl mx-auto">
                <p className="mb-4">
                  I absolutely love this shabby fabric! The quality is outstanding, with a soft texture and beautiful
                  vintage patterns that bring my DIY projects to life. It's versatile and easy to work with, perfect for
                  creating rustic home decor or crafts. Plus, the eco-friendly aspect makes me feel good about my
                  purchase. Highly recommend it to anyone looking for charm and functionality in one fabric!
                </p>
                <p className="font-medium mb-6">Tom DeLonge</p>

                <div className="flex justify-center items-center space-x-4">
                  <button className="flex items-center text-gray-600">
                    <ChevronLeft className="h-5 w-5" />
                    <span className="ml-1">Prev</span>
                  </button>

                  {reviewers.map((reviewer, index) => (
                    <div
                      key={reviewer.id}
                      className={`rounded-full overflow-hidden ${index === 1 ? "ring-2 ring-red-600" : ""}`}
                    >
                      <img
                        src={reviewer.avatar || "/placeholder.svg"}
                        alt={reviewer.name}
                        className="h-10 w-10 object-cover"
                      />
                    </div>
                  ))}

                  <button className="flex items-center text-gray-600">
                    <span className="mr-1">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">${product.price}</p>
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-4 w-4 text-red-600 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs text-gray-600">({product.reviewCount})</span>
                  </div>
                  <button className="border border-red-600 text-red-600 px-4 py-1 rounded text-sm">View Product</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-red-600 text-white px-6 py-2 rounded flex items-center">
              Explore More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Railroad Cotton Exchange Logo"
                className="h-16 mb-4"
              />
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Subscriptions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:order@railroadcotton.com" className="text-gray-300 hover:text-white">
                    order@railroadcotton.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:+1(979)255-2014" className="text-gray-300 hover:text-white">
                    T: +1 (979) 255-2014
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 mb-2">Copyright © The Railroad Cotton Exchange</p>
            <div className="flex items-center justify-center text-gray-400">
              <span>Powered by</span>
              <img
                src="/placeholder.svg?height=20&width=20"
                alt="Stride Retail"
                className="h-5 w-5 mx-2 rounded-full"
              />
              <span>Stride Retail</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

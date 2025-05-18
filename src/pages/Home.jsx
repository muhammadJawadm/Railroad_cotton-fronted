"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  ArrowRight,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    // Implement subscription functionality
    alert("Thank you for subscribing!")
    setEmail("")
  }

  const products = [
    {
      id: 1,
      name: "Larkspur Shadow Play",
      price: 11.99,
      rating: 5,
      reviewCount: 100,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s",
    },
    {
      id: 2,
      name: "Larkspur Shadow Play",
      price: 11.99,
      rating: 5,
      reviewCount: 100,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s",
    },
    {
      id: 3,
      name: "Larkspur Shadow Play",
      price: 11.99,
      rating: 5,
      reviewCount: 100,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s",
    },
  ]

  const categories = [
    {
      id: 1,
      name: "Fabric",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZAwiJIJ9qSM9wFfTldXMzamE42wfSiJ4kQ&s",
    },
    {
      id: 2,
      name: "Patterns",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_sBe1u8GfHrIV-pAiQuj3EP_8mWT4uGG6g&s",
    },
    {
      id: 3,
      name: "Notions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOurUSkn9SLoex4AgwIr3FLrrARn-rEYpLw&s"
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
              <Link to="/" className="text-red-600 font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-gray-800 font-medium">
                Shop
              </Link>
              <Link to="/contact" className="text-gray-800 font-medium">
                Contact us
              </Link>
              <Link to="/about" className="text-gray-800 font-medium">
                About us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative flex flex-col items-center">
                <ShoppingCart className="h-6 w-6 text-gray-800" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
                <span className="text-xs block mt-1">Cart</span>
              </Link>
              <Link to="/account" className="flex flex-col items-center">
                <User className="h-6 w-6 text-gray-800" />
                <span className="text-xs block mt-1">My Account</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex">
          <div className="relative inline-block w-48">
            <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-l shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>All Categories</option>
              <option>Fabric</option>
              <option>Patterns</option>
              <option>Notions</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search anything here..."
            className="flex-grow border-t border-b border-gray-300 px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition"
            onClick={handleSearch}
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative">
        <img
          src="https://study.com/cimages/videopreview/0k2i8tpotw.jpg"
          alt="Colorful fabrics"
          className="w-5/6 ml-32 h-64 md:h-96 object-cover rounded-lg "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Revamp Your Interiors with Up to</h2>
          <h3 className="text-xl md:text-3xl font-bold mb-4">65% Off on Fabrics!</h3>
          <button className="bg-red-600 text-white px-6 py-2 rounded flex items-center hover:bg-red-700 transition">
            Explore Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Explore Our Categories</h2>
        <div className="ml-32 grid grid-cols-1 md:grid-cols-3 gap-2">
          {categories.map((category) => (
            <div key={category.id} className="w-80 relative rounded-lg overflow-hidden shadow-md">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-96  h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Products */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">New Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden w-96">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-96 h-80 object-cover"
                />
                <button className="absolute top-2 right-2
                 bg-white p-1.5 rounded-full">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="font-bold">${product.price}</p>
                </div>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-4 w-4 text-red-600 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-600">({product.reviewCount})</span>
                </div>
                <button className="border border-red-600 text-red-600 px-4 py-1 rounded text-sm hover:bg-red-50 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-6 py-2 rounded flex items-center hover:bg-red-700 transition">
            Explore More
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Subscribe</h2>
              <p className="text-sm">Get update about our product on your email, no spam guaranteed we promise ♥</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="youremail123@gmail.com"
                className="px-4 py-3 rounded-l w-full md:w-64 text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-3 rounded-r uppercase hover:bg-gray-900 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
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
                  <Link to="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/subscriptions" className="text-gray-300 hover:text-white">
                    Subscriptions
                  </Link>
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

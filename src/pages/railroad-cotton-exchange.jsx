import { Search, ShoppingCart, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export default function RailroadCottonExchange() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=50&width=50" alt="Railroad Cotton Exchange Logo" className="h-12 w-12" />
            <div className="ml-2">
              <h1 className="text-lg font-bold uppercase">Railroad Cotton</h1>
              <h2 className="text-sm uppercase">Exchange</h2>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-red-600 font-medium">
              HOME
            </a>
            <a href="#" className="text-gray-600 font-medium">
              SHOP
            </a>
            <a href="#" className="text-gray-600 font-medium">
              CATEGORIES
            </a>
            <a href="#" className="text-gray-600 font-medium">
              ABOUT US
            </a>
          </nav>

          <div className="flex items-center">
            <a href="#" className="mr-4">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </a>
            <div className="flex items-center bg-red-600 text-white px-2 py-1 rounded-full">
              <span className="text-xs">MY ACCOUNT</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 py-2 flex items-center">
          <div className="flex-1">
            <a href="#" className="text-gray-600 text-sm">
              #AllCategories
            </a>
          </div>
          <div className="flex-1 flex">
            <input
              type="text"
              placeholder="Search anything here..."
              className="border border-gray-300 rounded-l px-4 py-2 w-full"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Colorful fabrics"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Reviving Your Interiors with Up to</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4">40% Off on Fabrics!</h3>
            <button className="bg-red-600 text-white px-6 py-2 rounded">EXPLORE FABRICS</button>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Explore Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Fabric category"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Fabric</h3>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Patterns category"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Patterns</h3>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Notions category"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Notions</h3>
              </div>
            </div>
          </div>
        </div>

        {/* New Products */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">New Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Lexington Shadow Play"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium">Lexington Shadow Play</h3>
                  <p className="text-gray-600 text-sm mb-2">$11.50</p>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <button className="border border-red-600 text-red-600 px-4 py-1 rounded text-sm">View Product</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 text-white px-6 py-2 rounded">SHOW MORE</button>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-red-600 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Subscribe</h2>
                <p className="text-sm">
                  Get updates about our products on your email, no spam guaranteed via promise ♥
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="px-4 py-2 rounded-l w-full md:w-64 text-gray-800"
                />
                <button className="bg-gray-800 text-white px-4 py-2 rounded-r uppercase">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="Railroad Cotton Exchange Logo"
                className="h-12 w-12 mb-4"
              />
              <div className="flex space-x-4">
                <a href="#" className="text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
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
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact us</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">info@railroadcotton.com</li>
                <li className="text-gray-300">+1 (123) 456-7890</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

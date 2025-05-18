import { ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"


export default function Header({ activePage }) {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src='https://media.rainpos.com/14075/250x250_railroad_small_Christine_Larsenjpg.jpg' alt="Logo" className="h-16" />
            <div className="ml-2">
              <h1 className="text-xl font-bold uppercase">RAILROAD COTTON</h1>
              <h2 className="text-lg uppercase">EXCHANGE</h2>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`font-medium ${activePage === "home" ? "text-red-600" : "text-gray-800"}`}>
              Home
            </Link>
            <Link to="/shop" className={`font-medium ${activePage === "shop" ? "text-red-600" : "text-gray-800"}`}>
              Shop
            </Link>
            <Link
              to="/contact"
              className={`font-medium ${activePage === "contact" ? "text-red-600" : "text-gray-800"}`}
            >
              Contact us
            </Link>
            <Link to="/about" className={`font-medium ${activePage === "about" ? "text-red-600" : "text-gray-800"}`}>
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
  )
}

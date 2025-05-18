import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/placeholder.svg?height=80&width=80" alt="Railroad Cotton Exchange Logo" className="h-16 mb-4" />
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
            <img src="/placeholder.svg?height=20&width=20" alt="Stride Retail" className="h-5 w-5 mx-2 rounded-full" />
            <span>Stride Retail</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Link } from "react-router-dom"
import Header from "../layouts/header"
import Footer from "../layouts/footer"
import Breadcrumb from "../layouts/breadcrumb"
import { Package } from "lucide-react"

export default function OrderSummary() {
  const orderItems = [
    { id: 1, name: "Shabby Fabric 1", price: 650, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Shabby Fabric 1", price: 650, image: "/placeholder.svg?height=80&width=80" },
  ]

  const orderTotal = orderItems.reduce((total, item) => total + item.price, 0)

  const breadcrumbItems = [
    { label: "View Cart", path: "/cart" },
    { label: "CheckOut", path: "/checkout" },
    { label: "Order Summary", path: "/ordersummary" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 container mx-auto px-1 py-1">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-200 rounded-full p-6">
            <Package className="h-10 w-10 text-gray-600" />
          </div>
        </div>

        <div className=" px-10  bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h1 className="text-xl font-bold mb-6">Items you ordered</h1>

          <div className="space-y-6 mb-8">
            {orderItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="flex items-center">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h3 className="ml-4 font-medium">{item.name}</h3>
                </div>
                <p className="font-bold">${item.price}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-bold mb-2">Delivery Address:</h3>
              <p>Times Square New York City, Pakistan</p>

              <h3 className="font-bold mt-4 mb-2">City:</h3>
              <p>New York</p>

              <h3 className="font-bold mt-4 mb-2">Contact:</h3>
              <p>+92-123456-34</p>

              <h3 className="font-bold mt-4 mb-2">Email:</h3>
              <p>railroadcotton@exchange.com</p>
            </div>

            <div className="flex items-end justify-end">
              <div className="text-right">
                <h3 className="font-bold mb-2">Total: ${orderTotal}</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/shop" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
              Back to Store
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

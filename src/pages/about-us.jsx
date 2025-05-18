import Header from "../layouts/header"
import Footer from "../layouts/footer"
import Breadcrumb from "../layouts/breadcrumb"
import { Truck, Headphones } from "lucide-react"

export default function AboutUs() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/AboutUs" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="about" />

      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-3xl font-bold mb-6">Our Story</h1>
            <p className="text-gray-700 mb-4">
              Shabby fabric traces its origins to rural Europe, where worn-out textiles were repurposed into charming
              home decor, laying the foundation for what became the "shabby chic" style in the 1980s. Popularized by
              designer Rachel Ashwell, this aesthetic embraced imperfections, featuring faded patterns, soft colors, and
              textured weaves that exuded vintage charm. With the rise of e-commerce, shabby fabric gained global
              recognition for its versatility in crafts, fashion, and home decor. Today, it remains a timeless choice,
              celebrated for its eco-friendly production and ability to add a touch of rustic elegance to any project.
            </p>
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuYivm5maujAZ_p0Of6tEqpO5zAc38TRG3A&s"
              alt="Shabby Fabric Sample"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-16">
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-xl font-bold uppercase mb-2">FREE DELIVERY</h2>
            <p className="text-gray-600">Free delivery for all orders over $75</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-xl font-bold uppercase mb-2">FRIENDLY CUSTOMER SERVICE</h2>
            <p className="text-gray-600">Friendly customer support</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

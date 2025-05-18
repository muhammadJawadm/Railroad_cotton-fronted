import { Link } from "react-router-dom"

export default function Breadcrumb({ items }) {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}

              {isLast ? (
                <span className="text-red-600">{item.label}</span>
              ) : (
                <Link to={item.path} className="hover:text-gray-700">
                  {item.label}
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

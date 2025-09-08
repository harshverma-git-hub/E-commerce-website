import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams();

  // Dummy data for demo
  const categories = {
    1: { name: "Men's Fashion", subcategories: ["Shirts", "Jeans", "Shoes"], products: [
      { id: 101, name: "Casual Shirt", price: 799, image: "https://picsum.photos/300/200?random=21" },
      { id: 102, name: "Blue Jeans", price: 1499, image: "https://picsum.photos/300/200?random=22" },
      { id: 103, name: "Sneakers", price: 2499, image: "https://picsum.photos/300/200?random=23" }
    ]},
    2: { name: "Women's Fashion", subcategories: ["Dresses", "Handbags", "Jewelry"], products: [
      { id: 201, name: "Summer Dress", price: 999, image: "https://picsum.photos/300/200?random=24" },
      { id: 202, name: "Handbag", price: 1999, image: "https://picsum.photos/300/200?random=25" },
      { id: 203, name: "Earrings", price: 499, image: "https://picsum.photos/300/200?random=26" }
    ]},
    3: { name: "Electronics", subcategories: ["Mobiles", "Laptops", "Headphones"], products: [
      { id: 301, name: "Smartphone", price: 15999, image: "https://picsum.photos/300/200?random=27" },
      { id: 302, name: "Laptop", price: 45999, image: "https://picsum.photos/300/200?random=28" },
      { id: 303, name: "Headphones", price: 1999, image: "https://picsum.photos/300/200?random=29" }
    ]},
    4: { name: "Accessories", subcategories: ["Watches", "Belts", "Wallets"], products: [
      { id: 401, name: "Leather Wallet", price: 699, image: "https://picsum.photos/300/200?random=30" },
      { id: 402, name: "Wrist Watch", price: 2499, image: "https://picsum.photos/300/200?random=31" },
      { id: 403, name: "Belt", price: 999, image: "https://picsum.photos/300/200?random=32" }
    ]},
  };

  const category = categories[id];

  return (
    <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left Sidebar - Subcategories */}
      <aside className="bg-white shadow rounded-lg p-4 h-fit">
        <h3 className="text-xl font-semibold mb-4">Subcategories</h3>
        <ul className="space-y-2">
          {category.subcategories.map((sub, idx) => (
            <li key={idx} className="text-gray-700 hover:text-blue-600 cursor-pointer">
              {sub}
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Section - Products */}
      <div className="md:col-span-3">
        <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
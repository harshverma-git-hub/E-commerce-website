import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise cancellation and 20hr battery life.",
    price: 120,
    image: "https://picsum.photos/seed/headphones/400/300",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "5G with AMOLED display and 128GB storage.",
    price: 799,
    image: "https://picsum.photos/seed/smartphone/400/300",
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight, breathable, and comfy.",
    price: 89,
    image: "https://picsum.photos/seed/shoes/400/300",
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Track fitness and monitor heart rate.",
    price: 250,
    image: "https://picsum.photos/seed/watch/400/300",
  },
  {
    id: 5,
    name: "Laptop",
    description: "16GB RAM, 512GB SSD, lightweight.",
    price: 1199,
    image: "https://picsum.photos/seed/laptop/400/300",
  },
  {
    id: 6,
    name: "Backpack",
    description: "Durable, waterproof, stylish.",
    price: 59,
    image: "https://picsum.photos/seed/backpack/400/300",
  },
  {
    id: 7,
    name: "Gaming Console",
    description: "Next-gen console with 4K gaming.",
    price: 499,
    image: "https://picsum.photos/seed/console/400/300",
  },
  {
    id: 8,
    name: "DSLR Camera",
    description: "24MP DSLR with 4K video recording.",
    price: 699,
    image: "https://picsum.photos/seed/camera/400/300",
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Card links to product detail */}
            <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
              <div className="w-full h-36 md:h-44 lg:h-52 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1 flex-1">
                {product.description}
              </p>
            </Link>

            {/* Add to Cart button (does not trigger Link) */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-base font-bold text-blue-600">
                ₹{product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg text-xs md:text-sm hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
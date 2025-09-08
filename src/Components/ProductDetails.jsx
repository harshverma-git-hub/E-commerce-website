import { useParams } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      description: "Experience crystal-clear sound with wireless headphones.",
      image: "https://via.placeholder.com/500x400.png?text=Headphones",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      description: "Track fitness, calls, and notifications.",
      image: "https://via.placeholder.com/500x400.png?text=Smart+Watch",
      rating: 4.2,
      reviews: 200,
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <div className="p-12 text-center text-gray-600">Product not found!</div>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center mt-2">
            <Star className="text-yellow-500" />
            <span className="ml-2 text-gray-700">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <p className="mt-4 text-2xl font-bold text-blue-600">₹{product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

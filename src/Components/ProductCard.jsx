export default function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-600 font-bold mt-1">₹{price}</p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
        <button className="px-3 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

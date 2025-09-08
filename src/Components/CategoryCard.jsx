import { Link } from "react-router-dom";

export default function CategoryCard({ image, title, id }) {
  return (
    <Link
      to={`/category/${id}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group block"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition"
        />
      </div>

      {/* Details */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-1">Explore the best in {title}</p>
      </div>
    </Link>
  );
}

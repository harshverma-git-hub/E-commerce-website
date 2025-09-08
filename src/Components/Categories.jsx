import CategoryCard from "./CategoryCard";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Men's Fashion",
      image: "https://picsum.photos/400/250?random=11",
    },
    {
      id: 2,
      title: "Women's Fashion",
      image: "https://picsum.photos/400/250?random=12",
    },
    {
      id: 3,
      title: "Electronics",
      image: "https://picsum.photos/400/250?random=13",
    },
    {
      id: 4,
      title: "Accessories",
      image: "https://picsum.photos/400/250?random=14",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Shop by Categories
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              title={cat.title}
              image={cat.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
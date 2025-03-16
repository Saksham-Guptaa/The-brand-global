import React from "react";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "Business",
    image:
      "https://images.unsplash.com/photo-1556740772-1a741367b93e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Entrepreneur",
    image:
      "https://plus.unsplash.com/premium_photo-1661661948975-7cc4152804c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RW50cmVwcmVuZXVyfGVufDB8fDB8fHww",
  },
  {
    name: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGlmZXN0eWxlfGVufDB8fDB8fHww",
  },
  {
    name: "Marketing",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFya2V0aW5nfGVufDB8fDB8fHww",
  },
  {
    name: "News",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Press Release",
    image:
      "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByZXNzJTIwUmVsZWFzZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Startup",
    image:
      "https://plus.unsplash.com/premium_photo-1678453146852-63702e69c26d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1581404917879-53e19259fdda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdvbWVufGVufDB8fDB8fHww",
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-8 lg:px-40">
      <h1 className="text-2xl lg:text-4xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative w-full h-24 sm:h-24 md:h-20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <span className="text-white font-semibold text-xs sm:text-sm md:text-base cursor-pointer">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;

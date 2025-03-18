import React from 'react';

const Designs = () => {
  const designs = [
    {
      category: "Living Room",
      designs: [
        {
          title: "Contemporary Living",
          image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
        },
        {
          title: "Scandinavian Style",
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      category: "Kitchen",
      designs: [
        {
          title: "Modern Kitchen",
          image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
        },
        {
          title: "Minimalist Kitchen",
          image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      category: "Bedroom",
      designs: [
        {
          title: "Luxury Bedroom",
          image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80"
        },
        {
          title: "Cozy Bedroom",
          image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?auto=format&fit=crop&q=80"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">Our Designs</h1>
        
        {designs.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.designs.map((design, designIndex) => (
                <div key={designIndex} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <h3 className="text-white text-2xl font-semibold">{design.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;
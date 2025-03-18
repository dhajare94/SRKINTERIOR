import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
      title: "Modern Living",
      category: "Residential"
    },
    {
      image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80",
      title: "Serene Bedroom",
      category: "Interior Design"
    },
    {
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
      title: "Minimal Kitchen",
      category: "Renovation"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24">
          <div className="rounded-xl-custom overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
              alt="Hero"
              className="w-full h-[80vh] object-cover"
            />
          </div>
          <div className="mt-8 max-w-2xl">
            <h1 className="text-4xl font-light text-neutral-800 mb-4">
              Creating timeless spaces that inspire and elevate everyday living
            </h1>
            <p className="text-neutral-600 mb-6">
              We blend contemporary design with natural elements to create harmonious interiors that reflect your unique style and needs.
            </p>
            <a
              href="/consultation"
              className="inline-block px-12 py-4 bg-[#f5deb3] text-neutral-800 rounded-full hover:bg-[#e0c6a7] transition-colors duration-300"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div className="my-24 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1616587223057-8bb133a97eb2?auto=format&fit=crop&q=80" 
              alt="About Us" 
              className="rounded-xl-custom w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light text-neutral-800 mb-4">About Us</h2>
            <p className="text-neutral-600">
              At <strong>SRK Interiors</strong>, we specialize in high-quality <strong>renovations</strong> and <strong>interior designing</strong>. 
              Our mission is to transform your spaces with creativity, functionality, and elegance. Whether it’s a home, office, or commercial project, 
              we bring expertise and passion to every detail.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group">
              <div className="rounded-xl-custom overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-light text-neutral-800">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
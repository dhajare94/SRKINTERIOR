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
            <p className="text-neutral-600">
              We blend contemporary design with natural elements to create harmonious interiors that reflect your unique style and needs.
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

        {/* About Us Section */}
        <div className="my-24 text-center">
          <h2 className="text-3xl font-light text-neutral-800 mb-4">About Us</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            At <strong>SRK Interiors</strong>, we specialize in high-quality <strong>renovations</strong> and <strong>interior designing</strong>. 
            Our mission is to transform your spaces with creativity, functionality, and elegance. Whether it’s a home, office, or commercial project, 
            we bring expertise and passion to every detail.
          </p>
        </div>

        {/* CTA Section */}
        <div className="my-24 text-center">
          <Link
            to="/contact"
            className="inline-block px-12 py-4 border border-neutral-300 text-neutral-800 rounded-full hover:bg-neutral-800 hover:text-white transition-colors duration-300"
          >
            Start Your Project
          </Link>
          <div className="mt-6">
            <Link
              to="/consultation"
              className="inline-block px-12 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

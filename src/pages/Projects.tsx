import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Minimalist Haven",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      description: "A serene living space embracing minimalist principles and natural materials."
    },
    {
      title: "Urban Sanctuary",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
      description: "Modern urban apartment transformed into a peaceful retreat."
    },
    {
      title: "Contemporary Living",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
      description: "Complete renovation focusing on open spaces and natural light."
    },
    {
      title: "Elegant Simplicity",
      category: "Design",
      image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80",
      description: "Sophisticated design emphasizing clean lines and subtle textures."
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-neutral-800 mb-16">Selected Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="rounded-xl-custom overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-neutral-500 mb-2">{project.category}</p>
                <h3 className="text-xl font-light text-neutral-800 mb-2">{project.title}</h3>
                <p className="text-neutral-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
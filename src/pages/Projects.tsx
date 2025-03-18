import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Home Renovation",
      category: "Residential",
      image: "https://i.ibb.co/zVmMXrL2/1.jpg",
      description: "Complete renovation of a 2BHK House in Platinum Experia Kalamboli"
    },
    {
      title: "Renovation of a 3BHK",
      category: "Interior Design",
      image: "https://i.ibb.co/9mMmcGvp/2.jpg",
      description: "Luxurious Transformation of a 3BHK Residence in Platinum Experia Kalamboli."
    },
    {
      title: "2BHK Interior Design",
      category: "Renovation",
      image: "https://media.designcafe.com/wp-content/uploads/2020/09/25151904/2bhk-apartment-living-room-interior-design.jpg",
      description: "Exquisite 2BHK Luxury Suite Design in Krishna Apartment Kamothe."
    },
    {
      title: "2BHK Interior Renovate",
      category: "Residental",
      image: "https://media.designcafe.com/wp-content/uploads/2021/06/30163556/modern-2bhk-kitchen-design-with-breakfast-countertop-with-two-tall-chairs.jpg",
      description: "Sophisticated design in Galaxy Apartment Kharghar."
    },
    {
      title: "2BHK Interior Designed",
      category: "Residental",
      image: "https://media.designcafe.com/wp-content/uploads/2021/08/02080107/living-room-3bhk-interior-design-with-brick-wall-cladding.jpg",
      description: "Industrial loft transformed into modern living space in Luxury Apartment Chunabhatti."
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
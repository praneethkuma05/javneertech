import React from 'react';
import { Code, Users, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-16 h-16 text-blue-600" />,
      title: "Software Development",
      description: "We build custom software solutions tailored to your business needs, from web and mobile applications to enterprise systems, ensuring scalability and efficiency."
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: "IT Consulting",
      description: "Our experts provide strategic IT guidance, helping businesses optimize technology, improve workflows, and implement innovative solutions for long-term success."
    },
    {
      icon: <Cloud className="w-16 h-16 text-blue-600" />,
      title: "Cloud Hosting",
      description: "Secure, scalable, and high-performance cloud hosting solutions that ensure seamless access, data protection, and efficient infrastructure management."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-600 mb-4">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              {/* Service Image/Icon */}
              <div className="mb-8 relative">
                <div className="bg-gray-100 rounded-lg p-8 group-hover:bg-gray-200 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Visual Element */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-gray-600 text-sm">Crafting digital solutions for tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
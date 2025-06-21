import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Javneer Technologies provided exceptional IT support, streamlining our operations seamlessly. Their expertise and dedication make them a trusted partner.",
      client: "TechCorp",
      position: "CTO"
    },
    {
      quote: "Their team transformed our cloud infrastructure with top-tier solutions. Javneer Technologies delivers reliable, efficient, and scalable IT services.",
      client: "InnovateSoft",
      position: "CEO"
    },
    {
      quote: "Outstanding service and 24/7 support! Javneer Technologies helped us optimize our IT strategy, ensuring smooth and secure operations.",
      client: "Digital Solutions Inc",
      position: "IT Director"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-600 mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <div className="relative h-64 bg-gradient-to-r from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Quote className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-light">Building lasting partnerships through technology</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-600 bg-opacity-20 rounded-full"></div>
              <div className="absolute top-1/2 right-8 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 opacity-50" />
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-blue-600">
                  {testimonial.client}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to join our satisfied clients?</p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
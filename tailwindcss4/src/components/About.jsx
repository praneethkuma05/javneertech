import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-blue-600">
              The Javneer Way
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Javneer Technologies is a fast-growing Information Technology 
                services and end-to-end staffing solutions firm offering 
                exceptional consulting and recruiting services.
              </p>
              
              <p>
                Our mission is to empower businesses by providing innovative 
                IT solutions and connecting them with top-tier talent. We are 
                committed to delivering excellence and fostering long-term 
                partnerships with our clients.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-8">
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-2 bg-blue-500 rounded w-2/3"></div>
                    <div className="h-2 bg-gray-600 rounded w-1/3"></div>
                    <div className="h-2 bg-green-500 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="bg-black bg-opacity-50 backdrop-blur-sm p-6">
                <div className="text-white space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">System Online</span>
                  </div>
                  <div className="text-xs text-gray-300">
                    Performance: Optimal | Security: Active | Uptime: 99.9%
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              JT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
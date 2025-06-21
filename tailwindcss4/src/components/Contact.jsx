import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Talk To Us</h2>
          <p className="text-xl text-blue-100">
            Feel free to call, email, or hit us up on our social media accounts.
          </p>
        </div>

        <div className="text-center mb-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200">
            CONTACT US
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-100">ADDRESS</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">
                    1-30-53, Plot No 61, Military Dairy Farm Road,
                  </p>
                  <p className="text-lg">Tirumal Nagar, Kanajiguda, 500015</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-100">EMAIL</h3>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-300" />
                <a
                  href="mailto:javneer.tech@gmail.com"
                  className="text-lg hover:text-blue-200 transition-colors"
                >
                  javneer.tech@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-100">PHONE</h3>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-blue-300" />
                <a
                  href="tel:8309570168"
                  className="text-lg hover:text-blue-200 transition-colors"
                >
                  8309570168
                </a>
              </div>
            </div>
          </div>

          {/* Social Media and Additional Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-100">CONNECT WITH US</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-200 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-200 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-200 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-blue-100">Get In Touch</h4>
              <p className="text-blue-100 text-base">
                We’re always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

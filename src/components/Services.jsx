import React from 'react';
import { Code, Users, Cloud } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Code className="service-icon" />,
      title: "Software Development",
      description: "We build custom software solutions tailored to your business needs, from web and mobile applications to enterprise systems, ensuring scalability and efficiency."
    },
    {
      icon: <Users className="service-icon" />,
      title: "IT Consulting",
      description: "Our experts provide strategic IT guidance, helping businesses optimize technology, improve workflows, and implement innovative solutions for long-term success."
    },
    {
      icon: <Cloud className="service-icon" />,
      title: "Cloud Hosting",
      description: "Secure, scalable, and high-performance cloud hosting solutions that ensure seamless access, data protection, and efficient infrastructure management."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">What We Offer</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg">
                  {service.icon}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <div className="services-badge">
            <div className="services-badge-content">
              <div className="pulse-dot"></div>
              <span className="services-badge-text">
                Crafting digital solutions for tomorrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

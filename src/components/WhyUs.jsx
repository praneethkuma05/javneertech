import React from 'react';
import './WhyUs.css'; // ✅ Import the external CSS

const WhyUs = () => {
  const features = [
    {
      icon: (
        <svg className="whyus-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Expert IT Solutions",
      description: "We provide cutting-edge technology solutions tailored to your business needs, ensuring efficiency, scalability, and security."
    },
    {
      icon: (
        <svg className="whyus-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to assist with any IT challenges, ensuring seamless business operations."
    },
    {
      icon: (
        <svg className="whyus-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Seamless Integration",
      description: "Our services integrate effortlessly with your existing infrastructure, optimizing workflows and enhancing productivity."
    }
  ];

  return (
    <section id="why-us" className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-header">
          <h2 className="whyus-title">Why Javneer?</h2>
        </div>

        <div className="whyus-grid">
          {features.map((feature, index) => (
            <div key={index} className="whyus-item">
              <div className="whyus-icon-wrapper">
                <div className="whyus-icon-bg">
                  {feature.icon}
                </div>
              </div>
              <div className="whyus-content">
                <h3 className="whyus-feature-title">{feature.title}</h3>
                <p className="whyus-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="whyus-decor">
          <div className="decor-dot" style={{ animationDelay: '0s' }}></div>
          <div className="decor-dot" style={{ animationDelay: '0.1s' }}></div>
          <div className="decor-dot" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css'; // ✅ Import the external CSS

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
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
        </div>

        {/* Hero Image */}
        <div className="testimonial-hero">
          <div className="testimonial-hero-inner">
            <div className="testimonial-hero-overlay" />
            <div className="testimonial-hero-content">
              <Quote className="testimonial-quote-icon" />
              <p className="testimonial-quote-text">Building lasting partnerships through technology</p>
            </div>
            <div className="testimonial-decor decor-top-left"></div>
            <div className="testimonial-decor decor-bottom-right"></div>
            <div className="testimonial-decor decor-mid-right"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-icon-wrapper">
                <Quote className="testimonial-icon" />
              </div>
              <blockquote className="testimonial-text">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-meta">
                <div className="testimonial-client">{testimonial.client}</div>
                <div className="testimonial-position">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="testimonial-cta">
          <p className="testimonial-cta-text">Ready to join our satisfied clients?</p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="testimonial-cta-button"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

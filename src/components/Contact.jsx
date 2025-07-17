// components/Contact.jsx
import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-inner">
          <div className="contact-button-wrapper">
            <Link to="/contact">
              <button className="contact-button">CONTACT US</button>
            </Link>
          </div>

          <div className="contact-right">
            <div className="get-in-touch-box">
              <h4 className="get-in-touch-title">Get In Touch</h4>
              <p className="get-in-touch-text">
                We’re always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

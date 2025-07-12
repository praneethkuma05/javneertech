import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    about: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\n\nAbout:\n${formData.about}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=javneer.tech@gmail.com&su=${subject}&body=${body}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-inner">
          {!showForm ? (
            <div className="contact-button-wrapper">
              <button className="contact-button" onClick={() => setShowForm(true)}>
                CONTACT US
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Your Email or Phone"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <textarea
                name="about"
                placeholder="Tell us about yourself..."
                rows="4"
                value={formData.about}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="contact-button">
                SEND MESSAGE
              </button>
            </form>
          )}

          <div className="contact-right">
            <div className="get-in-touch-box">
              <h4 className="get-in-touch-title">Get In Touch</h4>
              <p className="get-in-touch-text">
                We’re always open to discussing new projects, creative ideas,
                or opportunities to be part of the vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

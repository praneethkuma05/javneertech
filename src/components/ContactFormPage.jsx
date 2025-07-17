// pages/ContactFormPage.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactFormPage.css';
import { FiCheckCircle, FiXCircle, FiMail } from 'react-icons/fi';

const ContactFormPage = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidName = (name) => /^[a-zA-Z\s]{2,}$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.user_name.value.trim();
    const email = form.user_contact.value.trim();

    if (!isValidName(name)) {
      setError('Please enter a valid name.');
      setStatus('');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      setStatus('');
      return;
    }

    setError('');

    emailjs.sendForm(
      'service_918lozx',
      'template_j04ek7c',
      formRef.current,
      'Z9UdL2SlGAY0R-I2I'
    ).then(
      () => {
        setStatus('Your message has been sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        console.error('Email sending error:', error);
        setError('Something went wrong. Please try again later.');
        setStatus('');
      }
    );
  };

  return (
    <div className="contact-form-page">
      <div className="contact-form-container">
        <h2 className="form-title">
          <FiMail className="form-title-icon" />
          Get in Touch
        </h2>
        <p className="form-subtitle">
          Fill in the form below and we'll get back to you shortly.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="user_name" placeholder="Full Name" required />
          <input type="text" name="user_contact" placeholder="Email Address" required />
          <textarea
            name="message"
            placeholder="About you!"
            rows="9"
            required
          ></textarea>

          <button type="submit" className="contact-button">Send Message</button>

          {error && (
            <div className="form-status error">
              <FiXCircle className="status-icon" />
              {error}
            </div>
          )}

          {status && (
            <div className="form-status success">
              <FiCheckCircle className="status-icon" />
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormPage;

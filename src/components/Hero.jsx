import React from 'react';
import './Hero.css';
import Javlogo from '../assets/Javlogo.png'; // Ensure this path is correct

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={Javlogo} alt="Javlogo" className="hero-logo-img" />
        <h1 className="hero-heading"></h1>
        <button onClick={() => scrollToSection('about')} className="hero-button">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Hero.css';

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
        <div className="hero-badge-wrapper">
          <div className="hero-logo-badge">JT</div>
          <div className="hero-company-name">JAVNEER TECHNOLOGIES</div>
        </div>
        <h1 className="hero-heading">
          Leave the<br />
          <span>tech to us.</span>
        </h1>
        <button onClick={() => scrollToSection('about')} className="hero-button">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default Hero;

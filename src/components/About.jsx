import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Text Content */}
          <div className="about-text-block">
            <h2 className="about-title">The Javneer Way</h2>
            <div className="about-description">
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

          {/* Stylized Box */}
          <div className="about-box-wrapper">
            <div className="about-box">
              <div className="about-box-top">
                <div className="box-indicators">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="box-bars">
                  <div className="bar short"></div>
                  <div className="bar shorter"></div>
                  <div className="bar blue"></div>
                  <div className="bar tiny"></div>
                  <div className="bar green-bar"></div>
                </div>
              </div>
              <div className="about-box-bottom">
                <div className="status">
                  <div className="status-dot"></div>
                  <span className="status-text">System Online</span>
                </div>
                <div className="status-subtext">
                  Performance: Optimal | Security: Active | Uptime: 99.9%
                </div>
              </div>
            </div>
            <div className="jt-badge">JT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

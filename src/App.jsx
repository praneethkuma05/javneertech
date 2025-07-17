// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ContactFormPage from './components/ContactFormPage'; // new route page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <About />
            <Services />
            <WhyUs />
            <Testimonials />
            <Contact />
          </>
        } />

        {/* Contact form page */}
        <Route path="/contact" element={<ContactFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;

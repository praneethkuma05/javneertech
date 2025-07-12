import About from "./components/About";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
function App() {

  return (
    <div className="App">
    <Header/>
    <Hero/>
      <About/>
      <Services/>
      <WhyUs/>
      <Testimonials/>
      <Contact />
    </div>
  )
}

export default App

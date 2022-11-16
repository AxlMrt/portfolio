import React from 'react';
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  React.useEffect(() => {
    Aos.init({
      once:true,
    })
  })

  return (
    <div className="min-h-screen pt-20 px-3 sm: px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

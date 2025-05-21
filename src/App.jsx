import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import FooterSection from './components/FooterSection';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for changing header appearance on scroll
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'events', 'get-involved', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header isScrolled={isScrolled} />
      
      <div id="home" className="pt-16">
        <HeroSection />
      </div>
      
      <Navigation 
        activeSection={activeSection} 
        onNavClick={handleNavClick}
      />
      
      <div id="about" className="scroll-mt-20">
        <AboutSection />
      </div>
      
      <div id="events" className="scroll-mt-20">
        <EventsSection />
      </div>
      
      <div id="get-involved" className="scroll-mt-20">
        <GetInvolvedSection />
      </div>
      
      <div id="contact" className="scroll-mt-20">
        <FooterSection />
      </div>
    </>
  );
}

export default App;
import React, { useState, useEffect, useMemo } from 'react';
import { LanguageContext } from './components/Generic/Language_context';
import './App.scss';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './components/Contact/Contact';

function App() {
  const sectionIds = useMemo(() => ['header', 'presentation', 'services', 'skills', 'projects', 'contact'], []);

  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      //console.log ('scrollY : ' + window.scrollY);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const section = document.getElementById(sectionId);
        //console.log(sectionId + ' ' + section.offsetTop);
        if (section.offsetTop <= (scrollY+500)) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return (
    <LanguageContext>
    <ParallaxProvider>
      <div>
        <Header activeSection={activeSection} />
        <div className='body'>
          <Presentation />
          <Services />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        
      </div>
    </ParallaxProvider>
    </LanguageContext>
  );
}

export default App;


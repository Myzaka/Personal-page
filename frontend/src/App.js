/*import React from 'react';
import { LanguageContext } from './components/Generic/Language_context';
import './App.css';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Parallax from './components/Generic/Parallax';

function App() {
  return (
    <LanguageContext>
      <div>
        <Header language={'fr'}/>
        <div className='body'>
            <Presentation language={'fr'} />
            <Parallax />
            <Services language={'fr'} />
            <Skills language={'fr'} />
        </div>
        <Footer language={'fr'} />
      </div>
    </LanguageContext>
  );
}

export default App;*/

import React, { useState, useEffect, useMemo } from 'react';
import { LanguageContext } from './components/Generic/Language_context';
import './App.css';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Parallax from './components/Generic/Parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import Component2 from './components/Generic/Parallax2';
import PopUpWindow from './components/Generic/Modal/Modal';

function App() {
  const sectionIds = useMemo(() => ['header', 'presentation', 'services', 'skills'], []);

  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const section = document.getElementById(sectionId);
        if (section.offsetTop <= scrollY) {
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
          <Component2 />
          <PopUpWindow />
          <Services />
          <Skills />
          <Projects />
          <Footer />
        </div>
        
      </div>
    </ParallaxProvider>
    </LanguageContext>
  );
}

export default App;


import React from 'react';
import { LanguageContext } from './components/Generic/Language_context';
import './App.css';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageContext>
      <div>
        <Header language={'fr'}/>
        <Presentation language={'fr'} />
        <Services language={'fr'} />
        <Skills language={'fr'} />
        <Footer language={'fr'} />
      </div>
    </LanguageContext>
  );
}

export default App;

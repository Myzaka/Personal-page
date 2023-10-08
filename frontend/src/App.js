import React from 'react';
import { LanguageContext } from './components/Generic/Language_context';
import './App.css';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Services from './components/Services/Services';
import Competences from './components/Competences/Competences';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageContext>
      <div>
        <Header language={'fr'}/>
        <Presentation language={'fr'} />
        <Services language={'fr'} />
        <Competences language={'fr'} />
        <Footer language={'fr'} />
      </div>
    </LanguageContext>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Services from './components/Services/Services';
import Competences from './components/Competences/Competences';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div>
        <Header language={'fr'}/>
        <Presentation language={'fr'} />
        <Services language={'fr'} />
        <Competences language={'fr'} />
        <Footer language={'fr'} />
      </div>
  );
}

export default App;

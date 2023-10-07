import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Services from './components/Services/Services';

function App() {
  return (
      <div>
        <Header language={'fr'}/>
        <Presentation language={'fr'} />
        <Services language={'fr'} />
      </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';

function App() {
  return (
      <body>
        <Header language={'fr'}/>
        <Presentation language={'fr'} />
      </body>
  );
}

export default App;

import React, { useState } from 'react';
import './Selector_style.scss';
import texts from './Selector_text.json';
import { useLang } from '../../Generic/Language_context';
import Projects from '../../Projects/Projects';

export default function Selector() {
  const { language } = useLang();
  const text = texts[language];

  // État local pour suivre l'option sélectionnée
  const [selectedOption, setSelectedOption] = useState('Tous');

  // Fonction pour mettre à jour l'option sélectionnée lorsqu'un bouton est cliqué
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <h2 className='title'>{text['title']}</h2>
      <section className='projects' id='projects'>
        <div className='Selector' id='Selector'>
          <button className='Selector__button' onClick={() => handleButtonClick('Tous')}>{text.button1}</button>
          <button className='Selector__button' onClick={() => handleButtonClick('Gestion')}>{text.button2}</button>
          <button className='Selector__button' onClick={() => handleButtonClick('Developpement')}>{text.button3}</button>
        </div>
        <div className='projects__list'>
          <Projects 
            filter= {selectedOption}
          />
        </div>
      </section>
    </>
  );
}

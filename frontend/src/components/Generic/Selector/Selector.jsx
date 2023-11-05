/*import React, { useState } from 'react';
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
*/

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

  // État local pour suivre l'état de chaque bouton
  const [buttonStates, setButtonStates] = useState({
    Tous: true,
    Gestion: false,
    Developpement: false
  });

  // Fonction pour mettre à jour l'état des boutons et l'option sélectionnée lorsqu'un bouton est cliqué
  const handleButtonClick = (option) => {
    // Mettre à jour l'état des boutons
    setButtonStates({
      Tous: option === 'Tous',
      Gestion: option === 'Gestion',
      Developpement: option === 'Developpement'
    });

    // Mettre à jour l'option sélectionnée
    setSelectedOption(option);
  };

  return (
    <>
      <p className="anchor-offset" id='anchor3'></p>
      <h2 className='title'>{text['title']}</h2>
      <section className='projects' id='projects'>
        <div className='Selector' id='Selector'>
          <button className={`Selector__button ${buttonStates.Tous ? 'Selector__button--active' : ''}`} onClick={() => handleButtonClick('Tous')}>{text.button1}</button>
          <button className={`Selector__button ${buttonStates.Gestion ? 'Selector__button--active' : ''}`} onClick={() => handleButtonClick('Gestion')}>{text.button2}</button>
          <button className={`Selector__button ${buttonStates.Developpement ? 'Selector__button--active' : ''}`} onClick={() => handleButtonClick('Developpement')}>{text.button3}</button>
        </div>
        <div className='projects__list'>
          <Projects filter={selectedOption} />
        </div>
      </section>
    </>
  );
}

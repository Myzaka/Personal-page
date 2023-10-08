import React, { useState } from 'react';
import { useLang } from '../Generic/Language_context';
import './Language_style.scss';

export default function LanguageSelector() {
  const { changeLanguage } = useLang();
  const [selectedButton, setSelectedButton] = useState('fr');

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setSelectedButton(newLanguage);
  };

  return (
    <div className="languageSelector">
      <button
        className={`languageSelector__button ${
          selectedButton === 'fr' ? 'languageSelector__button--selected' : ''
        }`}
        onClick={() => handleLanguageChange('fr')}
      >
        FR
      </button>
      <button
        className={`languageSelector__button ${
          selectedButton === 'en' ? 'languageSelector__button--selected' : ''
        }`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
    </div>
  );
}



  




import React from 'react';
import { useLang } from '../Generic/Language_context';
import './Language_style.scss'

export default function LanguageSelector() {

  const { changeLanguage } = useLang();

  return (
    <div>
      <button onClick={() => changeLanguage('fr')}>FR</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
}



  




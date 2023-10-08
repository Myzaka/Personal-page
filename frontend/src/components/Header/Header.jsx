import React from 'react';
import './Header_style.scss';
import texts from './Header_text.json';
import LanguageSelector from '../Language/Language';
import { useLang } from '../Generic/Language_context';


export default function Header() {
  const { language } = useLang();
  const text = texts[language];

  return (
    <header className='header'>
      <ul className="header__list">
        <li className="header__list--item">{text.presentation}</li>
        <li className="header__list--item">{text.services}</li>
        <li className="header__list--item">{text.skills}</li>
        <li className="header__list--item">{text.projects}</li>
        <li className="header__list--item">{text.contact}</li>
      </ul>
      <LanguageSelector />
    </header>
  );
}


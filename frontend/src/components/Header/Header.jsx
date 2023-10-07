import React from 'react';
import './Header_style.scss';
import texts from './Header_text.json';
import LanguageSelector from '../Language/Language';

export default function Header({ language }) {
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

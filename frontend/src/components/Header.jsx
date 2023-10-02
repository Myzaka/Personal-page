import React from 'react';
import '../style/Header_style.scss';
import texts from './Header_text.json';

export default function Header({ language }) {
  const text = texts[language];

  return (
    <div className='header'>
      <ul className="header__list">
        <li className="header__list--item">{text.presentation}</li>
        <li className="header__list--item">{text.services}</li>
        <li className="header__list--item">{text.skills}</li>
        <li className="header__list--item">{text.projects}</li>
        <li className="header__list--item">{text.contact}</li>
      </ul>
      <ul className="header__language">
        <li className="header__language--item">FR</li>
        <li className="header__language--item">EN</li>
      </ul>
    </div>
  );
}

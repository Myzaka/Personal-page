/*import React from 'react';
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
}*/

/*import React from 'react';
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
        <li className="header__list--item"><a href="#presentation">{text.presentation}</a></li>
        <li className="header__list--item"><a href="#services">{text.services}</a></li>
        <li className="header__list--item"><a href="#skills">{text.skills}</a></li>
        <li className="header__list--item"><a href="#projects">{text.projects}</a></li>
        <li className="header__list--item"><a href="#contact">{text.contact}</a></li>
      </ul>
      <LanguageSelector />
    </header>
  );
}
*/

import React, { useState } from 'react';
import './Header_style.scss'; // Utilisez le fichier CSS pour les styles
import texts from './Header_text.json';
import LanguageSelector from '../Language/Language';
import { useLang } from '../Generic/Language_context';
import Anchor from './Anchor';

export default function Header() {
  const { language } = useLang();
  const text = texts[language];

  // État pour suivre l'élément actif
  const [activeItem, setActiveItem] = useState(null);

  // Gestionnaire de clic pour les liens
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className='header'>
      <ul className="header__list">
        <li className={`header__list--item ${activeItem === 'presentation' ? 'active' : ''}`}>
          <a href="#presentation" onClick={() => handleItemClick('presentation')}>{text.presentation}</a>
        </li>
        <li className={`header__list--item ${activeItem === 'services' ? 'active' : ''}`}>
          <a href="#services" onClick={() => handleItemClick('services')}>{text.services}</a>
        </li>
        <li className={`header__list--item ${activeItem === 'skills' ? 'active' : ''}`}>
          <a href="#skills" onClick={() => handleItemClick('skills')}>{text.skills}</a>
        </li>
        <li className={`header__list--item ${activeItem === 'projects' ? 'active' : ''}`}>
          <a href="#projects" onClick={() => handleItemClick('projects')}>{text.projects}</a>
        </li>
        <li className={`header__list--item ${activeItem === 'contact' ? 'active' : ''}`}>
          <a href="#contact" onClick={() => handleItemClick('contact')}>{text.contact}</a>
        </li>
      </ul>
      <Anchor label='presentation'/>
      <Anchor label='services'/>
      <Anchor label='skills'/>
      <Anchor label='projects'/>
      <Anchor label='contact'/>
      <LanguageSelector />
    </header>
  );
}
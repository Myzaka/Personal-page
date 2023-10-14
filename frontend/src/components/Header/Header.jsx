/*import React, { useState } from 'react';
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
}*/

/*import React, { useState, useEffect } from 'react';
import './Header_style.scss';
import texts from './Header_text.json';
import LanguageSelector from '../Language/Language';
import { useLang } from '../Generic/Language_context';
import Anchor from './Anchor';

export default function Header({ activeSection }) {
  const { language } = useLang();
  const text = texts[language];

  // État pour suivre l'élément actif
  const [activeItem, setActiveItem] = useState(null);

  // Utilisez useEffect pour mettre à jour activeItem en fonction de activeSection
  useEffect(() => {
    if (activeSection === 'presentation') {
      setActiveItem('presentation');
    } else if (activeSection === 'services') {
      setActiveItem('services');
    } else if (activeSection === 'skills') {
      setActiveItem('skills');
    } else if (activeSection === 'projects') {
      setActiveItem('projects');
    } else if (activeSection === 'contact') {
      setActiveItem('contact');
    }
  }, [activeSection]);

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
}*/

import React from 'react';
import './Header_style.scss';
import LanguageSelector from '../Language/Language';
import Anchor from './Anchor';

export default function Header({ activeSection }) {

  return (
    <header className='header'>
      <Anchor label='presentation' active={activeSection === 'presentation' ? 'Y' : 'N'} />
      <Anchor label='services' active={activeSection === 'services' ? 'Y' : 'N'} />
      <Anchor label='skills' active={activeSection === 'skills' ? 'Y' : 'N'} />
      <Anchor label='projects' active={activeSection === 'projects' ? 'Y' : 'N'} />
      <Anchor label='contact' active={activeSection === 'contact' ? 'Y' : 'N'} />

      <LanguageSelector />
    </header>
  );
}


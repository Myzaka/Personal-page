import React from 'react';
import './Header_style.scss';
import LanguageSelector from '../Language/Language';
import Anchor from './Anchor';
import Burger from './Burger';

export default function Header({ activeSection }) {

  return (
    <header className='header'>
      <Burger />
      <div className='header__show'>
        <Anchor label='presentation' active={activeSection === 'presentation' ? 'Y' : 'N'} />
        <Anchor label='services' active={activeSection === 'services' ? 'Y' : 'N'} />
        <Anchor label='projects' active={activeSection === 'projects' ? 'Y' : 'N'} />
        <Anchor label='contact' active={activeSection === 'contact' ? 'Y' : 'N'} />
      </div>
      <LanguageSelector />
    </header>
  );
}


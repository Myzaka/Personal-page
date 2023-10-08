import React from 'react';
import './Footer_style.scss';
import texts from './Footer_text.json';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


export default function Footer({ language }) {
  const text = texts[language];

  return (
    <footer className='footer'>
      
      <div className='icons'>
        <a className='icons__Github' href="https://github.com/Myzaka" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a className='icons__LinkedIn' href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-semik-66841049/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      
      <p className="footer__list">
        {text.footer}
      </p>
    </footer>
  );
}

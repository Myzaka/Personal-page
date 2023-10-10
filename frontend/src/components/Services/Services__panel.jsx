import React, { useState } from 'react';
import './Services_style.scss';
import texts from './Services_text.json';
import { useLang } from '../Generic/Language_context';

export default function ServicesPanel({ title, sentence }) {
  const { language } = useLang();
  const text = texts[language];
  const sentences = sentence.split('.');
  const filteredSentences = sentences.filter(e => e.trim() !== '');

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='services__panel'>
      <h3
        className={`services__panel--title ${isHovered ? 'services__panel--titleColored' : 'services__panel--title'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text[title]}
      </h3>
        <div className={`${
                isHovered ? 'services__panel--textVisible' : 'services__panel--textHidden'
              }`}>
          {filteredSentences.map((e, index) => (
            <p
              key={index}
              /*className={`${
                isHovered ? 'services__panel--textVisible' : 'services__panel--textHidden'
              }`}*/
            >
              {e.trim()}.
            </p>
          ))}
        </div>
      
    </div>
  );
}

import React, { useState } from 'react';
import './Block_style.scss';

export default function Block({ title, sentence }) {
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
        {title}
      </h3>
        <div className={`${
                isHovered ? 'services__panel--textVisible' : 'services__panel--textHidden'
              }`}>
          {filteredSentences.map((e, index) => (
            <p
              key={index}
            >
              {e.trim()}.
            </p>
          ))}
        </div>
      
    </div>
  );
}

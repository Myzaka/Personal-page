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
    <div className='block'>
      <h3
        className={`block__title ${isHovered ? 'block__titleColored' : 'block__title'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </h3>
        <div className={`${
                isHovered ? 'block__textVisible' : 'block__textHidden'
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

import React, { useState } from 'react';
import './Block_style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'
import { faDigging } from '@fortawesome/free-solid-svg-icons'

const compass = <FontAwesomeIcon icon={faCompassDrafting} />
const digging = <FontAwesomeIcon icon={faDigging} />

/*export default function Block({ title, sentence }) {
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
}*/

function Block({ title, sentence, icon }) {
  const sentences = sentence.split('.');
  const filteredSentences = sentences.filter(e => e.trim() !== '');
  return (
    <div className='block'>
      <div className='block__icon'>
        <i>{icon}</i>
      </div>
      <h2 className='block__title'>{title}</h2>
      {filteredSentences.map((e, index) => (
            <p
            className='block__body'
              key={index}
            >
              {e.trim()}.
            </p>
          ))}
    </div>
  );
}

export default Block;
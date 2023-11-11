import React, { useState } from 'react';
import './Disclaimer_style.scss';
import texts from './Disclaimer_text.json';
import { useLang } from '../../Generic/Language_context';

export default function Disclaimer() {
  const { language } = useLang();
  const text = texts[language];

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className='disclaimer'>
      <h3 className='disclaimer__text'>{text['title']}</h3>
      <button className='closeButton' onClick={handleClose}>
        X
      </button>
    </div>
  ) : null;
}

import React, { useEffect, useState } from 'react';
import './Parallax_style.scss';
import paysage from '../../assets/image/risk_map.png';
import { useLang } from '../Generic/Language_context';
//import texts from '../Services/Services_text.json';

const Parallax = ({ section }) => {
  const { language } = useLang();
  const texts = require(`../${section}/${section}_text.json`);
  console.log(texts);
  const text = texts[language];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
      <div className="parallax-container">
        <h2 className='parallax-container--title'>{text['title']}</h2>
        <div
          className="parallax-image"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <img src={paysage} alt="Parallax" />
        </div>
      </div>
  );
};

export default Parallax;

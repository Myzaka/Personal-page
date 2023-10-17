import React, { useEffect, useState } from 'react';
import './Parallax_style.scss';
import paysage from '../../assets/image/risk_map.png';

const Parallax = () => {
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
      <div
        className="parallax-image"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img src={paysage} alt="Parallax" />
      </div>
    </div>
  );
};

export default Parallax;

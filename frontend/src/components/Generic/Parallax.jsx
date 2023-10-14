import React, { useEffect, useState } from 'react';
import './Parallax_style.scss'; // Créez un fichier CSS pour le style de l'effet parallax

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
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img src='./paysage.png' alt="Parallax" />
      </div>
    </div>
  );
};

export default Parallax;

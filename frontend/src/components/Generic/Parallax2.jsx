import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
//import paysage from '../../../public/paysage.png';

const Parallax2 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/paysage.png';
  return (
    <ParallaxBanner
      layers={[{ image: imageUrl, speed: -15 }]}
      className="aspect-[2/1]"
    />
  );
};

export default Parallax2;
import { ParallaxBanner } from 'react-scroll-parallax';
import paysage from './paysage.png';

const Component2 = () => {
    return (
      <ParallaxBanner
        layers={[{ image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg", speed: -15 }]}
        className="aspect-[2/1]"
      />
    );
  };

  export default Component2;
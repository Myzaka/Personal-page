import React from 'react';
import bridge from '../../../assets/image/bridge.jpg';
import './Card.scss';
import PopUpWindow from '../Modal/Modal';

export default function CardPresentation() {
  return(<div className="Card">
    <img className="Card__image" src={bridge} alt ="bridge" />
    <div className='Card__overlay'>
      TEST
      <PopUpWindow />
    </div>
    <p className="Card__comment">
      TEST</p>
  </div>)
}
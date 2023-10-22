import React from 'react';
import test from './test.png';
import './Card.scss';
import PopUpWindow from '../Modal/Modal';

export default function CardPresentation() {
  return(<div className="Card">
    <img className="Card__image" src={test} alt ="test" />
    <div className='Card__overlay'>
      <PopUpWindow />
    </div>
    <p className="Card__comment--low">
      TEST</p>
  </div>)
}
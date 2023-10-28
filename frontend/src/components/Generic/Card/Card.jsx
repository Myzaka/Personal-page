import React from 'react';
import test from './test.png';
import './Card.scss';
import PopUpWindow from '../Modal/Modal';

export default function CardPresentation({title, description}) {
  return(<div className="Card">
    <img className="Card__image" src={test} alt ="test" />
    <div className='Card__overlay'>
      <PopUpWindow
        title={title}
        description={description}
      />
    </div>
    <div className="Card__comment--low">
      <h4>{description}</h4>
    </div>
  </div>)
}
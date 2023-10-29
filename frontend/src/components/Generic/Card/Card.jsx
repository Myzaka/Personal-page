import React from 'react';
import test from './test.png';
import './Card.scss';
import PopUpWindow from '../Modal/Modal';

export default function CardPresentation({type, description, image, description_long, tech, issues, skills, link}) {
  return(<div className="Card">
    <img className="Card__image" src={image} alt ={image} />
    <div className='Card__overlay'>
      <PopUpWindow
        type={type}
        description={description}
        image={image}
        description_long={description_long}
        tech={tech}
        issues={issues}
        skills={skills}
        link={link}
      />
    </div>
    <div className="Card__comment--low">
      <h4>{description}</h4>
    </div>
  </div>)
}
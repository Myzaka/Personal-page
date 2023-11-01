import React from 'react';
import { useLang } from '../../Generic/Language_context';
import './Card.scss';
import PopUpWindow from '../Modal/Modal';
import texts from '../../Projects/ProjectsList/ProjectisList_text.json';

export default function CardPresentation({project, image}) {
  const { language } = useLang();
  const text = texts[language];
  return(<div className="Card">
    <img className="Card__image" src={image} alt ={image} />
    <div className='Card__overlay'>
      <PopUpWindow
        project={project}
        image={image}
      />
    </div>
    <div className="Card__comment--low">
      <p>{text[project]['description_short']}</p>
    </div>
  </div>)
}
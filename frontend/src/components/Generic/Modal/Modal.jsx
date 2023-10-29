import { useState } from 'react';
import { useLang } from '../../Generic/Language_context';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss';
import arrow from '../../../assets/image/arrow-right-solid.png';
import texts from '../../Projects/ProjectsList/ProjectisList_text.json';
import labels from './Modal_text.json';

function PopUpWindow({type, description, image, description_long, tech, issues, skills, link}) {
  const [show, setShow] = useState(false);
  const { language } = useLang();
  const text = texts[language];
  const label = labels[language];

  return (
    <>
      <div variant="primary" className="button" onClick={() => setShow(true)}>
        <div className='button__text'>
          <div className="button__text--descriptionHigh">
            <h3>{description}</h3>
            <h4>{type}</h4>
          </div>
          <p className="button__text--descriptionLow">
             {label['label']}<img className='button__text--descriptionLowArrow' src={arrow} alt="arrow" />
          </p>   
        </div>
      </div>
      
      <Modal
        show={show}
        //size='xl'
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {description}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className='modal__container'>
              <img src={image} className='modal__container--image' alt={image} />
            </div>
            <div className='modal__text'>
              <p>{description_long}</p>
              <p>{tech}</p>
              <p>{issues}</p>
              <p>{skills}</p>
              <p>{link}</p>
            </div>
          </>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUpWindow;
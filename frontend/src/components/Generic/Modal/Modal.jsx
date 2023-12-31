import { useState } from 'react';
import { useLang } from '../../Generic/Language_context';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss';
import arrow from '../../../assets/image/arrow-right-solid.png';
import texts from '../../Projects/ProjectsList/ProjectisList_text.json';
import labels from './Modal_text.json';

function PopUpWindow({project, image}) {
  const [show, setShow] = useState(false);
  const { language } = useLang();
  const text = texts[language];
  const label = labels[language];

  return (
    <>
      <div variant="primary" className="button" onClick={() => setShow(true)}>
        <div className='button__text'>
          <div className="button__text--descriptionHigh">
            <h3>{text[project]['description_short']}</h3>
            <h4>{text[project]['type']}</h4>
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
          <Modal.Title className="modal__title" id="modal__title">
            {text[project]['description_short']}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className='modal__container'>
              <img src={process.env.PUBLIC_URL + '/' + image} className='modal__container--image' alt={image} />
            </div>
            <div className='modal__text'>
              <p className='modal__text--title'>{text[project]['description_label']}</p>
              <p>{text[project]['description_long']}</p>
              <p className='modal__text--title'>{text[project]['tech_label']}</p>
              <p>{text[project]['tech']}</p>
              <p className='modal__text--title'>{text[project]['issues_label']}</p>
              <p>{text[project]['issues']}</p>
              <p className='modal__text--title'>{text[project]['skills_label']}</p>
              <p>{text[project]['skills']}</p>
              <p className='modal__text--title'>{text[project]['link_label']}</p>
              <a href={text[project]['link']} className='modal__text--url'>{text[project]['link']}</a>
            </div>
          </>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUpWindow;
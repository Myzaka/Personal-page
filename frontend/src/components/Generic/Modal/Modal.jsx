import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.scss';
import arrow from '../../../assets/image/arrow-right-solid.png';

function PopUpWindow() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div variant="primary" className="button" onClick={() => setShow(true)}>
        <div className='button__text'>
          <p className="button__text--descriptionHigh">
            TEST
          </p>
          <p className="button__text--descriptionLow">
            Plus d'info <img className='button__text--descriptionLowArrow' src={arrow} alt="arrow" />
          </p>   
        </div>
      </div>
      
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUpWindow;
import React, { useState } from 'react';

const Modal = ({ handleClose, show, image }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className="modal-content">
          <img src={image} alt='Medicine Image' />
          <button onClick={handleClose}>Close</button>
        </div>
      </section>
    </div>
  );
};

export default Modal;




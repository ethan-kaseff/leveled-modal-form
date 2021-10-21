import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Form from './Form';

function FormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Form />
        </Modal>
      )}
    </>
  );
}

export default FormModal;
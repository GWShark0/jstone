import React from 'react';
import Modal from './Modal';

function TextModal(props) {
  return (
    <Modal {...props}>
      <h2>
        {'Text modal'}
      </h2>
    </Modal>
  );
}

export default TextModal;

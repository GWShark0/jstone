import React from 'react';
import { connect } from 'react-redux'
import AudioModal from './AudioModal';
import MediaModal from './MediaModal';
import TextModal from './TextModal';
import { closeModal } from '../../reducers/modals';

function ModalContainer(props) {
  const { modalType, closeModal } = props;

  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      <AudioModal
        open={modalType === 'audio'}
        onClose={handleClose}
      />
      <MediaModal
        open={modalType === 'media'}
        onClose={handleClose}
      />
      <TextModal
        open={modalType === 'text'}
        onClose={handleClose}
      />
    </>
  );
}

const mapStateToProps = state => ({ ...state.modals });
const mapDispatchToProps = { closeModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);

// action types
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// actions
export const openModal = (modalType) => ({
  type: OPEN_MODAL,
  modalType,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

// reducer
const initialState = {
  modalType: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalType: action.modalType,
      }
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

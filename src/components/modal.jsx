import React, { useEffect } from 'react';

const Modal = (props) => {
  const { deletedUserId, showModal, deleteRow } = props;

  useEffect(() => {
    const onKeyDown = (evt) => {
      if (evt.keyCode === 27) {
        showModal(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [showModal]);

  return (
    <div className="modal">
      <div className="modal__message">
        <p>Вы уверены, что хотите удалить пользователя?</p>
        <button
          className="modal__button"
          type="button"
          onClick={() => {
            deleteRow(deletedUserId);
            showModal(false)
          }}
        >
          Да
        </button>
        <button
          className="modal__button"
          type="button"
          onClick={() => showModal(false)}
        >
          Нет
        </button>
      </div>
    </div>
  );
};

export default Modal;

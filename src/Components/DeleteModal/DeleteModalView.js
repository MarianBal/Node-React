import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import './deleteModal.scss';

const DeleteModalView = ({ openDelete, toggleDelete, deleteUser }) => {
  const {
    deleteModal,
    deleteContainer,
    deleteTop,
    modalTitle,
    modalClose,
    deleteSubtitles,
    deleteFooter,
    modalCancel,
    modalDelete
  } = classNames.deleteModal;

  const {
    titleText,
    modalText,
    modalUndoneText,
    cancelText,
    deleteText,
    x
  } = translations.deleteModal;

  return (
    <>
      {openDelete && (
        <div className={deleteModal}>
          <div className={deleteContainer}>
            <div className={deleteTop}>
              <div className={modalTitle}>{titleText}</div>
              <div className={modalClose} onClick={() => toggleDelete()}>
                {x}
              </div>
            </div>
            <div className={deleteSubtitles}>{modalText}</div>
            <span>{modalUndoneText}</span>
            <div className={deleteFooter}>
              <div className={modalCancel} onClick={() => toggleDelete()}>
                {cancelText}
              </div>
              <div className={modalDelete} onClick={() => deleteUser()}>
                {' '}
                {deleteText}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModalView;

import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import './modal.scss';

const ModalView = ({
  openModal,
  handleName,
  handleEmail,
  handleAddress,
  handlePhone,
  clearCanvas,
  handleSubmit,
  userName,
  userEmail,
  userAddress,
  userPhone
}) => {
  const {
    modal,
    modalContainer,
    top,
    modalTitle,
    close,
    modalSubtitles,
    modalFooter,
    cancel,
    add
  } = classNames.modal;
  const {
    addEmployee,
    x,
    login,

    typeText,

    button,
    cancelType,
    submit,
    addText
  } = translations.modal;
  const { name, email, address, phone } = translations.usersText;
  return (
    <>
      {openModal && (
        <div className={modal}>
          <div className={modalContainer}>
            <div className={top}>
              <div className={modalTitle}>{addEmployee}</div>
              <div className={close} onClick={() => clearCanvas()}>
                {x}
              </div>
            </div>
            <form name={login} onSubmit={handleSubmit}>
              <div className={modalSubtitles}>{name}</div>
              <input
                name={name}
                type={typeText}
                onChange={handleName}
                required={true}
              />
              <div className={modalSubtitles}>{email}</div>
              <input
                name={email}
                type={email}
                onChange={handleEmail}
                required={true}
              />
              <div className={modalSubtitles}>{address}</div>
              <textarea
                name={address}
                type={typeText}
                onChange={handleAddress}
                required={true}
              />

              <div className={modalSubtitles}>{phone}</div>
              <input
                name={phone}
                type={typeText}
                onChange={handlePhone}
                required={true}
              />
              <div className={modalFooter}>
                <input
                  type={button}
                  className={cancel}
                  onClick={() => clearCanvas()}
                  value={cancelType}
                />
                <input type={submit} className={add} value={addText} />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalView;

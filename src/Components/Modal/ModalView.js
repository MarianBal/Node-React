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
  name,
  email,
  address
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
  const {
    nameText,
    emailText,
    addressText,
    phoneText
  } = translations.usersText;

  console.log(address);
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
              <div className={modalSubtitles}>{nameText}</div>
              <input
                name={nameText}
                type={typeText}
                onChange={handleName}
                required={true}
                value={name}
              />
              <div className={modalSubtitles}>{emailText}</div>
              <input
                name={emailText}
                type={emailText}
                onChange={handleEmail}
                required={true}
                value={email}
              />
              <div className={modalSubtitles}>{addressText}</div>
              <textarea
                name={addressText}
                type={typeText}
                onChange={handleAddress}
                required={true}
              >
                {address}
              </textarea>

              <div className={modalSubtitles}>{phoneText}</div>
              <input
                name={phoneText}
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

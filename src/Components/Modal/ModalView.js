import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import './modal.scss';

const ModalView = () => {
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
    name,
    typeText,
    email,
    adress,
    phone,
    button,
    cancelType,
    submit,
    addText
  } = translations.modal;
  return (
    <div className={modal}>
      <div className={modalContainer}>
        <div className={top}>
          <div className={modalTitle}>{addEmployee}</div>
          <div className={close} onClick={() => console.log('algo')}>
            {x}
          </div>
        </div>
        <form name={login}>
          <div className={modalSubtitles}>{name}</div>
          <input name={name} type={typeText} placeholder='' />
          <div className={modalSubtitles}>{email}</div>
          <input name={email} type={typeText} placeholder='' />
          <div className={modalSubtitles}>{adress}</div>
          <textarea name={adress} type={typeText} placeholder=''></textarea>
          <div className={modalSubtitles}>phone</div>
          <input name={phone} type={typeText} placeholder='' />
          <div className={modalFooter}>
            <input
              type={button}
              className={cancel}
              onclick=''
              value={cancelType}
            />
            <input type={submit} className={add} value={addText} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalView;

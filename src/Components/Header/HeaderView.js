import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import './header.scss';

const HeaderView = ({ handleModal }) => {
  const { header, title, button, materialIcons } = classNames.header;
  const { manage, employees, newEmployee } = translations.headerText;
  return (
    <>
      <div className={header}>
        <div className={title}>
          {manage} <span>{employees}</span>
        </div>
        <div className={button} onClick={() => handleModal()}>
          <i className={materialIcons}></i>
          <p>{newEmployee}</p>
        </div>
      </div>
    </>
  );
};

export default HeaderView;

import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/translations';
import './header.scss';

const HeaderView = () => {
  const { header, title, button, materialIcons } = classNames.header;
  const { manage, employees, newEmployee } = translations.headerText;
  return (
    <div className={header}>
      <div className={title}>
        {manage} <span>{employees}</span>
      </div>
      <div className={button} onClick={() => console.log('algo')}>
        <i className={materialIcons}></i>
        <p>{newEmployee}</p>
      </div>
    </div>
  );
};

export default HeaderView;

import React from 'react';

import { classNames } from './../../constants/classNames';
import './header.scss';

const HeaderView = () => {
  const { header, title, button, materialIcons } = classNames.header;
  return (
    <div className={header}>
      <div className={title}>
        manage <span>employees</span>
      </div>
      <div className={button} onClick={() => console.log('algo')}>
        <i className={materialIcons}></i>
        <p>add new employee</p>
      </div>
    </div>
  );
};

export default HeaderView;

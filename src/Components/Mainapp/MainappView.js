import React from 'react';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import './mainapp.scss';

const MainappWrapper = () => {
  return (
    <div className={classNames.mainapp.mainContainer}>
      <Header />
    </div>
  );
};

export default MainappWrapper;

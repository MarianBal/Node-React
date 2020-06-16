import React from 'react';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Filter from './../Filter';
import './mainapp.scss';

const MainappWrapper = () => {
  return (
    <div className={classNames.mainapp.mainContainer}>
      <Header />
      <Filter />
    </div>
  );
};

export default MainappWrapper;

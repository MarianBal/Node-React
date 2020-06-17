import React from 'react';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Filter from './../Filter';
import Content from './../Content';
import './mainapp.scss';

const MainappView = ({ users }) => {
  return (
    <div className={classNames.mainapp.mainContainer}>
      <Header />
      <Filter />
      <Content users={users} />
    </div>
  );
};

export default MainappView;

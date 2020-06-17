import React from 'react';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Filter from './../Filter';
import Content from './../Content';
import Modal from './../Modal';
import './mainapp.scss';

const MainappView = ({
  users,
  openModal,
  handleModal,
  handleName,
  handleEmail,
  handleAddress,
  handlePhone,
  clearCanvas,
  handleSubmit
}) => {
  return (
    <div className={classNames.mainapp.mainContainer}>
      <Header handleModal={handleModal} />
      <Filter />
      <Content users={users} />
      <Modal
        openModal={openModal}
        handleModal={handleModal}
        handleName={handleName}
        handleEmail={handleEmail}
        handleAddress={handleAddress}
        handlePhone={handlePhone}
        clearCanvas={clearCanvas}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MainappView;

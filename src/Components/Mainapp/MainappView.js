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
  handleSubmit,
  deleteUser,
  editSingleUser,
  singleUser
}) => {
  return (
    <div className={classNames.mainapp.mainContainer}>
      <Header handleModal={handleModal} />
      <Filter />
      <Content
        users={users}
        deleteUser={deleteUser}
        handleModal={handleModal}
        editSingleUser={editSingleUser}
      />
      <Modal
        openModal={openModal}
        handleName={handleName}
        handleEmail={handleEmail}
        handleAddress={handleAddress}
        handlePhone={handlePhone}
        clearCanvas={clearCanvas}
        handleSubmit={handleSubmit}
        singleUser={singleUser}
      />
    </div>
  );
};

export default MainappView;

import React from 'react';

import { classNames } from './../../constants/classNames';
import Header from './../Header';
import Filter from './../Filter';
import Content from './../Content';
import Modal from './../Modal';
import DeleteModal from './../DeleteModal';
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
  openDelete,
  toggleDelete,
  takeUserId,
  deleteUser,
  editUserId,
  name,
  email,
  address
}) => {
  return (
    <div className={classNames.mainapp.mainContainer}>
      <Header handleModal={handleModal} />
      <Filter />
      <Content users={users} takeUserId={takeUserId} editUserId={editUserId} />
      <Modal
        openModal={openModal}
        handleName={handleName}
        handleEmail={handleEmail}
        handleAddress={handleAddress}
        handlePhone={handlePhone}
        clearCanvas={clearCanvas}
        handleSubmit={handleSubmit}
        name={name}
        email={email}
        address={address}
      />
      <DeleteModal
        openDelete={openDelete}
        toggleDelete={toggleDelete}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default MainappView;

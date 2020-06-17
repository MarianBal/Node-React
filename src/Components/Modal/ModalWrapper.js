import React from 'react';

import ModalView from './ModalView';

const ModalWrapper = ({
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
    <ModalView
      openModal={openModal}
      handleName={handleName}
      handleEmail={handleEmail}
      handleAddress={handleAddress}
      handlePhone={handlePhone}
      clearCanvas={clearCanvas}
      handleSubmit={handleSubmit}
      userName={''}
      userEmail={''}
      userAddress={''}
      userPhone={''}
    />
  );
};

export default ModalWrapper;

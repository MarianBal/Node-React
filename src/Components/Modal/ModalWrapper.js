import React from 'react';

import ModalView from './ModalView';

const ModalWrapper = ({
  openModal,
  handleName,
  handleEmail,
  handleAddress,
  handlePhone,
  clearCanvas,
  handleSubmit,
  name
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
      name={name}
    />
  );
};

export default ModalWrapper;

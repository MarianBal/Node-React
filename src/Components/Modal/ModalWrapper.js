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
  handleSubmit,
  singleUser
}) => {
  return (
    <ModalView
      openModal={openModal}
      handleName={handleName}
      handleEmail={handleEmail}
      handleAddress={handleAddress}
      handlePhone={handlePhone}
      clearCanvas={clearCanvas}
      handleSubmit={singleUser ? () => console.log('algo') : handleSubmit}
      userName={singleUser ? singleUser.name : ''}
      userEmail={singleUser ? singleUser.email : ''}
      userAddress={singleUser ? singleUser.address : ''}
      userPhone={singleUser ? singleUser.phone : ''}
    />
  );
};

export default ModalWrapper;

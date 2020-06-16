import React, { useState } from 'react';

import ModalView from './ModalView';
import { handleEvent } from './../../utils/handleSetters';

const ModalWrapper = ({ handleModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const newUser = {
    name: name,
    email: email,
    adress: address,
    phone: phone
  };

  return (
    <ModalView
      handleModal={handleModal}
      handleName={handleEvent(setName)}
      handleEmail={handleEvent(setEmail)}
      handleAddress={handleEvent(setAddress)}
      handlePhone={handleEvent(setPhone)}
    />
  );
};

export default ModalWrapper;

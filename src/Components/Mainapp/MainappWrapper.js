import React, { useState, useEffect } from 'react';

import MainappView from './MainappView';
import { usersData, clearCanvas, addUser } from './helper';
import { toggleValue } from './../../utils/handleSetters';
import { handleEvent } from './../../utils/handleSetters';

const MainappWrapper = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
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

  useEffect(() => {
    usersData(setUsers);
  }, []);
  return (
    <MainappView
      users={users}
      openModal={openModal}
      handleModal={toggleValue(setOpenModal, openModal)}
      handleName={handleEvent(setName)}
      handleEmail={handleEvent(setEmail)}
      handleAddress={handleEvent(setAddress)}
      handlePhone={handleEvent(setPhone)}
      clearCanvas={clearCanvas(
        setName,
        setEmail,
        setAddress,
        setPhone,
        toggleValue(setOpenModal, openModal)
      )}
      handleSubmit={addUser(
        newUser,
        setUsers,
        toggleValue(setOpenModal, openModal)
      )}
      deleteUser={() => console.log('borrar')}
    />
  );
};

export default MainappWrapper;

import React, { useState, useEffect } from 'react';

import MainappView from './MainappView';
import {
  usersData,
  clearCanvas,
  addUser,
  deleteUser,
  editSingleUser
} from './helper';
import { toggleValue } from './../../utils/handleSetters';
import { handleEvent } from './../../utils/handleSetters';

const MainappWrapper = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  //const [singleUser, setSingleUser] = useState(null);

  const singleUser = {
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
        //setSingleUser,
        toggleValue(setOpenModal, openModal)
      )}
      handleSubmit={addUser(
        singleUser,
        setUsers,
        toggleValue(setOpenModal, openModal)
      )}
      deleteUser={deleteUser(setUsers)}
      editSingleUser={editSingleUser(
        toggleValue(setOpenModal, openModal),
        users
        //setSingleUser
      )}
      singleUser={singleUser}
    />
  );
};

export default MainappWrapper;

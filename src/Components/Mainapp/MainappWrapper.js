import React, { useState, useEffect } from 'react';

import MainappView from './MainappView';
import {
  usersData,
  clearCanvas,
  addUser,
  deleteUser,
  editSingleUser,
  takeUserId
} from './helper';
import { toggleValue, handleEvent } from './../../utils/handleSetters';

const MainappWrapper = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [id, setId] = useState(null);

  console.log(id);

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
        toggleValue(setOpenModal, openModal)
      )}
      handleSubmit={addUser(
        singleUser,
        setUsers,
        toggleValue(setOpenModal, openModal)
      )}
      editSingleUser={editSingleUser(
        toggleValue(setOpenModal, openModal),
        users
      )}
      openDelete={openDelete}
      toggleDelete={toggleValue(setOpenDelete, openDelete)}
      takeUserId={takeUserId(toggleValue(setOpenDelete, openDelete), setId)}
      deleteUser={deleteUser(setUsers)}
    />
  );
};

export default MainappWrapper;

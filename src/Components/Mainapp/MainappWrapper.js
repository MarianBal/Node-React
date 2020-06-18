import React, { useState, useEffect } from 'react';

import MainappView from './MainappView';
import {
  usersData,
  clearCanvas,
  addUser,
  deleteUser,
  takeUserId,
  openEditModal
} from './helper';
import { toggleValue, handleEvent } from './../../utils/handleSetters';

const MainappWrapper = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [id, setId] = useState(null);

  let singleUser = {
    name: name,
    email: email,
    adress: address,
    phone: phone
  };

  console.log(name);

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
      openDelete={openDelete}
      toggleDelete={toggleValue(setOpenDelete, openDelete)}
      takeUserId={takeUserId(toggleValue(setOpenDelete, openDelete), setId)}
      deleteUser={deleteUser(
        id,
        setUsers,
        toggleValue(setOpenDelete, openDelete)
      )}
      editUserId={openEditModal(
        users,
        toggleValue(setOpenModal, openModal),
        setName,
        setEmail,
        setAddress,
        setPhone
      )}
      name={name}
    />
  );
};

export default MainappWrapper;

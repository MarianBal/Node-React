import React, { useState, useEffect } from 'react';

import MainappView from './MainappView';
import {
  usersData,
  clearCanvas,
  addUser,
  deleteUser,
  takeUserId,
  openEditModal,
  editUserSubmit
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
  const [editUser, setEditUser] = useState(false);

  let singleUser = {
    name: name,
    email: email,
    address: address,
    phone: phone,
    id: id
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
        setEditUser,
        toggleValue(setOpenModal, openModal)
      )}
      handleSubmit={
        editUser
          ? editUserSubmit(
              toggleValue(setOpenModal, openModal),
              singleUser,
              id,
              setUsers
            )
          : addUser(
              singleUser,
              setUsers,
              toggleValue(setOpenModal, openModal),
              clearCanvas(
                setName,
                setEmail,
                setAddress,
                setPhone,
                setEditUser,
                toggleValue(setOpenModal, openModal)
              )
            )
      }
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
        setPhone,
        setEditUser,
        setId
      )}
      name={name}
      email={email}
      address={address}
      phone={phone}
    />
  );
};

export default MainappWrapper;

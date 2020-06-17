import React, { useState, useEffect } from 'react';

import MainappView from './MainappView';
import { usersData } from './herlper';
import { toggleValue } from './../../utils/handleSetters';

const MainappWrapper = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    usersData(setUsers);
  }, []);
  return (
    <MainappView
      users={users}
      openModal={openModal}
      handleModal={toggleValue(setOpenModal, openModal)}
    />
  );
};

export default MainappWrapper;

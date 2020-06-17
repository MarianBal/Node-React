import React, { useState, useEffect } from 'react';

import MainappView from './MainappView';
import { usersData } from './herlper';

const MainappWrapper = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersData(setUsers);
  }, []);
  return <MainappView users={users} />;
};

export default MainappWrapper;

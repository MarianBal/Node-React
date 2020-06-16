import React, { useState, useEffect } from 'react';

import ContentView from './ContentView';
import { usersData } from './helper';

const ContentWrapper = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersData(setUsers);
  }, []);

  return <ContentView users={users} />;
};

export default ContentWrapper;

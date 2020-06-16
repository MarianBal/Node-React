import React, { useState } from 'react';

import HeaderView from './HeaderView';

const HeaderWrapper = () => {
  const [openModal, setOpenModal] = useState(true);

  return <HeaderView openModal={openModal} />;
};

export default HeaderWrapper;

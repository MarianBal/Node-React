import React, { useState } from 'react';

import HeaderView from './HeaderView';
import { toggleValue } from './../../utils/toggleValue';

const HeaderWrapper = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <HeaderView
      openModal={openModal}
      handleModal={toggleValue(setOpenModal, openModal)}
    />
  );
};

export default HeaderWrapper;

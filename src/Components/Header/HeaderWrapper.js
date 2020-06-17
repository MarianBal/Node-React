import React from 'react'; //, { useState }

import HeaderView from './HeaderView';
//import { toggleValue } from './../../utils/handleSetters';

const HeaderWrapper = ({ handleModal }) => {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <HeaderView
      // openModal={openModal}
      handleModal={handleModal}
    />
  );
};

export default HeaderWrapper;

import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import './filter.scss';

const FilterView = () => {
  const { placeholder, name, type } = translations.filterText;
  return (
    <div className={classNames.filter.filter}>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onKeyPress={() => console.log('algo')}
      />
    </div>
  );
};

export default FilterView;

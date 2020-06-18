import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import './filter.scss';

const FilterView = ({ handleFilter, handleFilterSubmit }) => {
  const { placeholder, name, type } = translations.filterText;
  return (
    <div className={classNames.filter.filter}>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={handleFilter}
        onKeyPress={handleFilterSubmit}
      />
    </div>
  );
};

export default FilterView;

import React from 'react';

import './content.scss';
import './../../constants/classNames';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';

const ContentView = ({ users }) => {
  const { content, dataTitles, check, usersClassname } = classNames.content;
  const { name, email, address, phone } = translations.usersText;
  console.log(users);
  return (
    <div className={content}>
      <div className={dataTitles}>
        <input type={translations.contentText.checkbox} className={check} />
        <div>{name}</div>
        <div>{email}</div>
        <div>{address}</div>
        <div>{phone}</div>
        <div>{translations.contentText.actions}</div>
      </div>
      <div className={usersClassname}></div>
    </div>
  );
};

export default ContentView;

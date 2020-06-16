import React from 'react';

import './content.scss';
import { classNames } from './../../constants/classNames';

const ContentView = ({ users }) => {
  const { content, dataTitles, check, usersClassname } = classNames.content;
  return (
    <div className={content}>
      <div className={dataTitles}>
        <input type='checkbox' className={check} />
        <div>name</div>
        <div>email</div>
        <div>adress</div>
        <div>phone</div>
        <div>actions</div>
      </div>
      <div className={usersClassname}></div>
    </div>
  );
};

export default ContentView;

import React from 'react';

import './content.scss';
import './../../constants/classNames';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';

const ContentView = ({ users, deleteUser, handleModal, editSingleUser }) => {
  const {
    content,
    dataTitles,
    check,
    usersClassname,
    data,
    materialIcons,
    red,
    yellow
  } = classNames.content;
  const {
    name,
    email,
    address,
    phone,
    edit,
    deleteText
  } = translations.usersText;

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
      <div className={usersClassname}>
        {users.length
          ? users.map(eachUser => {
              return (
                <div className={data} key={eachUser.id}>
                  <input
                    type={translations.contentText.checkbox}
                    className={check}
                  />
                  <div>{eachUser.name}</div>
                  <div>{eachUser.email}</div>
                  <div>{eachUser.adress}</div>
                  <div>{eachUser.phone}</div>
                  <i
                    className={`${materialIcons} ${yellow}`}
                    title={edit}
                    onClick={() => editSingleUser(eachUser.id)}
                  >
                    &#xE254;
                  </i>
                  <i
                    className={`${materialIcons} ${red}`}
                    title={deleteText}
                    onClick={() => deleteUser(eachUser.id)}
                  >
                    &#xE872;
                  </i>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ContentView;

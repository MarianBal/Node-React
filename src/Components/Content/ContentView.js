import React from 'react';

import './content.scss';

const ContentView = ({ users }) => {
  return (
    <div className='content'>
      <div className='data-titles'>
        <input type='checkbox' id='select-all' className='check' />
        <div>name</div>
        <div>email</div>
        <div>adress</div>
        <div>phone</div>
        <div>actions</div>
      </div>
      <div className='users'></div>
    </div>
  );
};

export default ContentView;

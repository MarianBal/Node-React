import { postAddUser } from './../../utils/call';

// export const clearCanvas = (
//   setterOne,
//   setterTwo,
//   setterThree,
//   setterFour,
//   fn
// ) => () => {
//   setterOne('');
//   setterTwo('');
//   setterThree('');
//   setterFour('');
//   fn();
// };

export const addUser = user => event => {
  event.preventDefault();

  postNewUser(user);
};

export const postNewUser = async user => {
  const response = await postAddUser(user);
  console.log(' response:', response);
  //if (response.data) setUsers(response.data);
};

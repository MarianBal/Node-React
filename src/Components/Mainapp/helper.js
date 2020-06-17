import { getUsers, postAddUser, deleteAnUser } from './../../utils/call';

export const usersData = async setUsers => {
  const response = await getUsers();
  if (response.data) setUsers(response.data);
};

export const clearCanvas = (
  setterOne,
  setterTwo,
  setterThree,
  setterFour,
  fn
) => () => {
  setterOne('');
  setterTwo('');
  setterThree('');
  setterFour('');
  fn();
};

export const addUser = (user, setUsers, fn) => event => {
  event.preventDefault();

  postNewUser(user, setUsers, fn);
};

const postNewUser = async (user, setUsers, fn) => {
  const response = await postAddUser(user);
  if (response.data) {
    setUsers(response.data);
    fn();
  }
};

export const deleteUser = setUsers => id => {
  deleteSingleUser(id, setUsers);
};

const deleteSingleUser = async (id, setUsers) => {
  const response = await deleteAnUser(id);
  if (response.data) setUsers(response.data);
};

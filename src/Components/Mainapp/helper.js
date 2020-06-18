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
  setterOne(null);
  setterTwo(null);
  setterThree(null);
  setterFour(null);
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

export const takeUserId = (fn, setter) => id => {
  setter(id);
  fn();
};

export const deleteUser = (id, setUsers, fn) => () => {
  deleteSingleUser(id, setUsers);
  fn();
};

const deleteSingleUser = async (id, setUsers) => {
  const response = await deleteAnUser(id);
  if (response.data) setUsers(response.data);
};

export const openEditModal = (
  array,
  fn,
  setterName,
  setterEmail,
  setterAdress,
  setterPhone
) => id => {
  const user = array.find(arr => arr.id === id);

  setterName(user.name);
  setterEmail(user.email);
  setterAdress(user.address);
  setterPhone(user.phone);

  fn();
};

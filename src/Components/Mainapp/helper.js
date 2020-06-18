import {
  getUsers,
  postAddUser,
  deleteAnUser,
  editAnUser
} from './../../utils/call';

export const usersData = async setUsers => {
  const response = await getUsers();
  if (response.data) setUsers(response.data);
};

export const clearCanvas = (
  setterOne,
  setterTwo,
  setterThree,
  setterFour,
  setterEditUser,
  fn
) => () => {
  setterOne(null);
  setterTwo(null);
  setterThree(null);
  setterFour(null);
  setterEditUser(false);
  fn();
};

export const addUser = (user, setUsers, fn, fnTwo) => (event, id) => {
  event.preventDefault();
  postNewUser(user, setUsers, fn, fnTwo);
};

const postNewUser = async (user, setUsers, fn, fnTwo) => {
  const response = await postAddUser(user);
  if (response.data) {
    setUsers(response.data);
    fn();
  }
  fnTwo();
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
  setterAddress,
  setterPhone,
  setterEdit,
  setterId
) => id => {
  const user = array.find(arr => arr.id === id);

  setterName(user.name);
  setterEmail(user.email);
  setterAddress(user.address);
  setterPhone(user.phone);
  setterId(id);
  setterEdit(true);
  fn();
};

export const editUserSubmit = (fn, user, id, setterUsers) => event => {
  event.preventDefault();

  editSingleUser(id, user, setterUsers);
  fn();
};

const editSingleUser = async (id, user, setterUsers) => {
  const response = await editAnUser(id, user);
  if (response.data) setterUsers(response.data);
};

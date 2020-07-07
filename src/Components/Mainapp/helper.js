import {
  getUsers,
  postAddUser,
  deleteAnUser,
  editAnUser,
  getAnSearch
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

export const addUser = (newUser, setUsers, fn, fnTwo, users) => event => {
  event.preventDefault();
  postNewUser(newUser, setUsers, fn, fnTwo, users);
};

const postNewUser = async (newUser, setUsers, fn, fnTwo, users) => {
  const response = await postAddUser(newUser);
  console.log(response.data);
  if (response.data) {
    setUsers([...users, response.data]);
    fn();
  }
  fnTwo();
};

export const takeUserId = (fn, setter) => id => {
  setter(id);
  fn();
};

export const deleteUser = (id, setUsers, fn, users) => () => {
  deleteSingleUser(id, setUsers, users);
  fn();
};

const deleteSingleUser = async (id, setUsers, users) => {
  const response = await deleteAnUser(id);

  if (response.data) {
    const notDeletedUser = users.filter(user => user._id !== id);
    setUsers(notDeletedUser);
  }
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
  const user = array.find(arr => arr._id === id);

  setterName(user.name);
  setterEmail(user.email);
  setterAddress(user.address);
  setterPhone(user.phone);
  setterId(id);
  setterEdit(true);
  fn();
};

export const editUserSubmit = (
  fn,
  singleUser,
  id,
  setterUsers,
  users
) => event => {
  event.preventDefault();

  editSingleUser(id, singleUser, setterUsers, users);
  fn();
};

const editSingleUser = async (id, singleUser, setterUsers, users) => {
  const response = await editAnUser(id, singleUser);

  if (response.data.ok > 0) {
    const notEditedUsers = users.filter(user => user._id !== id);
    setterUsers([...notEditedUsers, singleUser]);
  }
};

export const handleFilterSubmit = (data, setterUsers) => event => {
  if (event.key === 'Enter') {
    searchSingleUser(data, setterUsers);
  }
};

const searchSingleUser = async (data, setterUsers) => {
  const response = await getAnSearch(data);
  if (response.data) setterUsers(response.data);
};

import { getData, addUser, deleteUser } from './api';
import { caller } from './caller';

export const getUsers = async () => {
  const response = await caller(getData());
  return response;
};

export const postAddUser = async data => {
  const response = await caller(addUser(data));
  return response;
};

export const deleteAnUser = async id => {
  const response = await caller(deleteUser(id));
  return response;
};

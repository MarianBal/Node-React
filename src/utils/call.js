import { getData, addUser } from './api';
import { caller } from './caller';

export const getUsers = async () => {
  const response = await caller(getData());
  return response;
};

export const postAddUser = async data => {
  const response = await caller(addUser(data));
  return response;
};

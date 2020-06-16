import { getData } from './api';
import { caller } from './caller';

export const getUsers = async () => {
  const response = await caller(getData());
  return response;
};

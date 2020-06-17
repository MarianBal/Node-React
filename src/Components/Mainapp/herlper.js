import { getUsers } from './../../utils/call';

export const usersData = async setUsers => {
  const response = await getUsers();
  if (response.data) setUsers(response.data);
};

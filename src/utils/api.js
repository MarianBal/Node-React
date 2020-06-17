import { getSettings, postSettings, deleteSettings } from './fetchSettings';
import { url } from './../constants/enums/url';

export const getData = () => () => {
  return fetch(url, getSettings());
};

export const addUser = data => () => {
  return fetch(url, postSettings(data));
};

export const deleteUser = id => () => {
  console.log(`${url}${id}`);
  return fetch(`${url}${id}`, deleteSettings());
};

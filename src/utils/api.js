import {
  getSettings,
  postSettings,
  deleteSettings,
  putSettings
} from './fetchSettings';
import { endpoints, url } from './../constants/enums/url';

export const getData = () => () => {
  return fetch(url, getSettings());
};

export const addUser = data => () => {
  return fetch(url, postSettings(data));
};

export const deleteUser = id => () => {
  return fetch(`${url}${id}`, deleteSettings());
};

export const editUser = (id, data) => () => {
  return fetch(`${url}${id}${endpoints.edit}`, putSettings(data));
};

export const getSearch = data => () => {
  return fetch(`${url}${endpoints.search}/${data}`, getSettings());
};

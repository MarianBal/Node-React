import {
  getSettings,
  postSettings,
  deleteSettings,
  putSettings
} from './fetchSettings';
import { endpoints, url } from './../constants/enums/url';
const { init } = endpoints;

const apiURLConstructor = baseURL => extension => baseURL + extension;
let baseUrl = url; //DEFAULT URL IS DEVELOPMENT
if (window._CONFIG_) {
  baseUrl = window._CONFIG_.API_URL;
}
const nodeApi = apiURLConstructor(baseUrl);

export const getData = () => () => {
  return fetch(nodeApi(init), getSettings());
};

export const addUser = data => () => {
  return fetch(nodeApi(init), postSettings(data));
};

export const deleteUser = id => () => {
  return fetch(nodeApi(`${init}${id}`), deleteSettings());
};

export const editUser = (id, data) => () => {
  return fetch(nodeApi(`${init}${endpoints.edit}${id}`), putSettings(data));
};

export const getSearch = data => () => {
  return fetch(nodeApi(`${init}${endpoints.search}/${data}`), getSettings());
};

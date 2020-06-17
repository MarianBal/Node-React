import { getSettings, postSettings } from './fetchSettings';
import { url } from './../constants/enums/url';

export const getData = () => () => {
  return fetch(url, getSettings());
};

export const addUser = data => () => {
  return fetch(url, postSettings(data));
};

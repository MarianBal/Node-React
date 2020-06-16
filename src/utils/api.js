import { getSettings } from './fetchSettings';
import { url } from './../constants/enums/url';

export const getData = () => () => {
  return fetch(url, getSettings());
};

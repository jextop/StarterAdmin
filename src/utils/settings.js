// use localStorage to store the settings

const API_URL = 'http://127.0.0.1:8011/';
//const API_URL = 'http://192.168.3.9:8011/';

const SOCKET_URL = 'ws://127.0.0.1:8011/';

export function getApiUrl() {
  return API_URL;
}

export function getSocketUrl() {
  return SOCKET_URL;
}

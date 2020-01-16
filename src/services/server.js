import request from '@/utils/request';
import { getApiUrl } from '@/utils/settings';

export async function callApi(url, method, params) {
  const newParams = params ? { ...params } : {};

  // Call api
  const apiUrl = getApiUrl();
  console.log(method + ' ' + apiUrl + url + ' ' + JSON.stringify(newParams));

  const options = { expirys: 1 };
  if (method === 'POST') {
    options.method = method;
    options.body = newParams;
  }

  return request(apiUrl + url, options);
}

export async function getApi(url) {
  return callApi(url, 'GET', null);
}

export async function postApi(url, params) {
  return callApi(url, 'POST', params);
}

export async function chk() {
  return getApi('chk');
}

export async function log(params) {
  return getApi('chk/log', params);
}

export async function mq(params) {
  return getApi('chk/mq', params);
}

export async function db(params) {
  return getApi('chk/db', params);
}

export async function cache(params) {
  return getApi('chk/cache', params);
}

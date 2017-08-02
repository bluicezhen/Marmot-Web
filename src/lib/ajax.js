import axios from 'axios';
import conf from '../conf';

let host = conf.server_host;


export default async function (method, url, {body_params = {}, url_params = {}}) {
  let headers = {};
  try {
    let accessToken = sessionStorage.getItem('AccessToken');
    let userID = sessionStorage.getItem('UserID');
    if (accessToken && userID) {
      headers['AccessToken'] = accessToken;
      headers['UserID'] = `${userID}`;
    }
  } catch (e) {
  }

  let url_paramsStr = '';
  for (let url_paramsKey in url_params) {
    url_paramsStr += `${url_paramsKey}=${url_params[url_paramsKey]}&`;
  }

  if (url_paramsStr.length !== 0) {
    url_paramsStr = `?${url_paramsStr}`.slice(0, -1);
  }

  return await axios.request({
    url: `${host}${url}${url_paramsStr}`,
    method,
    headers,
    data: body_params
  });
}

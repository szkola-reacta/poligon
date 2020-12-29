import axios from 'axios';

function request(method, endpoint, data = null) {
  return axios({
    method,
    url: `${process.env.REACT_APP_API_URL}${endpoint}`,
    data,
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  });
}

function get(endpoint) {
  return request('GET', endpoint);
}

function post(endpoint, data) {
  return request('POST', endpoint, data);
}

function patch(endpoint, data) {
  return request('PATCH', endpoint, data);
}

function _delete(endpoint) {
  return request('DELETE', endpoint);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  post,
  patch,
  delete: _delete
};

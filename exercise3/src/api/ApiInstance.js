import axios from 'axios';

const ApiMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export class Service {
  constructor(baseUrl) {
    this.api = axios.create();
    this.api.defaults.baseURL = baseUrl;
  }

  async _request(method, path, body, token, params, l = false) {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'X-Request-ID': Math.floor(Math.random() * 1000000),
    };

    if (!token) headers.Authorization = ``;

    const query = {
      method,
      url: path,
      body: body ? body : {},
      ...(params ? { params } : {}),
    };
    const response = await this.api.request(query);
    const { status, data } = response;
    if (l) {
      token = '********';

      console.log('Query: ', query);

      if (status.toString().startsWith('2'))
        console.log('Response: ', response);
      else console.error('Response: ', response);
    }
    return {
      status,
      data,
    };
  }

  async get(path, token, params) {
    return this._request(ApiMethod.GET, path, {}, token, params, false);
  }

  async post(path, body, token) {
    return this._request(ApiMethod.POST, path, body, token, {}, true);
  }
}

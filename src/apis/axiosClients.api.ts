import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://js-post-api.herokuapp.com/api',
  headers: { 'Content-type': 'application/json' },
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;

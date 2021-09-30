import axios from 'axios';
import queryString from 'query-string';
import config from '../../config';

const axiosClient = axios.create({
  baseURL: config.REACT_APP_BACKEND_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  },
);

export default axiosClient;

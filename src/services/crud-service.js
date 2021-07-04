import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  get(path) {
    return apiClient.get(`/${path}`);
  },
  post(path, data) {
    return apiClient.post(`/${path}`, data);
  },
};

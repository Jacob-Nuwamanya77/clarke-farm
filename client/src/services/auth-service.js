import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  createUser(credentials) {
    return apiClient.post('/api/users', credentials);
  },
  checkCredentials(credentials) {
    return apiClient.post('/api/login', credentials);
  },
};

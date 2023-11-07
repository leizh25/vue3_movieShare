import axios from 'axios';
const request = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000,
});
request.interceptors.request.use((config) => config);
request.interceptors.response.use((response) => response.data);
export default request;

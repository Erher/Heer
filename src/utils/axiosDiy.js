import axios from 'axios'
axios.defaults.timeout = 8000
axios.defaults.withCredentials = true
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
})
export default axios
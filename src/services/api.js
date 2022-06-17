import axios from 'axios';

class API {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  signUpUser = (role, data) => axios.post(`/api/user/signup/${role}`, data);

  logInUser = (role, data) => axios.post(`/api/user/login/${role}`, data);
}

export default API;

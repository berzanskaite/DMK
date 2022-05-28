import axios from 'axios';

const API_SERVER_ADDRESS = process.env.REACT_APP_API_SERVER_ADDRESS;

const ApiService = axios.create({
  baseURL: API_SERVER_ADDRESS,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default ApiService;

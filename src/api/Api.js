import axios from 'axios';

let api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Client-ID': '',
    'Authorization': 'Bearer'
  }
})
export default api;

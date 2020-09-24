import axios from 'axios';

let api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Client-ID': 'cf3x18skxfvchtla7le430orertml3',
    'Authorization': 'Bearer 6kidv178bkso22m1m1khzu6a7xgwbt'
  }
})
export default api;
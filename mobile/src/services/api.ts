import axios from 'axios';

const api = axios.create({ baseURL: "http://192.168.169.118:3333" });

export default api;
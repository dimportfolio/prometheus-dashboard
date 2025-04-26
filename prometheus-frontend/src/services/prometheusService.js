import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // NEW backend address

export const fetchCPUUsage = () => 
  axios.get(`${BASE_URL}/cpu`).then(res => res.data);

export const fetchMemoryUsage = () => 
  axios.get(`${BASE_URL}/memory`).then(res => res.data);

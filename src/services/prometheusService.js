import axios from 'axios';

export const fetchCPUUsage = () => axios.get('/api/cpu').then(res => res.data);
export const fetchMemoryUsage = () => axios.get('/api/memory').then(res => res.data);

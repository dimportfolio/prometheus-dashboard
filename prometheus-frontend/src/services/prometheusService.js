import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchCPUUsage = async () => {
  const res = await axios.get(`${BASE_URL}/cpu`);
  const [timestamp, usage] = res.data.data.result[0].value;
  return { timestamp, usage };
};

export const fetchMemoryUsage = async () => {
  const res = await axios.get(`${BASE_URL}/memory`);
  const [timestamp, used] = res.data.data.result[0].value;
  return { timestamp, used };
};

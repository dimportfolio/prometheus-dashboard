import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchCPUUsage = async () => {
    const res = await axios.get(`${BASE_URL}/cpu`);
    const results = res.data.data.result.map(entry => {
        const [timestamp, usage] = entry.value;
        return {
            instance: entry.metric.instance,
            timestamp,
            usage
        };
    });
    return results;
};

export const fetchMemoryUsage = async () => {
    const res = await axios.get(`${BASE_URL}/memory`);
    const results = res.data.data.result.map(entry => {
        const [timestamp, used] = entry.value;
        return {
            instance: entry.metric.instance,
            timestamp,
            used
        };
    });
    return results;
};

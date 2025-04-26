import { useState, useEffect } from 'react';
import { fetchCPUUsage, fetchMemoryUsage } from '../services/prometheusService';
import MetricPanel from './MetricPanel';

export default function Dashboard() {
    const [cpuData, setCpuData] = useState(null);
    const [memoryData, setMemoryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const [cpu, memory] = await Promise.all([
                    fetchCPUUsage(),
                    fetchMemoryUsage()
                ])
                setCpuData(cpu);
                setMemoryData(memory);
            } catch (err) {
                setError(err);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div>Loading Dashboard...</div>;
    if (error) return <div>Error loading dashboard: {error.message}</div>;

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <MetricPanel title="CPU Usage" data={cpuData} />
            <MetricPanel title="Memory Usage" data={memoryData} />
        </div>
    );
}

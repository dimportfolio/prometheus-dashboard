import { useState, useEffect } from 'react';
import { fetchCPUUsage, fetchMemoryUsage } from '../services/prometheusService';
import MetricPanel from './MetricPanel';

export default function Dashboard() {
    const [cpuData, setCpuData] = useState(null);
    const [memoryData, setMemoryData] = useState(null);
    const [error, setError] = useState(null);

    // Fetch and update metrics
    const fetchData = async () => {
        try {
            const [cpu, memory] = await Promise.all([
                fetchCPUUsage(),
                fetchMemoryUsage()
            ]);
            setCpuData(cpu);
            setMemoryData(memory);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch once immediately on mount

        const interval = setInterval(fetchData, 10000); // Refresh every 10 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    if (error) return <div>Error loading dashboard: {error.message}</div>;
    if (!cpuData || !memoryData) return <div>Loading Dashboard...</div>;

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <MetricPanel title="CPU Usage" data={cpuData} />
            <MetricPanel title="Memory Usage" data={memoryData} />
        </div>
    );
}

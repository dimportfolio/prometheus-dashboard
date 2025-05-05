import { useState, useEffect } from 'react';
import { fetchCPUUsage, fetchMemoryUsage } from '../services/prometheusService';
import MetricPanel from './MetricPanel';

export default function Dashboard() {
    const [cpuData, setCpuData] = useState(null);
    const [memoryData, setMemoryData] = useState(null);
    const [error, setError] = useState(null);

    const [cpuHistory, setCpuHistory] = useState({});
    const [memoryHistory, setMemoryHistory] = useState({});

    const pushMetric = (history, newData) => {
        const updated = { ...history };

        newData.forEach(({ instance, timestamp, usage, used }) => {
            if (!updated[instance]) updated[instance] = [];

            updated[instance] = [...updated[instance], { timestamp, usage: parseFloat(usage), used: parseFloat(used) }]
                .slice(-10); // keep only last 10
        });

        return updated;
    };

    // Fetch and update metrics
    const fetchData = async () => {
        try {
            const [cpu, memory] = await Promise.all([
                fetchCPUUsage(),
                fetchMemoryUsage()
            ]);
            setCpuData(cpu);
            setMemoryData(memory);
            setCpuHistory(prev => pushMetric(prev, cpu));
            setMemoryHistory(prev => pushMetric(prev, memory));
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
            <MetricPanel title="CPU History" data={cpuHistory} type="chart" />
            <MetricPanel title="Memory History" data={memoryHistory} type="chart" />
        </div>
    );
}

import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function MetricPanel({ title, data, type = 'basic' }) {
    if (!data) return null;

    return (
        type === 'chart' ? (
            <div style={{ border: '1px solid black', padding: '10px', minWidth: '300px' }}>
                <h3>{title}</h3>
                {/* Placeholder for chart */}
                {Object.entries(data).map(([instance, values]) => (
                    <div key={instance} style={{ marginBottom: '2rem' }}>
                        <strong>{instance}</strong>

                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={values}>
                                <XAxis dataKey="timestamp" tickFormatter={(t) => new Date(t * 1000).toLocaleTimeString()} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey={title.toLowerCase().includes("cpu") ? "usage" : "used"}
                                    stroke="#8884d8"
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                ))}
            </div>
        ) : (
            <div style={{ border: '1px solid black', padding: '10px', minWidth: '300px' }}>
                <h3>{title}</h3>
                {data.map((entry, index) => (
                    <div key={index} style={{ marginBottom: '8px' }}>
                        <strong>{entry.instance}</strong><br />
                        Value: {entry.usage || entry.used}<br />
                        Time: {new Date(entry.timestamp * 1000).toLocaleTimeString()}
                    </div>
                ))}
            </div>
        )
    );
}

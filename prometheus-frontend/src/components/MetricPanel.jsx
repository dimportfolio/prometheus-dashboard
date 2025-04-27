export default function MetricPanel({ title, data }) {
    if (!data) return null;

    return (
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
    );
}

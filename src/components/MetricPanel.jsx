export default function MetricPanel({ title, data }) {
    if (!data) return null;

    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            <h3>{title}</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
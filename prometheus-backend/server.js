const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all requests
app.use(cors());

app.get('/api/cpu', (req, res) => {
    const timestamp = Math.floor(Date.now() / 1000);

    const instances = ['server-1', 'server-2']; // two servers

    const results = instances.map(instance => ({
        metric: {
            instance: `${instance}:5000`,
            job: 'cpu-monitor'
        },
        value: [timestamp, (Math.random() * 100).toFixed(2)]
    }));

    res.json({
        status: 'success',
        data: {
            resultType: 'vector',
            result: results
        }
    });
});

app.get('/api/memory', (req, res) => {
    const timestamp = Math.floor(Date.now() / 1000);

    const instances = ['server-1', 'server-2'];

    const totalMemory = 16384; // 16 GB

    const results = instances.map(instance => ({
        metric: {
            instance: `${instance}:5000`,
            job: 'memory-monitor'
        },
        value: [timestamp, Math.floor(Math.random() * totalMemory)]
    }));

    res.json({
        status: 'success',
        data: {
            resultType: 'vector',
            result: results
        }
    });
});



// Start server
app.listen(PORT, () => {
    console.log(`Prometheus Backend running at http://localhost:${PORT}`);
});

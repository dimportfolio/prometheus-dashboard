const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all requests
app.use(cors());

// Fake CPU metric endpoint
app.get('/api/cpu', (req, res) => {
  const cpuUsage = (Math.random() * 100).toFixed(2); // random 0-100%
  res.json({
    usage: cpuUsage,
    timestamp: Date.now()
  });
});

// Fake Memory metric endpoint
app.get('/api/memory', (req, res) => {
  const totalMemory = 16384; // 16 GB
  const usedMemory = Math.floor(Math.random() * totalMemory);
  
  res.json({
    used: usedMemory,
    total: totalMemory,
    timestamp: Date.now()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Prometheus Backend running at http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all requests
app.use(cors());

app.get('/api/cpu', (req, res) => {
    const cpuUsage = (Math.random() * 100).toFixed(2);
    const timestamp = Math.floor(Date.now() / 1000); // UNIX seconds
  
    res.json({
      status: 'success',
      data: {
        resultType: 'vector',
        result: [
          {
            metric: {
              instance: 'localhost:5000',
              job: 'cpu-monitor'
            },
            value: [timestamp, cpuUsage]
          }
        ]
      }
    });
  });
  
  app.get('/api/memory', (req, res) => {
    const totalMemory = 16384; // 16 GB
    const usedMemory = Math.floor(Math.random() * totalMemory);
    const timestamp = Math.floor(Date.now() / 1000); // UNIX seconds
  
    res.json({
      status: 'success',
      data: {
        resultType: 'vector',
        result: [
          {
            metric: {
              instance: 'localhost:5000',
              job: 'memory-monitor'
            },
            value: [timestamp, usedMemory]
          }
        ]
      }
    });
  });
  

// Start server
app.listen(PORT, () => {
  console.log(`Prometheus Backend running at http://localhost:${PORT}`);
});

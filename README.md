# 📊 Prometheus Dashboard (MVP)

A real-time dashboard built with React and Express to simulate Prometheus-style monitoring.  
It polls backend metrics every 10 seconds and visualizes them using live-updating charts.

---

## 🚀 Features

- 🔁 Auto-refreshing dashboard with 10s polling
- 📡 Mock backend API (Express) returning Prometheus-style CPU/Memory metrics
- 📊 Charts powered by [Recharts](https://recharts.org/)
- 🧱 Multi-instance support (e.g., `server-1`, `server-2`)
- 🌐 Vite dev server proxy to backend
- 💡 Designed to simulate real-world observability workflows

---

## 🧪 Stack

- **Frontend:** React + Vite + React Router
- **Backend:** Express (mock Prometheus-style API)
- **Charting:** Recharts
- **Dev Tools:** Nodemon, Axios

---

## 📦 Setup

### 1. Backend (Express API)

```bash
cd prometheus-backend
npm install
npm run dev
```

### 2. Frontend (React Dashboard)

```bash
cd prometheus-frontend
npm install
npm run dev
```

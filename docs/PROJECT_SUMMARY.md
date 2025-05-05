# 📊 Project Summary – Prometheus Dashboard (v1 MVP)

A React + Express-based dashboard simulating real-time Prometheus monitoring.  
This MVP demonstrates a polling-based metric system, charting time-series data, and supporting multiple server instances.

---

## 🚀 What Was Built

- **React SPA with Vite**
- **Dashboard component** fetching CPU and memory data every 10s
- **Service layer** abstracting API integration (`prometheusService.js`)
- **Express backend** serving Prometheus-style mock metrics
- **Multi-instance support** (e.g., `server-1`, `server-2`)
- **Line charts** for each instance via Recharts
- **Polling** via custom hook (`useInterval`)
- **Layout** with navigation, `Layout.jsx` wrapping routes
- **Dev tooling**: Vite proxy, nodemon backend, modular components

---

## ⚙️ Architectural Decisions

| Decision | Reason |
|---------|--------|
| Mock backend API | Allows local simulation of Prometheus metrics |
| Prometheus-style response shape | Prepares for future integration with real Prometheus |
| Service layer abstraction | Keeps API logic modular and testable |
| Manual polling with `useInterval` | Reinforces understanding of side effects and timer cleanup |
| `Promise.all` for fetching | Optimizes simultaneous metric requests |
| Recharts for visualization | Lightweight and declarative charting library |
| Buffer-based state history | Enables tracking and plotting of time-series metric values |

---

## 🔁 Trade-offs and Alternatives

| Choice | Trade-off |
|--------|-----------|
| Manual polling vs React Query | Full control, more code — but better for learning internals |
| Using mock data | Enables frontend development without real infra, but lacks real-world variability |
| In-memory buffers only | Simpler, but doesn't persist or cache across sessions |
| Flat JSON file config | Didn't add `.env` support yet for flexible prod setup |

---

## 🧠 Lessons Learned

- Polling intervals must be cleaned up to avoid memory leaks
- JSON structure matters when designing API responses that need parsing
- Recharts simplifies charting but still requires thoughtful data shaping
- Service layer + separation of concerns improves readability and maintainability
- Dashboards are **more about data handling** than just visuals

---

## 📚 Material to Reinforce / Revisit

| Topic | Why |
|-------|-----|
| `useEffect` cleanup & polling | Deepen mastery of lifecycle behavior |
| Custom hooks like `useInterval` | Core skill for building reusable logic |
| Charting libraries (Recharts vs Chart.js) | Understand strengths and syntax differences |
| Prometheus API structure (`vector`, `matrix`) | Preps for real data integration |
| Responsive layout with CSS Grid / Flexbox | Improve visual polish and mobile UX |
| Error handling + retries | Crucial for real-world dashboards under load |

---

## 🔮 Future Work (V2+)

- Connect to **real Prometheus API** (`query`, `query_range`)
- Add filtering and dropdown to select specific instances
- Use React Query for auto-caching and stale revalidation
- Add alerting or color indicators for thresholds
- Dockerize with Prometheus + Node Exporter to simulate prod
- Export metrics to CSV/JSON
- Add CI (e.g., GitHub Actions) + testing (Jest/RTL)

---

## 🧩 Deployment (Planned)

- Frontend via Vercel or Netlify
- Backend via Railway, Fly.io, or local Docker
- Optional: Single Docker Compose file for frontend + backend

---

_Last updated: 2025-04-29_

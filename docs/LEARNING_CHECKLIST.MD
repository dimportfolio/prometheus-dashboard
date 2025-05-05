# 🧠 React Fundamentals Learning Checklist
_This checklist tracks core React concepts covered in this project before introducing external libraries like React Query._

---

## ✅ Core React Hooks

- [x] `useState` – manage local state
- [x] `useEffect` – run side-effects on mount / change
- [x] `useRef` – persist values without causing re-renders
- [x] `useCallback` – memoize functions to prevent unnecessary re-renders
- [x] `useMemo` – cache expensive calculations

---

## ✅ Data Fetching Patterns

- [x] Manual API calls with `fetch` or `axios`
- [x] Using async functions in `useEffect`
- [x] Cleanup functions in `useEffect`
- [x] Service layer abstraction (`prometheusService.js`)
- [x] Using `Promise.all` for parallel requests
- [x] Simulating Prometheus API shape (e.g., vector results, labels)

---

## ✅ Custom Hook Design

- [x] Create `usePolling` or `useInterval` hook
- [ ] Add support for cleanup, pause/resume toggle
- [ ] Reuse custom hook in multiple components
- [ ] Add custom retry or backoff logic inside polling hook (optional)

---

## ✅ State & Side Effects Management

- [x] Centralized `fetchData()` logic with async/await
- [x] Manage loading, error, and success states manually
- [x] Use `setInterval` or `useInterval` for polling updates
- [x] Parse external Prometheus-style API formats
- [x] Store historical metric values in time-series buffers
- [ ] Buffer size customization (configurable history length)
- [ ] Local caching or temporary storage fallback

---

## ✅ UI Design & Component Patterns

- [x] Create reusable `MetricPanel` component
- [x] Display multiple server instances
- [x] Display charts using Recharts
- [x] Layout with Flexbox/Grid
- [x] Navigation via React Router + Layout
- [ ] Add conditional UI rendering (loading/error/empty states)
- [ ] Improve layout responsiveness and styling (cards, spacing, mobile)
- [ ] Add UX elements: timestamps, chart tooltips, legends

---

## ✅ Dev Tooling & Workflow

- [x] Local dev server (Vite)
- [x] Backend with Nodemon auto-reload
- [x] Dev proxy setup (Vite → Express backend)
- [ ] Add `.env` config for backend URL
- [ ] Add ESLint or Prettier for formatting
- [ ] Basic component or service unit tests

---

## ✅ Next Steps (Before React Query)

- [ ] Retry logic for failed API calls
- [ ] Exponential backoff on retry (optional)
- [ ] Debounce or throttle rapid API triggers (if interactive filtering added)
- [ ] Cache previous data in memory (basic or global state)

---

✅ Once this checklist is 90–100% complete, you’re ready to confidently add **React Query** or similar tools to handle polling, caching, retries, and revalidation more efficiently.

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

---

## ✅ Custom Hook Design

- [x] Create `usePolling` or `useInterval` hook
- [ ] Add support for cleanup, pause/resume
- [ ] Reuse custom hook in multiple components

---

## ✅ State & Side Effects Management

- [x] Centralized `fetchData()` to avoid duplicate logic
- [x] Manage loading, error, and success states manually
- [x] Use `setInterval` for polling updates
- [x] Parse external API response formats (e.g. Prometheus)

---

## ✅ UI Design & Component Patterns

- [x] Create reusable `MetricPanel` component
- [x] Pass props like `title`, `data`
- [x] Map over array of metrics (multiple instances)
- [ ] Add conditional UI rendering (loading/error/empty states)
- [ ] Improve layout responsiveness and styling

---

## ✅ Next Steps (Before React Query)

- [ ] Add retry logic for failed requests
- [ ] Add exponential backoff logic (optional)
- [ ] Debounce or throttle rapid API calls (if needed)
- [ ] Cache previous data in memory (basic form)

---

✅ Once this checklist is 90–100% complete, you’re ready to confidently add **React Query** in a new branch or project!

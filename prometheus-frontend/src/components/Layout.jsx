import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; // we'll create this

export default function Layout() {
    return (
        <div className="layout">
            <header className="layout-header">
                <div className="logo">Prometheus Dashboard</div>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                    {/* Add more links later */}
                </nav>
            </header>

            <main className="layout-main">
                <Outlet />
            </main>

            <footer className="layout-footer">
                © 2025 Prometheus Dashboard App
            </footer>
        </div>
    );
}

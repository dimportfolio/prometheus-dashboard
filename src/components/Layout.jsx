import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <header>Header Area</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer Area</footer>
        </div>
    );
}
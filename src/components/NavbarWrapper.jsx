import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export default function NavbarWrapper () {
    return (
        <div>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/page">page</Link>
            </nav>
            <Outlet />
        </div>
    )
}
import { Link } from 'react-router-dom';

export function PublicHome () {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/page">page</Link>
            <h1>Accueil pour tout le monde</h1>
        </div>

    )
}
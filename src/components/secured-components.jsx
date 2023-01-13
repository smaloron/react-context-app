import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom';

export function SecuredHome () {
    const { user, logout } = useContext(AppContext)



    return (
        <div>
            <button onClick={() => logout()}>Déconnexion</button>
            <Link to="/login">Login</Link>
            <Link to="/page">page</Link>
            <h1>Accueil Sécurisé pour {user}</h1>
        </div>
    )
}

export function SecuredPage () {
    return (
        <div>
            <h1>Cette page est sécurisée</h1>
        </div>
    )
}
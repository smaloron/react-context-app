import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function NavBar () {
    const { isLoggedIn, logout } = useContext(AppContext);

    return (
        <nav>
            {isLoggedIn() ?
                <button onClick={() => logout()}>Déconnexion</button>
                :
                'Ici les boutons affichés quand on est pas logué'
            }

        </nav>
    )
}
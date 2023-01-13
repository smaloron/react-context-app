import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

export default function LoginForm () {
    const [userName, setUserName] = useState('');
    const { login } = useContext(AppContext);

    function handleChange (ev) {
        setUserName(ev.target.value);
    }

    function handleSubmit (ev) {
        ev.preventDefault();
        if (userName.trim()) {
            login(userName);
            setUserName("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <input type="text"
                value={userName}
                onChange={handleChange}
                placeholder="Votre identifiant" />
            <button>Valider</button>
        </form>
    )
}
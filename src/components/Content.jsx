import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

export default function Content () {
    const { user, isLoggedIn } = useContext(AppContext);

    return (
        <div>
            <NavBar />
            {isLoggedIn() ? '' : <LoginForm />}
            {isLoggedIn() ? <h1>Hello {user}</h1> : ''}
        </div>
    )
}
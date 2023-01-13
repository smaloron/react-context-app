import { useState } from 'react';
import { createContext } from 'react';
export const AppContext = createContext('');

export function AppContextProvider (props) {
    const [user, setUser] = useState(null);

    function isLoggedIn () {
        return user != null;
    }

    function logout () {
        setUser(null);
    }

    function login (userName) {
        setUser(userName);
    }

    return (
        <AppContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {props.children}
        </AppContext.Provider>
    )
}


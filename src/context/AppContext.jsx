import { useEffect, useState } from 'react';
import { createContext } from 'react';
import useToggle from '../hooks/useToggle';
export const AppContext = createContext('');

export function AppContextProvider (props) {
    const [darkMode, toggleMode] = useToggle(false);

    function toggleDarkMode () {
        toggleMode();
    }

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('darkmode');
            body.classList.remove('lightmode');
        } else {
            body.classList.add('lightmode');
            body.classList.remove('darkmode');
        }
    }, [darkMode])

    return (
        <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </AppContext.Provider>
    )
}


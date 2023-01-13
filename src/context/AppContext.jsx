import { useState } from 'react';
export const AppContext = createContext('');

export function AppContextProvider (props) {
    const [greetWord, setGreetWord] = useState('Hello');

    return (
        <AppContext.Provider value={{ greetWord, setGreetWord }}>
            {props.children}
        </AppContext.Provider>
    )
}


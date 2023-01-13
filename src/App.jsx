import { useState, createContext } from 'react'
import './App.css'
import GreetForm from './GreetForm';
import Greeting from './GreetingComponent';

export const AppContext = createContext('');

function App () {
  const [greetWord, setGreetWord] = useState('Hello');
  return (
    <div className="App">
      <AppContext.Provider value={{ greetWord, setGreetWord }}>
        <Greeting />
        <GreetForm />
      </AppContext.Provider>
    </div>
  )
}

export default App

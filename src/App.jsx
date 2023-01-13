import { useState, createContext } from 'react'
import './App.css'
import GreetForm from './components/GreetForm';
import Greeting from './components/GreetingComponent';
import { AppContextProvider } from './context/AppContext';


function App () {

  return (
    <div className="App">
      <AppContextProvider>
        <Greeting />
        <GreetForm />
      </AppContextProvider>
    </div>
  )
}

export default App

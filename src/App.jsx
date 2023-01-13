import { useState, createContext, useContext } from 'react'
import './App.css'
import Content from './components/Content';

import { AppContext, AppContextProvider } from './context/AppContext';


function App () {
  return (
    <div className="App">
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    </div>
  )
}

export default App

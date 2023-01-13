
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import { PublicHome } from './components/public-components';
import { SecuredHome, SecuredPage } from './components/secured-components';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Navigate } from 'react-router-dom'


function App () {

  const { isLoggedIn } = useContext(AppContext);

  const routes = createBrowserRouter([
    { path: '/', element: isLoggedIn() ? <SecuredHome /> : <PublicHome /> },
    { path: '/login', element: <LoginForm /> },
    { path: '/page', element: isLoggedIn() ? <SecuredPage /> : <Navigate replace to="/login" /> }
  ])


  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App


import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
// import Link from './pages/link'
import RedirectLink from './pages/redirect-link'
import AppLayout from './layouts/app-layout'
import Links from './pages/links'
import UrlProvider from './context'
import RequireAuth from './components/requireAuth'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/dashboard',
        element: <RequireAuth>
          <Dashboard />
        </RequireAuth> 
      },
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/link/:id',
        element: <RequireAuth>
          <Links />
        </RequireAuth> 
      },
      {
        path: '/:id',
        element: <RedirectLink />
      },
    ]
  }
])

function App() {

  return (
    <UrlProvider>
      <RouterProvider router={router}/>
    </UrlProvider>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Login from './pages/LogIn/login.jsx'
import Signup from './pages/SignUp/signup.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

import About from './pages/About/about.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/about",
        element: <About />
      }
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

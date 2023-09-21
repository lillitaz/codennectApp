import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import LandingPage from './pages/LandingPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Logout from './pages/Logout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Layout from './pages/Layout.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import Help from './pages/Help';

const router = createBrowserRouter([
{
  path:"/",
  element: <Layout/>,
  errorElement: <ErrorPage/>,
  children:[
    {
      path: "/",
      element: <LandingPage/>
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/logout",
      element: <Logout/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/help",
      element: <Help/>
    },

  ]
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
  </React.StrictMode>
);

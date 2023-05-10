import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader : () => fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      },
      {
        path: '/updateCoffee',
        element: <UpdateCoffee/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

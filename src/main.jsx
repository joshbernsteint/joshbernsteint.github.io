import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './home'
import {
  createHashRouter,
  Router,
  RouterProvider
} from 'react-router-dom';


const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

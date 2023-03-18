import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './home'
import {
  createHashRouter,
  Router,
  RouterProvider
} from 'react-router-dom';
import { MyProjects } from './MyProjects';


const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <MyProjects/>,
  },
  {
    path: "/resume",
    element: <embed
      src="./joshuabernsteinresume-2.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
      />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

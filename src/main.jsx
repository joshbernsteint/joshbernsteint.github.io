import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyNavBar, Footer } from './App'
import { Home } from './home'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import { MyProjects } from './MyProjects';
import { Stack } from 'react-bootstrap';
import styles from './App.module.css';



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
      src="./joshuabernsteinresume.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
      />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Stack gap={2} className={`${styles.base}`}>
      <h1>-</h1>
      <MyNavBar/>
      <RouterProvider router={router}/>
      <Footer style={{height: "100px"}}/>
    </Stack>
  </React.StrictMode>,
)

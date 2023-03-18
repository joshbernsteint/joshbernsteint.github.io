import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './home'
import {
  HashRouter
} from 'react-router-dom';
import { MyProjects } from './MyProjects';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Signin from './signin-app'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Signin />
    </BrowserRouter>
  </React.StrictMode>,
)

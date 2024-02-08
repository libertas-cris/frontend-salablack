import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import './index.css'
import { SignIn } from './pages/signin'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)

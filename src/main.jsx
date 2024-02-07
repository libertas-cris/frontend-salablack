import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import './index.css'
import { SignIn } from './pages/signin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)

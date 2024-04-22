import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes  />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)

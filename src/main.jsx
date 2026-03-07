import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './pages/router.jsx'
import AuthProvider from './pages/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
  </StrictMode>,
)

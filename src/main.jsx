import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TerminalContextProvider } from "react-terminal";
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TerminalContextProvider>
    <App />
    </TerminalContextProvider>
    </BrowserRouter>
)

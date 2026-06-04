import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from "react-ga4";
import { HelmetProvider } from 'react-helmet-async';
ReactGA.initialize("G-RT6Y76BHG4");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvier>
      <App />
    </HelmetProvier>
  </StrictMode>,
)

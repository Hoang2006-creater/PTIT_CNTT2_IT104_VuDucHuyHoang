import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import App7 from './App7'
import App6 from './App6'
import App8 from './App8'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App8/>
    <App6/>
    <App7/>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      {/* We put app inside of Theme Provider so now from App on downwards in it's heirarchy, they will access to the theme provider context */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)

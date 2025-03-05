
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CellProvider from './store/CellContext.jsx'

createRoot(document.getElementById('root')).render(
  <CellProvider>
    <App />,
  </CellProvider>
)

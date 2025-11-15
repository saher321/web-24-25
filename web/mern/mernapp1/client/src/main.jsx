
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'react-hot-toast'
import Routes from './routes/Routes.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <Routes />
  </>,
)

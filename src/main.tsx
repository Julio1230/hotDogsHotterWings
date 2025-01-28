import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    < BrowserRouter>
      <ChakraProvider value={defaultSystem}>
          <App />
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

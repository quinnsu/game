import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript} from "@chakra-ui/react"
import './index.css'
import App from './App.jsx'
import theme from './components/theme.js'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='theme.config.initialColorMode' /> 
      <App />
    </ChakraProvider>
  </StrictMode>,
)
  
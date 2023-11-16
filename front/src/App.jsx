import * as React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { AuthProvider } from "./hooks/auth";
import Main from './Main';
import theme from './theme'

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main h="100vh" />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App;
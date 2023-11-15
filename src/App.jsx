import * as React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Main from './Main';
import theme from './theme'

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main h="100vh" />
    </ChakraProvider>
  )
}

export default App;
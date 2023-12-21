import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World - Getting Started</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

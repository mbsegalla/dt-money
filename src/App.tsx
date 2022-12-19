import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>

    </ThemeProvider>
  )
}

export default App

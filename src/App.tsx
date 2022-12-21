import { ThemeProvider } from "styled-components"
import Transactions from "./pages/Transactions"
import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

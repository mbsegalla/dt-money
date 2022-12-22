import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import Transactions from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

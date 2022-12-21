import Header from "../../components/Header"
import Summary from "../../components/Summary"
import SearchForm from "./components/SearchForm"

import { TransactionContainer, Table, PriceHighlight } from "./styles"

const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <Table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/12/2022</td>
            </tr>
            <tr>
              <td width="50%">hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 2.000,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>21/12/2022</td>
            </tr>
          </tbody>
        </Table>
      </TransactionContainer>
    </div>
  )
}

export default Transactions
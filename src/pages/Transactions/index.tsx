import { useContext, useEffect, useReducer, useState } from "react"
import Header from "../../components/Header"
import Summary from "../../components/Summary"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { dateFormatter, priceFormatter } from "../../utils/formatter"
import SearchForm from "./components/SearchForm"

import { TransactionContainer, Table, PriceHighlight } from "./styles"

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TransactionContainer>
    </div>
  )
}

export default Transactions
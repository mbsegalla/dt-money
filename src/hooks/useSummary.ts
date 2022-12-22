import { useContext, useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])
  return summary
}

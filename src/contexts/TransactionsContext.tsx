import { createContext, useEffect, useState } from "react";

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextData {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextData)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  console.log(transactions)

  useEffect(() => {
    const loadTransactions = async () => {
      await fetch("http://localhost:3333/transactions").then(response => {
        response.json().then((data) => {
          setTransactions(data)
        })
      })
    }
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
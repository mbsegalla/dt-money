import React, { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionProps {
  category: string
  description: string
  price: number
  type: string
}

interface TransactionsContextData {
  transactions: Transaction[]
  loadTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextData)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  const createTransaction = async (data: CreateTransactionProps) => {
    const { category, description, price, type } = data
    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions([response.data, ...transactions])
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

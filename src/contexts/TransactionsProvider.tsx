import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  segment: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface NewTransaction {
  description: string
  price: number
  segment: 'income' | 'outcome'
  category: string
}

interface TransactionsContextData {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (transaction: NewTransaction) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextData)

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createNewTransaction = async (transaction: NewTransaction) => {
    const { description, segment, price, category } = transaction

    const response = await api.post('transactions', {
      description,
      price,
      segment,
      category,
      createdAt: new Date(),
    })

    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

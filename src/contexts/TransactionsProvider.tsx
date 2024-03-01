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

interface TransactionsContextData {
  transactions: Transaction[]
  loadTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextData)

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, loadTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

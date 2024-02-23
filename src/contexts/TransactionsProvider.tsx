import { ReactNode, createContext, useEffect, useState } from 'react'

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
}

export const TransactionsContext = createContext({} as TransactionsContextData)

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

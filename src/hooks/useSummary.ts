import { useTransactions } from './useTransactions'

export const useSummary = () => {
  const { transactions } = useTransactions()

  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.segment === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      }

      if (transaction.segment === 'outcome') {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )
}

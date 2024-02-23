import * as Icon from 'phosphor-react'
import * as S from './styles'
import { useTransactions } from '../../hooks/useTransactions'

export const Summary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
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

  return (
    <S.Summary>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <Icon.ArrowCircleUp />
        </header>

        <strong>R$ {summary.income}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          Saídas
          <Icon.ArrowCircleDown />
        </header>

        <strong>R$ {summary.outcome}</strong>
      </S.SummaryCard>

      <S.SummaryCard statusCard='negative'>
        <header>
          Total
          <Icon.CurrencyDollar />
        </header>

        <strong>R$ {summary.total}</strong>
      </S.SummaryCard>
    </S.Summary>
  )
}

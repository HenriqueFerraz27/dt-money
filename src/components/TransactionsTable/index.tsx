import { useContextSelector } from 'use-context-selector'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import * as S from './styles'
import { TransactionsContext } from '../../contexts/TransactionsProvider'

export const TransactionsTable = () => {
  const transactions = useContextSelector(TransactionsContext, context => {
    return context.transactions
  })

  return (
    <S.TransactionsTable>
      <thead>
        <tr>
          <td>Descrição</td>
          <td>Valor</td>
          <td>Categoria</td>
          <td>Data</td>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <S.PriceType segment={transaction.segment}>
                {priceFormatter.format(transaction.price)}
              </S.PriceType>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}
      </tbody>
    </S.TransactionsTable>
  )
}

import { Transaction } from '../../pages/Transactions';
import * as S from './styles';

interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
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
              <S.PriceType segment={transaction.segment}>R$ {transaction.price}</S.PriceType>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          );
        })}
      </tbody>
    </S.TransactionsTable>
  );
};

import { useEffect, useState } from 'react';
import {
  Header,
  SearchForm,
  Summary,
  TransactionsTable,
} from '../../components';
import * as S from './styles';

export interface Transaction {
  id: number;
  description: string;
  segment: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <>
      <Header />
      <S.TransactionsMain>
        <Summary />
        <SearchForm />
        <TransactionsTable transactions={transactions}/>
      </S.TransactionsMain>
    </>
  );
}

export default Transactions;

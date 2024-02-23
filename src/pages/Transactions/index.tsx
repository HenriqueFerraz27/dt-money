import {
  Header,
  SearchForm,
  Summary,
  TransactionsTable,
} from '../../components'
import * as S from './styles'

function Transactions() {
  return (
    <>
      <Header />
      <S.TransactionsMain>
        <Summary />
        <SearchForm />
        <TransactionsTable/>
      </S.TransactionsMain>
    </>
  )
}

export default Transactions

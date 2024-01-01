import { Header, Summary, TransactionsTable } from '../../components'
import * as S from './styles'

function Transactions() {
  return (
    <>
      <Header />
      <S.TransactionsMain>
        <Summary />
        <TransactionsTable />
      </S.TransactionsMain>
    </>
  )
}

export default Transactions

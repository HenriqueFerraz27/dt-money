import { Header, Summary } from '../../components'
import * as S from './styles'

function Transactions() {
  return (
    <>
      <Header />
      <S.TransactionsMain>
        <Summary />
      </S.TransactionsMain>
    </>
  )
}

export default Transactions

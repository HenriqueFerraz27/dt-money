import { NewTransactionModal } from '..'
import * as Styled from '../../styles/components/Button'
import * as S from './styles'
import logoDTMoneyHorizontal from '/logos/dt-money-horizontal.svg'
import * as Dialog from '@radix-ui/react-dialog'

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <h1>
          <a href="/">
            <img src={logoDTMoneyHorizontal} alt="DT Money" />
          </a>
        </h1>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Styled.Button>Nova Transação</Styled.Button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.Header>
  )
}

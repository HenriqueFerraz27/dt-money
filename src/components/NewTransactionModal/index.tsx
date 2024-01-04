import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as Icon from 'phosphor-react'
import * as Styled from '../../styles/components/Button'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <S.Header>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <Dialog.Close>
            <Icon.X weight="bold" />
          </Dialog.Close>
        </S.Header>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <Styled.Button variant="tertiary" segment="income">
              <Icon.ArrowCircleUp /> Entrada
            </Styled.Button>
            <Styled.Button variant="tertiary" segment="outcome">
              <Icon.ArrowCircleDown /> Saída
            </Styled.Button>
          </S.TransactionType>

          <Styled.Button type="submit">
            Cadastrar
          </Styled.Button>
        </form>

        
      </S.Content>
    </Dialog.Portal>
  )
}

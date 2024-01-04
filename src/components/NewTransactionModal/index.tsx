import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as Icon from 'phosphor-react'
import * as Styled from '../../styles/components/Button'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <S.ModalOverlay />

      <S.ModalContent>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <S.ModalForm>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <S.TransactionTypeButton segment="income" value="income">
              <Icon.ArrowCircleUp /> Entrada
            </S.TransactionTypeButton>

            <S.TransactionTypeButton segment="outcome" value="outcome">
              <Icon.ArrowCircleDown /> Saída
            </S.TransactionTypeButton>
          </S.TransactionType>

          <Styled.Button type="submit">Cadastrar</Styled.Button>
        </S.ModalForm>

        <S.ModalCloseButton>
          <Icon.X weight="bold" />
        </S.ModalCloseButton>
      </S.ModalContent>
    </Dialog.Portal>
  )
}

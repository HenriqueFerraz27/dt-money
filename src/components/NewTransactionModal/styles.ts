import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { pxToRem } from '../../utils/pxToRem'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const ModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: ${pxToRem(16)};
  right: ${pxToRem(16)};

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    color: ${({ theme }) => theme.colors.base.text[200]};
  }
`

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  min-height: 100dvh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: ${pxToRem(535)};
  width: 77.5%;
  padding: ${pxToRem(40)} ${pxToRem(50)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.colors.base.background};

  h2 {
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
  margin-top: ${pxToRem(32)};

  input {
    padding: ${pxToRem(22)};
    color: ${({ theme }) => theme.colors.base.text[200]};
    border-radius: ${pxToRem(8)};
    border: none;
    background-color: ${({ theme }) => theme.colors.base.shape[300]};
  }

  button[type='submit'] {
    margin-top: ${pxToRem(24)};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    background-color: ${({ theme }) => theme.colors.brand[200]};
    transition: all 0.1s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.brand[300]};
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${pxToRem(16)};
  margin-top: ${pxToRem(8)};
`

interface TransactionTypeButtonProps {
  segment: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  gap: ${pxToRem(12)};
  min-height: ${pxToRem(55)};
  padding: 0 ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  transition: all 0.1s;
  color: ${({ theme }) => theme.colors.base.text[100]};
  background-color: ${({ theme }) => theme.colors.base.shape[200]};

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    color: ${({ theme, segment }) => {
      if (segment === 'income') return theme.colors.brand[100]
      if (segment === 'outcome') return theme.colors.red[200]
    }};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.base.shape[100]};
  }

  &[data-state='checked'] {
    background-color: ${({ theme, segment }) => {
      if (segment === 'income') return theme.colors.brand[100]
      if (segment === 'outcome') return theme.colors.red[200]
    }};

    svg {
      color: ${({ theme }) => theme.colors.base.text[100]};
    }
  }
`

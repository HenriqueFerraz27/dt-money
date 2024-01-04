import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { pxToRem } from '../../utils/pxToRem'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    color: ${({ theme }) => theme.colors.base.text[200]};
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  min-height: 100dvh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: ${pxToRem(535)};
  width: 77.5%;
  padding: ${pxToRem(40)} ${pxToRem(50)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.colors.base.background};

  form {
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
  }
`

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${pxToRem(16)};
  margin-top: ${pxToRem(8)};
`

export const TransactionTypeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(8)};
  min-height: ${pxToRem(55)};
  padding: 0 ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.base.text[200]};
`

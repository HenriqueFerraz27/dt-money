import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const TransactionsTable = styled.table`
  width: 100%;
  border-spacing: 0 ${pxToRem(8)};
  border-collapse: separate;

  tr {
    height: ${pxToRem(65)};
  }

  td {
    padding: 0 ${pxToRem(8)};

    &:first-child {
    width: 50%;
    padding-left: ${pxToRem(32)};
    border-top-left-radius: ${pxToRem(8)};
    border-bottom-left-radius: ${pxToRem(8)};
    }

    &:last-child {
      padding-right: 0 ${pxToRem(32)};
      border-top-right-radius: ${pxToRem(8)};
      border-bottom-right-radius: ${pxToRem(8)};
    }
  }

  thead tr {
    background-color: ${({ theme }) => theme.colors.base.shape[100]};
  }

  tbody tr {
    background-color: ${({ theme }) => theme.colors.base.shape[200]};
  }
`

interface PriceTypeProps {
  type: 'income' | 'outcome'
}

export const PriceType = styled.td<PriceTypeProps>`
  color: ${({ theme, type }) => type === 'income' ? theme.colors.brand[100] : theme.colors.red[200]};
`
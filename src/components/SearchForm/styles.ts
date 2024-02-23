import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'
import { Button } from '../../styles/components/Button'

export const SearchForm = styled.form`
  display: flex;
  gap: ${pxToRem(16)};
  height: ${pxToRem(55)};
  margin-bottom: ${pxToRem(16)};
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 0 ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.base.text[200]};
  border-radius: ${pxToRem(8)};
  border: none;
  background-color: ${({ theme }) => theme.colors.base.shape[300]};
`

export const SearchButton = styled(Button)`
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

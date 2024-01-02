import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const SearchForm = styled.form`
  display: flex;
  gap: ${pxToRem(16)};
  height: ${pxToRem(55)};
  margin-bottom: ${pxToRem(16)};
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 0 ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  border: none;
  background-color: ${({ theme }) => theme.colors.base.shape[300]};
`

export const SearchButton = styled.button`
  gap: ${pxToRem(12)};
  width: ${pxToRem(150)};
  padding: 0 ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.brand[100]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border: 2px solid ${({ theme }) => theme.colors.brand[100]};
  border-radius: ${pxToRem(8)};
  transition: all 0.1s;

  svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    margin-top: -2px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.base.text[100]};
    border-color: ${({ theme }) => theme.colors.brand[200]};
    background-color: ${({ theme }) => theme.colors.brand[200]};
  }
`
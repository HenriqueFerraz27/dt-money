import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const Header = styled.header`
  padding: ${pxToRem(40)} 0 ${pxToRem(120)};
  background-color: ${({ theme }) => theme.colors.base.shape[300]};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 77.5%;
  margin: auto;
`

export const NewTransictionButton = styled.button`
  min-height: 50px;
  padding: 0 ${pxToRem(20)};
  color: ${({ theme }) => theme.colors.base.text[200]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.colors.brand[200]};
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand[300]};
  }
`
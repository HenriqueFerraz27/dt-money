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
  gap: ${pxToRem(16)};
  max-width: ${pxToRem(1440)};
  width: 77.5%;
  margin: auto;
`
import styled, { css } from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

interface ButtonProps {
  variant?: 'simple' | 'outline' | 'tertiary'
  segment?: 'income' | 'outcome'
}

export const Button = styled.button<ButtonProps>`
  gap: ${pxToRem(12)};
  min-height: ${pxToRem(55)};
  padding: 0 ${pxToRem(16)};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border-radius: ${pxToRem(8)};
  transition: all 0.1s;

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    color: ${({ theme, segment }) => {
      if (segment === 'income') return theme.colors.brand[100]
      if (segment === 'outcome') return theme.colors.red[200]
    }};
  }

  ${({ variant = 'simple' }) => {
    if (variant === 'simple')
      return css`
        color: ${({ theme }) => theme.colors.base.text[100]};
        background-color: ${({ theme }) => theme.colors.brand[200]};

        &:hover {
          background-color: ${({ theme }) => theme.colors.brand[300]};
        }
      `

    if (variant === 'outline')
      return css`
        color: ${({ theme }) => theme.colors.brand[200]};
        border: 2px solid ${({ theme }) => theme.colors.brand[100]};

        &:hover {
          color: ${({ theme }) => theme.colors.base.text[100]};
          border-color: ${({ theme }) => theme.colors.brand[200]};
          background-color: ${({ theme }) => theme.colors.brand[200]};
        }
      `
  }}
`

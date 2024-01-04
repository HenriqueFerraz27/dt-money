import styled, { css } from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  segment?: 'income' | 'outcome'
}

export const Button = styled.button<ButtonProps>`
  gap: ${pxToRem(12)};
  min-height: ${pxToRem(55)};
  padding: 0 ${pxToRem(16)};
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

  ${({ variant = 'primary', segment }) => {
    if (variant === 'primary')
      return css`
        color: ${({ theme }) => theme.colors.base.text[100]};
        font-weight: ${({ theme }) => theme.typography.weight.bold};
        background-color: ${({ theme }) => theme.colors.brand[200]};

        &:hover {
          background-color: ${({ theme }) => theme.colors.brand[300]};
        }
      `

    if (variant === 'secondary')
      return css`
        color: ${({ theme }) => theme.colors.brand[200]};
        font-weight: ${({ theme }) => theme.typography.weight.bold};
        border: 2px solid ${({ theme }) => theme.colors.brand[100]};

        &:hover {
          color: ${({ theme }) => theme.colors.base.text[100]};
          border-color: ${({ theme }) => theme.colors.brand[200]};
          background-color: ${({ theme }) => theme.colors.brand[200]};
        }
      `

    if (variant === 'tertiary')
      return css`
        color: ${({ theme }) => theme.colors.base.text[100]};
        background-color: ${({ theme }) => theme.colors.base.shape[200]};

        &:hover {
          background-color: ${({ theme }) => {
            if (segment === 'income') return theme.colors.brand[100]
            if (segment === 'outcome') return theme.colors.red[200]
          }};

          svg {
            color: ${({ theme }) => theme.colors.base.text[100]};
          }
        }
      `
  }}
`

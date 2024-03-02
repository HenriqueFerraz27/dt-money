import styled from 'styled-components'
import { pxToRem } from '../../utils/pxToRem'

export const Summary = styled.section`
  display: flex;
  justify-content: space-between;
  gap: ${pxToRem(32)};
  transform: translateY(-50%);
`

interface SummaryCardProps {
  statusCard?: 'positive' | 'negative'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  width: 100%;
  padding: ${pxToRem(24)} ${pxToRem(28)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme, statusCard }) => {
    if (statusCard === 'positive') return theme.colors.brand[200]
    if (statusCard === 'negative') return theme.colors.red[200]
    return theme.colors.base.shape[100]
  }};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${pxToRem(12)};

    svg {
      width: ${pxToRem(32)};
      height: ${pxToRem(32)};
    }
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }
`

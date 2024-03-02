import * as Icon from 'phosphor-react'
import * as S from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export const Summary = () => {
  const summary = useSummary()

  return (
    <S.Summary>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <Icon.ArrowCircleUp />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          Saídas
          <Icon.ArrowCircleDown />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard statusCard="negative">
        <header>
          Total
          <Icon.CurrencyDollar />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.Summary>
  )
}

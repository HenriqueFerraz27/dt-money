import * as Icon from 'phosphor-react'
import * as S from './styles'

export const Summary = () => {
  return (
    <S.Summary>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>

          <Icon.ArrowCircleUp />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          Saídas
          <Icon.ArrowCircleDown />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard statusCard="negative">
        <header>
          Total
          <Icon.CurrencyDollar />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.Summary>
  )
}

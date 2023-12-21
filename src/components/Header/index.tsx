import * as S from './styles'
import logoDTMoneyHorizontal from '/logos/dt-money-horizontal.svg'

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <h1>
          <a href="/">
            <img src={logoDTMoneyHorizontal} alt="DT Money" />
          </a>
        </h1>

        <S.NewTransictionButton>Nova transação</S.NewTransictionButton>
      </S.HeaderContent>
    </S.Header>
  )
}

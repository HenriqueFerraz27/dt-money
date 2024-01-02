import * as S from './styles'
import * as Icon from 'phosphor-react'

export const SearchForm = () => {
  return (
    <S.SearchForm>
      <S.SearchInput placeholder="Busque uma transação" />
      <S.SearchButton>
        <Icon.MagnifyingGlass weight="bold"/> Buscar
      </S.SearchButton>
    </S.SearchForm>
  )
}

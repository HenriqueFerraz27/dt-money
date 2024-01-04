import * as S from './styles'
import * as Icon from 'phosphor-react'
import * as Styled from '../../styles/components/Button'

export const SearchForm = () => {
  return (
    <S.SearchForm>
      <S.SearchInput placeholder="Busque uma transação" />
      <Styled.Button variant='outline'>
        <Icon.MagnifyingGlass weight="bold" /> Buscar
      </Styled.Button>
    </S.SearchForm>
  )
}

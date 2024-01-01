import * as S from './styles'

export const TransactionsTable = () => {
  return (
    <S.TransactionsTable>
      <thead>
        <tr>
          <td>Título</td>
          <td>Valor</td>
          <td>Categoria</td>
          <td>Data</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>R$ 12.000,00</td>
          <td>Trabalho/Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <S.PriceType type='income'>R$ 12.000,00</S.PriceType>
          <td>Trabalho/Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <S.PriceType type='outcome'>- R$ 12.000,00</S.PriceType>
          <td>Trabalho/Venda</td>
          <td>13/04/2022</td>
        </tr>
      </tbody>
    </S.TransactionsTable>
  )
}

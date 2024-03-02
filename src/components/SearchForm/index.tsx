import * as S from './styles'
import * as Icon from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../hooks/useTransactions'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormData = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchTransactions } = useTransactions()

  const handleSearchTransactions = async (data: SearchFormData) => {
    fetchTransactions(data.search)
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <S.SearchForm onSubmit={handleSubmit(handleSearchTransactions)}>
      <S.SearchInput
        placeholder='Busque uma transação'
        {...register('search')}
      />
      <S.SearchButton variant='outline' disabled={isSubmitting}>
        <Icon.MagnifyingGlass weight='bold' /> Buscar
      </S.SearchButton>
    </S.SearchForm>
  )
}

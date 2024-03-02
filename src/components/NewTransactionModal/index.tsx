import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as Icon from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  segment: z.enum(['income', 'outcome']),
})

type NewTransactionFormData = z.infer<typeof NewTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewTransactionFormData>({
    resolver: zodResolver(NewTransactionFormSchema),
  })

  const handleCreateNewTransaction = async (data: NewTransactionFormData) => {
    reset()
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Dialog.Portal>
      <S.ModalOverlay />

      <S.ModalContent>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <S.ModalForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type='text'
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            type='number'
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type='text'
            placeholder='Categoria'
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name='segment'
            render={({ field }) => {
              return (
                <S.TransactionType onValueChange={field.onChange}>
                  <S.TransactionTypeButton segment='income' value='income'>
                    <Icon.ArrowCircleUp /> Entrada
                  </S.TransactionTypeButton>

                  <S.TransactionTypeButton segment='outcome' value='outcome'>
                    <Icon.ArrowCircleDown /> Saída
                  </S.TransactionTypeButton>
                </S.TransactionType>
              )
            }}
          />

          <S.RegisterButton type='submit' disabled={isSubmitting}>
            Cadastrar
          </S.RegisterButton>
        </S.ModalForm>

        <S.ModalCloseButton>
          <Icon.X weight='bold' />
        </S.ModalCloseButton>
      </S.ModalContent>
    </Dialog.Portal>
  )
}

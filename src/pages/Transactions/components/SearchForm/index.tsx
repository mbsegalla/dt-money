import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = zod.object({
  query: zod.string().min(3).max(100),
})

type SearchFormProps = zod.infer<typeof searchFormSchema>

const SearchForm = () => {
  const { loadTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormProps) => {
    await loadTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm

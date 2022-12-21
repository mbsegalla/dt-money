import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { SearchFormContainer } from "./styles"

const searchFormSchema = zod.object({
  query: zod.string().min(3).max(100),
})

type SearchFormProps = zod.infer<typeof searchFormSchema>

const SearchForm = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = (data: SearchFormProps) => {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar transação"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm
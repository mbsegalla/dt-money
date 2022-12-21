import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import { Controller, useForm } from "react-hook-form"
import * as zod from "zod"

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"

const newTransactionSchema = zod.object({
  description: zod.string().min(3).max(100),
  price: zod.number().positive(),
  category: zod.string().min(3).max(100),
  type: zod.string().refine(value => value === "income" || value === "outcome"),
})

type NewTransactionProps = zod.infer<typeof newTransactionSchema>

const NewtransactionModal = () => {
  const { register, handleSubmit, formState: { isSubmitting }, control } = useForm<NewTransactionProps>({
    resolver: zodResolver(newTransactionSchema),
  })

  const handleCreateNewTransaction = (data: NewTransactionProps) => {
    console.log(data)
  }

  return (
    <Dialog.Portal >
      <Overlay />
      <Content>
        <CloseButton>
          <X />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)} action="">
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />
          <Controller
            control={control}
            name="type"
            render={() => {
              return (
                <TransactionType>
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal >
  )
}

export default NewtransactionModal
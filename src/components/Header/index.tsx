import * as Dialog from "@radix-ui/react-dialog"
import logoImg from "../../assets/logo.svg"
import NewtransactionModal from "../NewtransactionModal"

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewtransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
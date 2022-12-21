import logoImg from "../../assets/logo.svg"

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
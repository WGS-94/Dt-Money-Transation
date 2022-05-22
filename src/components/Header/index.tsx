import Logo from '../../assets/logo.svg'
import { Container, Content } from './style';

interface HeaderProps {
  onOpenNewTransationModal: () => void;
}

export default function Header({ onOpenNewTransationModal }:HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={Logo} alt="detmoney" />
        <button 
          type="button"
          onClick={onOpenNewTransationModal}
        >Nova transação</button>
      </Content>
    </Container>
  )
}

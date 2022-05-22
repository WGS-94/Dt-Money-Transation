import Modal from 'react-modal';
import { Container } from './style';

import closeImg from '../../assets/close.svg';

interface NewTransationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransationModal( { isOpen, onRequestClose}: NewTransationModalProps) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="closeimg" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <form action="">
          <input type="text" placeholder='Título' />
          <input type="number" placeholder='Valor'  />
          <input type="text" placeholder='Categoria' />
          <button type="submit">cadastrar</button>
        </form>
      </Container>

   </Modal>
  )
}

import { useState } from 'react';
import Modal from 'react-modal';
import { Container, TransationTypeContainer, RadioBox } from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


interface NewTransationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransationModal( { isOpen, onRequestClose}: NewTransationModalProps) {

  const [type, setType] = useState('deposit');

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
          <TransationTypeContainer>
            <RadioBox 
              type="button" 
              /*className={type === 'deposit' ? 'active' : '' }..*/
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type="button" 
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransationTypeContainer>
          <input type="text" placeholder='Categoria' />
          <button type="submit">cadastrar</button>
        </form>
      </Container>

   </Modal>
  )
}

import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransationContext } from '../../TransationContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransationTypeContainer, RadioBox } from './style';


interface NewTransationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransationModal( { isOpen, onRequestClose}: NewTransationModalProps) {

  const { createTransation } = useContext(TransationContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransation(event: FormEvent) {
    event.preventDefault();

    await createTransation({
      title,
      amount,
      type,
      category
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setCategory('');

    onRequestClose();
  }

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
        <form action="" onSubmit={handleCreateNewTransation}>
        <input 
            placeholder='Título' 
            type="text" 
            value={title} 
            onChange={event => setTitle(event.target.value)}
          />
          <input 
            placeholder='Valor'
            type="number" 
            value={amount} 
            onChange={event => setAmount(Number(event.target.value))}
          />
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
          <input 
            placeholder='Categoria' 
            type="text" 
            value={category} 
            onChange={event => setCategory(event.target.value)}
          />
          <button type="submit">cadastrar</button>
        </form>
      </Container>

   </Modal>
  )
}

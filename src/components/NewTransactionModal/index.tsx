import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/botao-fechar.svg';
import entradas from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg'
import Modal from "react-modal";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');


  return (
    // o Modal ele pode ir em qualquer lugar da aplicação pois
    // ele sempre exibe-se na tela inteira, no body da aplicação
    <Modal // https://reactcommunity.org/react-modal/
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"react-modal-overlay"}
      className={"react-modal-content"}
    >

      <button
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img
          src={closeImg}
          alt="Fechar janela"
        />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <form action="">
          <input
            type="text"
            placeholder="Título"
          />

          <input
            type="Number"
            placeholder="Preço"
          />

          <input
            placeholder="Categoria"
          />

          <TransactionTypeContainer>

            <RadioBox
              type="button"
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={entradas} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={saidas} alt="Saída" />
              <span>Saída</span>
            </RadioBox>

          </TransactionTypeContainer>

          <button type="submit">
            Cadastrar
          </button>

        </form>
      </Container>
    </Modal>
  );
}

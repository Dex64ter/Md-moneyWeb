import { Container } from "./styles";
import closeImg from '../../assets/botao-fechar.svg';
import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    // o Modal ele pode ir em qualquer lugar da aplicação pois
    // ele sempre exibe-se na tela inteira, no body da aplicação
    <Modal
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

          <button type="submit">
            Cadastrar
          </button>

        </form>
      </Container>
    </Modal>
  );
}

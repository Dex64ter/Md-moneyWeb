import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root'); // acessibilidade

export function App() {
  // useState é uma função que retorna um array com 2 posições
  // [valor do estado, função para atualizar o valor do estado]
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); // variável que indica se o modal está aberto ou não

  // quando cria-se novas funções que executará uma ação do usuário iniciamos com 'handle'
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header
        // quando precisa-se que um estado de um componente seja alterado
        // por um componente filho, podemos passar uma função para alterar essa informação
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />

      <GlobalStyle />
    </>
  );
}



















/* 
  ? Por que utilizar 'export' ao invés de 'export default'?
  * Quando eu utilizo "export default", o local onde eu usar o meu componente eu poderei importa-lo com o nome
  * que eu quiser enquanto que usando apenas o "export", eu sou obrigado a usar o nome do componente isso evita
  * erros de lógica na aplicação por eu saber qual componente estou usando pelo nome, sem ter problema de ter 
  * dois componentes com o mesmo nome
  * 
  * Outro ponto é q a importação do editor fica mais aprimorada e inteligente com apenas o "export" do que com
  * "export default" *
  */

// ! tipo de estilização
// import styled from 'styled-components'

// const Tittle = styled.h1`
//   font-size: 64px;
//   color: #8257d6;

// `

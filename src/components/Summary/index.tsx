import { Container } from "./styles";
import incomes from '../../assets/entradas.svg';
import outs from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from "../../transactionsContext";
import React, { useContext } from "react";

export function Summary(){

  //  como era antes:  
//   <TransactionsContext.Consumer>
//   {
//     (data) => {
//       console.log(data);
//       return (
//         <p>ok</p>
//       );
//     }
//   }
// </TransactionsContext.Consumer>

  const transactions = useContext(TransactionsContext);
  console.log(transactions);


  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomes} alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outs} alt="saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
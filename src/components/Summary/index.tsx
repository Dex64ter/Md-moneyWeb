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

  const { transactions } = useContext(TransactionsContext);

  // Primeira opção:
  // const totalDeposits = transactions.reduce((acc, transaction) =>  {
  //   if (transaction.type === 'deposit'){
  //     acc += transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  // const totalWithdraws = transactions.reduce((acc, transaction) =>  {
  //   if (transaction.type === 'withdraw'){
  //     acc += transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  // const MoneyTotal = totalDeposits - totalWithdraws;

  // Segunda opção:
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws -= transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0
  }
  )

  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomes} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outs} alt="saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

// interface TransactionInput {
//   title: string,
//   amount: number,
//   category: string,
//   type: string
// }

// Omit<>: omitir, ou seja, omitir os campos que não quero
type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

// Pick<>: pegar, ou seja, pegar os campos que quero
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'category' | 'type'>;

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => void;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

// o uso do Context permite que os todos os componentes tenham acesso aos dados de transações
export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

// A TransactionsProvider fornece os dados de transações para todos os componentes
export function TransactionsProvider({ children }: TransactionsProviderProps ) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function createTransaction(transaction: TransactionInput){
    
    api.post('/transactions', transaction);
  }
  
  useEffect(() => {
    api
      .get("transactions") // pode ser /transactions tbm
      .then((response) => setTransactions(response.data.transactions));
  }, []);


  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
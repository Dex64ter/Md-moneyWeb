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

interface TransactionsProviderProps {
  children: ReactNode;
}

// o uso do Context permite que os todos os componentes tenham acesso aos dados de transações
export const TransactionsContext = createContext<Transaction[]>([]);

// A TransactionsProvider fornece os dados de transações para todos os componentes
export function TransactionsProvider({ children }: TransactionsProviderProps ) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions") // pode ser /transactions tbm
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
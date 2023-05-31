import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import { useAppContext } from "./App";

function HandleExpenses() {
  // Add expenses
  const { walletAmount, setWalletAmount, expenses, setExpenses } = useAppContext();

  const addExpense = (name, amount) => {
    const newExpense = {
      id: expenses.length + 1,
      name: name,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setWalletAmount(walletAmount - amount);
  };

  return (
    <div>
      <NewExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

export default HandleExpenses;

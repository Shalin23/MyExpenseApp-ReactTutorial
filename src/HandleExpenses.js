import React from "react";
import ExpenseForm from "./ExpenseForm";

function HandleExpenses(props) {
  // Add expenses
  const { walletAmount, setWalletAmount, expenses, setExpenses } = props;

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
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

export default HandleExpenses;

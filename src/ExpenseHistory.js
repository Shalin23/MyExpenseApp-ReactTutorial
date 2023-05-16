import React, { useState } from "react";

function ExpenseHistory(props) {
  // View expense history, remove, or edit
  const { walletAmount, setWalletAmount, expenses, setExpenses } = props;
  const [selectedExpense, setSelectedExpense] = useState(null);

  const removeExpense = (id, amount) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setWalletAmount(walletAmount + amount);
  };

  const editExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setSelectedExpense(expenseToEdit);
  };

  const handleEditExpenseSubmit = (event) => {
    event.preventDefault();
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === selectedExpense.id) {
        return {
          ...expense,
          name: selectedExpense.name,
          amount: parseFloat(selectedExpense.amount),
        };
      } else {
        return expense;
      }
    });
    const newTotal = updatedExpenses.reduce((total, expense) => {
      return total + expense.amount;}, 0);
    setExpenses(updatedExpenses);
    setWalletAmount(walletAmount + (totalExpenses - newTotal));
    setSelectedExpense(null);
  };

  const handleEditExpenseChange = (event) => {
    setSelectedExpense({
      ...selectedExpense,
      [event.target.name]: event.target.value,
    });
  };

  const totalExpenses = expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);
    
  return (
      <div className="expense-history">
      <h2>Expense History</h2>
      {totalExpenses === 0 && (
          <h4 style={{ color: "blue" }}>No Expenses To Show</h4>
      )}
      <ul>
          {expenses.map((expense) => (
          <li key={expense.id}>
              <span>
              <label>{expense.name}</label>
              <label>{expense.amount}</label>
              </span>
              <button onClick={() => removeExpense(expense.id, parseFloat(expense.amount))}>
              Top Up
              </button>
              <button onClick={() => editExpense(expense.id)}>
              Edit Expense
              </button>
          </li>
          ))}
      </ul>
      {selectedExpense && (
          <div>
          <form onSubmit={handleEditExpenseSubmit}>
              <label htmlFor="editExpenseName">Event:</label>
              <input
              type="text"
              id="editExpenseName"
              name="name"
              value={selectedExpense.name}
              onChange={handleEditExpenseChange}
              />
              <label htmlFor="editExpenseAmount">Amount:</label>
              <input
              type="number"
              id="editExpenseAmount"
              name="amount"
              value={selectedExpense.amount}
              onChange={handleEditExpenseChange}
              />
              <button type="submit">Save</button>
              <button onClick={() => setSelectedExpense(null)}>Cancel</button>
          </form>
          </div>
      )}
      </div>
  );
}

export default ExpenseHistory;

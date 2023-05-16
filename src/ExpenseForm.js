import React, { useState } from "react";

function ExpenseForm(props) {
  // Form to add expenses
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddExpense(name, parseFloat(amount));
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <label>
        Event:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

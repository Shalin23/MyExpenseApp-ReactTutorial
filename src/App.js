import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ExpensePage from "./ExpensePage";

function App() {
  
  const [walletAmount, setWalletAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element = {<HomePage setWalletAmount={setWalletAmount}/>}/>
          <Route path="/expenses" 
            element = {<ExpensePage
              expenses={expenses} 
              setExpenses={setExpenses} 
              walletAmount={walletAmount} 
              setWalletAmount={setWalletAmount}/>}
          />
        </Routes>
      </div>
  );
}

export default App;

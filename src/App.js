import React, { useState, createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ExpensePage from "./ExpensePage";

export const AppContext = createContext();
export const useAppContext = ()=>useContext(AppContext);
function App() {
  
  const [walletAmount, setWalletAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
    <AppContext.Provider value={{walletAmount, setWalletAmount, expenses, setExpenses}}>
      <div className="App">
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/expenses" 
            element = {<ExpensePage/>}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

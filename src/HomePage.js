import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./App";

function HomePage() {
  const [walletLimit, setWalletLimit] = useState(0);
  const navigate = useNavigate();
  const {setWalletAmount} = useAppContext();

  const handleWalletSubmit = (event) => {
    event.preventDefault();
    setWalletAmount(walletLimit);
    navigate('/expenses');
  };

  const handleWalletChange = (event) => {
    setWalletLimit(event.target.value);
  };
  return (
    <div>
      <header>
        <h1>My Expense App</h1>
        <form onSubmit={handleWalletSubmit}>
          <label htmlFor="walletAmount">Enter Wallet Amount: </label>
          <input
            type="number"
            id="walletAmount"
            value={walletLimit}
            onChange={handleWalletChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>Total Wallet Amount: Rs.{walletLimit}</p>
      </header>
    </div>
  );
}

export default HomePage;

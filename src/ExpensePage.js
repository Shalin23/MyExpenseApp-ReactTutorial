import HandleExpenses from "./HandleExpenses";
import ExpenseHistory from "./ExpenseHistory";
import { useAppContext } from "./App";

function ExpensePage (){
    const { walletAmount, expenses } = useAppContext();
    const totalExpenses = expenses.reduce((total, expense) => {
        return total + expense.amount;
      }, 0);

    return ( 
        <div className="expenses">
            <header>
                <h1>My Expense App</h1>
                <p>Total Wallet Amount: Rs.{walletAmount}</p>
                {walletAmount < 0 && (
                <p style={{ color: "red" }}>WARNING: Expenses Exceed Wallet Limit</p>
                )}
                <p>Total Expense: Rs.{totalExpenses}</p>
            </header>
            <HandleExpenses/>
            <hr></hr>
            <ExpenseHistory/>
        </div>
    );
}
 
export default ExpensePage;
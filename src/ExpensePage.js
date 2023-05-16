import HandleExpenses from "./HandleExpenses";
import ExpenseHistory from "./ExpenseHistory";

function ExpensePage (props){
    const { walletAmount, setWalletAmount, expenses, setExpenses } = props;
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
            <HandleExpenses
                walletAmount={walletAmount} 
                setWalletAmount={setWalletAmount}
                expenses={expenses} 
                setExpenses={setExpenses} 
            />
            <hr></hr>
            <ExpenseHistory
                walletAmount={walletAmount} 
                setWalletAmount={setWalletAmount}
                expenses={expenses} 
                setExpenses={setExpenses}
            />
        </div>
    );
}
 
export default ExpensePage;
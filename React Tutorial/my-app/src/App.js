import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/expenses';
import NewExpense from './components/New Expense/NewExpense';


const App = () => {

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense)
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <p></p>
      <Expenses items={Expenses} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/expenses';
import NewExpense from './components/New Expense/NewExpense';


const App = () => {

  return (
    <div>
      <NewExpense />
      <Expenses items={Expenses} />
    </div>
  );
}

export default App;

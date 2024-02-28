import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/expenses';
import NewExpense from './components/New Expense/NewExpense';
import { useState } from 'react';


const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.65,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Rajasthan"
  },
  {
    id: "e2",
    title: "Laptop Purchase",
    amount: 45000,
    date: new Date(2021, 7, 16),
    locationOfExpenditure: "Office"
  },

  {
    id: "e3",
    title: "Furniture",
    amount: 10000,
    date: new Date(2022, 6, 22),
    locationOfExpenditure: "Home"
  },

  {
    id: "e4",
    title: "Washing machine",
    amount: 30000,
    date: new Date(2021, 10, 14),
    locationOfExpenditure: "Mumbai"
  },

];
const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };
  console.log(expenses)
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <p></p>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/expenses';

const App = () => {

  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses items={Expenses} />
    </div>
  );
}

export default App;
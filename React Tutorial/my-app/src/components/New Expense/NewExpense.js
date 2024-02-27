import "./NewExpense.css"
import ExpenseForm from "./ExepenseForm";
import ExepenseDetails from "../Expenses/ExpenseDetails";


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};


export default NewExpense;
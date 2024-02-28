import "./NewExpense.css"
import ExpenseForm from "./ExepenseForm";
import ExepenseDetails from "../Expenses/ExpenseDetails";
import { useState } from "react";


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState();
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div >
    )
};


export default NewExpense;
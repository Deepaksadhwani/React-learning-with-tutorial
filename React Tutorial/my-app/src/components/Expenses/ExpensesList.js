import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = props => {
    let expensesContent = <p>No expenses found.</p>

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    };

    if (props.items.length === 1) {
        return <h2 className="expenses-list__fallback">Only single Expense here.Please add more...</h2>
    };


    return (<ul className="expenses-list">

        {props.items.map((expense) =>
        (<ExpenseItem key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            location={expense.locationOfExpenditure} />))}

    </ul>)

};



export default ExpensesList;
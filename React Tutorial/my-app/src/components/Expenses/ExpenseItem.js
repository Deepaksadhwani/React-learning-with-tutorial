import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExepenseDetails from "./ExpenseDetails";
import Card from "../UI/Card"


const ExpenseItem = (props) => {


    const deleteHandler = () => {
        console.log("Expense deleted");
    };

    return (
        <Card className="expense-item">

            < ExepenseDetails title={props.title} className="expense-item__description" />
            <ExpenseDate date={props.date}></ExpenseDate>
            <ol>
                <li className="expense-item__price"> <ExepenseDetails amount={props.amount} /></li>
                <li>{props.location}</li>
            </ol>
            <delete onClick={deleteHandler}>Delete</delete>
        </ Card>
    )
}

export default ExpenseItem;
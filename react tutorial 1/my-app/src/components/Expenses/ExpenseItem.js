import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExepenseDetails from "./ExpenseDetails";
import Card from "../UI/Card"


const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">

            < ExepenseDetails title={props.title} className="expense-item__description" />
            <ExpenseDate date={props.date}></ExpenseDate>
            <ol>
                <li className="expense-item__price"> <ExepenseDetails amount={props.amount} /></li>
                <li>{props.location}</li>
            </ol>



        </ Card>
    )
}

export default ExpenseItem;
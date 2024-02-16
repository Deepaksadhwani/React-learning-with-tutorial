import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExepenseDetails from "./ExpenseDetails";


function ExpenseItem(props) {

    return (
        <div className="expense-item">

            <ExepenseDetails title={props.title} className="expense-item__description" />
            <ExpenseDate date={props.date}></ExpenseDate>
            <ol>
                <li className="expense-item__price"> <ExepenseDetails amount={props.amount} /></li>
                <li>{props.location}</li>
            </ol>



        </div>
    )
}

export default ExpenseItem;
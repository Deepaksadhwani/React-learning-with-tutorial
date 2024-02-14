import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExepenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {

    return (
        <div>

            <ExepenseDetails title={props.title} />
            <ExpenseDate date={props.date}></ExpenseDate>
            <ol>
                <li> <ExepenseDetails amount={props.amount} /></li>
                <li>{props.location}</li>
            </ol>



        </div>
    )
}

export default ExpenseItem;
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <ol>
                <li>{props.date.toISOString()}</li>
                <li>{props.amount}</li>
                <li>{props.location}</li>
            </ol>
        </div>
    )
}

export default ExpenseItem;
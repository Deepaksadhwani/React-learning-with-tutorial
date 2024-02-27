import "./expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }



    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map(expense => <ExpenseItem date={expense.expenseDate} title={expense.title} amount={expense.expenseAmount}
            location={expense.locationOfExpenditure} />)}

        </Card>
    )
}

export default Expenses;
import "./expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = () => {
    const expense = [
        {
            expenseDate: new Date(2021, 2, 28),
            title: "Car Insurance",
            expenseAmount: 294.65,
            locationOfExpenditure: "Rajasthan"
        },
        {
            expenseDate: new Date(2021, 7, 16),
            title: "Laptop Purchase",
            expenseAmount: 45000,
            locationOfExpenditure: "Office"
        },

        {
            expenseDate: new Date(2022, 6, 22),
            title: "Furniture",
            expenseAmount: 10000,
            locationOfExpenditure: "Home"
        },

        {
            expenseDate: new Date(2021, 10, 14),
            title: "Washing machine",
            expenseAmount: 30000,
            locationOfExpenditure: "mumbai"
        },

    ];
    const expenseslist = []
    for (let i = 0; i < expense.length; i++) {
        expenseslist.push(<ExpenseItem date={expense[i].expenseDate} title={expense[i].title} amount={expense[i].expenseAmount}
            location={expense[i].locationOfExpenditure}></ExpenseItem>)
    }

    return (
        <Card className="expenses">
            {expenseslist}
        </Card>
    )
}

export default Expenses;
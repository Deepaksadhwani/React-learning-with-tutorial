import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExepenseDetails from "./ExpenseDetails";
import Card from "../UI/Card"


const ExpenseItem = (props) => {

    const [amount, setAmount] = useState(props.amount);
    const [title, setTitle] = useState(props.title)

    const deleteHandler = () => {
        setAmount(100 + `$`);
        setTitle("Updated!")

    };

    return (
        <Card className="expense-item">

            < ExepenseDetails title={title} className="expense-item__description" />
            <ExpenseDate date={props.date}></ExpenseDate>
            <ol>
                <li className="expense-item__price"> <ExepenseDetails amount={amount} /></li>
                <li>{props.location}</li>
            </ol>
            <delete onClick={deleteHandler}>Delete</delete>
        </ Card>
    )
}

export default ExpenseItem;
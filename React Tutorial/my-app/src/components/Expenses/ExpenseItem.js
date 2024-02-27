import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExepenseDetails from "./ExpenseDetails";
import Card from "../UI/Card"


const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">

                <ExpenseDate date={props.date}></ExpenseDate>
                <ExepenseDetails title={props.title} className="expense-item__description" />
                <ol>
                    <li className="expense-item__price"> <ExepenseDetails amount={props.amount} /></li>
                    <li>{props.location}</li>
                </ol>

            </Card>
        </li>
    )
}

export default ExpenseItem;
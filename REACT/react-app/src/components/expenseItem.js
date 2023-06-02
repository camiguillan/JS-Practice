import React from 'react';
import './expenseItem.css';

export default function ExpenseItem(props) {

  return (
    <div className='expense-item'>
        <div>
            <h2> {props.date.toISOString()} </h2>
        </div>
        <div className='expense-item__description '>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>

    </div>
  )
}

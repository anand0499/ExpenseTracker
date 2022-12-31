// import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import "./ExpenseItem.css"
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  // console.log(props.expensesItem)

  // const [title,setTitle]=useState(props.title);

  // const onClickHandler=()=>{
  //   setTitle("Anand Choubey ");
    // console.log(title);
    // setTimeout(()=>{
    //   console.log(title);
    // },5000)

    // setInterval(()=>{
    //   console.log(title)
    // },2000)
  // }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem


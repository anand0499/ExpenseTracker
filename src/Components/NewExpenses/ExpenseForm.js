import React, { useState } from 'react'
// import ExpenseDate from '../Expenses/ExpenseDate';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');


    //========================================================================================
    //Doing in one useState
    //========================================================================================
    // const [userInput,setUserInput]=useState({
    //     title:'',
    //     amount:'',
    //     date:'',
    // })

    const titlechangeHandler=(e)=>{
        setTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     title:e.target.value,
        // })
    }

    const amountChangeHandler=(e)=>{
        setAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount:e.target.value
        // })
    }

    const dateChangeHandler=(e)=>{
        setDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     date:e.target.value
        // })

        //=================================================================
        //best way to update State when we are depending upon other state
        //=================================================================

        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         date:e.target.value
        //     }
        // })
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const expnseData={
            title:title,
            amount:+amount,
            date:new Date(date),
        }
        props.AddExpenses(expnseData)
        // props.AddExpenses(title,amount,date);
        setTitle('');
        setAmount('');
        setDate('');
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={title} onChange={titlechangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={amount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2022-12-01" max="2050-12-01" value={date} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
            <button type='cancel' onClick={props.onCancel} >cancel</button>
        </div>
    </form>
  )
}

export default ExpenseForm
import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {

  const [isOpen,setisOpen]=useState(false);

    const AddExpenseHandler=(expenseData)=>{
        const saveExpenses={
            ...expenseData,id:Math.random().toString(),
        }
        props.AddExpenses(saveExpenses);
        setisOpen(false);
      // props.AddExpenses(utitle,uamount,udate);
    }

    const startOpen=()=>{
      setisOpen(true);
    }
  
    const closeOpen=()=>{
      setisOpen(false);
    }



  return (
    <div className='new-expense '>
      { !isOpen && (
        <button onClick={startOpen} >Add New Expense</button>
      )}
      { isOpen && (
        <ExpenseForm AddExpenses={AddExpenseHandler} onCancel={closeOpen}/>
      )}
    </div>
  )
}

export default NewExpense
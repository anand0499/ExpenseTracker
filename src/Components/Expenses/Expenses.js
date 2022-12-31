import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContext=<p style={{fontWeight:'bold',color:'white',textAlign:'center'}}>No Expenses Found</p>

  if(filteredExpenses.length>0){
    expensesContext=filteredExpenses.map((expense)=>{
      return (
        <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} /> 
      )
    })
  }

  return (
    <Card className='expenses'>
         <ExpensesFilter
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
         {/* {props.expenses.map((expense)=>{
        return (
          <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
        )
      })} */}
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContext}
    </Card>
  )
}

export default Expenses
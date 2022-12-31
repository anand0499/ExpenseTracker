import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

const Dummyexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 1, 1),
  },
];



function App() {

  const [expenses,setExpenses]=useState(Dummyexpenses);

  const addExpenseHandler=(expenseData)=>{
  //  setExpenses([expenses,...expenses])

  setExpenses((prevState)=>{
    return [expenseData,...prevState]
  })

  console.log(expenseData)
}

  // const addExpenseHandler=(utitle,umaount,udate)=>{
  //   setExpenses((prevState)=>{
  //     return [{title:utitle,amount:umaount,date:new Date(udate),id:Math.random().toString()},...prevState]
  //   })
  //   console.log(expenses)
  // }

  // //   console.log("App.js",expenseData,expenses);
  // // }

  return (
    <div>
      <NewExpense AddExpenses={addExpenseHandler} />
      <Expenses expenses={expenses} />
      {/* {console.log(expenses)} */}
    </div>
  );
}

export default App;

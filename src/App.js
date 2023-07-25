import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2022, 1, 14),
  },
  {
    id: "e2",
    title: "Restaurants",
    amount: "50.50",
    date: new Date(2022, 4, 20),
  },
  {
    id: "e3",
    title: "Supermarket",
    amount: "70.87",
    date: new Date(2021, 3, 23),
  },
  {
    id: "e4",
    title: "Rent",
    amount: "140.90",
    date: new Date(2020, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]);
    // Better way to take the last snapshot of the array. The better way to update the state
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

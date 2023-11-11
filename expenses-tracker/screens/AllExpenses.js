import React from "react";
import ExpensesList from "../components/Expenses/ExpensesList";
import { useSelector } from "react-redux";


function AllExpenses() {
  const allExpenses = useSelector((state) => state.expesesReducer.expenses);
  return <ExpensesList label="Last 7 Days" expenses={allExpenses} />;

}

export default AllExpenses;

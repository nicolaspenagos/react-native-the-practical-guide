import React from "react";

import ExpensesList from "../components/Expenses/ExpensesList";
import { useSelector } from "react-redux";
import { filterRecentsWithinDays } from "../utils/date";
function RecentExpenses() {

  const recentExpenses = filterRecentsWithinDays(
    7,
    useSelector((state) => state.expesesReducer.expenses)
  );
  return <ExpensesList label="Last 7 Days" expenses={recentExpenses} />;

  
}

export default RecentExpenses;

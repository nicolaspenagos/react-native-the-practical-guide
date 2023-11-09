import React from "react";
import { filterRecentsWithinDays } from "../utils/date";
import ExpensesList from "../components/ExpensesList";

function RecentExpenses({ route }) {
  
  const recentExpenses = filterRecentsWithinDays(7, route.params.expenses);
  return <ExpensesList label="Last 7 Days" expenses={recentExpenses} />;
}

export default RecentExpenses;

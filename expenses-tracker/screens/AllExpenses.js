import React from "react";
import ExpensesList from "../components/ExpensesList";

function AllExpenses({ route }) {

  return <ExpensesList label="Last 7 Days" expenses={route.params.expenses} />;
}

export default AllExpenses;

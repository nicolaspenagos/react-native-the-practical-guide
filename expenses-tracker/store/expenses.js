import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_EXPENSES } from "../constants/testData";
import { indexOf } from "../utils/expenses";
import uuid from "react-native-uuid";

const expenses = INITIAL_EXPENSES.map((expense) => {
  expense.date = expense.date;
  return expense;
});

const sortedExpenses = expenses.sort((a, b) => b.date - a.date);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: sortedExpenses,
  },
  reducers: {
    addExpense: (state, action) => {
      const newExpense = action.payload.newExpense;
      newExpense.id = uuid.v4();
      state.expenses.push(newExpense);
    },
    removeExpense: (state, action) => {
      const index = indexOf(state.expenses, action.payload.id);
      state.expenses.splice(index, 1);
    },
    updateExpense: (state, action) => {
      const updatedExpense = action.payload.updatedExpense;
      const index = indexOf(state.expenses, updatedExpense.id);
      state.expenses[index] = updatedExpense;
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const removeExpense = expensesSlice.actions.removeExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;

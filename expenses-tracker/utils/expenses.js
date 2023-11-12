export const indexOf = (expenses, id) => {
  return expenses.findIndex(expense=>expense.id ===id);
};

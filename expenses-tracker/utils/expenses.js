export const indexOf = (expenses, id) => {
  return expenses.map((expense) => expense.id).indexOf(id);
};

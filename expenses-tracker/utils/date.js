export const formatDateToString = (date) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDay() + 1;
  return `${year}-${formatDateDigit(month)}-${formatDateDigit(day)}`;
};

const formatDateDigit = (digit) => (digit < 10 ? "0" + digit : digit);

export const filterRecentsWithinDays = (daysLimit, items) => {
  const DAY_IN_MILISECONDS = 86400000;
  const limitInMiliseconds = daysLimit * DAY_IN_MILISECONDS;
  const dateToCompare = new Date(Date.now() - limitInMiliseconds);
  return items.filter((item) => item.date > dateToCompare);
};

import uuid from "react-native-uuid";
uuid.v4();

export const INITIAL_EXPENSES = [
  { id: uuid.v4(), title: "Book", date: "2023-11-05", price: 14.99 },
  { id: uuid.v4(), title: "Groceries", date: "2023-11-05", price: 75.5 },
  { id: uuid.v4(), title: "Movie Tickets", date: "2022-11-08", price: 25.0 },
  {
    id: uuid.v4(),
    title: "Restaurant Dinner",
    date: "2022-04-10",
    price: 60.0,
  },
  { id: uuid.v4(), title: "Gasoline", date: "2022-04-20", price: 40.75 },
  { id: uuid.v4(), title: "Phone Bill", date: "2023-11-06", price: 45.0 },
  {
    id: uuid.v4(),
    title: "Internet Subscription",
    date: "2022-05-20",
    price: 55.0,
  },
  { id: uuid.v4(), title: "Clothing", date: "2022-06-15", price: 30.0 },
];

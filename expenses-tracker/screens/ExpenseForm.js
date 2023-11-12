import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, } from "react-native";
import COLORS from "../constants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../components/Input";
import Card from "../components/Card";
import Button from "../components/Button";
import useInput from "../hook/use-input";
import { useDispatch } from "react-redux";
import { updateExpense, removeExpense, addExpense } from "../store/expenses";

function ExpenseForm({ route, navigation }) {
  const dispatch = useDispatch();
  const { value: title, valueChangeHandler: onChangeName } = useInput(
    route.params.title
  );
  const { value: price, valueChangeHandler: onChangePrice } = useInput(
    route.params.price.toString()
  );

  const [date, setDate] = useState(new Date(route.params.date));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.type === formTypes.NEW ? "Add New" : "Edit Expense",
    });
  }, [navigation, route.params.type]);

  const onChangeDate = (event, date) => {
    setDate(date);
    const {
      type,
      nativeEvent: { timestamp, utcOffset },
    } = event;
  };

  const saveChangesHandler = () => {
    if (isFormValid(title, price)) {
      dispatch(
        updateExpense({
          updatedExpense: {
            price: parseFloat(price.replace(",", ".")),
            title,
            date: date.getTime(),
            id: route.params.id,
          },
        })
      );
      navigation.goBack();
    }
  };

  const addExpenseHandler = () => {
    if (isFormValid(title, price)) {
      dispatch(
        addExpense({
          newExpense: {
            price: parseFloat(price.replace(",", ".")),
            title,
            date: date.getTime(),
          },
        })
      );
      navigation.goBack();
    }
  };

  const removeExpenseHandler = () => {
    dispatch(
      removeExpense({
        id: route.params.id,
      })
    );
    navigation.goBack();
  };

  const type = route.params.type;
  return (
    <View style={style.rootContainer}>
      <Input value={title} onChange={onChangeName} placeholder="Add a title" />
      <Card>
        <DateTimePicker
          placeholderText="select date"
          onChange={onChangeDate}
          value={date}
          style={style.date}
          display="spinner"
          textColor="white"
        />
      </Card>
      <Input
        value={price}
        onChange={onChangePrice}
        type="price"
        placeholder="Add the price"
      />
      <View style={style.outerBtnsContainer}>
        <Button
          label={type === formTypes.NEW ? "Add new" : "Save changes"}
          type="primary"
          onPress={
            type === formTypes.NEW ? addExpenseHandler : saveChangesHandler
          }
        />
        {type !== formTypes.NEW && (
          <Button
            label={"Delete Item"}
            type="cancel"
            onPress={removeExpenseHandler}
          />
        )}
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.secondaryPurple,
    padding: 16,
    paddingVertical: 24,
    gap: 16,
  },
  formCard: {
    backgroundColor: COLORS.primaryPurple,
    width: "100%",
    borderRadius: 12,
    padding: 24,
    flexDirection: "row",
    paddingRight: 48,
  },
  title: {
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderRadius: 4,
    color: COLORS.white,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  icon: {
    marginRight: 16,
  },
  outerBtnsContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  innerBtnsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
});

const isFormValid = (title, price) => {
  return title !== "" && price !== "";
};

export const formTypes = {
  NEW: "new",
  EXIT: "edit",
};

export default ExpenseForm;

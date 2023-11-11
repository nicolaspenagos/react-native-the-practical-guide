import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import { formatDateToString } from "../../utils/date";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../Card";

function Expense({ title, date, price, id }) {
  const navigation = useNavigation();
  const openExpenseEditHandler = () => {
    navigation.navigate("ExpenseForm",{title, date, price, id, type:"edit"});
  };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressed : null,
      ]}
      onPress={openExpenseEditHandler}
    >
      <Card>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{formatDateToString(new Date(date))}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:8,
    marginBottom:8
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    color: COLORS.white,
  },
  priceContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 4,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    color: COLORS.primaryPurple,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default Expense;

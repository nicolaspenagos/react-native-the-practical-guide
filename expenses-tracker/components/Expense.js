import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import { formatDateToString } from "../utils/date";

function Expense({ title, date, price }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{formatDateToString(date)}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryPurple,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
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
});

export default Expense;

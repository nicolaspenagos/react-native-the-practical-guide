import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Expense from "./Expense";
import ListHeader from "./ListHeader";

function ExpensesList({ label, expenses }) {
  const total = expenses.reduce(
    (acumulator, currentValue) => acumulator + currentValue.price,
    0
  );
  return (
    <View style={styles.rootContainer}>
      <ListHeader label={label} total={`$${total.toFixed(2)}`} />
      <FlatList
        data={expenses}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <Expense {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default ExpensesList;

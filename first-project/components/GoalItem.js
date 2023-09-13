import React from "react";

import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={onDelete.bind(this, itemData.item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{itemData.index + 1}</Text>
        </View>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    backgroundColor: "#521CC3",
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  goalText: {
    color: "#ffffff",
  },
  numberText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  numberContainer: {
    backgroundColor: "#7437F4",
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

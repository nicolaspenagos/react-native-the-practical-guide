import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryPurple,
    width: "100%",
    borderRadius: 12,
    padding: 24,
    flexDirection: "row",
    justifyContent:'space-between'
  },
});

export default Card;

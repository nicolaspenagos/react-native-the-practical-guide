import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

function Button({ label, type, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[type],
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 16,
    height: 56,
  },

  label: {
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  primary: {
    backgroundColor: COLORS.darkPurple,
  },
  cancel: {
    backgroundColor: COLORS.primaryRed,
  },
  secondary: {
    backgroundColor: COLORS.secondaryDarkPurple,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default Button;
